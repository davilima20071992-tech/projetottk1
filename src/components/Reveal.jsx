import { useEffect, useRef, useState } from 'react'

/**
 * Revela o elemento suavemente quando ele entra na área visível da tela.
 * Respeita `prefers-reduced-motion` (definido no CSS).
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 4)}` : ''

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${delayClass} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
