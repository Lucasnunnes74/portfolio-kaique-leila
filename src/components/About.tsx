import { HIGHLIGHTS } from '../lib/data'
import { Check } from './Icons'

export default function About() {
  return (
    <section id="sobre" className="bg-coal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Sobre</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">
            Olá, sou <span className="text-gold">Kaique Morais</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Membro da maior comunidade de arrematantes do Brasil — <strong className="text-zinc-200">ELITE</strong>.
            Atuo no mercado imobiliário com soluções especializadas em duas áreas estratégicas: assessoria em leilões
            de imóveis e gestão de imóveis para temporada no Airbnb.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Meu objetivo é proporcionar mais rentabilidade, segurança e tranquilidade para quem deseja investir, comprar
            ou obter melhores resultados com seus imóveis.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal group rounded-2xl border border-white/10 bg-panel p-6 hover:border-gold/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-black">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
