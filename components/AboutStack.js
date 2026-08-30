const STACK_GROUPS = [
  { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'APIs REST'] },
  {
    title: 'Bases de données',
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma', 'Supabase'],
  },
  { title: 'Mobile', items: ['React Native', 'Expo'] },
  {
    title: 'Déploiement & outils',
    items: ['Vercel', 'Git / GitHub', 'APIs', 'Cloudinary', 'Contentful'],
  },
  { title: 'Automatisation', items: ['n8n'] },
];

export default function AboutStack() {
  return (
    <section className="border-b border-ink/10 py-24 md:py-32">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-3">Compétences techniques</p>
        <span className="gold-rule mb-8" aria-hidden />
        <h2 className="font-display text-headline uppercase mb-6 max-w-3xl break-words min-w-0">
          Une stack full-stack, du frontend au déploiement
        </h2>
        <p className="text-muted max-w-xl mb-16 leading-relaxed">
          La stack globale du studio. Chaque projet n’utilise que les technologies réellement
          pertinentes pour lui — jamais toute la liste à la fois.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/10">
          {STACK_GROUPS.map((group) => (
            <div key={group.title} className="relative p-8 border-b border-r border-ink/10">
              <span className="connection-dot" />
              <h3 className="label-caps mb-5">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <li
                    key={tech}
                    className="font-label text-[11px] font-bold uppercase tracking-[0.16em] text-ink border border-ink/20 px-3 py-2"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
