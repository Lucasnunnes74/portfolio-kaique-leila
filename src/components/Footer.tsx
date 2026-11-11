import { LIVON_URL, SOCIALS } from '../lib/data'
import { SOCIAL_ICONS } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft py-12">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-ink uppercase">Kaique Morais</p>
          <p className="mt-2 text-xs tracking-wide text-muted">Leilões &amp; Airbnb Expert</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
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

        <div className="flex flex-col gap-6 md:gap-2">
        <p className="text-xs text-muted">© {new Date().getFullYear()} Kaique Morais. Todos os direitos reservados.</p>
        <p className="text-xs text-muted">
          Desenvolvido por{' '}
          <a href={LIVON_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline-offset-4 hover:text-tech hover:underline">
            Livon Solutions
          </a>
        </p>
        </div>
      </div>
      <nav aria-label="Rodapé" className="container-page mt-10 hidden flex-wrap justify-center gap-x-8 gap-y-2 border-t border-line pt-8 md:flex">
        {[['Sobre', '#sobre'], ['Vídeos', '#videos'], ['Galeria', '#galeria'], ['Posts', '#posts'], ['Serviços', '#servicos'], ['Contato', '#contato']].map(([l, h]) => (
          <a key={h} href={h} className="text-[11px] font-medium tracking-[0.15em] text-muted uppercase transition hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech">
            {l}
          </a>
        ))}
      </nav>
    </footer>
  )
}
