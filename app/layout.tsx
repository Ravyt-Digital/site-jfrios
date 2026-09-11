import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "J Frios Distribuidor | Alimentos para o seu negócio", template: "%s | J Frios Distribuidor" }, description: "Frios, laticínios, congelados, embutidos e ingredientes para padarias, pizzarias, restaurantes, lanchonetes e negócios de alimentação.", robots: { index: true, follow: true }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
