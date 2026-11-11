import { useEffect, useRef, useState } from 'react'
import { POSTS, SOCIALS } from '../lib/data'

export default function Posts() {
  const [idx, setIdx] = useState(0)
  const scroller = useRef<HTMLUListElement>(null)
  const n = POSTS.length
  // desktop (md+): 2 posts por vez; mobile: 1 por vez
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const mq = matchMedia('(min-width: 768px)')
    const sync = () => setPerView(mq.matches ? 2 : 1)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const go = (to: number) => {
    const last = Math.floor((n - 1) / perView) * perView
    const i = to < 0 ? last : to > n - 1 ? 0 : to
    setIdx(i)
    const el = scroller.current
    const target = el?.children[i] as HTMLElement | undefined
    if (el && target) el.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
  }
  const onScroll = () => {
    const el = scroller.current
    if (!el || !el.clientWidth || el.children.length < 2) return
    const stride = (el.children[1] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft
    const item = Math.min(n - 1, Math.round(el.scrollLeft / Math.max(1, stride)))
    setIdx(Math.round(item / perView) * perView)
  }
  const visible = (i: number) => i >= idx && i < idx + perView

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
            className="relative flex snap-x snap-mandatory overflow-x-auto rounded-3xl border border-line md:gap-4 md:rounded-none md:border-0 md:pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {POSTS.map((p, i) => (
              <li
                key={i}
                className="w-full shrink-0 snap-center bg-paper md:w-[calc(50%-0.5rem)] md:snap-start md:overflow-hidden md:rounded-3xl md:border md:border-line md:shadow-[0_12px_30px_-18px_rgb(30_60_140/.3)]"
                aria-label={`Post ${i + 1} de ${n}`}
                aria-hidden={!visible(i)}
              >
                <img src={p.image} alt={p.caption} loading="lazy" className="aspect-square w-full bg-line object-cover" />
                <p className="px-4 pt-3 text-sm text-body md:px-6 md:pt-4">{p.caption}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={visible(i) ? 0 : -1}
                  className="inline-block px-4 pt-1 pb-4 text-xs font-semibold tracking-widest text-ink uppercase underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink md:px-6 md:pb-5"
                >
                  Ver mais
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <button type="button" onClick={() => go(idx - perView)} aria-label="Post anterior" className={arrow}>
              &#8249;
            </button>
            <button type="button" onClick={() => go(idx + perView)} aria-label="Próximo post" className={arrow}>
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
