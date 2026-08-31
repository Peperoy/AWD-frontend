import { Client } from '@notionhq/client';

const DATABASE_ID = (process.env.NOTION_DATABASE_ID || '').trim();
const TOKEN = (process.env.NOTION_TOKEN || '').trim();

let cachedDataSourceId = null;

function getClient() {
  if (!TOKEN || !DATABASE_ID) {
    return null;
  }
  return new Client({ auth: TOKEN });
}

function richTextToPlain(richText) {
  if (!Array.isArray(richText)) {
    return '';
  }
  return richText.map((item) => item.plain_text || '').join('');
}

function mapRichText(richText) {
  if (!Array.isArray(richText)) {
    return [];
  }
  return richText.map((item) => ({
    text: item.plain_text || '',
    bold: Boolean(item.annotations && item.annotations.bold),
    italic: Boolean(item.annotations && item.annotations.italic),
    href: item.href || (item.text && item.text.link && item.text.link.url) || null,
  }));
}

function mapPage(page) {
  const properties = page.properties || {};
  const title = richTextToPlain(properties.Titre && properties.Titre.title);
  const slug = richTextToPlain(properties.Slug && properties.Slug.rich_text).trim();
  const dateProp = properties['Date de publication'];
  const publishedAt =
    (dateProp && dateProp.date && dateProp.date.start) || page.created_time || null;

  return {
    id: page.id,
    title,
    slug,
    pillar: (properties.Pilier && properties.Pilier.select && properties.Pilier.select.name) || '',
    excerpt: richTextToPlain(properties.Extrait && properties.Extrait.rich_text),
    publishedAt,
  };
}

function publishedFilter() {
  return {
    property: 'Statut',
    select: { equals: 'Publié' },
  };
}

async function resolveDataSourceId(client) {
  if (cachedDataSourceId) {
    return cachedDataSourceId;
  }
  if (process.env.NOTION_DATA_SOURCE_ID) {
    cachedDataSourceId = process.env.NOTION_DATA_SOURCE_ID;
    return cachedDataSourceId;
  }
  const database = await client.databases.retrieve({ database_id: DATABASE_ID });
  const sources = database.data_sources || [];
  if (!sources.length) {
    throw new Error('Aucun data source Notion pour cette base');
  }
  cachedDataSourceId = sources[0].id;
  return cachedDataSourceId;
}

async function queryPublished(client, extraFilter) {
  const dataSourceId = await resolveDataSourceId(client);
  const filter = extraFilter
    ? { and: [publishedFilter(), extraFilter] }
    : publishedFilter();

  const pages = [];
  let cursor;
  const queryPage = async (startCursor) => {
    try {
      return await client.dataSources.query({
        data_source_id: dataSourceId,
        filter,
        sorts: [{ property: 'Date de publication', direction: 'descending' }],
        start_cursor: startCursor,
        page_size: 100,
      });
    } catch (error) {
      return client.dataSources.query({
        data_source_id: dataSourceId,
        filter,
        sorts: [{ timestamp: 'created_time', direction: 'descending' }],
        start_cursor: startCursor,
        page_size: 100,
      });
    }
  };
  do {
    const response = await queryPage(cursor);
    pages.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return pages
    .map(mapPage)
    .filter((article) => article.slug)
    .sort((a, b) => {
      const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return bTime - aTime;
    });
}

export async function getPublishedArticles() {
  const client = getClient();
  if (!client) {
    return [];
  }
  try {
    return await queryPublished(client);
  } catch (error) {
    console.error('Notion getPublishedArticles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug) {
  if (!slug) {
    return null;
  }
  const client = getClient();
  if (!client) {
    return null;
  }
  try {
    const articles = await queryPublished(client, {
      property: 'Slug',
      rich_text: { equals: slug },
    });
    return articles[0] || null;
  } catch (error) {
    console.error('Notion getArticleBySlug:', error);
    return null;
  }
}

function mapBlock(block, title) {
  const type = block.type;
  if (!type || !block[type]) {
    return null;
  }
  const data = block[type];
  const richText = mapRichText(data.rich_text);

  if (type === 'heading_1') {
    const text = richTextToPlain(data.rich_text).trim();
    if (title && text === title.trim()) {
      return null;
    }
    return { type: 'heading_2', richText };
  }
  if (type === 'heading_2') {
    return { type: 'heading_2', richText };
  }
  if (type === 'heading_3') {
    return { type: 'heading_3', richText };
  }
  if (type === 'paragraph') {
    if (!richTextToPlain(data.rich_text).trim()) {
      return null;
    }
    return { type: 'paragraph', richText };
  }
  if (type === 'bulleted_list_item') {
    return { type: 'bulleted_list_item', richText };
  }
  if (type === 'numbered_list_item') {
    return { type: 'numbered_list_item', richText };
  }
  if (type === 'quote') {
    return { type: 'quote', richText };
  }
  if (type === 'callout') {
    return {
      type: 'callout',
      richText,
      icon: (data.icon && data.icon.emoji) || null,
    };
  }
  if (type === 'divider') {
    return { type: 'divider' };
  }
  return null;
}

function groupLists(items) {
  const grouped = [];
  let current = null;

  items.forEach((item) => {
    if (item.type === 'bulleted_list_item') {
      if (!current || current.type !== 'bulleted_list') {
        current = { type: 'bulleted_list', items: [] };
        grouped.push(current);
      }
      current.items.push(item.richText);
      return;
    }
    if (item.type === 'numbered_list_item') {
      if (!current || current.type !== 'numbered_list') {
        current = { type: 'numbered_list', items: [] };
        grouped.push(current);
      }
      current.items.push(item.richText);
      return;
    }
    current = null;
    grouped.push(item);
  });

  return grouped;
}

export async function getArticleBlocks(pageId, { title } = {}) {
  const client = getClient();
  if (!client || !pageId) {
    return [];
  }
  try {
    const raw = [];
    let cursor;
    do {
      const response = await client.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
        page_size: 100,
      });
      raw.push(...response.results);
      cursor = response.has_more ? response.next_cursor : undefined;
    } while (cursor);

    const mapped = raw
      .map((block) => mapBlock(block, title))
      .filter(Boolean);
    return groupLists(mapped);
  } catch (error) {
    console.error('Notion getArticleBlocks:', error);
    return [];
  }
}
