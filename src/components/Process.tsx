import { STEPS } from '../lib/data'

export default function Process() {
  return (
    <section id="processo" className="py-14 sm:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 md:max-w-none md:px-8">
        <div className="reveal text-center">
          <h2 className="section-title !mb-3">Como funciona</h2>
          <p className="mt-3 text-sm text-muted">Um caminho claro até o resultado.</p>
        </div>
        <ol className="mt-8 space-y-3 md:mt-10">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="card relative flex items-start gap-4 !rounded-3xl !p-5 sm:!p-6"
            >
              <span
                aria-hidden="true"
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold tracking-wider text-white ring-4 ring-[rgb(59_111_245/.12)]"
              >
                {s.n}
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-ink">
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
