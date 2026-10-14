export const WHATSAPP_NUMBER = '5541984007678'
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
  'Olá, Kaique! Vim pelo seu site e gostaria de mais informações.',
)}`

export const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/kaiquemorais.leiloes', handle: '@kaiquemorais.leiloes' },
  { name: 'WhatsApp', href: WHATSAPP_URL, handle: '(41) 98400-7678' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kaiquemoraisleiloeseairbnbexpert', handle: 'Kaique Morais' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@kaiquemorais.leiloes', handle: '@kaiquemorais.leiloes' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1CSJFmw1a3/', handle: 'Kaique Morais' },
] as const

export const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Contato', href: '#contato' },
] as const

export const HIGHLIGHTS = [
  { title: 'Comunidade ELITE', text: 'Membro da maior comunidade de arrematantes do Brasil.' },
  { title: 'Duas frentes estratégicas', text: 'Leilões de imóveis e gestão de Airbnb em um só parceiro.' },
  { title: 'Foco em segurança', text: 'Análise de riscos e de documentação antes de qualquer lance.' },
  { title: 'Rentabilidade', text: 'Decisões orientadas a retorno, do investimento à operação.' },
] as const

export const AUCTION_ITEMS = [
  'Identificação de oportunidades seguras',
  'Análise de riscos do imóvel e do processo',
  'Avaliação de documentação e matrícula',
  'Condução de todo o processo com confiança',
]

export const AIRBNB_ITEMS = [
  'Otimização de anúncios',
  'Precificação estratégica',
  'Atendimento aos hóspedes',
  'Gestão operacional completa',
  'Aumento da taxa de ocupação',
]

export const STEPS = [
  { n: '01', title: 'Conversa inicial', text: 'Entendo seu perfil, objetivo e capital disponível.' },
  { n: '02', title: 'Análise estratégica', text: 'Mapeio oportunidades, riscos e a documentação envolvida.' },
  { n: '03', title: 'Execução', text: 'Conduzo o processo, do lance à gestão do imóvel.' },
  { n: '04', title: 'Resultado', text: 'Acompanhamos a rentabilidade e buscamos o próximo passo.' },
]

export const INTERESTS = ['Assessoria em Leilões', 'Gestão de Airbnb', 'Sistema de Gestão', 'Outro assunto'] as const
