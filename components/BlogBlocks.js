function RichText({ spans }) {
  if (!spans || !spans.length) {
    return null;
  }
  return spans.map((span, index) => {
    let node = span.text;
    if (span.bold) {
      node = <strong className="text-ink font-semibold">{node}</strong>;
    }
    if (span.italic) {
      node = <em>{node}</em>;
    }
    if (span.href) {
      node = (
        <a
          href={span.href}
          className="text-gold no-underline hover:underline"
          target={span.href.startsWith('http') ? '_blank' : undefined}
          rel={span.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {node}
        </a>
      );
    }
    return <span key={index}>{node}</span>;
  });
}

export default function BlogBlocks({ blocks }) {
  if (!blocks || !blocks.length) {
    return null;
  }

  return (
    <div
      className="space-y-4 text-muted leading-relaxed
        [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3
        [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-ink [&_h3]:mt-8 [&_h3]:mb-2
        [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
        [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1
        [&_strong]:text-ink"
    >
      {blocks.map((block, index) => {
        if (block.type === 'heading_2') {
          return (
            <h2 key={index}>
              <RichText spans={block.richText} />
            </h2>
          );
        }
        if (block.type === 'heading_3') {
          return (
            <h3 key={index}>
              <RichText spans={block.richText} />
            </h3>
          );
        }
        if (block.type === 'paragraph') {
          return (
            <p key={index}>
              <RichText spans={block.richText} />
            </p>
          );
        }
        if (block.type === 'bulleted_list') {
          return (
            <ul key={index}>
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <RichText spans={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'numbered_list') {
          return (
            <ol key={index}>
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <RichText spans={item} />
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === 'quote') {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-gold pl-4 text-ink/90 italic"
            >
              <RichText spans={block.richText} />
            </blockquote>
          );
        }
        if (block.type === 'callout') {
          return (
            <p
              key={index}
              className="border border-gold/40 bg-gold/5 px-5 py-4 text-ink"
            >
              {block.icon ? <span className="mr-2">{block.icon}</span> : null}
              <RichText spans={block.richText} />
            </p>
          );
        }
        if (block.type === 'divider') {
          return <hr key={index} className="border-ink/10 my-8" />;
        }
        return null;
      })}
    </div>
  );
}
