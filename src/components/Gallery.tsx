import { useCallback, useEffect, useRef, useState } from 'react'
import { GALLERY } from '../lib/data'

const navBtn =
  'flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white'

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const n = GALLERY.length

  const close = useCallback(() => {
    setOpen(null)
    lastFocus.current?.focus()
  }, [])
  const step = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + n) % n)), [n])

  const isOpen = open !== null
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, close, step])

  return (
    <section id="galeria" className="section">
      <div className="container-page">
        <h2 className="section-title">Galeria</h2>
        <ul className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 md:mt-0 md:h-[30rem] md:grid-cols-4 md:grid-rows-2 md:gap-4 lg:h-[38rem]">
          {GALLERY.map((g, i) => (
            <li key={i} className={i === 0 ? 'md:col-span-2 md:row-span-2' : n === 3 ? 'md:col-span-2' : i === n - 1 && n % 3 === 1 ? 'col-span-2 md:col-span-2' : ''}>
              <button
                type="button"
                onClick={(e) => {
                  lastFocus.current = e.currentTarget
                  setOpen(i)
                }}
                aria-label={`Ampliar foto ${i + 1} de ${n}`}
                className="group block aspect-square w-full overflow-hidden rounded-lg bg-line md:aspect-auto md:h-full md:rounded-2xl md:shadow-[0_12px_30px_-18px_rgb(30_60_140/.4)] md:transition-shadow md:hover:shadow-[0_22px_44px_-18px_rgb(30_60_140/.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${open + 1} de ${n}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            ref={closeBtn}
            type="button"
            onClick={close}
            aria-label="Fechar"
            className={`absolute top-4 right-4 ${navBtn}`}
          >
            &times;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Foto anterior"
            className={`absolute left-3 ${navBtn}`}
          >
            &#8249;
          </button>
          <img
            src={GALLERY[open].full}
            alt={GALLERY[open].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Próxima foto"
            className={`absolute right-3 ${navBtn}`}
          >
            &#8250;
          </button>
          <p className="absolute bottom-4 text-xs tracking-widest text-white/70" aria-live="polite">
            {open + 1}/{n}
          </p>
        </div>
      )}
    </section>
  )
}
