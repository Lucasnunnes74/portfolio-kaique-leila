import { AIRBNB_ITEMS, AUCTION_ITEMS } from '../lib/data'
import { Arrow, Check, Cpu, Gavel, Home } from './Icons'

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {i}
        </li>
      ))}
    </ul>
  )
}

const cta = 'mt-8 inline-flex w-fit items-center gap-2 font-semibold text-gold transition-all hover:gap-3'

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Catálogo de serviços</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">Soluções para o seu patrimônio</h2>
          <p className="mt-4 text-zinc-400">Do investimento em leilão à gestão profissional da sua renda de temporada.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <article className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-panel lg:col-span-7">
            <img src="/img/leiloes.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/80 to-panel/40" />
            <div className="relative flex h-full flex-col p-7 sm:p-10">
              <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">Leilões</span>
              <Gavel className="mt-6 h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Assessoria em Leilões de Imóveis</h3>
              <p className="mt-3 max-w-lg text-zinc-300">Invista em imóveis de leilão com mais segurança e estratégia.</p>
              <List items={AUCTION_ITEMS} />
              <a href="#contato" className={cta}>
                Quero assessoria <Arrow className="h-5 w-5" />
              </a>
            </div>
          </article>

          <article className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-panel lg:col-span-5">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative flex h-full flex-col p-7 sm:p-10">
              <span className="w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">Airbnb</span>
              <Home className="mt-6 h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">Gestão Especializada de Imóveis</h3>
              <p className="mt-3 text-zinc-300">Maximize a rentabilidade do seu Airbnb com gestão especializada.</p>
              <List items={AIRBNB_ITEMS} />
              <a href="#contato" className={cta}>
                Quero gestão <Arrow className="h-5 w-5" />
              </a>
            </div>
          </article>

          <article className="reveal grid overflow-hidden rounded-3xl border border-gold/30 bg-panel md:grid-cols-2 lg:col-span-12">
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold text-black">Em breve</span>
              <Cpu className="mt-6 h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                Sistema de Gestão — Assessoria em Leilões
              </h3>
              <p className="mt-3 text-zinc-300">
                Acompanhe operações, pipeline, ROI, financeiro e documentos em um único painel. Sistema em
                desenvolvimento, lançamento em breve.
              </p>
              <a href="#contato" className={cta}>
                Quero ser avisado <Arrow className="h-5 w-5" />
              </a>
            </div>
            <div className="relative min-h-64 bg-zinc-100">
              <img
                src="/img/sistema.jpg"
                alt="Prévia do painel do Sistema de Gestão"
                className="absolute inset-0 h-full w-full object-cover object-left-top"
                loading="lazy"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
