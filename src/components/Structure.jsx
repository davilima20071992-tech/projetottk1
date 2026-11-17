import { useCallback, useEffect, useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { structure, donation } from '../data/content'
import { waLink, scrollTo } from '../config/site'

export default function Structure() {
  const items = structure.gallery
  const [active, setActive] = useState(null)

  const go = (id) => (e) => {
    e.preventDefault()
    scrollTo(id)
  }

  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, close, step])

  const current = active !== null ? items[active] : null

  return (
    <section id="estrutura" className="section" aria-labelledby="estrutura-title">
      <div className="container-x">
        <SectionHeading
          id="estrutura-title"
          eyebrow={structure.eyebrow}
          title={structure.title}
          intro={structure.intro}
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {items.map((g, i) => (
            <Reveal
              key={g.id}
              delay={(i % 4) + 1}
              className={i === 0 ? 'col-span-2 lg:row-span-2' : ''}
            >
              <button
                type="button"
                className="gallery-tile group"
                onClick={() => setActive(i)}
                aria-label={`Ampliar imagem: ${g.title}`}
              >
                <img src={g.image} alt={g.alt} width="800" height="600" loading="lazy" decoding="async" />
                <span className="gallery-overlay">
                  <span className="gallery-caption">
                    <strong>{g.title}</strong>
                    {g.caption}
                  </span>
                  <span className="gallery-zoom" aria-hidden="true">
                    <Icon name="expand" className="h-4 w-4" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={1}
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[1.75rem] border border-olive/30 bg-olive-50/70 p-7 text-center sm:p-9 lg:flex-row lg:text-left"
        >
          <div className="flex flex-col items-center gap-4 lg:flex-row">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-forest shadow-[0_20px_40px_-28px_rgba(46,64,52,0.6)]">
              <Icon name="heart" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl text-forest-900">{donation.bannerTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {donation.bannerText}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href="#doacoes" onClick={go('doacoes')} className="btn btn-primary">
              <Icon name="heart" className="h-4 w-4" />
              Quero doar
            </a>
            <a
              href={waLink('doacao')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-soft"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Faça uma doação
            </a>
          </div>
        </Reveal>
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${current.title}`}
          onClick={close}
        >
          <button type="button" className="lightbox-btn top-4 right-4" onClick={close} aria-label="Fechar imagem">
            <Icon name="close" className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="lightbox-btn left-3 top-1/2 -translate-y-1/2 sm:left-6"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Imagem anterior"
          >
            <Icon name="chevronLeft" className="h-5 w-5" />
          </button>

          <figure className="m-0 text-center" onClick={(e) => e.stopPropagation()}>
            <img src={current.image} alt={current.alt} />
            <figcaption className="mt-4 text-sm text-white/80">
              <span className="font-semibold text-white">{current.title}</span>
              <span className="mx-2 opacity-50">·</span>
              {current.caption}
              <span className="ml-3 opacity-60">
                {active + 1}/{items.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox-btn right-3 top-1/2 -translate-y-1/2 sm:right-6"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Próxima imagem"
          >
            <Icon name="chevronRight" className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  )
}
