import { AIRBNB_ITEMS, AUCTION_ITEMS } from '../lib/data'
import { Arrow, Check } from './Icons'

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-body">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" /> {i}
        </li>
      ))}
    </ul>
  )
}

const tag = 'text-xs font-medium tracking-[0.25em] text-muted uppercase'
const cta = 'mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink transition-all hover:gap-3'
const title = 'mt-4 text-2xl font-semibold tracking-tight text-ink'

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase">Serviços</p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Soluções para o seu <span className="font-semibold">patrimônio</span>
          </h2>
          <p className="mt-4 text-muted">Do investimento em leilão à gestão profissional da sua renda de temporada.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="reveal flex flex-col overflow-hidden rounded-2xl border border-line">
            <img src="/img/leiloes.jpg" alt="" className="h-48 w-full object-cover grayscale" loading="lazy" />
            <div className="flex flex-1 flex-col p-7 sm:p-9">
              <span className={tag}>Leilões</span>
              <h3 className={title}>Assessoria em Leilões de Imóveis</h3>
              <p className="mt-3 text-muted">Invista em imóveis de leilão com mais segurança e estratégia.</p>
              <List items={AUCTION_ITEMS} />
              <a href="#contato" className={cta}>
                Quero assessoria <Arrow className="h-4 w-4" />
              </a>
            </div>
          </article>

          <article className="reveal flex flex-col rounded-2xl border border-line p-7 sm:p-9">
            <span className={tag}>Airbnb</span>
            <h3 className={title}>Gestão Especializada de Imóveis</h3>
            <p className="mt-3 text-muted">Maximize a rentabilidade do seu Airbnb com gestão especializada.</p>
            <List items={AIRBNB_ITEMS} />
            <a href="#contato" className={cta}>
              Quero gestão <Arrow className="h-4 w-4" />
            </a>
          </article>

          <article className="reveal grid overflow-hidden rounded-2xl border border-line bg-soft md:grid-cols-2 lg:col-span-2">
            <div className="flex flex-col justify-center p-7 sm:p-9">
              <span className={tag}>Em breve</span>
              <h3 className={title}>Sistema de Gestão — Assessoria em Leilões</h3>
              <p className="mt-3 text-muted">
                Acompanhe operações, pipeline, ROI, financeiro e documentos em um único painel. Sistema em
                desenvolvimento, lançamento em breve.
              </p>
              <a href="#contato" className={cta}>
                Quero ser avisado <Arrow className="h-4 w-4" />
              </a>
            </div>
            <div className="relative min-h-64 border-t border-line md:border-t-0 md:border-l">
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
