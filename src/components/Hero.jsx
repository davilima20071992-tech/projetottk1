import Icon from './Icon'
import Reveal from './Reveal'
import { hero } from '../data/content'
import { waLink, scrollTo } from '../config/site'

/**
 * Divide o título em duas partes para destacar a segunda em verde.
 * "Um novo lar, com todo o carinho..." -> "Um novo lar," + resto.
 */
function splitTitle(title) {
  const i = title.indexOf(',')
  if (i === -1) return [title, '']
  return [title.slice(0, i + 1), title.slice(i + 1).trim()]
}

export default function Hero() {
  const [head, tail] = splitTitle(hero.title)

  return (
    <section id="inicio" className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute -top-32 -right-40 h-[28rem] w-[28rem] rounded-full bg-olive/10 blur-3xl" aria-hidden="true" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 id="hero-title" className="mt-5 text-[clamp(2.15rem,5vw,3.75rem)] leading-[1.07]">
            {head}
            {tail && (
              <>
                {' '}
                <em className="font-normal text-forest italic">{tail}</em>
              </>
            )}
          </h1>
          <p className="lead mt-6 max-w-xl">{hero.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={waLink('doacao')} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              <Icon name="whatsapp" className="h-4 w-4" />
              Faça uma doação
            </a>
            <button type="button" className="btn btn-soft btn-lg" onClick={() => scrollTo('servicos')}>
              Conhecer o cuidado
              <Icon name="arrow" className="h-4 w-4" />
            </button>
            <button type="button" className="btn btn-outline btn-lg" onClick={() => scrollTo('doacoes')}>
              <Icon name="heart" className="h-4 w-4" />
              Quero doar
            </button>
          </div>

          {hero.note && (
            <p className="mt-5 flex items-center gap-2 text-sm text-muted">
              <Icon name="check" className="h-4 w-4 text-olive-600" />
              {hero.note}
            </p>
          )}
        </Reveal>

        <Reveal delay={2}>
          <figure className="relative">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-sand/60 -z-10" aria-hidden="true" />
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width="900"
              height="1100"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_40px_90px_-50px_rgba(46,64,52,0.7)] sm:aspect-[5/5] lg:aspect-[4/5]"
            />
            <figcaption className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-[0_24px_50px_-30px_rgba(46,64,52,0.6)] backdrop-blur sm:left-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-olive/15 text-forest">
                <Icon name="heart" className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold leading-tight text-forest">
                Cuidar é a nossa vocação,
                <br />
                todos os dias
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="container-x mt-16">
        <ul className="grid gap-4 rounded-[1.75rem] border border-line bg-white p-5 sm:grid-cols-3 sm:p-7" aria-label="Destaques">
          {hero.highlights.map((h, i) => (
            <li key={h.title} className="flex items-start gap-3 sm:border-l sm:border-line sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
              <Reveal delay={i + 1} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-olive/12 text-forest">
                  <Icon name={h.icon} className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="font-display text-lg leading-tight text-forest-900">{h.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{h.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
