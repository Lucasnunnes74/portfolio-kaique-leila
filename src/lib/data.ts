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

/* Fotos reais do Kaique (arquivos em /public/img). */
export const GALLERY = [
  { src: '/img/leiloes.jpg', full: '/img/leiloes.jpg', alt: 'Assessoria em leilões de imóveis' },
  { src: '/img/airbnb.jpg', full: '/img/airbnb.jpg', alt: 'Gestão especializada de Airbnb' },
  { src: '/img/sistema.jpg', full: '/img/sistema.jpg', alt: 'Sistema de gestão para assessoria em leilões' },
]

/* Reels reais do Instagram dele (o ID é a parte final do link /reel/ID/). */
export const VIDEOS = [
  { reelId: 'DWWKdfSjjgx', title: '"Leilão de imóveis não vale a pena…" Será? — Bastidores da Arrematação' },
  { reelId: 'Dem3U2tSBXg', title: 'Análise de riscos e decisões em leilões de imóveis' },
]

/* Posts reais do Instagram (imagens salvas em /public/img/posts). */
export const POSTS = [
  { image: '/img/posts/p1.jpg', href: 'https://www.instagram.com/p/DWYvhmXDsIX/', caption: 'Bastidores da Arrematação: as próximas histórias serão baseadas nas dúvidas de vocês.' },
  { image: '/img/posts/p2.jpg', href: 'https://www.instagram.com/reel/DWWKdfSjjgx/', caption: '"Leilão de imóveis não vale a pena…" Será? A realidade de quem colocou dinheiro de verdade em jogo.' },
  { image: '/img/posts/p3.jpg', href: 'https://www.instagram.com/p/DWUB7DHDSHo/', caption: 'Um vídeo que pode mudar a forma como você enxerga leilões de imóveis, construído com vocês.' },
  { image: '/img/posts/p4.jpg', href: 'https://www.instagram.com/p/DeaZmxQjDPM/', caption: 'Não precisamos construir tudo sozinhos: o valor de aprender e crescer em comunidade.' },
  { image: '/img/posts/p5.jpg', href: 'https://www.instagram.com/reel/Dem3U2tSBXg/', caption: 'Analisar riscos e tomar boas decisões em leilões, construindo relações de confiança.' },
  { image: '/img/posts/p6.jpg', href: 'https://www.instagram.com/p/DeKHebXILeb/', caption: 'Leilão vai além dos descontos: exige conhecimento, estratégia, relacionamento e responsabilidade.' },
  { image: '/img/posts/p7.jpg', href: 'https://www.instagram.com/p/DeMh_Yoy8DH/', caption: 'Experiência no mercado de leilões e agradecimento aos parceiros dessa jornada.' },
  { image: '/img/posts/p8.jpg', href: 'https://www.instagram.com/p/DeGF2H1jJZt/', caption: 'Não existe fórmula única: cada imóvel, processo e investidor pede uma análise própria.' },
]

export const LIVON_URL = 'https://livonsolutions.com/'
