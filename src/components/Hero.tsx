import { SOCIALS } from '../lib/data'
import { Arrow, SOCIAL_ICONS } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-28 md:pb-20">
      <div className="container-page">
        {/* Mídia grande em destaque, com o nome sobre a foto */}
        <div className="intro-photo relative overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_-30px_rgb(30_60_140/.45)]">
          <img
            data-parallax
            src="/img/sobre.jpg"
            alt="Kaique Morais, especialista em leilões de imóveis e Airbnb"
            className="aspect-[4/5] w-full scale-110 object-cover object-top sm:aspect-[4/3] md:aspect-[16/10] md:max-h-[26rem]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-left md:p-8">
            <p style={{ '--i': 1 } as React.CSSProperties} className="intro-up text-[11px] font-medium tracking-[0.3em] text-white/80 uppercase">Leilões &amp; Airbnb Expert</p>
            <h1 style={{ '--i': 2 } as React.CSSProperties} className="intro-up mt-2 text-4xl font-semibold tracking-tight text-white uppercase sm:text-5xl">Kaique Morais</h1>
          </div>
        </div>

        <div className="mt-8 text-center md:mt-12">
          <p style={{ '--i': 3 } as React.CSSProperties} className="intro-up mx-auto max-w-xl text-base leading-relaxed text-body">
            Transformando imóveis em <span className="font-semibold text-ink">oportunidades e resultados.</span> Assessoria
            em leilões de imóveis e gestão especializada de Airbnb para quem busca rentabilidade, segurança e tranquilidade.
          </p>

          <div className="mt-6">
            <div style={{ '--i': 4 } as React.CSSProperties} className="intro-up flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a href="#contato" className="btn btn-primary group">
                Quero começar <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#servicos" className="btn btn-outline">
                Conhecer serviços
              </a>
            </div>
            <div style={{ '--i': 5 } as React.CSSProperties} className="intro-up mt-6 flex flex-wrap justify-center gap-2">
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
            <p style={{ '--i': 6 } as React.CSSProperties} className="intro-up mt-6 text-[11px] tracking-wide text-muted">
              <span className="font-semibold text-ink">Comunidade ELITE</span> · Maior comunidade de arrematantes do Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
