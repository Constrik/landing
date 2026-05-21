import type { FAQ } from "@/lib/products";

export function ProductFaqs({ faqs }: { faqs: FAQ[] }) {
  return (
    <section id="faq" className="bg-slate-50/70">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center">
          <p className="text-[12px] uppercase tracking-[0.15em] text-slate-500 mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="font-logo text-[#1A1A2E] text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-tight">
            Lo que más se nos pregunta
          </h2>
        </div>
        <dl className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f) => (
            <div key={f.question} className="py-6">
              <dt className="text-[15px] font-semibold text-[#1A1A2E] leading-snug">
                {f.question}
              </dt>
              <dd className="mt-2 text-[14px] text-slate-600 leading-relaxed">
                {f.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
