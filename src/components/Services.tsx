import { AIRBNB_ITEMS, AUCTION_ITEMS } from '../lib/data'
import { Arrow, Check } from './Icons'

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 md:flex-1">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-body">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink" aria-hidden="true" /> {i}
        </li>
      ))}
    </ul>
  )
}

const tag = 'text-xs font-medium tracking-[0.25em] text-muted uppercase'
const card =
  'reveal flex flex-col rounded-3xl border border-line bg-paper p-6 sm:p-8 md:p-10 md:shadow-[0_8px_24px_-14px_rgb(30_60_140/.18)] md:hover:-translate-y-1 md:hover:border-tech/40 md:hover:shadow-[0_22px_44px_-18px_rgb(30_60_140/.3)]'
const cta =
  'mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'

export default function Services() {
  return (
    <section id="servicos" className="py-14 sm:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 md:max-w-6xl md:px-8">
        <div className="reveal text-center">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-ink uppercase">Serviços</h2>
          <p className="mx-auto mt-3 text-sm text-muted md:mt-4 md:max-w-xl md:text-base">
            Do investimento em leilão à gestão profissional da sua renda de temporada.
          </p>
        </div>

        <div className="mt-8 space-y-5 md:mt-14 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
          <article className={card}>
            <span className={tag}>Leilões</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">Assessoria em Leilões de Imóveis</h3>
            <p className="mt-2 text-sm text-muted">Invista em imóveis de leilão com mais segurança e estratégia.</p>
            <List items={AUCTION_ITEMS} />
            <a href="#contato" className={cta}>
              Quero assessoria <Arrow className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>

          <article className={card}>
            <span className={tag}>Airbnb</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">Gestão Especializada de Imóveis</h3>
            <p className="mt-2 text-sm text-muted">Maximize a rentabilidade do seu Airbnb com gestão especializada.</p>
            <List items={AIRBNB_ITEMS} />
            <a href="#contato" className={cta}>
              Quero gestão <Arrow className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>

          <article className="reveal overflow-hidden rounded-3xl border border-line bg-soft md:col-span-2 md:grid md:grid-cols-2">
            <div className="p-6 sm:p-8 md:flex md:flex-col md:justify-center md:p-10 lg:p-14">
              <span className={tag}>Em breve</span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">
                Sistema de Gestão — Assessoria em Leilões
              </h3>
              <p className="mt-2 text-sm text-muted">
                Acompanhe operações, pipeline, ROI, financeiro e documentos em um único painel. Sistema em
                desenvolvimento, lançamento em breve.
              </p>
              <a href="#contato" className={cta}>
                Quero ser avisado <Arrow className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <img
              src="/img/sistema.jpg"
              alt="Prévia do painel do Sistema de Gestão"
              className="h-48 w-full border-t border-line object-cover object-left-top sm:h-64 md:h-full md:min-h-80 md:border-t-0 md:border-l"
              loading="lazy"
            />
          </article>
        </div>
      </div>
    </section>
  )
}
