import { useEffect, useState } from 'react'

/** Tela de abertura curta: nome + linha de progresso, depois sobe e revela a página. */
export default function Intro() {
  const [done, setDone] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (done) return
    document.documentElement.style.overflow = 'hidden'
    const t = window.setTimeout(() => setDone(true), 1750)
    return () => {
      window.clearTimeout(t)
      document.documentElement.style.overflow = ''
    }
  }, [done])

  if (done) return null
  return (
    <div className="intro-splash" aria-hidden="true">
      <div className="intro-splash-inner">
        <p className="intro-splash-name">Kaique Morais</p>
        <span className="intro-splash-line" />
        <p className="intro-splash-sub">Leilões &amp; Airbnb Expert</p>
      </div>
    </div>
  )
}
