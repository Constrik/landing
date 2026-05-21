import { ClosingCta } from "@/components/ClosingCta";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Personas } from "@/components/Personas";
import { Pillars } from "@/components/Pillars";
import { Pricing } from "@/components/Pricing";
import { PROD_TWEAKS } from "@/lib/tweaks";

export default function Page() {
  const t = PROD_TWEAKS;
  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main>
        <Hero t={t} />
        <Pillars />
        <Features />
        <Personas />
        <Pricing t={t} />
        <ClosingCta t={t} />
      </main>
      <Footer />
    </div>
  );
}
