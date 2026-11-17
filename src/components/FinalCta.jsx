import Icon from './Icon'
import Reveal from './Reveal'
import { finalCta } from '../data/content'
import { waLink, scrollTo } from '../config/site'

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-forest py-16 text-white md:py-24" aria-labelledby="cta-title">
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-olive/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full bg-clay/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative text-center">
        <Reveal>
          <span className="eyebrow justify-center text-olive">Dê o próximo passo</span>
          <h2 id="cta-title" className="mx-auto mt-5 max-w-3xl text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] text-white">
            {finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{finalCta.text}</p>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={waLink('doacao')} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
              <Icon name="whatsapp" className="h-4 w-4" />
              Faça uma doação
            </a>
            <button type="button" className="btn btn-lg border border-white/35 text-white hover:bg-white/10" onClick={() => scrollTo('doacoes')}>
              <Icon name="heart" className="h-4 w-4" />
              Quero doar
            </button>
            <button type="button" className="btn btn-lg border border-white/35 text-white hover:bg-white/10" onClick={() => scrollTo('estrutura')}>
              Ver a estrutura
              <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>

          {finalCta.note && (
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/65">
              <Icon name="check" className="h-4 w-4 text-olive" />
              {finalCta.note}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
