import { useEffect, useState } from 'react'
import Icon from './Icon'
import { waLink } from '../config/site'

/**
 * Botão flutuante do WhatsApp — presente em todas as telas.
 * A etiqueta muda após o usuário rolar um pouco a página.
 */
export default function WhatsAppFab() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={waLink('doacao')}
      target="_blank"
      rel="noopener noreferrer"
      className="fab-wa fab-pulse group"
      aria-label="Fazer uma doação pelo WhatsApp"
    >
      <span className="relative grid h-6 w-6 place-items-center">
        <Icon name="whatsapp" className="h-6 w-6" />
      </span>
      <span className="fab-label">{scrolled ? 'Faça uma doação' : 'Doar agora'}</span>
    </a>
  )
}
