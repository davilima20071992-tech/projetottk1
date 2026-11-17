import { useEffect, useState } from 'react'
import Icon from './Icon'
import Logo from './Logo'
import { nav } from '../data/content'
import { waLink, scrollTo } from '../config/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    scrollTo(id)
  }

  return (
    <header className={`header-shell sticky top-0 z-50 ${stuck || open ? 'is-stuck' : ''}`}>
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <a href="#inicio" onClick={go('inicio')} className="shrink-0" aria-label="Ir para o início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <a key={item.href} href={`#${item.href}`} onClick={go(item.href)} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#doacoes"
            onClick={go('doacoes')}
            className="btn btn-soft hidden text-[0.85rem] lg:inline-flex"
          >
            <Icon name="heart" className="h-4 w-4" />
            Doar
          </a>
          <a
            href={waLink('doacao')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden text-[0.85rem] sm:inline-flex"
          >
            Faça uma doação
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`burger lg:hidden ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={`mobile-panel bg-cream border-t border-line lg:hidden ${open ? 'is-open' : ''}`}>
        <nav className="container-x flex flex-col py-4" aria-label="Navegação móvel">
          {nav.map((item) => (
            <a key={item.href} href={`#${item.href}`} onClick={go(item.href)} className="mobile-link">
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4 pb-3">
            <a
              href={waLink('doacao')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary justify-center"
              onClick={() => setOpen(false)}
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Faça uma doação
            </a>
            <a
              href="#doacoes"
              className="btn btn-soft justify-center"
              onClick={go('doacoes')}
            >
              <Icon name="heart" className="h-4 w-4" />
              Quero doar
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
