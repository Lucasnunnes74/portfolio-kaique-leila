import { HIGHLIGHTS } from '../lib/data'

export default function About() {
  return (
    <section id="sobre" className="bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase">Sobre</p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Olá, sou <span className="font-semibold">Kaique Morais</span>
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            Membro da maior comunidade de arrematantes do Brasil — ELITE. Atuo no mercado imobiliário com soluções
            especializadas em duas áreas estratégicas: assessoria em leilões de imóveis e gestão de imóveis para
            temporada no Airbnb.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            Meu objetivo é proporcionar mais rentabilidade, segurança e tranquilidade para quem deseja investir,
            comprar ou obter melhores resultados com seus imóveis.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <div key={h.title} className="reveal bg-paper p-7" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="text-xs font-medium tracking-widest text-muted">0{i + 1}</span>
              <h3 className="mt-4 text-base font-semibold text-ink">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
