import { STEPS } from '../lib/data'

export default function Process() {
  return (
    <section id="processo" className="bg-coal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Como funciona</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">Um caminho claro até o resultado</h2>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              style={{ transitionDelay: `${i * 100}ms` }}
              className="reveal rounded-2xl border border-white/10 bg-panel p-7"
            >
              <span className="text-gold-gradient font-display text-5xl font-bold">{s.n}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
