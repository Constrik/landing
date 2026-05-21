import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <Logo size="md" />
          <span className="text-[12.5px] text-slate-500 md:ml-2">
            Plataforma de IA para los departamentos de estudios.
          </span>
          <div className="md:ml-auto flex items-center gap-7 text-[12.5px] text-slate-500 whitespace-nowrap">
            <a
              href="mailto:info@constrik.com"
              target="_blank"
              rel="noopener"
              className="hover:text-slate-900"
            >
              info@constrik.com
            </a>
            <a href="#" className="hover:text-slate-900">
              Aviso legal
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-3 text-[11.5px] text-slate-400">
          <span>Constrik Intelligence SL · B88773114</span>
          <span className="hidden md:inline">·</span>
          <span>Barcelona, España</span>
          <span className="md:ml-auto">
            © 2026 Constrik Intelligence SL. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
