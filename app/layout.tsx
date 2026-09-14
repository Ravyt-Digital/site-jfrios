import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://site-jfrios.ravytdigital.workers.dev";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "J Frios Distribuidor | Alimentos para o seu negócio", template: "%s | J Frios Distribuidor" },
  description: "Distribuição de frios, laticínios, congelados, embutidos e ingredientes para negócios de alimentação.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: siteUrl, siteName: "J Frios Distribuidor", title: "J Frios Distribuidor | Alimentos para o seu negócio", description: "Distribuição de alimentos para padarias, pizzarias, restaurantes, lanchonetes, mercados e outros negócios de alimentação.", images: [{ url: "/og-jfrios.jpg", width: 1200, height: 630, alt: "J Frios Distribuidor — alimentos para o seu negócio" }] },
  twitter: { card: "summary_large_image", images: ["/og-jfrios.jpg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Ir para o conteúdo principal</a>{children}</body></html>; }
