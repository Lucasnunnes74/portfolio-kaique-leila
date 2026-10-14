import { useState, type FormEvent } from 'react'
import { INTERESTS, SOCIALS, WHATSAPP_URL } from '../lib/data'
import { submitLead } from '../lib/n8n'
import { Arrow, Check, SOCIAL_ICONS } from './Icons'

type Status = 'idle' | 'sending' | 'success' | 'error'

const field =
  'w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-white placeholder:text-zinc-500 transition focus:border-gold focus:ring-2 focus:ring-gold/30 focus:outline-none'

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
    <section id="contato" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="absolute top-1/2 left-0 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <p className="text-sm font-semibold tracking-widest text-gold uppercase">Contato</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-5xl">
            Vamos potencializar o retorno do seu <span className="text-gold">patrimônio</span>
          </h2>
          <p className="mt-5 max-w-lg text-zinc-400">
            Busca orientação especializada? Preencha o formulário e eu entro em contato. Se preferir, chame direto no
            WhatsApp.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 font-semibold text-black transition hover:scale-[1.03]"
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
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-panel px-4 py-3 transition hover:border-gold/50"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-black">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{s.name}</span>
                      <span className="block truncate text-xs text-zinc-400">{s.handle}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="reveal rounded-3xl border border-gold/20 bg-panel p-6 shadow-2xl shadow-black/50 sm:p-9">
          {status === 'success' ? (
            <div className="flex h-full min-h-96 flex-col items-center justify-center text-center" role="status">
              <span className="bg-gold-gradient flex h-16 w-16 items-center justify-center rounded-full text-black">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold text-white">Mensagem enviada!</h3>
              <p className="mt-2 max-w-xs text-zinc-400">Obrigado pelo contato. Retornarei o mais breve possível.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 font-semibold text-gold hover:underline">
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
              <h3 className="font-display text-2xl font-bold text-white">Envie sua mensagem</h3>

              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-zinc-300">Nome</label>
                <input id="nome" name="nome" required minLength={2} autoComplete="name" placeholder="Seu nome completo" className={field} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-zinc-300">WhatsApp</label>
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
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">E-mail</label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="voce@email.com" className={field} />
                </div>
              </div>

              <div>
                <label htmlFor="interesse" className="mb-1.5 block text-sm font-medium text-zinc-300">Tenho interesse em</label>
                <select id="interesse" name="interesse" required defaultValue="" className={field}>
                  <option value="" disabled>Selecione uma opção</option>
                  {INTERESTS.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-zinc-300">Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows={4} required minLength={10} placeholder="Conte um pouco sobre o que você procura..." className={`${field} resize-y`} />
              </div>

              {/* honeypot anti-spam: invisível para humanos */}
              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

              {status === 'error' && (
                <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {error} Você pode falar direto pelo WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-gold-gradient group flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando...' : (<>Enviar mensagem <Arrow className="h-5 w-5 transition group-hover:translate-x-1" /></>)}
              </button>
              <p className="text-center text-xs text-zinc-500">Seus dados são usados apenas para retornar o seu contato.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
