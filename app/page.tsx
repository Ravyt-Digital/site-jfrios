/* eslint-disable @next/next/no-img-element -- images are manually optimized and dimensioned for this Cloudflare build */
"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Camera, Check, ChevronDown, Menu, PackageCheck, ShieldCheck, Snowflake, Truck, X } from "lucide-react";

const instagram = "https://www.instagram.com/jfriosdistribuidor/";
const phoneCeara = "tel:+558836714040";
const phonePiaui = "tel:+558632761082";
const googleProfile = "https://share.google/XImCYmiG9RqwlkdSH";
const categories = [
  { n: "01", title: "Frios e laticínios", text: "Queijos, presuntos, requeijões, cremes e itens que entram nas receitas mais vendidas do seu negócio." },
  { n: "02", title: "Congelados", text: "Produtos práticos para agilizar a produção, manter o padrão e atender melhor nos horários de maior movimento." },
  { n: "03", title: "Ingredientes", text: "Uma seleção pensada para panificação, confeitaria, pizzarias, lanchonetes, restaurantes e food service." },
  { n: "04", title: "Embutidos", text: "Opções para diferentes cardápios, volumes de produção e necessidades de abastecimento." },
];
const audiences = ["Padarias e confeitarias", "Pizzarias", "Lanchonetes", "Restaurantes", "Mercados e mercearias", "Negócios de alimentação"];

function Brand({ inverted = false }: { inverted?: boolean }) {
  return <a href="#inicio" className={inverted ? "brand brand--footer" : "brand"} aria-label="J Frios Distribuidor — início"><img src="/logo-jfrios-original.webp?v=2" alt="J Frios Distribuidor" width="1774" height="887" /></a>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [cookies, setCookies] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setCookies(!localStorage.getItem("jfrios_cookie_consent")), 0); return () => window.clearTimeout(timer); }, []);
  const saveCookieChoice = (choice: "accepted" | "rejected") => { localStorage.setItem("jfrios_cookie_consent", choice); setCookies(false); };
  const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: "J Frios Distribuidor", url: "https://site-jfrios.ravytdigital.workers.dev", logo: "https://site-jfrios.ravytdigital.workers.dev/logo-jfrios-original.webp", description: "Distribuidora atacadista de alimentos frios, secos e congelados com atendimento no Ceará e Piauí.", areaServed: [{ "@type": "State", name: "Ceará" }, { "@type": "State", name: "Piauí" }], address: { "@type": "PostalAddress", addressLocality: "Tianguá", addressRegion: "CE", addressCountry: "BR" }, contactPoint: [{ "@type": "ContactPoint", telephone: "+55 88 3671-4040", contactType: "sales", areaServed: "CE" }, { "@type": "ContactPoint", telephone: "+55 86 3276-1082", contactType: "sales", areaServed: "PI" }], sameAs: [instagram, googleProfile] };
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "J Frios Distribuidor", url: "https://site-jfrios.ravytdigital.workers.dev", inLanguage: "pt-BR", publisher: { "@type": "Organization", name: "J Frios Distribuidor" } };
  return <main id="conteudo">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <header className="site-header"><div className="shell header-inner"><Brand /><nav id="menu-principal" className={open ? "nav nav--open" : "nav"} aria-label="Navegação principal">
      <a href="#empresa" onClick={() => setOpen(false)}>A J Frios</a><a href="#produtos" onClick={() => setOpen(false)}>Produtos</a><a href="#diferenciais" onClick={() => setOpen(false)}>Diferenciais</a><a href="#atendimento" onClick={() => setOpen(false)}>Atendimento</a><a className="nav-cta" href={instagram} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={16} /></a>
    </nav><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-controls="menu-principal" aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button></div></header>

    <section id="inicio" className="hero"><img className="hero-image" src="/hero-jfrios.webp" alt="Seleção de frios, laticínios e ingredientes para negócios de alimentação" width="2048" height="753" fetchPriority="high" /><div className="hero-overlay" /><div className="shell hero-content">
      <p className="eyebrow eyebrow--light"><span /> J Frios Distribuidor</p><h1>Seu estoque abastecido.<br /><em>Seu negócio em movimento.</em></h1><p className="hero-copy">Distribuição atacadista de alimentos frios, secos e congelados para negócios do Ceará e Piauí.</p>
      <div className="hero-actions"><a className="button button--red" href={instagram} target="_blank" rel="noreferrer">Falar com a J Frios <ArrowRight size={18} /></a><a className="text-link text-link--light" href="#produtos">Conhecer as linhas <ChevronDown size={17} /></a></div>
      <div className="hero-proof"><div><ShieldCheck /><span><strong>Qualidade</strong>na seleção</span></div><div><Snowflake /><span><strong>Cuidado</strong>no armazenamento</span></div><div><Truck /><span><strong>Agilidade</strong>na distribuição</span></div></div>
    </div></section>

    <section id="empresa" className="section about"><div className="shell about-grid"><div><p className="eyebrow"><span /> Muito além do fornecimento</p><h2>Quem vive de alimentar pessoas precisa de um distribuidor que entenda o ritmo do negócio.</h2></div><div className="about-copy"><p>Com sede em Tianguá, a J Frios atende vendas no atacado e distribui alimentos para negócios no Ceará e Piauí.</p><p>O mix reúne produtos frios, secos e congelados para diferentes rotinas de produção e comercialização de alimentos. Marcas, apresentações, disponibilidade e condições de atendimento devem ser consultadas com a equipe comercial.</p><a className="text-link" href="#diferenciais">Como funciona a distribuição <ArrowRight size={17} /></a></div></div></section>

    <section id="produtos" className="section products"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span /> Nossas linhas</p><h2>Ingredientes que fazem parte dos melhores resultados.</h2></div><p>Consulte nossa equipe para conhecer marcas, apresentações e disponibilidade.</p></div>
      <div className="product-grid">{categories.map((item) => <article className="product-card" key={item.n}><span className="card-number">{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowRight className="card-arrow" /></article>)}</div>
      <div className="catalog-callout"><div className="catalog-icon"><PackageCheck /></div><div><p className="small-label">Precisa de um produto específico?</p><h3>Fale com a equipe e consulte nosso mix disponível.</h3></div><a className="button button--navy" href={instagram} target="_blank" rel="noreferrer">Consultar produtos <ArrowRight size={18} /></a></div>
    </div></section>

    <section id="diferenciais" className="section difference"><div className="shell difference-grid"><div className="difference-copy"><p className="eyebrow eyebrow--light"><span /> Distribuição que acompanha você</p><h2>Não basta ter produto.<br />É preciso ter confiança.</h2><p>Quem trabalha com alimentos sabe: qualidade, conservação e prazo interferem diretamente no resultado. Por isso, a J Frios cuida do que acontece antes de o produto chegar ao seu negócio.</p></div>
      <div className="benefit-list">{[["01", "Seleção criteriosa", "Um mix construído para atender as necessidades reais de quem produz e vende alimentos."],["02", "Cuidado com os produtos", "Armazenamento e movimentação atentos às características de cada categoria."],["03", "Atendimento próximo", "Uma equipe disponível para entender o pedido e ajudar o cliente a comprar melhor."],["04", "Distribuição eficiente", "Organização para levar o abastecimento até o cliente com mais segurança e agilidade."]].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className="section audience"><div className="shell audience-grid"><div><p className="eyebrow"><span /> Para quem fazemos</p><h2>Uma parceria para diferentes negócios de alimentação.</h2><p>Se o seu negócio depende de bons ingredientes e abastecimento organizado, a J Frios pode fazer parte da sua rotina.</p></div><div className="audience-list">{audiences.map((item) => <div key={item}><Check size={17} /> {item}</div>)}</div></div></section>

    <section id="atendimento" className="section contact"><div className="shell contact-card"><div><p className="eyebrow eyebrow--light"><span /> Atendimento comercial</p><h2>Consulte produtos e disponibilidade para sua região.</h2><p>Informe à equipe quais itens o seu negócio procura e em qual cidade será o atendimento. A J Frios possui canais comerciais para Ceará e Piauí.</p></div><div className="contact-action"><a className="button button--white" href={phoneCeara}>Ligar para o Ceará: (88) 3671-4040</a><a className="button button--white" href={phonePiaui}>Ligar para o Piauí: (86) 3276-1082</a><a className="contact-instagram" href={instagram} target="_blank" rel="noreferrer"><Camera size={18} /> Instagram @jfriosdistribuidor</a></div></div></section>

    <footer><div className="shell footer-top"><div><Brand inverted /><p>Distribuição atacadista de alimentos.</p><span>Tianguá, Ceará · Atendimento no Ceará e Piauí</span></div><div><p className="footer-label">Navegação</p><a href="#empresa">A J Frios</a><a href="#produtos">Produtos</a><a href="#diferenciais">Diferenciais</a></div><div><p className="footer-label">Atendimento</p><a href={phoneCeara}>Ceará: (88) 3671-4040</a><a href={phonePiaui}>Piauí: (86) 3276-1082</a><a href={instagram} target="_blank" rel="noreferrer">Instagram oficial</a><a href={googleProfile} target="_blank" rel="noreferrer">Perfil da J Frios no Google</a></div><div><p className="footer-label">Informações</p><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/politica-de-cookies">Política de Cookies</a><a href="/termos-de-uso">Termos de Uso</a><button className="footer-cookie-button" type="button" onClick={() => setCookies(true)}>Preferências de cookies</button></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} J Frios Distribuidor. Todos os direitos reservados.</span><span>Site Criado Por Marcio Cabral | RocketSites Pro</span></div></footer>
    <a className="mobile-cta" href={instagram} target="_blank" rel="noreferrer" aria-label="Solicitar atendimento da J Frios pelo Instagram"><Camera size={18} aria-hidden="true" /> Solicitar atendimento</a>
    {cookies && <aside className="cookie" aria-labelledby="cookie-title"><div><strong id="cookie-title">Sua privacidade importa.</strong><p>Este site armazena apenas sua escolha de consentimento. Consulte a <a href="/politica-de-cookies">Política de Cookies</a>.</p></div><div className="cookie-actions"><button className="cookie-secondary" type="button" onClick={() => saveCookieChoice("rejected")}>Recusar</button><button className="cookie-primary" type="button" onClick={() => saveCookieChoice("accepted")}>Aceitar</button></div></aside>}
  </main>;
}
