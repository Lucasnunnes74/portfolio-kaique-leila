import { WHATSAPP_URL } from '../lib/data'
import { FaWhatsapp } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  )
}
