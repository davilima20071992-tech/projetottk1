import { useMemo, useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services, donation } from '../data/content'
import { site, waMessage, scrollTo } from '../config/site'

/* ----------------------------- utilitários ----------------------------- */

function formatPhone(value) {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function waCustom(text) {
  if (!site.whatsapp) return null
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}

function buildMessage(header, data, labels) {
  const lines = Object.entries(data)
    .filter(([, v]) => String(v || '').trim())
    .map(([k, v]) => `• ${labels[k] || k}: ${v}`)
  return [header, '', ...lines].join('\n')
}

/* ------------------------------- formulário ---------------------------- */

const SERVICE_OPTIONS = [
  ...services.filter((s) => s.enabled).map((s) => s.title),
  'Ainda não sei / preciso de orientação',
]

function Form({ variant }) {
  const isVisit = variant === 'visit'

  const initial = useMemo(
    () => ({
      nome: '',
      telefone: '',
      idoso: '',
      servico: '',
      horario: '',
      mensagem: '',
      company: '', // honeypot anti-spam
    }),
    [],
  )

  const [data, setData] = useState(initial)
  const [errors, setErrors] = useState({})
  const [stage, setStage] = useState('idle') // idle | sending | success | error

  const labels = {
    nome: 'Nome do responsável',
    telefone: 'Telefone / WhatsApp',
    idoso: 'Nome do idoso (opcional)',
    servico: 'Serviço de interesse',
    horario: 'Melhor dia e horário para a visita',
    mensagem: 'Mensagem',
  }

  const set = (key) => (e) => {
    const value = key === 'telefone' ? formatPhone(e.target.value) : e.target.value
    setData((d) => ({ ...d, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  function validate() {
    const er = {}
    if (!data.nome.trim()) er.nome = 'Informe o seu nome.'
    const digits = data.telefone.replace(/\D/g, '')
    if (digits.length < 10) er.telefone = 'Informe um telefone válido com DDD.'
    if (data.company) er.company = 'Erro de verificação.'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  async function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStage('sending')
    const header = waMessage(isVisit ? 'visitForm' : 'contactForm')
    const payload = {
      formulario: isVisit ? 'Solicitação de visita' : 'Doar agora',
      nome: data.nome,
      telefone: data.telefone,
      idoso: data.idoso,
      servico: data.servico,
      horario: data.horario,
      mensagem: data.mensagem,
    }

    if (site.formEndpoint) {
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error('Falha no envio')
        setStage('success')
      } catch {
        setStage('error')
      }
      return
    }

    // Sem endpoint: envia pelo WhatsApp com a mensagem já preenchida.
    const url = waCustom(buildMessage(header, payload, labels))
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
      setStage('success')
    } else {
      setStage('error')
    }
  }

  if (stage === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[1.5rem] border border-olive/40 bg-olive-50 p-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-forest text-white">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="text-xl">
          {site.formEndpoint
            ? 'Mensagem enviada com sucesso!'
            : 'Abrimos o WhatsApp para você!'}
        </h3>
        <p className="text-sm leading-relaxed text-muted max-w-sm">
          {site.formEndpoint
            ? 'Recebemos a sua solicitação e entraremos em contato em breve. Obrigado pela confiança.'
            : 'Revise a mensagem pronta e toque em enviar. Assim que recebermos, respondemos com carinho.'}
        </p>
        <button
          type="button"
          className="btn btn-soft"
          onClick={() => {
            setData(initial)
            setStage('idle')
          }}
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex h-full flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor={`${variant}-nome`}>
            Nome do responsável *
          </label>
          <input
            id={`${variant}-nome`}
            name="nome"
            type="text"
            autoComplete="name"
            className={`field ${errors.nome ? 'has-error' : ''}`}
            placeholder="Seu nome completo"
            value={data.nome}
            onChange={set('nome')}
            aria-invalid={Boolean(errors.nome)}
          />
          {errors.nome && <p className="error-text">{errors.nome}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor={`${variant}-telefone`}>
            Telefone / WhatsApp *
          </label>
          <input
            id={`${variant}-telefone`}
            name="telefone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={`field ${errors.telefone ? 'has-error' : ''}`}
            placeholder="(00) 00000-0000"
            value={data.telefone}
            onChange={set('telefone')}
            aria-invalid={Boolean(errors.telefone)}
          />
          {errors.telefone && <p className="error-text">{errors.telefone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor={`${variant}-idoso`}>
            Nome do idoso <span className="font-normal text-muted">(opcional)</span>
          </label>
          <input
            id={`${variant}-idoso`}
            name="idoso"
            type="text"
            className="field"
            placeholder="Como podemos chamá-lo(a)?"
            value={data.idoso}
            onChange={set('idoso')}
          />
        </div>

        <div>
          <label className="field-label" htmlFor={`${variant}-servico`}>
            Serviço de interesse
          </label>
          <select id={`${variant}-servico`} name="servico" className="field" value={data.servico} onChange={set('servico')}>
            <option value="">Selecione (ou deixe em branco)</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isVisit && (
        <div>
          <label className="field-label" htmlFor={`${variant}-horario`}>
            Melhor dia e horário para a visita <span className="font-normal text-muted">(opcional)</span>
          </label>
          <input
            id={`${variant}-horario`}
            name="horario"
            type="text"
            className="field"
            placeholder="Ex.: sábado de manhã, terça à tarde…"
            value={data.horario}
            onChange={set('horario')}
          />
        </div>
      )}

      <div>
        <label className="field-label" htmlFor={`${variant}-mensagem`}>
          Mensagem <span className="font-normal text-muted">(opcional)</span>
        </label>
        <textarea
          id={`${variant}-mensagem`}
          name="mensagem"
          rows={4}
          className="field"
          placeholder="Conte um pouco sobre o que você precisa. Não é necessário enviar informações médicas."
          value={data.mensagem}
          onChange={set('mensagem')}
        />
      </div>

      {/* honeypot anti-spam — invisível para pessoas */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        value={data.company}
        onChange={set('company')}
      />

      <p className="form-note">
        Ao enviar, você concorda em receber o nosso contato. Não solicitamos informações médicas
        sensíveis por este formulário.
        {site.formEndpoint ? '' : ' A mensagem será aberta no WhatsApp para você confirmar.'}
      </p>

      {stage === 'error' && (
        <p className="error-text" role="alert">
          Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-lg mt-auto w-full" disabled={stage === 'sending'}>
        {stage === 'sending' ? (
          'Enviando…'
        ) : isVisit ? (
          <>
            <Icon name="calendar" className="h-4 w-4" />
            Solicitar visita
          </>
        ) : (
          <>
            <Icon name="send" className="h-4 w-4" />
            Enviar mensagem
          </>
        )}
      </button>
    </form>
  )
}

/* -------------------------------- seção -------------------------------- */

export default function Contact() {
  return (
    <section id="contato" className="section" aria-labelledby="contato-title">
      <div className="container-x">
        <SectionHeading
          id="contato-title"
          eyebrow="Contato"
          title="Vamos conversar sobre o cuidado de quem você ama"
          intro="Preencha o formulário e abrimos o WhatsApp com a mensagem pronta — ou fale conosco quando quiser. Respondemos com calma, sem compromisso."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="card flex flex-col p-7 sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-white">
              <Icon name="calendar" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl">Solicitar uma visita</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Conheça a casa por inteiro, sem compromisso. Escolha o melhor dia e horário para você
              e sua família.
            </p>
            <div className="mt-6 flex-1">
              <Form variant="visit" />
            </div>
          </Reveal>

          <Reveal delay={2} className="card flex flex-col p-7 sm:p-9">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-olive text-white">
              <Icon name="chat" className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-2xl">Doar agora</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Dúvidas sobre valores, modalidades ou documentação? Envie a sua mensagem e
              retornamos o mais breve possível.
            </p>
            <div className="mt-6 flex-1">
              <Form variant="contact" />
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={2}
          className="mt-6 flex flex-col items-center justify-between gap-6 rounded-[1.75rem] border border-olive/30 bg-olive-50/70 p-7 sm:p-9 lg:flex-row"
        >
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:text-left">
            <img
              src="images/doacao-coracao.jpg"
              alt="Mãos segurando um coração de pelúcia vermelho"
              width="1200"
              height="800"
              loading="lazy"
              decoding="async"
              className="h-24 w-32 shrink-0 rounded-2xl border border-line object-cover"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl text-forest-900">{donation.contactTitle}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {donation.contactText}
              </p>
            </div>
          </div>
          <a
            href="#doacoes"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('doacoes')
            }}
            className="btn btn-primary shrink-0"
          >
            <Icon name="heart" className="h-4 w-4" />
            Conhecer as formas de doar
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
