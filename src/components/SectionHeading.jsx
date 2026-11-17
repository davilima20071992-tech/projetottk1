import Reveal from './Reveal'

/**
 * Cabeçalho padrão das seções: sobretítulo, título e texto de apoio.
 */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  light = false,
  className = '',
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <Reveal>
        {eyebrow ? (
          <span className={`eyebrow ${centered ? 'justify-center' : ''} ${light ? 'text-olive-600' : ''}`}>
            {eyebrow}
          </span>
        ) : null}
      </Reveal>

      <Reveal delay={1}>
        <h2
          id={id}
          className={`mt-4 text-[2rem] leading-[1.1] sm:text-[2.4rem] md:text-[2.8rem] ${
            light ? 'text-white' : ''
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={2}>
          <p className={`lead mt-5 ${light ? 'text-white/70' : ''}`}>{intro}</p>
        </Reveal>
      ) : null}
    </div>
  )
}
