import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { faq } from '../data/content'
import { waLink, scrollTo } from '../config/site'

export default function Faq() {
  const [open, setOpen] = useState(0)
  const items = faq.items

  return (
    <section id="faq" className="section bg-cream-2/70" aria-labelledby="faq-title">
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} intro={faq.intro} />
          <Reveal delay={2} className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={waLink('general')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Icon name="whatsapp" className="h-4 w-4" />
              Tirar uma dúvida
            </a>
            <a href="#doacoes" onClick={(e) => { e.preventDefault(); scrollTo('doacoes') }} className="btn btn-outline">
              <Icon name="heart" className="h-4 w-4" />
              Quero doar
            </a>
          </Reveal>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.id} delay={(i % 4) + 1}>
                <div className={`card overflow-hidden ${isOpen ? 'border-olive/50' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                    >
                      <span className="font-display text-[1.02rem] leading-snug text-forest-900">
                        {item.question}
                      </span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                          isOpen ? 'bg-forest text-white' : 'bg-olive/12 text-forest'
                        }`}
                      >
                        <Icon name="plus" className={`accordion-icon h-4 w-4 ${isOpen ? 'is-open' : ''}`} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${item.id}`}
                    className={`accordion-panel ${isOpen ? 'is-open' : ''}`}
                    role="region"
                  >
                    <div>
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
