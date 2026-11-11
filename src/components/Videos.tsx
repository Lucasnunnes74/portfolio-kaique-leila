import { POSTS, VIDEOS } from '../lib/data'

export default function Videos() {
  return (
    <section id="videos" className="section">
      <div className="container-page">
        <h2 className="section-title">Vídeos</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {VIDEOS.map((v) => {
            const cover = POSTS.find((p) => p.href.includes(v.reelId))?.image
            return (
              <a
                key={v.reelId}
                href={`https://www.instagram.com/reel/${v.reelId}/`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Assistir no Instagram: ${v.title}`}
                className="card group block overflow-hidden !rounded-3xl !p-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  {cover && (
                    <img
                      src={cover}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink shadow-lg transition group-hover:scale-110 group-hover:bg-white">
                    <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm leading-relaxed text-body">{v.title}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
