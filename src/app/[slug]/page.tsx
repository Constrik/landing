import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProductFaqs } from "@/components/ProductFaqs";
import { ProductFeatures } from "@/components/ProductFeatures";
import { ProductHero } from "@/components/ProductHero";
import { ProductHowItWorks } from "@/components/ProductHowItWorks";
import { getAllSlugs, getProductBySlug } from "@/lib/products";
import { PROD_TWEAKS } from "@/lib/tweaks";

const SITE_URL = "https://constrik.com";
const OG_IMAGE = `${SITE_URL}/assets/constrik-icon-navy-bg.png`;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const title = `${product.name} — ${product.headline}`;
  const canonical = `/${product.slug}`;

  return {
    title: `${product.name} · ${product.headline}`,
    description: product.tagline,
    keywords: product.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: `${SITE_URL}${canonical}`,
      siteName: "Constrik",
      title,
      description: product.tagline,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 1200,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.tagline,
      images: [OG_IMAGE],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const t = PROD_TWEAKS;
  const canonical = `${SITE_URL}/${product.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: product.shortName,
            item: canonical,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${canonical}#software`,
        name: product.name,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: product.category,
        operatingSystem: "Web",
        description: product.description,
        url: canonical,
        audience: {
          "@type": "Audience",
          audienceType: product.audience,
        },
        provider: { "@id": `${SITE_URL}#organization` },
        offers: {
          "@type": "Offer",
          price: "250",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "250",
            priceCurrency: "EUR",
            unitText: "obra activa al mes",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: product.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav t={t} />
      <main>
        <ProductHero product={product} t={t} />
        <ProductFeatures features={product.features} />
        <ProductHowItWorks steps={product.howItWorks} />
        <ProductFaqs faqs={product.faqs} />
        <ClosingCta t={t} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
