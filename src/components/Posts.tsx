import { useEffect, useRef, useState } from 'react'
import { POSTS, SOCIALS } from '../lib/data'

export default function Posts() {
  const [idx, setIdx] = useState(0)
  const scroller = useRef<HTMLUListElement>(null)
  const [perView, setPerView] = useState(1)
  const n = POSTS.length

  // Passo entre cards (largura + espaco) e quantos cabem por vez (1 no mobile, 2-3 no desktop)
  const measure = () => {
    const el = scroller.current
    const items = el?.children
    if (!el || !items || !items.length) return { step: 0, per: 1 }
    const first = items[0] as HTMLElement
    const step = items.length > 1 ? (items[1] as HTMLElement).offsetLeft - first.offsetLeft : el.clientWidth
    const gap = Math.max(0, step - first.offsetWidth)
    return { step: step || el.clientWidth, per: Math.max(1, Math.round((el.clientWidth + gap) / (step || el.clientWidth))) }
  }
  useEffect(() => {
    const upd = () => setPerView(measure().per)
    upd()
    window.addEventListener('resize', upd)
    return () => window.removeEventListener('resize', upd)
  }, [])

  const go = (to: number) => {
    const max = n - measure().per
    const i = to < 0 ? max : to > max ? 0 : to
    setIdx(i)
    const el = scroller.current
    if (el) el.scrollTo({ left: measure().step * i, behavior: 'smooth' })
  }
  const onScroll = () => {
    const el = scroller.current
    const { step, per } = measure()
    if (!el || !step) return
    setIdx(Math.min(n - per, Math.round(el.scrollLeft / step)))
  }

  const arrow =
    'flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-xl text-ink hover:bg-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ink'

  return (
    <section id="posts" className="section">
      <div className="container-page">
        <h2 className="section-title">Posts</h2>
        <div role="region" aria-roledescription="carrossel" aria-label="Posts do Instagram">
          <ul
            ref={scroller}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-line md:gap-6 md:rounded-none md:border-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {POSTS.map((p, i) => (
              <li
                key={i}
                className="group/post w-full shrink-0 snap-center bg-paper md:w-[calc((100%-1.5rem)/2)] md:snap-start md:overflow-hidden md:rounded-2xl md:border md:border-line md:shadow-[0_8px_24px_-14px_rgb(30_60_140/.18)] md:transition md:duration-300 md:hover:-translate-y-1 md:hover:border-tech/40 md:hover:shadow-[0_18px_36px_-16px_rgb(30_60_140/.3)] lg:w-[calc((100%-3rem)/3)]"
                aria-label={`Post ${i + 1} de ${n}`}
                aria-hidden={i < idx || i >= idx + perView}
              >
                <img
                  src={p.image}
                  alt={p.caption}
                  loading="lazy"
                  className="aspect-square w-full bg-line object-cover md:transition md:duration-500 md:group-hover/post:scale-[1.03]"
                />
                <p className="px-4 pt-3 text-sm text-body md:min-h-[5.5rem] md:px-5 md:pt-4 md:leading-relaxed">{p.caption}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={i >= idx && i < idx + perView ? 0 : -1}
                  className="inline-block px-4 pt-1 pb-4 md:px-5 md:pb-5 text-xs font-semibold tracking-widest text-ink uppercase underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  Ver mais
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <button type="button" onClick={() => go(idx - 1)} aria-label="Post anterior" className={arrow}>
              &#8249;
            </button>
            <p className="text-xs tracking-widest text-muted" aria-live="polite">
              {perView > 1 ? `${idx + 1}–${Math.min(n, idx + perView)} / ${n}` : `${idx + 1}/${n}`}
            </p>
            <button type="button" onClick={() => go(idx + 1)} aria-label="Próximo post" className={arrow}>
              &#8250;
            </button>
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            <a
              href={SOCIALS[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-ink"
            >
              {SOCIALS[0].handle}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
