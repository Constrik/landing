import { CtaButton } from "./CtaButton";
import type { Product } from "@/lib/products";
import type { Tweaks } from "@/lib/tweaks";

export function ProductHero({ product, t }: { product: Product; t: Tweaks }) {
  return (
    <section className="relative overflow-hidden hero-grid">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-20 pb-24 text-center">
        <nav
          aria-label="Migas"
          className="inline-flex items-center gap-2 text-[12.5px] text-slate-500 mb-8"
        >
          <a href="/" className="hover:text-slate-900">
            Constrik
          </a>
          <span aria-hidden>›</span>
          <span className="text-slate-700">{product.shortName}</span>
        </nav>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-[11.5px] text-slate-500 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00CED1]" aria-hidden />
          {product.name} · {product.category}
        </div>
        <h1 className="font-logo font-bold tracking-tight text-[#1A1A2E] text-[clamp(34px,6vw,68px)] leading-[1.05]">
          {product.name}
        </h1>
        <p className="mt-6 text-xl lg:text-2xl text-slate-700 leading-snug max-w-3xl mx-auto font-medium">
          {product.headline}
        </p>
        <p className="mt-5 text-[15px] lg:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {product.tagline}
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <CtaButton variant="primary" size="lg" href={t.bookingUrl} target="_blank">
            Pedir una demo
          </CtaButton>
          <CtaButton variant="outline" size="lg" href="#caracteristicas">
            Ver características
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
