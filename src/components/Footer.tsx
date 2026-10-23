import { NAV, SOCIALS, WHATSAPP_URL } from '../lib/data'
import { FaWhatsapp, SOCIAL_ICONS } from './Icons'

export default function Footer() {
  return (
    <>
      <footer className="bg-ink py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] uppercase">Kaique Morais</p>
            <p className="mt-2 text-xs tracking-wide text-white/50">Leilões & Airbnb Expert</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Rodapé">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/60 transition hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.name]
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:bg-white hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Kaique Morais. Todos os direitos reservados.
        </p>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </>
  )
}
