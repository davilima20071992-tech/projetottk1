# Lar Bom Samaritano — Site Institucional

Site institucional completo e funcional para um residencial sênior (casa de repouso), com foco em
**conversão para WhatsApp e agendamento de visitas**.

Stack: **Vite + React 18 + Tailwind CSS v4** — leve, rápido e sem servidor de backend obrigatório.

---

## ▶️ Como rodar (para você testar)

> Requisito: Node.js 18+ instalado (https://nodejs.org).

```powershell
npm install        # primeira vez apenas
npm run dev        # modo desenvolvimento (http://localhost:5173)
npm run build      # gera a versão final na pasta dist/
npm start          # serve a pasta dist/ em http://localhost:3000
```

**Atalho no Windows:** dê dois cliques em **`INICIAR.bat`** — ele faz o build e abre o site em
`http://localhost:3000`.

---

## 🚀 Como publicar

1. `npm run build` → gera a pasta **`dist/`** (tudo pronto, caminhos relativos).
2. Envie **o conteúdo da pasta `dist/`** para o servidor (FTP/cPanel/Hostinger etc.).
   - Se a hospedagem tiver Node, pode rodar `node servidor.js` no lugar do Apache/nginx.
3. **Antes de publicar**, preencha os dados reais (lista abaixo).

---

## ✏️ O que você PRECISA alterar antes de publicar

### 1. `src/config/site.js` — dados de contato (⚠️ obrigatório)

| Campo | Valor atual (placeholder) |
|---|---|
| `name`, `tagline` | `Lar Bom Samaritano` / `Cuidar é a nossa vocação` |
| `whatsapp` | `5511900000000` → **substitua pelo WhatsApp real** (só números, com 55+DDD) |
| `whatsappDisplay`, `phoneDisplay`, `phoneLink` | telefones de exemplo — **não são exibidos no site** (botões de WhatsApp continuam funcionando) |
| `email` | `contato@exemplo.com.br` |
| `address.*` | endereço completo — **hoje com endereço fictício de exemplo** (troque pelos dados reais antes de publicar) |
| `address.mapsQuery` | endereço para o botão "Como chegar" |
| `address.mapsEmbedUrl` | **embed do Google Maps** — hoje aponta para o endereço fictício de exemplo (interface em pt-BR); gere um novo em Compartilhar › Incorporar um mapa quando trocar o endereço real |
| `hours.*` | visitas: `Segunda a sexta, das 09:00 às 17:00` (vazio em `hours.whatsapp` oculta essa linha) |
| `url` | URL definitiva do site (SEO, Open Graph, sitemap) |
| `instagram/facebook/youtube` | URLs das redes — deixe `''` para ocultar |
| `formEndpoint` | opcional: URL do Formspree/Basin. **Vazio = os formulários abrem o WhatsApp com a mensagem pronta** (funciona sem servidor) |
| `legalName`, `cnpj` | razão social e CNPJ (rodapé) |

### 2. `index.html` — SEO (⚠️ obrigatório)

- `<title>`, `meta description`, `canonical`, Open Graph e Twitter.
- JSON-LD (dados estruturados `LocalBusiness`): telefone, endereço e horário.

### 3. `public/sitemap.xml` e `public/robots.txt`

- Troque `https://seusite.com.br/` pela URL real.

### 4. `src/data/content.js` — conteúdo das seções

- **Equipe** (`team.members`): nomes, formações e registros estão **vazios de propósito** —
  nada foi inventado. Preencha com os dados reais; enquanto vazio, o site exibe um convite
  para conhecer a equipe pessoalmente.
- **Documentação** (`documents.items`): números de AVCB, alvará, habite-se etc. estão como
  `[placeholders]`. Substitua pelos números reais ou remova o item (`enabled: false`).
- **Depoimentos**: `site.testimonials` (em `site.js`) está **vazio de propósito** — nenhum
  depoimento foi inventado. Formato:
  `{ id, name, relation, text, rating: 1-5, photo: '' }`
- **Diferenciais e serviços**: use `enabled: false` para ocultar o que ainda não for confirmado.
- **FAQ**: respostas são editáveis — revise antes de publicar.
- **Horários da rotina** (`routine.moments`): ajuste conforme a realidade do residencial.
- **Doações** (`donation`, no fim do arquivo): textos da seção "Faça uma doação".
  ⚠️ A `pixKey` está como `[Chave Pix do lar]` (placeholder) — **troque pela chave real**
  ou remova o bloco Pix antes de publicar. As imagens `doacao-maos.jpg` e
  `doacao-coracao.jpg` são ilustrativas (Pexels) e podem ser substituídas.

### 5. Fotos

As fotos atuais são imagens reais (Pexels, uso livre) e devem ser **substituídas pelas fotos
reais do residencial**. Troque os arquivos em `public/images/` mantendo os nomes:

```
hero-casal.jpg          sobre-casa.jpg
servico-moradia.jpg     servico-temporada.jpg
servico-posoperatorio.jpg  servico-assistencia.jpg
estrutura-fachada.jpg   estrutura-quarto.jpg   estrutura-banheiro.jpg
estrutura-sala.jpg      estrutura-refeitorio.jpg estrutura-jardim.jpg
estrutura-descanso.jpg  estrutura-atividades.jpg
momento-cafe.jpg        momento-atividade.jpg
momento-lazer.jpg       momento-descanso.jpg
doacao-maos.jpg         doacao-coracao.jpg
```

---

## 📁 Estrutura

```
├── index.html              SEO, Open Graph, JSON-LD
├── package.json
├── vite.config.js          build com caminhos relativos (portátil)
├── servidor.js             servidor estático sem dependências
├── INICIAR.bat             build + site no ar com 1 clique
├── public/
│   ├── favicon.svg
│   ├── robots.txt, sitemap.xml
│   └── images/             fotos do site
└── src/
    ├── main.jsx / App.jsx  monta as 15 seções
    ├── index.css           design system (paleta, tipografia, animações)
    ├── config/site.js      ⭐ dados editáveis (contato, SEO, formulários)
    ├── data/content.js     ⭐ textos e conteúdo de cada seção
    └── components/         Header, Hero, About, Services, Structure (galeria
                            com lightbox), Donation (doações), Routine, Team,
                            Differentials, Testimonials, Documents, Location
                            (mapa), Faq, Contact (2 formulários), FinalCta,
                            Footer, WhatsAppFab, Icon, Reveal, Logo,
                            SectionHeading
```

## ⚙️ Funcionalidades

- Header fixo com menu responsivo (hambúrguer), CTA "Agendar uma visita" e botão "Doar"
- **Campanha de doações em toda a página**: seção dedicada (Pix, itens e lista de
  necessidades), banner na galeria, CTAs no topo, nos formulários, no FAQ, no rodapé e
  na chamada final
- Botão flutuante do WhatsApp em **todas** as telas, com mensagens pré-configuradas por assunto
- Galeria da estrutura com lightbox (clique, setas do teclado, Esc)
- FAQ em acordeão
- **2 formulários funcionais**: solicitar visita + fale conosco
  (enviam por WhatsApp com mensagem pronta, ou por endpoint como Formspree se configurado)
- Mapa do Google (embed) + "Como chegar"
- Animações suaves de rolagem (respeitam `prefers-reduced-motion`)
- Acessibilidade: navegação por teclado, foco visível, labels, alt real das imagens
- SEO: títulos, meta, JSON-LD LocalBusiness, robots.txt e sitemap.xml
- Auto-hospedagem de fontes (Fraunces + Manrope) e imagens locais — sem dependência externa
