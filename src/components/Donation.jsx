import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { donation } from '../data/content'
import { waLink } from '../config/site'

export default function Donation() {
  return (
    <section id="doacoes" className="section bg-cream-2/70" aria-labelledby="doacoes-title">
      <div className="container-x">
        <SectionHeading
          id="doacoes-title"
          eyebrow={donation.eyebrow}
          title={donation.title}
          intro={donation.intro}
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div className="flex flex-col gap-6">
            <Reveal>
              <figure className="relative overflow-hidden rounded-[1.75rem] border border-line">
                <img
                  src={donation.image}
                  alt={donation.imageAlt}
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
                <figcaption className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_24px_50px_-30px_rgba(46,64,52,0.6)] backdrop-blur">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-olive/15 text-forest">
                    <Icon name="heart" className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-forest">
                    {donation.badge}
                  </span>
                </figcaption>
              </figure>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {donation.ways.map((w, i) => (
                <Reveal key={w.title} delay={i + 1} className="card h-full p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-olive/12 text-forest">
                    <Icon name={w.icon || 'heart'} className="h-5 w-5" />
                  </span>
                  <p className="mt-3 font-display text-base leading-tight text-forest-900">
                    {w.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.text}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={2} className="card flex flex-col p-7 sm:p-8">
            <h3 className="text-xl text-forest-900">{donation.needsTitle}</h3>
            <ul className="mt-5 space-y-3">
              {donation.needs.map((n) => (
                <li key={n} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-olive-600" />
                  {n}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-dashed border-olive/40 bg-olive-50/70 p-5">
              <p className="flex items-center gap-2 font-semibold text-forest">
                <Icon name="gift" className="h-4 w-4 shrink-0" />
                {donation.pixTitle}
              </p>
              <p className="mt-3 rounded-lg bg-white px-4 py-3 text-center font-mono text-base font-bold tracking-wide text-forest-900 shadow-sm">
                {donation.pixKey}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{donation.pixNote}</p>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted">{donation.note}</p>

            <div className="mt-6 pt-1">
              <a
                href={waLink('doacao')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                {donation.cta}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
