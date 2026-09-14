import type { MetadataRoute } from "next";
const siteUrl = "https://site-jfrios.ravytdigital.workers.dev";
const lastModified = new Date("2026-09-14T00:00:00.000Z");
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },{ url: `${siteUrl}/politica-de-privacidade`, lastModified, changeFrequency: "yearly", priority: .2 },{ url: `${siteUrl}/politica-de-cookies`, lastModified, changeFrequency: "yearly", priority: .2 },{ url: `${siteUrl}/termos-de-uso`, lastModified, changeFrequency: "yearly", priority: .2 }]; }
