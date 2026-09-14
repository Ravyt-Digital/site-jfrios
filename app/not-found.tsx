import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Página não encontrada", robots: { index: false, follow: true } };
export default function NotFound(){return <main id="conteudo" className="not-found"><div><span>404</span><h1>Esta página não foi encontrada.</h1><p>O endereço pode ter mudado ou não existe. Volte para conhecer a J Frios e nossas linhas de produtos.</p><Link className="button button--red" href="/">Voltar ao início</Link></div></main>}
