import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { site, waLink, mapsLink, scrollTo } from '../config/site'

export default function Location() {
  const { address, hours, email } = site
  const hasEmbed = Boolean(address.mapsEmbedUrl)

  return (
    <section id="localizacao" className="section" aria-labelledby="local-title">
      <div className="container-x">
        <SectionHeading
          id="local-title"
          eyebrow="Localização"
          title="Venha nos conhecer de perto"
          intro="Agende uma visita e percorra cada ambiente com calma. Estamos à disposição para receber você e sua família."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="card flex flex-col gap-6 p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-olive/12 text-forest">
                <Icon name="mapPin" className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base">Endereço</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {address.line1}
                  <br />
                  {address.line2}
                  {address.cep ? (
                    <>
                      <br />
                      {address.cep}
                    </>
                  ) : null}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-line pt-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-olive/12 text-forest">
                <Icon name="clock" className="h-5 w-5" />
              </span>
              <div className="text-sm text-muted">
                <h3 className="text-base">Atendimento</h3>
                <p className="mt-1">
                  <span className="font-semibold text-ink">Visitas:</span> {hours.visiting}
                </p>
                {hours.whatsapp && (
                  <p className="mt-1">
                    <span className="font-semibold text-ink">WhatsApp:</span> {hours.whatsapp}
                  </p>
                )}
              </div>
            </div>

            {email && (
              <div className="flex items-start gap-4 border-t border-line pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-olive/12 text-forest">
                  <Icon name="mail" className="h-5 w-5" />
                </span>
                <div className="text-sm text-muted">
                  <h3 className="text-base">Contato</h3>
                  <p className="mt-1 break-all">
                    E-mail:{' '}
                    <a className="font-semibold text-forest hover:underline" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </p>
                </div>
              </div>
            )}

            <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:flex-wrap">
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-1">
                <Icon name="mapPin" className="h-4 w-4" />
                Como chegar
              </a>
              <a
                href={waLink('doacao')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-soft flex-1"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Faça uma doação
              </a>
              <a
                href="#doacoes"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('doacoes')
                }}
                className="btn btn-outline w-full"
              >
                <Icon name="heart" className="h-4 w-4" />
                Quero fazer uma doação
              </a>
            </div>
          </Reveal>

          <Reveal delay={2} className="overflow-hidden rounded-[1.5rem] border border-line bg-cream-2 min-h-[22rem]">
            {hasEmbed ? (
              <iframe
                src={address.mapsEmbedUrl}
                title={`Mapa: ${address.full}`}
                className="h-full min-h-[22rem] w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full min-h-[22rem] flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,#f6f2ea_0%,#efe6d8_100%)] p-8 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-forest shadow-[0_20px_40px_-24px_rgba(46,64,52,0.6)]">
                  <Icon name="mapPin" className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-xl text-forest-900">Mapa será exibido aqui</p>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Cole o link de incorporação do Google Maps em{' '}
                    <code className="rounded bg-white px-1.5 py-0.5 text-xs">site.address.mapsEmbedUrl</code>{' '}
                    em <code className="rounded bg-white px-1.5 py-0.5 text-xs">src/config/site.js</code>{' '}
                    para ativar o mapa interativo.
                  </p>
                </div>
                <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Abrir no Google Maps
                </a>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
