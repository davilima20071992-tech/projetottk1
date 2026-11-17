import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { team } from '../data/content'
import { waLink } from '../config/site'

const ROLE_ICONS = {
  medico: 'heart',
  enfermeiro: 'shield',
  tecnico: 'activity',
  cuidador: 'users',
  fisioterapeuta: 'activity',
  nutricionista: 'utensils',
  terapeuta: 'leaf',
}

export default function Team() {
  const members = team.members || []
  const filled = members.filter((m) => m.name)

  return (
    <section id="equipe" className="section" aria-labelledby="equipe-title">
      <div className="container-x">
        <SectionHeading
          id="equipe-title"
          eyebrow={team.eyebrow}
          title={team.title}
          intro={team.intro}
          align="center"
        />

        {filled.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filled.map((m, i) => (
              <Reveal as="article" key={m.id} delay={(i % 4) + 1} className="card card-hover p-7 text-center">
                <span className="mx-auto grid h-20 w-20 place-items-center overflow-hidden rounded-full bg-olive/12 text-forest">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <Icon name={ROLE_ICONS[m.id] || 'users'} className="h-8 w-8" />
                  )}
                </span>
                <h3 className="mt-5 text-lg">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold text-olive-600">{m.role}</p>
                {m.specialty && <p className="mt-1 text-sm text-muted">{m.specialty}</p>}
                {m.formation && <p className="mt-3 text-sm text-muted">{m.formation}</p>}
                {m.registration && (
                  <p className="mt-2 text-xs font-semibold tracking-wide text-forest-700">{m.registration}</p>
                )}
                {m.bio && <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>}
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] border border-line bg-white p-8 text-center sm:p-12">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-olive/12 text-forest">
              <Icon name="users" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-2xl">Conheça a nossa equipe pessoalmente</h3>
            <p className="lead mt-4">
              Estamos preparando a apresentação dos nossos profissionais — nenhum nome ou formação
              será exibido antes de ser confirmado. Na sua visita, apresentamos quem cuidará do seu
              familiar.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2">
              {members.map((m) => (
                <li
                  key={m.id}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream px-3.5 py-1.5 text-xs font-semibold text-forest-700"
                >
                  <Icon name={ROLE_ICONS[m.id] || 'users'} className="h-3.5 w-3.5 text-olive-600" />
                  {m.role}
                </li>
              ))}
            </ul>
            <a
              href={waLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-8"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Falar com a equipe
            </a>
          </Reveal>
        )}
      </div>
    </section>
  )
}
