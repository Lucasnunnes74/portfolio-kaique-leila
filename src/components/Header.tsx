import { useEffect, useState } from 'react'
import { NAV } from '../lib/data'
import { Close, Menu } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-paper/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="text-sm font-medium tracking-[0.25em] text-ink uppercase"
          onClick={() => setOpen(false)}
        >
          Kaique Morais
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted transition hover:text-ink">
              {n.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-body"
          >
            Contato
          </a>
        </nav>

        <button
          className="-mr-2 rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-base text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
