export interface Lead {
  nome: string
  telefone: string
  email: string
  interesse: string
  mensagem: string
  website: string // honeypot: deve chegar vazio
}

const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined

/** Envia o lead para o webhook do n8n (POST JSON). */
export async function submitLead(lead: Lead): Promise<void> {
  // Honeypot preenchido = bot. Finge sucesso e não envia.
  if (lead.website) return

  if (!WEBHOOK_URL) {
    throw new Error('Formulário ainda não configurado (VITE_N8N_WEBHOOK_URL).')
  }

  const fields = { nome: lead.nome, telefone: lead.telefone, email: lead.email, interesse: lead.interesse, mensagem: lead.mensagem }
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15_000)

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...fields,
        origem: 'portfolio-kaique-morais',
        pagina: window.location.href,
        enviadoEm: new Date().toISOString(),
      }),
      signal: controller.signal,
    })
    if (!res.ok) throw new Error(`Falha ao enviar (${res.status}).`)
  } catch (err) {
    if (err instanceof DOMException && err.name === 'AbortError') {
      throw new Error('Tempo esgotado ao enviar.', { cause: err })
    }
    if (err instanceof TypeError) throw new Error('Não foi possível conectar ao servidor.', { cause: err })
    throw err
  } finally {
    clearTimeout(timeout)
  }
}
