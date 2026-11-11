import { STEPS } from '../lib/data'

export default function Process() {
  return (
    <section id="processo" className="py-14 sm:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 md:max-w-6xl md:px-8">
        <div className="reveal text-center">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-ink uppercase">Como funciona</h2>
          <p className="mt-3 text-sm text-muted md:mt-4 md:text-base">Um caminho claro até o resultado.</p>
        </div>
        <ol className="mt-8 space-y-3 md:mt-14 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="reveal relative flex items-start gap-4 rounded-3xl border border-line bg-paper p-5 sm:p-6 md:p-7 lg:flex-col lg:gap-6 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:after:absolute lg:after:top-5 lg:after:right-[-1.5rem] lg:after:left-14 lg:after:h-px lg:after:bg-gradient-to-r lg:after:from-tech/60 lg:after:to-line lg:last:after:hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                aria-hidden="true"
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold tracking-wider text-white transition duration-300 lg:h-10 lg:w-10 lg:ring-8 lg:ring-white"
              >
                {s.n}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-ink md:text-lg">
                  <span className="sr-only">Etapa {s.n}: </span>
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
