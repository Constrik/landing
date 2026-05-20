// Production entry — renders the Constrik landing with hardcoded values.
// The dev-only TweaksPanel from the design system is excluded by design.
//
// To change a value (booking URL, login URL, hide pricing, etc.), edit the
// PROD_TWEAKS object below and re-run `node apps/landing/build.mjs`.

const PROD_TWEAKS = {
  showPricing: true,
  bookingUrl: "https://calendar.app.google/yNRy3F8fUua9oNsK7",
  loginUrl: "https://app.constrik.com/login",
};

function ConstrikLanding() {
  const t = PROD_TWEAKS;
  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main>
        <Hero t={t} />
        <Pillars t={t} />
        <Features t={t} />
        <Personas t={t} />
        <Pricing t={t} />
        <ClosingCta t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ConstrikLanding />);
