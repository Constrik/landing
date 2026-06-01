import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

const SITE_URL = "https://constrik.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const home: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1.0,
  };
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const legal: MetadataRoute.Sitemap = ["/aviso-legal", "/privacidad", "/cookies"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.1,
    }),
  );
  return [home, ...productPages, ...legal];
}
