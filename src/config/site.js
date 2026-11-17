/* ==========================================================================
   CONFIGURAÇÃO CENTRAL DO SITE
   --------------------------------------------------------------------------
   Edite APENAS este arquivo para atualizar nome, telefone, WhatsApp,
   endereço, redes sociais e horários. Todo o site é atualizado automaticamente.

   ⚠️  NÃO publice com os valores de exemplo abaixo. Substitua pelos dados
   reais do estabelecimento antes de colocar o site no ar.
   ========================================================================== */

export const site = {
  /* ------------------------- IDENTIDADE ------------------------- */
  // Nome do residencial (aparece no logotipo, título, rodapé e SEO)
  name: 'Lar Bom Samaritano',
  // Frase curta ao lado/abaixo do nome
  tagline: 'Cuidar é a nossa vocação',
  // Razão social e CNPJ — deixe vazio se preferir não exibir
  legalName: '',
  cnpj: '',

  // Descrição curta usada no rodapé e no SEO
  shortDescription:
    'Um residencial sênior pensado para acolher, cuidar e proporcionar qualidade de vida — com segurança, respeito e atenção individualizada. Com o apoio de doadores, mantemos e renovamos esta casa para quem mora aqui.',

  /* ------------------------- CONTATO ---------------------------
     whatsapp: apenas números, com código do país (55) e DDD. Ex.: 5511987654321
     Deixe a string vazia ('') para desativar os botões de WhatsApp.
     Observação: os números abaixo NÃO são exibidos no site (a pedido);
     servem apenas para montar os botões/links.                      */
  whatsapp: '5511900000000',
  whatsappDisplay: '(11) 90000-0000',

  // Telefone fixo / celular para ligações (formato exibido e formato de link)
  phoneDisplay: '(11) 3000-0000',
  phoneLink: '+551130000000',

  email: 'contato@exemplo.com.br',

  // Redes sociais — cole a URL completa. Deixe '' para ocultar o ícone.
  instagram: '',
  facebook: '',
  youtube: '',

  /* ------------------------- ENDEREÇO --------------------------
     ⚠️ ENDEREÇO DE EXEMPLO (fictício) — troque pelos dados reais
     antes de publicar o site.                                    */
  address: {
    line1: 'Rua das Acácias, 450',
    line2: 'Jardim Sol Nascente, Campinas - SP',
    cep: '13040-000',
    // Texto completo exibido em uma linha (localização e rodapé)
    full: 'Rua das Acácias, 450 — Jardim Sol Nascente, Campinas/SP, 13040-000',
    // Consulta usada no botão "Como chegar" do Google Maps
    // Ex.: 'Rua das Flores, 123, Salvador - BA'
    mapsQuery: 'Rua das Acácias, 450, Campinas - SP',
    // Embed do Google Maps (Compartilhar > Incorporar um mapa > copiar o src)
    // Enquanto estiver vazio, o site exibe um mapa ilustrativo.
    // ⚠️ Embed de EXEMPLO com o endereço fictício — troque pelo endereço real
    // antes de publicar (ou cole o embed gerado pelo Google Maps).
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=Rua%20das%20Ac%C3%A1cias%2C%20450%2C%20Campinas%20-%20SP&z=15&ie=UTF8&iwloc=&output=embed&hl=pt-BR',
    // Informações adicionais
    parking: '[Informação sobre estacionamento, se houver]',
  },

  /* ------------------------- HORÁRIOS -------------------------- */
  hours: {
    visiting: 'Segunda a sexta, das 09:00 às 17:00',
    // Deixe '' para ocultar a linha de horário do WhatsApp.
    whatsapp: '',
  },

  /* ------------------------- FORMULÁRIOS -----------------------
     formEndpoint: opcional. Cole uma URL de serviço de formulários
     (Formspree, Basin, Getform etc.). Ex.: 'https://formspree.io/f/xxxxxxx'
     Se ficar vazio, os formulários enviam a mensagem automaticamente
     pelo WhatsApp do estabelecimento (funciona sem servidor).        */
  formEndpoint: '',

  /* ------------------------- SEO / DOMÍNIO --------------------- */
  // URL definitiva do site (usada em canonical, Open Graph e sitemap)
  url: 'https://seusite.com.br/',

  /* ------------------------- CONTEÚDO EDITÁVEL ----------------- */
  // Depoimentos reais de famílias. Enquanto a lista estiver vazia,
  // o site exibe uma mensagem de espaço reservado (nada é inventado).
  // Formato: { id, name, relation, text, rating (1-5), photo }
  testimonials: [],

  /* ------------------------------------------------------------
     Mensagens pré-configuradas do WhatsApp.
     {site} é substituído automaticamente pelo nome do residencial.
     ------------------------------------------------------------ */
  messages: {
    general: 'Olá! Vim pelo site do {site} e gostaria de receber mais informações.',
    visit: 'Olá! Vim pelo site do {site} e gostaria de agendar uma visita ao residencial.',
    structure: 'Olá! Vim pelo site do {site} e gostaria de conhecer a estrutura do residencial.',
    service: 'Olá! Vim pelo site do {site} e gostaria de saber mais sobre {topic}.',
    documents: 'Olá! Vim pelo site do {site} e gostaria de receber as licenças e documentação do estabelecimento.',
    doacao: 'Olá! Vim pelo site do {site} e gostaria de fazer uma doação para o lar.',
    route: 'Olá! Vim pelo site do {site} e gostaria de saber como chegar ao residencial.',
    visitForm: 'Olá! Vim pelo site do {site} e gostaria de agendar uma visita.',
    contactForm: 'Olá! Vim pelo site do {site} e gostaria de falar com a equipe.',
  },
}

/* ==========================================================================
   HELPERS — não é necessário alterar nada abaixo
   ========================================================================== */

/**
 * Monta a mensagem pré-configurada do WhatsApp.
 * @param {string} key  Chave de site.messages (ex.: 'visit', 'service')
 * @param {object} vars Valores para substituir {chaves} na mensagem
 */
export function waMessage(key = 'general', vars = {}) {
  let text = site.messages[key] || site.messages.general || ''
  text = text.replace('{site}', site.name)
  for (const [k, v] of Object.entries(vars)) {
    text = text.replace(`{${k}}`, String(v))
  }
  return text
}

/** Monta um link de WhatsApp com mensagem pré-configurada. */
export function waLink(key = 'general', vars = {}) {
  const text = waMessage(key, vars)
  if (!site.whatsapp) return '#contato'
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}

/** Link de telefone (tel:). */
export function telLink() {
  return `tel:${site.phoneLink.replace(/[^\d+]/g, '')}`
}

/** Link do Google Maps para "Como chegar". */
export function mapsLink() {
  const query = site.address.mapsQuery || site.address.full
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/** Navegação suave entre as seções. */
export function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#${id}`)
}
