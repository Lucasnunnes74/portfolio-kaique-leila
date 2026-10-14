# Portfólio — Kaique Morais (Leilões & Airbnb Expert)

React + Vite + TypeScript + Tailwind CSS v4.

## Rodar

```bash
npm install
cp .env.example .env   # preencha VITE_N8N_WEBHOOK_URL
npm run dev
npm run build
```

## Formulário → n8n

1. No n8n, crie um workflow com o node **Webhook** (método `POST`, path ex.: `contato-kaique`).
2. Copie a *Production URL* para `VITE_N8N_WEBHOOK_URL` no `.env` (e nas variáveis do deploy).
3. Habilite CORS no webhook (Options → Allowed Origins) com o domínio do site.
4. Conecte o node a WhatsApp / e-mail / planilha, etc.

Payload JSON enviado:

```json
{ "nome": "", "telefone": "(41) 99999-9999", "email": "", "interesse": "Assessoria em Leilões",
  "mensagem": "", "origem": "portfolio-kaique-morais", "pagina": "https://...", "enviadoEm": "ISO-8601" }
```

Há um campo honeypot anti-spam (`website`); preenchido, o envio é descartado no front.

## Conteúdo

Textos, links e redes sociais ficam em `src/lib/data.ts`. Imagens em `public/img/`
(baixadas do keepo.bio do cliente).
