import { Arrow, Gavel, Home } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gold/15 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold-dark/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Assessoria Imobiliária Premium
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.1] font-bold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Transformando imóveis em{' '}
            <span className="text-gold-gradient animate-shine">oportunidades e resultados.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0">
            Assessoria em leilões de imóveis e gestão especializada de Airbnb para investidores e proprietários que
            buscam mais <strong className="text-zinc-200">rentabilidade, segurança e tranquilidade</strong>.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#contato"
              className="bg-gold-gradient group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-black shadow-lg shadow-gold/20 transition hover:scale-[1.03]"
            >
              Quero começar <Arrow className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Conhecer serviços
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-400 lg:justify-start">
            <span className="flex items-center gap-2"><Gavel className="h-5 w-5 text-gold" /> Leilões de Imóveis</span>
            <span className="flex items-center gap-2"><Home className="h-5 w-5 text-gold" /> Gestão Airbnb</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
          <div className="bg-gold-gradient absolute -inset-3 rounded-[2rem] opacity-30 blur-2xl" />
          <div className="bg-gold-gradient relative rounded-[2rem] p-[2px]">
            <img
              src="/img/sobre.jpg"
              alt="Kaique Morais, especialista em leilões de imóveis e Airbnb"
              className="aspect-[4/5] w-full rounded-[calc(2rem-2px)] object-cover object-top"
              fetchPriority="high"
            />
          </div>
          <div className="animate-float absolute -bottom-6 -left-4 rounded-2xl border border-gold/30 bg-ink/90 px-5 py-4 shadow-xl backdrop-blur sm:-left-10">
            <p className="text-[11px] tracking-widest text-gold uppercase">Membro</p>
            <p className="font-display text-lg font-semibold text-white">Comunidade ELITE</p>
            <p className="text-xs text-zinc-400">Maior comunidade de arrematantes do Brasil</p>
          </div>
        </div>
      </div>
    </section>
  )
}
