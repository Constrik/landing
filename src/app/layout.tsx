import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { PRODUCTS } from "@/lib/products";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

// GTM container (público, no secreto). Default explícito para que cargue en prod
// aunque no esté la env var en Vercel; sobreescribible con NEXT_PUBLIC_GTM_ID.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-NCPC92V3";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE_URL = "https://constrik.com";
const SITE_NAME = "Constrik";
const DESCRIPTION =
  "Constrik es una plataforma de Inteligencia Artificial para los departamentos de estudios de las constructoras. Reduce los plazos de estudios, centraliza el conocimiento, reduce errores en las licitaciones y prepara la obra para que sea más eficiente.";
const OG_IMAGE = `${SITE_URL}/assets/constrik-icon-navy-bg.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Constrik — IA para los departamentos de estudios",
    template: "%s · Constrik",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Constrik Intelligence SL", url: SITE_URL }],
  creator: "Constrik Intelligence SL",
  publisher: "Constrik Intelligence SL",
  keywords: [
    "IA para constructoras",
    "departamento de estudios",
    "presupuestos BC3",
    "IFC",
    "auditoría de presupuestos",
    "Cost Intelligence Engine",
    "constructoras España",
    "licitaciones obra",
    "planning de obra",
    "asignación de oficios",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Constrik — IA para los departamentos de estudios",
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: "Constrik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Constrik — IA para los departamentos de estudios",
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/assets/constrik-icon-navy-bg.png",
    apple: "/assets/constrik-icon-navy-bg.png",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#1A1A2E",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      legalName: "Constrik Intelligence SL",
      url: SITE_URL,
      logo: OG_IMAGE,
      description: DESCRIPTION,
      email: "info@constrik.com",
      vatID: "B88773114",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Passeig Garbí 132",
        postalCode: "08860",
        addressLocality: "Castelldefels",
        addressRegion: "Barcelona",
        addressCountry: "ES",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      inLanguage: "es-ES",
      publisher: { "@id": `${SITE_URL}#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}#software`,
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: DESCRIPTION,
      url: SITE_URL,
      offers: {
        "@type": "Offer",
        price: "250",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "250",
          priceCurrency: "EUR",
          unitText: "obra activa al mes",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitText: "obra/mes",
          },
        },
      },
      provider: { "@id": `${SITE_URL}#organization` },
      hasPart: PRODUCTS.map((p) => ({
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/${p.slug}#software`,
        name: p.name,
        url: `${SITE_URL}/${p.slug}`,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: p.category,
        description: p.description,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}#products`,
      name: "Catálogo de productos Constrik",
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/${p.slug}`,
        name: p.name,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
      {/* Consent Mode v2: por defecto DENEGADO antes de cargar GTM (RGPD).
          El banner de cookies actualiza el consentimiento al aceptar. */}
      <Script id="consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});gtag('set','ads_data_redaction',true);try{if(localStorage.getItem('constrik_consent')==='granted'){gtag('consent','update',{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});}}catch(e){}`}
      </Script>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        {children}
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
