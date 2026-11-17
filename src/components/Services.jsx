import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/content'
import { waLink, scrollTo } from '../config/site'

export default function Services() {
  const list = services.filter((s) => s.enabled)

  return (
    <section id="servicos" className="section" aria-labelledby="servicos-title">
      <div className="container-x">
        <SectionHeading
          id="servicos-title"
          eyebrow="Modalidades de cuidado"
          title="Cuidado que se adapta a cada momento"
          intro="Cada pessoa chega com uma história e uma necessidade diferente. Conheça as modalidades e fale com a nossa equipe para entender qual delas faz sentido para o seu familiar."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {list.map((s, i) => (
            <Reveal
              as="article"
              key={s.id}
              delay={(i % 4) + 1}
              className="card card-hover flex flex-col overflow-hidden p-0"
            >
              {s.image && (
                <img
                  src={s.image}
                  alt={s.imageAlt || ''}
                  width="640"
                  height="420"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-olive/12 text-forest">
                  <Icon name={s.icon || 'leaf'} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-1 text-sm font-semibold text-olive-600">{s.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{s.description}</p>

                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {s.benefits.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[0.83rem] leading-snug text-muted">
                      <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-olive-600" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink('service', { topic: s.topic || s.title })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-forest transition hover:gap-3"
                >
                  Quero saber mais
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-center text-muted">
            Em breve apresentaremos as modalidades de cuidado. Fale conosco para tirar dúvidas.
          </p>
        )}

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-muted">
          Quer ajudar de outra forma?{' '}
          <a
            href="#doacoes"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('doacoes')
            }}
            className="font-bold text-forest underline-offset-2 hover:underline"
          >
            Faça uma doação
          </a>{' '}
          e sustente o dia a dia de quem mora aqui.
        </p>
      </div>
    </section>
  )
}
