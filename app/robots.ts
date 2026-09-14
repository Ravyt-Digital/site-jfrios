import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://site-jfrios.ravytdigital.workers.dev/sitemap.xml", host: "https://site-jfrios.ravytdigital.workers.dev" }; }
