import { useEffect } from 'react'

/** Adiciona `is-visible` aos elementos `.reveal` ao entrarem na viewport. */
export function useReveal() {
  useEffect(() => {
    // anima automaticamente títulos, cartões e itens de grade, com atraso escalonado
    document
      .querySelectorAll('main .section-title, main .section-lead, main .card, main .card-soft, main .photo-grid > *, main iframe')
      .forEach((el, i) => {
        el.classList.add('reveal')
        ;(el as HTMLElement).style.setProperty('--d', `${(i % 4) * 80}ms`)
      })
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
