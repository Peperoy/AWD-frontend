import { FAQ } from '../data/offers';

export default function ServicesFaq() {
  return (
    <section id="faq" className="border-b border-ink/10 py-20 md:py-24">
      <div className="mx-auto max-w-atlas px-5 md:px-16">
        <p className="label-caps mb-3">Questions</p>
        <span className="gold-rule mb-8" aria-hidden />
        <h2 className="font-display text-headline uppercase mb-12 max-w-3xl break-words min-w-0">
          Avant d’écrire
        </h2>
        <dl>
          {FAQ.map((item) => (
            <div key={item.question} className="grid md:grid-cols-12 gap-4 md:gap-8 border-t border-ink/10 py-8 last:border-b">
              <dt className="font-display text-xl font-bold md:col-span-5">{item.question}</dt>
              <dd className="text-muted leading-relaxed md:col-span-7">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
