import { HIGHLIGHTS } from '../lib/data'

export default function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 md:max-w-none md:px-8">
        <div>
        <h2 className="section-title">Sobre</h2>
        <p className="mt-6 text-center text-2xl font-light tracking-tight text-ink md:text-3xl">
          Olá, sou <span className="font-semibold">Kaique Morais</span>
        </p>
        <div className="mt-6 space-y-4 text-center leading-relaxed text-body">
          <p>
            Membro da maior comunidade de arrematantes do Brasil — ELITE. Atuo no mercado imobiliário com soluções
            especializadas em duas áreas estratégicas: assessoria em leilões de imóveis e gestão de imóveis para
            temporada no Airbnb.
          </p>
          <p>
            Meu objetivo é proporcionar mais rentabilidade, segurança e tranquilidade para quem deseja investir,
            comprar ou obter melhores resultados com seus imóveis.
          </p>
        </div>

        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {HIGHLIGHTS.map((h, i) => (
            <li key={h.title} className="rounded-3xl border border-line bg-paper p-6 transition duration-300 md:shadow-[0_8px_24px_-14px_rgb(30_60_140/.18)] md:hover:-translate-y-1 md:hover:border-tech/40 md:hover:shadow-[0_18px_36px_-16px_rgb(30_60_140/.3)]">
              <span className="text-xs font-medium tracking-widest text-muted">0{i + 1}</span>
              <h3 className="mt-2 text-sm font-semibold text-ink">{h.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
