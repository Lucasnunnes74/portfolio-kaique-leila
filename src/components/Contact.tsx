import { useState, type FormEvent } from 'react'
import { INTERESTS, SOCIALS, WHATSAPP_URL } from '../lib/data'
import { submitLead } from '../lib/n8n'
import { Arrow, Check, SOCIAL_ICONS } from './Icons'

type Status = 'idle' | 'sending' | 'success' | 'error'

const field =
  'w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-muted/70 transition focus:border-ink focus:ring-1 focus:ring-ink focus:outline-none'

function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    setError('')
    try {
      await submitLead({
        nome: String(data.get('nome') ?? '').trim(),
        telefone: phone,
        email: String(data.get('email') ?? '').trim(),
        interesse: String(data.get('interesse') ?? ''),
        mensagem: String(data.get('mensagem') ?? '').trim(),
        website: String(data.get('website') ?? ''), // honeypot
      })
      setStatus('success')
      form.reset()
      setPhone('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro inesperado.')
      setStatus('error')
    }
  }

  const label = 'mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase'
  const main = SOCIALS.filter((s) => ['WhatsApp', 'Instagram', 'LinkedIn'].includes(s.name))

  return (
    <section id="contato" className="py-14 sm:py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 md:max-w-none">
        <div className="reveal text-center">
          <h2 className="section-title !mb-3">Contato</h2>
          <p className="mt-3 text-sm text-muted">
            Busca orientação especializada? Chame direto ou preencha o formulário e eu entro em contato.
          </p>
        </div>

        <ul className="reveal mt-8 grid grid-cols-3 gap-3">
          {main.map((s) => {
            const Icon = SOCIAL_ICONS[s.name as keyof typeof SOCIAL_ICONS]
            return (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name}: ${s.handle}`}
                  className="group flex flex-col items-center gap-3 rounded-3xl border border-line bg-paper px-2 py-6 transition hover:border-ink md:hover:-translate-y-1 md:hover:border-tech/50 md:hover:shadow-[0_14px_30px_-16px_rgb(30_60_140/.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-soft text-ink transition group-hover:bg-ink group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col items-center">
                    <span className="text-xs font-medium text-ink">{s.name}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition hover:bg-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <SOCIAL_ICONS.WhatsApp className="h-5 w-5" aria-hidden="true" /> Chamar no WhatsApp
        </a>

        <div className="reveal mt-8 rounded-3xl border border-line bg-soft p-6 sm:p-8 md:shadow-[0_24px_60px_-30px_rgb(30_60_140/.3)]">
          {status === 'success' ? (
            <div className="flex min-h-72 flex-col items-center justify-center text-center" role="status">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                <Check className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">Mensagem enviada!</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">Obrigado pelo contato. Retornarei o mais breve possível.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-medium text-ink hover:underline">
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="relative space-y-4">
              <h3 className="text-center text-sm font-semibold tracking-[0.25em] text-ink uppercase">Envie sua mensagem</h3>

              <div>
                <label htmlFor="nome" className={label}>Nome</label>
                <input id="nome" name="nome" required minLength={2} autoComplete="name" placeholder="Seu nome completo" className={field} />
              </div>

              <div>
                <label htmlFor="email" className={label}>E-mail</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="voce@email.com" className={field} />
              </div>

              <div>
                <label htmlFor="telefone" className={label}>WhatsApp</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  inputMode="tel"
                  required
                  minLength={14}
                  autoComplete="tel"
                  placeholder="(41) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(maskPhone(e.target.value))}
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="interesse" className={label}>Tenho interesse em</label>
                <select id="interesse" name="interesse" required defaultValue="" className={field}>
                  <option value="" disabled>Selecione uma opção</option>
                  {INTERESTS.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className={label}>Mensagem (opcional)</label>
                <textarea id="mensagem" name="mensagem" rows={3} placeholder="Conte um pouco sobre o que você procura..." className={`${field} resize-y`} />
              </div>

              {/* honeypot anti-spam: invisível para humanos */}
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

              {status === 'error' && (
                <p role="alert" className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error} Você pode falar direto pelo WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition hover:bg-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando...' : (<>Enviar <Arrow className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" /></>)}
              </button>
              <p className="text-center text-xs text-muted">Seus dados são usados apenas para retornar o seu contato.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
