import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { TrialConfirm } from "@/components/TrialConfirm";
import { PROD_TWEAKS } from "@/lib/tweaks";

export const metadata: Metadata = {
  title: "Confirmar email",
  robots: { index: false, follow: false },
};

export default function ConfirmarPage() {
  const t = PROD_TWEAKS;
  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main className="max-w-xl mx-auto px-6 py-20">
        <Suspense fallback={<p className="text-slate-500">Cargando…</p>}>
          <TrialConfirm bookingUrl={t.bookingUrl} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
