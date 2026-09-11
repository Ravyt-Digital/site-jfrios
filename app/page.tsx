"use client";

import { useState } from "react";
import { ArrowRight, Camera, Check, ChevronDown, Menu, PackageCheck, ShieldCheck, Snowflake, Truck, X } from "lucide-react";

const instagram = "https://www.instagram.com/jfriosdistribuidor/";
const categories = [
  { n: "01", title: "Frios e laticínios", text: "Queijos, presuntos, requeijões, cremes e itens que entram nas receitas mais vendidas do seu negócio." },
  { n: "02", title: "Congelados", text: "Produtos práticos para agilizar a produção, manter o padrão e atender melhor nos horários de maior movimento." },
  { n: "03", title: "Ingredientes", text: "Uma seleção pensada para panificação, confeitaria, pizzarias, lanchonetes, restaurantes e food service." },
  { n: "04", title: "Embutidos", text: "Opções para diferentes cardápios, volumes de produção e necessidades de abastecimento." },
];
const audiences = ["Padarias e confeitarias", "Pizzarias", "Lanchonetes", "Restaurantes", "Mercados e mercearias", "Negócios de alimentação"];

function Brand({ inverted = false }: { inverted?: boolean }) {
  return <a href="#inicio" className={inverted ? "brand brand--footer" : "brand"} aria-label="J Frios Distribuidor — início"><img src="/logo-jfrios-original.png" alt="Logo original J Frios" /></a>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [cookies, setCookies] = useState(true);
  return <main>
    <header className="site-header"><div className="shell header-inner"><Brand /><nav className={open ? "nav nav--open" : "nav"} aria-label="Navegação principal">
      <a href="#empresa" onClick={() => setOpen(false)}>A J Frios</a><a href="#produtos" onClick={() => setOpen(false)}>Produtos</a><a href="#diferenciais" onClick={() => setOpen(false)}>Diferenciais</a><a href="#atendimento" onClick={() => setOpen(false)}>Atendimento</a><a className="nav-cta" href={instagram} target="_blank" rel="noreferrer">Solicitar orçamento <ArrowRight size={16} /></a>
    </nav><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button></div></header>

    <section id="inicio" className="hero"><img className="hero-image" src="/hero-jfrios.webp" alt="Seleção de frios, laticínios e ingredientes em ambiente profissional de distribuição" /><div className="hero-overlay" /><div className="shell hero-content">
      <p className="eyebrow eyebrow--light"><span /> Alimentos para o seu negócio</p><h1>Seu estoque abastecido.<br /><em>Seu negócio em movimento.</em></h1><p className="hero-copy">Produtos selecionados, atendimento próximo e distribuição pensada para quem trabalha todos os dias com alimentos.</p>
      <div className="hero-actions"><a className="button button--red" href={instagram} target="_blank" rel="noreferrer">Falar com a J Frios <ArrowRight size={18} /></a><a className="text-link text-link--light" href="#produtos">Conhecer as linhas <ChevronDown size={17} /></a></div>
      <div className="hero-proof"><div><ShieldCheck /><span><strong>Qualidade</strong>na seleção</span></div><div><Snowflake /><span><strong>Cuidado</strong>no armazenamento</span></div><div><Truck /><span><strong>Agilidade</strong>na distribuição</span></div></div>
    </div></section>

    <section id="empresa" className="section about"><div className="shell about-grid"><div><p className="eyebrow"><span /> Muito além do fornecimento</p><h2>Quem vive de alimentar pessoas precisa de um distribuidor que entenda o ritmo do negócio.</h2></div><div className="about-copy"><p>A J Frios conecta negócios de alimentação a produtos que fazem parte da rotina de produção e venda. Nosso trabalho é tornar o abastecimento mais simples, seguro e confiável.</p><p>Da escolha dos produtos ao atendimento, cada etapa é pensada para ajudar o cliente a manter a qualidade do cardápio e a operação funcionando.</p><a className="text-link" href="#diferenciais">Por que escolher a J Frios <ArrowRight size={17} /></a></div></div></section>

    <section id="produtos" className="section products"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span /> Nossas linhas</p><h2>Ingredientes que fazem parte dos melhores resultados.</h2></div><p>Consulte nossa equipe para conhecer marcas, apresentações e disponibilidade.</p></div>
      <div className="product-grid">{categories.map((item) => <article className="product-card" key={item.n}><span className="card-number">{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowRight className="card-arrow" /></article>)}</div>
      <div className="catalog-callout"><div className="catalog-icon"><PackageCheck /></div><div><p className="small-label">Precisa de um produto específico?</p><h3>Fale com a equipe e consulte nosso mix disponível.</h3></div><a className="button button--navy" href={instagram} target="_blank" rel="noreferrer">Consultar produtos <ArrowRight size={18} /></a></div>
    </div></section>

    <section id="diferenciais" className="section difference"><div className="shell difference-grid"><div className="difference-copy"><p className="eyebrow eyebrow--light"><span /> Distribuição que acompanha você</p><h2>Não basta ter produto.<br />É preciso ter confiança.</h2><p>Quem trabalha com alimentos sabe: qualidade, conservação e prazo interferem diretamente no resultado. Por isso, a J Frios cuida do que acontece antes de o produto chegar ao seu negócio.</p></div>
      <div className="benefit-list">{[["01", "Seleção criteriosa", "Um mix construído para atender as necessidades reais de quem produz e vende alimentos."],["02", "Cuidado com os produtos", "Armazenamento e movimentação atentos às características de cada categoria."],["03", "Atendimento próximo", "Uma equipe disponível para entender o pedido e ajudar o cliente a comprar melhor."],["04", "Distribuição eficiente", "Organização para levar o abastecimento até o cliente com mais segurança e agilidade."]].map(([n,title,text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div></section>

    <section className="section audience"><div className="shell audience-grid"><div><p className="eyebrow"><span /> Para quem fazemos</p><h2>Uma parceria para diferentes negócios de alimentação.</h2><p>Se o seu negócio depende de bons ingredientes e abastecimento organizado, a J Frios pode fazer parte da sua rotina.</p></div><div className="audience-list">{audiences.map((item) => <div key={item}><Check size={17} /> {item}</div>)}</div></div></section>

    <section id="atendimento" className="section contact"><div className="shell contact-card"><div><p className="eyebrow eyebrow--light"><span /> Vamos conversar</p><h2>O que o seu negócio precisa hoje?</h2><p>Conte para nossa equipe quais produtos você procura. Vamos orientar seu atendimento e verificar a disponibilidade para a sua região.</p></div><div className="contact-action"><a className="button button--white" href={instagram} target="_blank" rel="noreferrer"><Camera size={19} /> Falar pelo Instagram</a><span>Atendimento comercial pelo perfil oficial @jfriosdistribuidor</span></div></div></section>

    <footer><div className="shell footer-top"><div><Brand inverted /><p>Alimentos para o seu negócio.</p></div><div><p className="footer-label">Navegação</p><a href="#empresa">A J Frios</a><a href="#produtos">Produtos</a><a href="#diferenciais">Diferenciais</a></div><div><p className="footer-label">Atendimento</p><a href={instagram} target="_blank" rel="noreferrer">Instagram</a><a href="#atendimento">Fale com a equipe</a></div><div><p className="footer-label">Informações</p><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} J Frios Distribuidor.</span><span>Todos os direitos reservados.</span></div></footer>
    <a className="mobile-cta" href={instagram} target="_blank" rel="noreferrer"><Camera size={18} /> Solicitar atendimento</a>
    {cookies && <aside className="cookie" aria-label="Preferências de cookies"><div><strong>Sua privacidade importa.</strong><p>Usamos cookies essenciais para melhorar sua experiência. Consulte nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.</p></div><div className="cookie-actions"><button className="cookie-secondary" onClick={() => setCookies(false)}>Recusar</button><button className="cookie-primary" onClick={() => setCookies(false)}>Aceitar</button></div></aside>}
  </main>;
}
