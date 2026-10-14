import { NAV, SOCIALS, WHATSAPP_URL } from '../lib/data'
import { SOCIAL_ICONS, FaWhatsapp } from './Icons'

export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 bg-coal py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-2xl font-semibold text-white">
              Kaique <span className="text-gold">Morais</span>
            </p>
            <p className="mt-1 text-sm text-zinc-500">Leilões & Airbnb Expert</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Rodapé">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-zinc-400 transition hover:text-gold">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition hover:border-gold hover:bg-gold hover:text-black"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Kaique Morais. Todos os direitos reservados.
        </p>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-lg shadow-black/50 transition hover:scale-110 sm:right-6 sm:bottom-6"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </>
  )
}
