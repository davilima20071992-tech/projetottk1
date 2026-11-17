import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about } from '../data/content'
import { waLink } from '../config/site'

const VALUE_ICONS = ['heart', 'shield', 'users']

export default function About() {
  return (
    <section id="sobre" className="section bg-cream-2/70" aria-labelledby="sobre-title">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <figure className="relative">
            <img
              src={about.image}
              alt={about.imageAlt}
              width="900"
              height="700"
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full rounded-[2rem] object-cover"
            />
            <figcaption className="absolute -bottom-6 right-4 max-w-[16rem] rounded-2xl bg-forest px-5 py-4 text-sm leading-snug text-white shadow-[0_30px_60px_-35px_rgba(27,38,32,0.9)] sm:right-6">
              <Icon name="quote" className="mb-2 h-5 w-5 text-olive" />
              {about.highlights[0]?.title}
              <span className="mt-1 block text-white/70">{about.highlights[0]?.text}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <SectionHeading id="sobre-title" eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-5 text-[1.02rem] leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <Reveal key={p.slice(0, 28)} delay={1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {about.highlights.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i + 1} className="card flex items-start gap-3 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-olive/12 text-forest">
                  <Icon name={VALUE_ICONS[i] || 'leaf'} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink">{v.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={2}>
            <a href={waLink('service', { topic: 'cuidado residencial' })} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-9">
              <Icon name="whatsapp" className="h-4 w-4" />
              Quero conhecer o cuidado
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
