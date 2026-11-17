import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { documents } from '../data/content'
import { waLink } from '../config/site'

export default function Documents() {
  const items = documents.items.filter((d) => d.enabled)

  return (
    <section id="documentacao" className="section bg-cream-2/70" aria-labelledby="docs-title">
      <div className="container-x">
        <SectionHeading
          id="docs-title"
          eyebrow={documents.eyebrow}
          title={documents.title}
          intro={documents.intro}
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => (
            <Reveal key={d.id} delay={(i % 3) + 1} className="card flex flex-col p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-olive/12 text-forest">
                  <Icon name={d.icon || 'file'} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base leading-snug">{d.title}</h3>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-olive-600">{d.number}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{d.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-[1.5rem] border border-line bg-white p-7 text-center sm:flex-row sm:text-left">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest text-white">
            <Icon name="lock" className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="font-display text-lg text-forest-900">Quer conferir a documentação completa?</p>
            <p className="mt-1 text-sm text-muted">
              Solicite as licenças e certidões do estabelecimento — transmitimos tudo com total
              transparência.
            </p>
          </div>
          <a
            href={waLink('documents')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shrink-0"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Solicitar documentos
          </a>
        </Reveal>
      </div>
    </section>
  )
}
