import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { routine } from '../data/content'

export default function Routine() {
  return (
    <section id="atividades" className="section bg-cream-2/70" aria-labelledby="rotina-title">
      <div className="container-x">
        <SectionHeading
          id="rotina-title"
          eyebrow={routine.eyebrow}
          title={routine.title}
          intro={routine.intro}
          align="center"
        />

        <ol className="timeline mt-14 space-y-8">
          {routine.moments.map((m, i) => (
            <Reveal
              as="li"
              key={m.time}
              delay={(i % 4) + 1}
              className="timeline-item grid gap-x-8 gap-y-1 pl-9 sm:grid-cols-[8.5rem_1fr] sm:pl-0"
            >
              <span className="timeline-dot" aria-hidden="true" />
              <div className="sm:text-right">
                <span className="timeline-time">{m.time}</span>
              </div>
              <div className="timeline-body border-b border-line pb-8 sm:pl-4">
                <h3 className="text-lg">{m.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        {routine.gallery?.length > 0 && (
          <div className="mt-14">
            <Reveal>
              <h3 className="text-center text-2xl">Momentos do dia a dia</h3>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {routine.gallery.map((g, i) => (
                <Reveal key={g.image} delay={(i % 4) + 1}>
                  <img
                    src={g.image}
                    alt={g.alt}
                    width="600"
                    height="450"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
