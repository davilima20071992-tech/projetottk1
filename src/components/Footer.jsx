import Icon from './Icon'
import Logo from './Logo'
import { nav, footer } from '../data/content'
import { site, waLink, mapsLink, scrollTo } from '../config/site'

const SOCIALS = [
  { key: 'instagram', label: 'Instagram', icon: 'instagram' },
  { key: 'facebook', label: 'Facebook', icon: 'facebook' },
  { key: 'youtube', label: 'YouTube', icon: 'youtube' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const footerNav = [...nav, { label: 'Doações', href: 'doacoes' }]
  const go = (id) => (e) => {
    e.preventDefault()
    scrollTo(id)
  }

  return (
    <footer className="bg-forest-900 text-white/75">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{site.shortDescription}</p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.filter((s) => site[s.key]).map((s) => (
                <a
                  key={s.key}
                  href={site[s.key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-olive hover:bg-white/10 hover:text-white"
                >
                  <Icon name={s.icon} className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={footer.navTitle}>
            <h3 className="text-base text-white">{footer.navTitle}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a href={`#${item.href}`} onClick={go(item.href)} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-base text-white">{footer.contactTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  {site.address.full}
                </a>
              </li>
              {site.email && (
                <li className="flex items-start gap-2.5">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  <a href={`mailto:${site.email}`} className="break-all transition hover:text-white">
                    {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-base text-white">{footer.hoursTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                <span>
                  <strong className="block font-semibold text-white">Visitas</strong>
                  {site.hours.visiting}
                </span>
              </li>
              {site.hours.whatsapp && (
                <li className="flex items-start gap-2.5">
                  <Icon name="chat" className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  <span>
                    <strong className="block font-semibold text-white">WhatsApp</strong>
                    {site.hours.whatsapp}
                  </span>
                </li>
              )}
            </ul>

            <a
              href={waLink('doacao')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 w-full text-sm"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Faça uma doação
            </a>
            <a
              href="#doacoes"
              onClick={go('doacoes')}
              className="btn mt-3 w-full border border-white/25 text-sm text-white hover:bg-white/10"
            >
              <Icon name="heart" className="h-4 w-4" />
              Fazer uma doação
            </a>
            <p className="mt-4 text-xs leading-relaxed text-white/55">
              Sua doação ajuda a manter e a renovar esta casa para quem mora aqui.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.legalName || site.name}
            {site.cnpj ? ` · CNPJ ${site.cnpj}` : ''}. Todos os direitos reservados.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
