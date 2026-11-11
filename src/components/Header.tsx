import { useEffect, useState } from 'react'
import { NAV, SOCIALS } from '../lib/data'
import { Close, Menu, SOCIAL_ICONS } from './Icons'

const DESKTOP_NAV = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Vídeos', href: '#videos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Posts', href: '#posts' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-paper/90 backdrop-blur md:shadow-[0_8px_24px_-16px_rgb(30_60_140/.25)]' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-[0.25em] text-ink uppercase"
          onClick={() => setOpen(false)}
        >
          Kaique Morais
        </a>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7" aria-label="Principal">
          {DESKTOP_NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={
                n.href === '#contato'
                  ? 'rounded-full bg-ink px-5 py-2.5 text-[11px] font-semibold tracking-[0.15em] text-white uppercase transition hover:-translate-y-0.5 hover:bg-tech hover:shadow-[0_10px_22px_-8px_rgb(59_111_245/.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech'
                  : 'relative py-1 text-[11px] font-medium tracking-[0.15em] text-muted uppercase transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-tech after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech'
              }
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1.5 lg:flex">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.name]
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
          <button
            className="-mr-2 rounded-lg p-2 text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-page border-t border-line pt-2 pb-6 md:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-sm font-medium tracking-[0.15em] text-ink uppercase"
            >
              {n.label}
            </a>
          ))}
          <div className="mt-5 flex justify-center gap-2">
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
        </nav>
      )}
    </header>
  )
}
