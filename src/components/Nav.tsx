import { CtaButton } from "./CtaButton";
import { Logo } from "./Logo";
import type { Tweaks } from "@/lib/tweaks";

export function Nav({ t }: { t: Tweaks }) {
  return (
    <header className="sticky top-0 z-30 bg-white/85 backdrop-blur border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center">
        <a href="#" className="flex items-center" aria-label="Constrik — inicio">
          <Logo />
        </a>
        <nav
          aria-label="Principal"
          className="hidden md:flex items-center gap-7 ml-12 text-[13.5px] text-slate-600 whitespace-nowrap"
        >
          <a href="/#beneficios" className="hover:text-slate-900">
            Beneficios
          </a>
          <a href="/#productos" className="hover:text-slate-900">
            Productos
          </a>
          <a href="/#para-quien" className="hover:text-slate-900">
            Para quién
          </a>
          {t.showPricing && (
            <a href="/#precio" className="hover:text-slate-900">
              Precio
            </a>
          )}
          <a
            href="mailto:info@constrik.com"
            target="_blank"
            rel="noopener"
            className="hover:text-slate-900"
          >
            Preguntas
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          {t.showLogin && (
            <a
              href={t.loginUrl}
              className="hidden sm:inline-block text-[13.5px] text-slate-600 hover:text-slate-900 whitespace-nowrap"
            >
              Iniciar sesión
            </a>
          )}
          <CtaButton variant="primary" size="sm" href={t.bookingUrl} target="_blank">
            Pedir demo
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
