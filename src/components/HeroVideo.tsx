"use client";

import { useRef, useState } from "react";

const VIDEO_SRC = "/video/demo-constrik.mp4";
const POSTER_SRC = "/video/demo-constrik-poster.jpg";

/**
 * Vídeo de demo del hero. Alojado en la propia landing (sin cookies de
 * terceros, no depende del banner de consentimiento). Arranca con clic y con
 * sonido: `preload="none"` para no descargar nada hasta que el visitante pulse.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    void videoRef.current?.play();
  };

  return (
    <div className="relative mt-12 mx-auto max-w-4xl rounded-2xl overflow-hidden border border-slate-200 bg-[#1A1A2E] shadow-2xl shadow-slate-900/15 aspect-[32/15]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        preload="none"
        playsInline
        controls={started}
        onEnded={() => setStarted(false)}
      />
      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label="Reproducir el vídeo de demo de Constrik"
          className="group absolute inset-0 flex items-end justify-center pb-[3%] sm:pb-[6%] cursor-pointer"
        >
          <span className="inline-flex items-center gap-2 sm:gap-2.5 pl-2.5 pr-3.5 py-1.5 sm:pl-4 sm:pr-5 sm:py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-medium shadow-lg transition-transform group-hover:scale-105">
            <span className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#00CED1]">
              <svg
                viewBox="0 0 24 24"
                className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 translate-x-px fill-[#1A1A2E]"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Ver el vídeo · 14 s
          </span>
        </button>
      )}
    </div>
  );
}
