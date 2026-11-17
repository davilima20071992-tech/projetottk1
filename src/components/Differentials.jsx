import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { differentials } from '../data/content'

export default function Differentials() {
  const items = differentials.items.filter((d) => d.enabled)

  return (
    <section id="diferenciais" className="section bg-forest text-white" aria-labelledby="dif-title">
      <div className="container-x">
        <SectionHeading
          id="dif-title"
          eyebrow={differentials.eyebrow}
          title={differentials.title}
          intro={differentials.intro}
          align="center"
          light
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {items.map((d, i) => (
            <Reveal
              key={d.id}
              delay={(i % 4) + 1}
              className="rounded-2xl border border-white/12 bg-white/6 p-5 transition hover:bg-white/10 sm:p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-olive/25 text-white">
                <Icon name={d.icon || 'leaf'} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base leading-snug text-white sm:text-lg">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
