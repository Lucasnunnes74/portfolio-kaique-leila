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

  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="text-xs font-medium tracking-[0.3em] text-muted uppercase">Contato</p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Vamos potencializar o retorno do seu <span className="font-semibold">patrimônio</span>
          </h2>
          <p className="mt-5 max-w-lg text-muted">
            Busca orientação especializada? Preencha o formulário e eu entro em contato. Se preferir, chame direto no
            WhatsApp.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition hover:bg-body"
          >
            <SOCIAL_ICONS.WhatsApp className="h-5 w-5" /> Chamar no WhatsApp
          </a>

          <ul className="mt-10 space-y-3">
            {SOCIALS.filter((s) => s.name !== 'WhatsApp').map((s) => {
              const Icon = SOCIAL_ICONS[s.name]
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-line px-4 py-3 transition hover:border-ink"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-ink transition group-hover:bg-ink group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-ink">{s.name}</span>
                      <span className="block truncate text-xs text-muted">{s.handle}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="reveal rounded-2xl border border-line bg-soft p-6 sm:p-9">
          {status === 'success' ? (
            <div className="flex h-full min-h-96 flex-col items-center justify-center text-center" role="status">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">Mensagem enviada!</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">Obrigado pelo contato. Retornarei o mais breve possível.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-medium text-ink hover:underline">
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
              <h3 className="text-xl font-semibold text-ink">Envie sua mensagem</h3>

              <div>
                <label htmlFor="nome" className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase">Nome</label>
                <input id="nome" name="nome" required minLength={2} autoComplete="name" placeholder="Seu nome completo" className={field} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefone" className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase">WhatsApp</label>
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
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase">E-mail</label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="voce@email.com" className={field} />
                </div>
              </div>

              <div>
                <label htmlFor="interesse" className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase">Tenho interesse em</label>
                <select id="interesse" name="interesse" required defaultValue="" className={field}>
                  <option value="" disabled>Selecione uma opção</option>
                  {INTERESTS.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-xs font-medium tracking-wide text-muted uppercase">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={4} required minLength={10} placeholder="Conte um pouco sobre o que você procura..." className={`${field} resize-y`} />
              </div>

              {/* honeypot anti-spam: invisível para humanos */}
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

              {status === 'error' && (
                <p role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error} Você pode falar direto pelo WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition hover:bg-body disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando...' : (<>Enviar mensagem <Arrow className="h-5 w-5 transition group-hover:translate-x-1" /></>)}
              </button>
              <p className="text-center text-xs text-muted">Seus dados são usados apenas para retornar o seu contato.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
