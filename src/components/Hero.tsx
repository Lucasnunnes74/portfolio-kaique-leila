import { Arrow } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-20 sm:pt-36 lg:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase">
            Assessoria Imobiliária Premium
          </p>

          <h1 className="mt-6 text-4xl leading-[1.15] font-light tracking-tight text-ink sm:text-5xl xl:text-6xl">
            Transformando imóveis em <span className="font-semibold">oportunidades e resultados.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
            Assessoria em leilões de imóveis e gestão especializada de Airbnb para quem busca rentabilidade, segurança
            e tranquilidade.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition hover:bg-body"
            >
              Quero começar <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-line px-8 py-4 text-sm font-medium text-ink transition hover:border-ink"
            >
              Conhecer serviços
            </a>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-sm lg:max-w-none">
          <img
            src="/img/sobre.jpg"
            alt="Kaique Morais, especialista em leilões de imóveis e Airbnb"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-top grayscale"
            fetchPriority="high"
          />
          <figcaption className="mt-4 flex items-center justify-between border-t border-line pt-4 text-xs tracking-wide text-muted">
            <span className="font-medium text-ink">Comunidade ELITE</span>
            <span>Maior comunidade de arrematantes do Brasil</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
