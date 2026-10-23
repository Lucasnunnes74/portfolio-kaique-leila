import { STEPS } from '../lib/data'

export default function Process() {
  return (
    <section id="processo" className="bg-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase">Como funciona</p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Um caminho claro até o <span className="font-semibold">resultado</span>
          </h2>
        </div>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.n} className="reveal border-t border-ink pt-5" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="text-xs font-medium tracking-widest text-muted">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
