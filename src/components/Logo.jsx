import { site } from '../config/site'

/**
 * Logotipo do residencial.
 * Para trocar a marca, altere `site.name` e `site.tagline` em src/config/site.js
 * e substitua o SVG em public/favicon.svg.
 */
export default function Logo({ className = '', compact = false, light = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
          light ? 'bg-white/12 ring-1 ring-white/25' : 'bg-forest ring-1 ring-forest/10'
        }`}
      >
        <svg viewBox="0 0 64 64" className="h-6 w-6" aria-hidden="true">
          <path
            d="M32 14.5c6.4 4.6 12.8 6.2 16.5 6.6v12.2c0 9.1-7.1 15.4-16.5 18.6-9.4-3.2-16.5-9.5-16.5-18.6V21.1c3.7-.4 10.1-2 16.5-6.6z"
            fill="none"
            stroke={light ? '#EFE6D8' : '#EFE6D8'}
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M32 43.6c-3.9-3.4-6.6-7-6.6-11.1 0-3.4 2.3-5.9 5.2-5.9 1.5 0 2.6.7 3.4 1.8.8-1.1 1.9-1.8 3.4-1.8 2.9 0 5.2 2.5 5.2 5.9 0 4.1-2.7 7.7-6.6 11.1z"
            fill="#7E8F66"
          />
        </svg>
      </span>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[1.02rem] tracking-tight ${
              light ? 'text-white' : 'text-forest-900'
            }`}
          >
            {site.name}
          </span>
          <span
            className={`mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
              light ? 'text-white/60' : 'text-olive-600'
            }`}
          >
            {site.tagline}
          </span>
        </span>
      )}
    </span>
  )
}
