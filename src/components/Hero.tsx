import { SOCIALS } from '../lib/data'
import { Arrow, SOCIAL_ICONS } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
      <div className="container-page text-center md:grid md:grid-cols-[1.15fr_.85fr] md:items-center md:gap-10 md:text-left lg:gap-20">
        <div className="relative mx-auto w-fit md:order-2 md:mx-0 md:w-full md:max-w-md md:justify-self-end">
          <div
            aria-hidden="true"
            className="absolute -inset-4 hidden translate-x-4 translate-y-4 rounded-[2.25rem] border border-tech/30 bg-tint md:block"
          />
          <img
            src="/img/sobre.jpg"
            alt="Kaique Morais, especialista em leilões de imóveis e Airbnb"
            className="relative mx-auto h-36 w-36 rounded-full border border-line object-cover object-top grayscale sm:h-44 sm:w-44 md:aspect-[4/5] md:h-auto md:w-full md:rounded-[2rem] md:shadow-[0_30px_60px_-30px_rgb(30_60_140/.45)]"
            fetchPriority="high"
          />
          <p className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-line bg-paper px-5 py-3 text-[11px] tracking-wide text-muted shadow-[0_16px_32px_-16px_rgb(30_60_140/.35)] md:block lg:-left-8">
            <span className="block font-semibold text-ink">Comunidade ELITE</span>
            Maior comunidade de arrematantes do Brasil
          </p>
        </div>

        <div className="md:order-1 md:flex md:flex-col md:items-start">
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink uppercase sm:text-4xl md:mt-0 md:text-5xl lg:text-6xl">
            Kaique Morais
          </h1>
          <p className="mt-2 text-xs font-medium tracking-[0.3em] text-muted uppercase md:mt-4 md:text-sm md:text-tech">
            Leilões &amp; Airbnb Expert
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-body md:mx-0 md:mt-8 md:text-lg md:leading-8">
            Transformando imóveis em <span className="font-semibold text-ink">oportunidades e resultados.</span> Assessoria
            em leilões de imóveis e gestão especializada de Airbnb para quem busca rentabilidade, segurança e tranquilidade.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:order-2 md:mt-10 md:justify-start">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.name]
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="icon-btn"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row md:order-1 md:mt-10 md:w-auto md:justify-start">
            <a href="#contato" className="btn btn-primary group">
              Quero começar <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#servicos" className="btn btn-outline">
              Conhecer serviços
            </a>
          </div>

          <p className="mt-8 text-[11px] tracking-wide text-muted md:hidden">
            <span className="font-semibold text-ink">Comunidade ELITE</span> · Maior comunidade de arrematantes do Brasil
          </p>
        </div>
      </div>
    </section>
  )
}
