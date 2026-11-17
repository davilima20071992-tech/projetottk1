import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { site, waLink, scrollTo } from '../config/site'

function Stars({ rating = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Icon
          key={n}
          name="star"
          className={`h-4 w-4 ${n <= rating ? 'text-clay' : 'text-line'}`}
          filled={n <= rating}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const list = site.testimonials || []

  return (
    <section id="depoimentos" className="section" aria-labelledby="depoimentos-title">
      <div className="container-x">
        <SectionHeading
          id="depoimentos-title"
          eyebrow="Depoimentos"
          title="O que dizem as famílias que confiaram no nosso cuidado"
          intro="Valorizamos a honestidade: só publicamos depoimentos reais e autorizados pelas famílias."
          align="center"
        />

        {list.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((t, i) => (
              <Reveal as="figure" key={t.id || i} delay={(i % 3) + 1} className="card flex h-full flex-col p-7">
                <Icon name="quote" className="h-7 w-7 text-olive/60" />
                <blockquote className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-muted">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-olive/12 font-display text-forest">
                    {t.photo ? (
                      <img src={t.photo} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                      t.name?.charAt(0)
                    )}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{t.name}</span>
                    <span className="block text-xs text-muted">{t.relation}</span>
                  </span>
                  <span className="ml-auto">
                    <Stars rating={t.rating} />
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-12 max-w-2xl rounded-[1.75rem] border border-dashed border-sand-2 bg-cream-2/60 p-8 text-center sm:p-10">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white text-olive-600">
              <Icon name="quote" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl">Espaço reservado para depoimentos reais</h3>
            <p className="lead mt-3">
              Nada aqui é inventado. Assim que uma família autorizar, o depoimento dela passa a
              aparecer neste espaço. Enquanto isso, você pode conhecer a casa pessoalmente.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={waLink('doacao')} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon name="whatsapp" className="h-4 w-4" />
                Faça uma doação
              </a>
              <a href="#estrutura" className="btn btn-soft">
                Ver a estrutura
              </a>
              <a href="#doacoes" onClick={(e) => { e.preventDefault(); scrollTo('doacoes') }} className="btn btn-outline">
                <Icon name="heart" className="h-4 w-4" />
                Quero doar
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
