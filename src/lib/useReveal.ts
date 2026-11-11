import { useEffect } from 'react'

const SELECTOR = [
  'main .section-title',
  'main .section-lead',
  'main .card',
  'main .card-soft',
  'main li',
  'main iframe',
  'main .reveal',
].join(',')

const clamp = (n: number) => Math.max(0, Math.min(1, n))
const expo = (n: number) => (n >= 1 ? 1 : n <= 0 ? 0 : 1 - Math.pow(2, -10 * n))

/**
 * Movimento ligado à rolagem (inspirado no press kit da Rikaya): cada bloco
 * entra com fade + deslocamento + leve desfoque e some suavemente ao sair do topo.
 * Também faz o parallax da foto do hero e a barra de progresso de rolagem.
 */
export function useReveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const all = Array.from(new Set(document.querySelectorAll<HTMLElement>(SELECTOR))).filter(
      (el) => !el.closest('#inicio'),
    )
    // evita animar um item dentro de outro já animado (opacidade acumulada)
    const els = all.filter((el) => !all.some((o) => o !== el && o.contains(el)))
    const stagger = new Map<HTMLElement, number>()
    els.forEach((el) => {
      const i = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0
      stagger.set(el, Math.min(Math.max(i, 0), 2))
    })

    const values = new Map<HTMLElement, number>()
    const bar = document.getElementById('scroll-progress')
    const parallax = document.querySelector<HTMLElement>('[data-parallax]')
    let raf = 0
    let last = performance.now()

    const tick = (now: number) => {
      raf = 0
      const h = window.innerHeight
      const dt = Math.min(64, now - last)
      last = now
      let pending = false

      for (const el of els) {
        const r = el.getBoundingClientRect()
        const delay = (stagger.get(el) ?? 0) * h * 0.035
        const entry = clamp((h - r.top - delay) / Math.max(1, h * 0.22))
        const exit = clamp(r.bottom / Math.max(1, h * 0.12))
        const target = Math.min(expo(entry), expo(exit))
        const prev = values.get(el) ?? target
        let v = prev + (target - prev) * (1 - Math.exp(-dt / 110))
        if (Math.abs(v - target) < 0.0005) v = target
        else pending = true
        values.set(el, v)
        if (v >= 1) {
          el.style.opacity = ''
          el.style.translate = ''
          el.style.filter = ''
        } else {
          el.style.opacity = String(0.15 + 0.85 * v)
          el.style.translate = `0 ${(1 - v) * 16}px`
          el.style.filter = `blur(${(1 - v) * 3}px)`
        }
      }

      const y = window.scrollY
      if (parallax && y < h * 1.5) parallax.style.translate = `0 ${y * 0.08}px`
      if (bar) {
        const max = document.documentElement.scrollHeight - h
        bar.style.transform = `scaleX(${max > 0 ? clamp(y / max) : 0})`
      }

      if (pending) raf = requestAnimationFrame(tick)
    }

    const schedule = () => {
      if (!raf) {
        last = performance.now()
        raf = requestAnimationFrame(tick)
      }
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
