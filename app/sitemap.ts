import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },{ url: "/politica-de-privacidade", lastModified: new Date(), changeFrequency: "yearly", priority: .2 },{ url: "/termos-de-uso", lastModified: new Date(), changeFrequency: "yearly", priority: .2 }]; }
