import Image from "next/image";
import type { Screenshot } from "@/lib/products";

export function ProductScreenshot({
  shot,
  priority = false,
}: {
  shot: Screenshot;
  priority?: boolean;
}) {
  return (
    <figure className="mx-auto max-w-5xl">
      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          priority={priority}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="w-full h-auto"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-slate-500">
        {shot.alt}.
        {shot.example !== false && " Estudio de ejemplo con datos ficticios."}
      </figcaption>
    </figure>
  );
}
