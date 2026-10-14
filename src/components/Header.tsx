import { useEffect, useState } from 'react'
import { NAV } from '../lib/data'
import { Close, Menu } from './Icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/img/kaique.webp" alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-gold/60" />
          <span className="font-display text-lg font-semibold leading-none tracking-wide text-white">
            Kaique <span className="text-gold">Morais</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-zinc-300 transition hover:text-gold">
              {n.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-gold-gradient rounded-full px-5 py-2 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Falar com Kaique
          </a>
        </nav>

        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-6 pt-2 lg:hidden" aria-label="Mobile">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-base font-medium text-zinc-200"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="bg-gold-gradient mt-4 block rounded-full py-3 text-center font-semibold text-black"
          >
            Falar com Kaique
          </a>
        </nav>
      )}
    </header>
  )
}
