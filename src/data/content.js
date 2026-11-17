/* ==========================================================================
   CONTEÚDO EDITÁVEL DO SITE
   --------------------------------------------------------------------------
   Textos, imagens, serviços, equipe, FAQ e demais blocos de conteúdo.
   Ajuste para a realidade do estabelecimento. Itens com `enabled: false`
   não são exibidos — use isso para ocultar serviços ou diferenciais que
   ainda não foram confirmados.

   IMAGENS: coloque os arquivos em public/images/ e use o caminho relativo,
   sempre começando com "images/" (ex.: 'images/quarto.jpg').
   ========================================================================== */

/* ---------------------------- NAVEGAÇÃO ---------------------------- */
export const nav = [
  { label: 'Início', href: 'inicio' },
  { label: 'Nossa estrutura', href: 'estrutura' },
  { label: 'Serviços', href: 'servicos' },
  { label: 'Nossa equipe', href: 'equipe' },
  { label: 'Atividades', href: 'atividades' },
  { label: 'Depoimentos', href: 'depoimentos' },
  { label: 'Contato', href: 'contato' },
]

/* ------------------------------ HERO ------------------------------- */
export const hero = {
  eyebrow: 'Residencial sênior',
  image: 'images/hero-casal.jpg',
  imageAlt: 'Casal de idosos sorrindo em um ambiente acolhedor e iluminado',
  title: 'Um novo lar, com todo o carinho e cuidado que a sua família merece.',
  subtitle:
    'Mais do que um residencial sênior, um lugar onde o cuidado, a segurança, o respeito e o carinho fazem parte de todos os dias.',
  note: 'Conheça nosso espaço pessoalmente, sem compromisso.',
  highlights: [
    { icon: 'heart', title: 'Atendimento humanizado', text: 'Relações próximas, nome de cada residente e tempo para ouvir.' },
    { icon: 'home', title: 'Ambiente confortável', text: 'Espaços iluminados, arejados e pensados para a terceira idade.' },
    { icon: 'users', title: 'Família sempre presente', text: 'Visitas bem-vindas e comunicação transparente com quem ama.' },
  ],
}

/* --------------------------- APRESENTAÇÃO -------------------------- */
export const about = {
  eyebrow: 'Sobre o residencial',
  title: 'Cuidar também é proporcionar qualidade de vida.',
  paragraphs: [
    'Muitas famílias chegam até nós com a mesma dúvida: “será que estou fazendo a escolha certa?”. Essa pergunta nasce do amor — e é exatamente por isso que merece uma resposta cuidadosa, sem pressa e sem julgamentos.',
    'Contar com ajuda profissional não significa deixar de cuidar de quem você ama. Significa escolher, com atenção, quem vai cuidar junto com você. A família continua presente, e agora conta com uma equipe preparada para dividir a rotina, a segurança e os pequenos momentos do dia a dia.',
    'Aqui, cada residente é tratado pelo nome. A rotina respeita o ritmo de cada pessoa, a atenção é individualizada e as portas estão sempre abertas para a família.',
    'Por trás de cada cuidado existe uma casa que precisa ser mantida e renovada. É aí que entram as doações: com o apoio de doadores, conseguimos cuidar melhor de quem mora aqui e transformar a estrutura, espaço por espaço.',
  ],
  image: 'images/sobre-casa.jpg',
  imageAlt: 'Casal de idosos sorrindo e dançando em um momento de alegria',
  highlights: [
    { title: 'Atenção individualizada', text: 'Cada residente tem o seu ritmo, as suas preferências e o seu plano de cuidado.' },
    { title: 'Segurança e tranquilidade', text: 'Ambiente preparado para a terceira idade, com acessibilidade e acompanhamento diário.' },
    { title: 'Família sempre presente', text: 'Visitas bem-vindas, comunicação transparente e portas abertas para quem ama.' },
  ],
}

/* ------------------------------ SERVIÇOS --------------------------- */
export const services = [
  {
    id: 'moradia-permanente',
    enabled: true,
    icon: 'home',
    title: 'Moradia permanente',
    subtitle: 'Uma nova casa, com rotina e convivência',
    description:
      'Para quem precisa de acompanhamento contínuo e deseja encontrar aqui companhia, segurança e uma rotina que faça sentido. O plano de cuidado é definido após uma avaliação individual, sempre em conjunto com a família.',
    benefits: [
      'Acomodação mobiliada e ambiente acolhedor',
      'Refeições ao longo do dia, com acompanhamento nutricional',
      'Rotina de atividades, convivência e momentos de lazer',
      'Comunicação frequente com a família',
    ],
    image: 'images/servico-moradia.jpg',
    imageAlt: 'Idoso em um ambiente confortável e iluminado',
    topic: 'MORADIA PERMANENTE',
  },
  {
    id: 'hospedagem-temporaria',
    enabled: true,
    icon: 'calendar',
    title: 'Hospedagem temporária',
    subtitle: 'Um período de transição, com estrutura',
    description:
      'Ideal para quando a família precisa de um tempo: viagens, férias do cuidador, replanejamento ou a espera de uma alta hospitalar. A estadia é combinada de forma transparente, sem burocracia.',
    benefits: [
      'Estadias com duração combinada com a família',
      'Mesmo padrão de cuidado e acolhimento',
      'Ambiente preparado para uma transição tranquila',
      'Retorno para casa com acompanhamento e orientação',
    ],
    image: 'images/servico-temporada.jpg',
    imageAlt: 'Dois idosos se cumprimentando em um encontro',
    topic: 'HOSPEDAGEM TEMPORÁRIA',
  },
  {
    id: 'cuidados-pos-operatorios',
    enabled: true,
    icon: 'shield',
    title: 'Cuidados pós-operatórios',
    subtitle: 'Recuperação com segurança e acompanhamento',
    description:
      'Um intervalo de cuidado entre a alta hospitalar e o retorno para casa, quando a recuperação ainda exige atenção, repouso e organização da medicação e da rotina.',
    benefits: [
      'Ambiente tranquilo para a recuperação',
      'Acompanhamento da rotina de medicação',
      'Auxílio nas atividades diárias',
      'Preparação cuidadosa para o retorno ao lar',
    ],
    image: 'images/servico-posoperatorio.jpg',
    imageAlt: 'Idoso sendo acompanhado em uma atividade do dia a dia',
    topic: 'CUIDADOS PÓS-OPERATÓRIOS',
  },
  {
    id: 'acompanhamento-assistencia',
    enabled: true,
    icon: 'heart',
    title: 'Acompanhamento e assistência',
    subtitle: 'Presença diária para o dia a dia de cada residente',
    description:
      'Apoio próximo nas atividades do cotidiano — desde o momento do banho e da alimentação até a companhia em atividades, passeios e visitas à família.',
    benefits: [
      'Auxílio nas atividades diárias, com respeito à dignidade',
      'Companhia em atividades, convivência e passeios',
      'Observação atenta e comunicação com a família',
      'Cuidado próximo, feito por pessoas e não por rotinas',
    ],
    image: 'images/servico-assistencia.jpg',
    imageAlt: 'Idosa acompanhada por uma cuidadora junto à janela',
    topic: 'ACOMPANHAMENTO E ASSISTÊNCIA',
  },
]

/* ------------------------------ ESTRUTURA -------------------------- */
export const structure = {
  eyebrow: 'Nossa estrutura',
  title: 'Estes são os espaços que precisam do seu apoio.',
  intro:
    'As imagens abaixo mostram a realidade atual do lar: estrutura antiga, ambientes que pedem reforma e poucos recursos. É para transformar cada canto desta casa que existem as doações. As fotografias são ilustrativas — substitua-as pelas imagens reais do residencial em public/images/.',
  gallery: [
    { id: 'fachada', title: 'Fachada', caption: 'Muita história nesta fachada — e uma reforma que já é necessária.', image: 'images/estrutura-fachada.jpg', alt: 'Fachada antiga do casarão com pintura desgastada' },
    { id: 'quarto', title: 'Quartos', caption: 'Queremos oferecer um descanso de verdade para cada morador.', image: 'images/estrutura-quarto.jpg', alt: 'Quarto simples com cama de madeira, cortinas e carpete antigos' },
    { id: 'banheiro', title: 'Banheiros', caption: 'Banheiros antigos que pedem adaptação e mais segurança.', image: 'images/estrutura-banheiro.jpg', alt: 'Banheiro simples e antigo com área de lavagem' },
    { id: 'sala', title: 'Salas de convivência', caption: 'Um lugar de encontro que merece ser recuperado.', image: 'images/estrutura-sala.jpg', alt: 'Sala antiga com televisor, estante e móveis de madeira' },
    { id: 'refeitorio', title: 'Refeitório', caption: 'A cozinha está esperando por uma renovação.', image: 'images/estrutura-refeitorio.jpg', alt: 'Cozinha e refeitório antigos com fogão e mesa de madeira' },
    { id: 'jardim', title: 'Jardins', caption: 'O quintal pode voltar a ser um espaço verde para todos.', image: 'images/estrutura-jardim.jpg', alt: 'Quintal simples com árvore, mesa e cadeiras' },
    { id: 'descanso', title: 'Áreas de descanso', caption: 'Cantos de silêncio que queremos deixar acolhedores.', image: 'images/estrutura-descanso.jpg', alt: 'Poltrona antiga em um canto simples da casa' },
    { id: 'atividades', title: 'Espaços de atividades', caption: 'O lugar onde haverá jogos, conversas e novas amizades.', image: 'images/estrutura-atividades.jpg', alt: 'Sala simples com mesa e cadeiras para atividades' },
  ],
}

/* ------------------------- ROTINA / ATIVIDADES --------------------- */
export const routine = {
  eyebrow: 'Atividades e rotina',
  title: 'Todos os dias têm momentos especiais.',
  intro:
    'Um exemplo do dia a dia de quem mora aqui. A rotina real é definida conforme o ritmo de cada residente — ajuste os horários e atividades abaixo conforme a realidade do residencial.',
  moments: [
    { time: '5h30', title: 'Bom dia e cuidados pessoais', text: 'Despertar respeitando o ritmo de cada pessoa, higiene assistida e cuidados de pele.' },
    { time: '7h30', title: 'Café da manhã', text: 'Refeição servida com calma, junto da equipe e dos demais residentes.' },
    { time: '9h00', title: 'Atividades físicas', text: 'Alongamento, caminhada e exercícios leves, adaptados a cada condição.' },
    { time: '10h30', title: 'Momento ao ar livre', text: 'Tempo no jardim e nas áreas externas, entre um lanche e outro.' },
    { time: '12h00', title: 'Almoço', text: 'Refeições preparadas com atenção às preferências e às orientações de cada residente.' },
    { time: '13h30', title: 'Descanso', text: 'Repouso em um ambiente tranquilo, com acompanhamento da equipe.' },
    { time: '15h00', title: 'Atividades cognitivas e lazer', text: 'Jogos, leitura, musicoterapia, artesanato, filmes e conversas.' },
    { time: '17h30', title: 'Convivência com a família', text: 'Visitas, chamadas e o fim de tarde compartilhado com quem se ama.' },
    { time: '18h30', title: 'Jantar', text: 'Uma refeição mais leve, no horário em que o corpo pede.' },
    { time: '20h00', title: 'Ceia e preparação para o descanso', text: 'Cuidados noturnos e tranquilidade para uma boa noite de sono.' },
  ],
  gallery: [
    { image: 'images/momento-cafe.jpg', alt: 'Café da manhã servido à mesa' },
    { image: 'images/momento-atividade.jpg', alt: 'Atividade acompanhada pela equipe com os residentes' },
    { image: 'images/momento-lazer.jpg', alt: 'Momento de lazer e jogos' },
    { image: 'images/momento-descanso.jpg', alt: 'Momento de descanso do residente' },
  ],
}

/* ------------------------------- EQUIPE ---------------------------- */
export const team = {
  eyebrow: 'Nossa equipe',
  title: 'Profissionais preparados. Cuidado feito com carinho.',
  intro:
    'Preencha os dados abaixo com os profissionais reais do residencial. Nenhum nome, formação ou registro foi inventado — os campos permanecem como estão até serem preenchidos.',
  members: [
    { id: 'medico', role: 'Médico', name: '', specialty: '', formation: '', registration: '', bio: '', photo: '' },
    { id: 'enfermeiro', role: 'Enfermeiro(a)', name: '', specialty: '', formation: '', registration: '', bio: '', photo: '' },
    { id: 'tecnico', role: 'Técnicos de enfermagem', name: '', specialty: '', formation: '', registration: '', bio: '', photo: '' },
    { id: 'cuidador', role: 'Cuidadores', name: '', specialty: '', formation: '', registration: '', bio: '', photo: '' },
    { id: 'fisioterapeuta', role: 'Fisioterapeuta', name: '', specialty: '', formation: '', registration: '', bio: '', photo: '' },
    { id: 'nutricionista', role: 'Nutricionista', name: '', specialty: '', formation: '', registration: '', bio: '', photo: '' },
    { id: 'terapeuta', role: 'Terapeuta ocupacional', name: '', specialty: '', formation: '', registration: '', bio: '', photo: '' },
  ],
}

/* ---------------------------- DIFERENCIAIS ------------------------- */
export const differentials = {
  eyebrow: 'Diferenciais',
  title: 'O que faz a diferença no dia a dia.',
  intro:
    'Marque como `enabled: false` em src/data/content.js os diferenciais que ainda não forem confirmados pelo estabelecimento.',
  items: [
    { id: 'humanizado', icon: 'heart', enabled: true, title: 'Atendimento humanizado', text: 'Relações próximas, nome de cada residente e tempo para ouvir.' },
    { id: 'confortavel', icon: 'home', enabled: true, title: 'Ambiente confortável', text: 'Espaços iluminados, arejados e pensados para a terceira idade.' },
    { id: 'alimentacao', icon: 'utensils', enabled: true, title: 'Alimentação adequada', text: 'Refeições preparadas com atenção às preferências e necessidades.' },
    { id: 'atividades', icon: 'activity', enabled: true, title: 'Atividades recreativas', text: 'Uma agenda viva de convivência, lazer e estímulo.' },
    { id: 'acompanhamento', icon: 'users', enabled: true, title: 'Acompanhamento profissional', text: 'Equipe presente e preparada para acompanhar cada momento.' },
    { id: 'seguranca', icon: 'shield', enabled: true, title: 'Segurança e acessibilidade', text: 'Ambiente adaptado, com atenção redobrada à prevenção de quedas.' },
    { id: 'individual', icon: 'leaf', enabled: true, title: 'Atenção individualizada', text: 'Cada pessoa com o seu ritmo, as suas escolhas e o seu cuidado.' },
    { id: 'familia', icon: 'calendar', enabled: true, title: 'Participação da família', text: 'Portas abertas, visitas bem-vindas e comunicação transparente.' },
    { id: 'doacoes', icon: 'gift', enabled: true, title: 'Apoio que transforma', text: 'Doações direcionadas a reformas, conforto e qualidade de vida de quem mora aqui.' },
  ],
}

/* ---------------------------- DOCUMENTAÇÃO ------------------------- */
export const documents = {
  eyebrow: 'Documentação e segurança',
  title: 'Transparência para você confiar.',
  intro:
    'Antes de escolher qualquer casa, você tem o direito de ver a documentação. Preencha os campos abaixo com os dados reais do estabelecimento — nenhum número foi inventado.',
  items: [
    { id: 'avcb', enabled: true, title: 'AVCB — Corpo de Bombeiros', description: 'Auto de Vistoria do Corpo de Bombeiros, com rotas de fuga e brigada treinada.', number: '[Número do AVCB]', icon: 'shield' },
    { id: 'alvara', enabled: true, title: 'Alvará de funcionamento', description: 'Licença da prefeitura para o exercício da atividade no endereço informado.', number: '[Número do alvará]', icon: 'file' },
    { id: 'habite', enabled: true, title: 'Habite-se', description: 'Certidão de que a edificação é regular e apta para o uso pretendido.', number: '[Número do habite-se]', icon: 'file' },
    { id: 'conselho', enabled: true, title: 'Registro no conselho responsável', description: 'Inscrição e regularidade junto ao conselho ou órgão competente da categoria.', number: '[Número do registro]', icon: 'check' },
    { id: 'tecnica', enabled: true, title: 'Responsável técnica', description: 'Profissional registrada e formalmente responsável técnica pelo estabelecimento.', number: '[Nome e registro]', icon: 'users' },
    { id: 'plano', enabled: true, title: 'Plano de contingência e segurança', description: 'Procedimentos de emergência, rondas e rotinas de segurança do dia a dia.', number: '[Conforme aplicável]', icon: 'clock' },
    { id: 'doadores', enabled: true, title: 'Transparência com doadores', description: 'Prestação de contas das doações recebidas e da destinação dos recursos, sempre que solicitada por um doador.', number: '[Informe o canal]', icon: 'eye' },
  ],
}

/* ------------------------------- FAQ ------------------------------- */
export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'O que as famílias mais perguntam.',
  intro: 'Se a sua dúvida não estiver aqui, fale conosco pelo WhatsApp — respondemos com calma e sem compromisso.',
  items: [
    {
      id: 'custo',
      question: 'Quanto custa morar em um residencial sênior?',
      answer:
        'O valor depende do tipo de acomodação, do nível de apoio necessário e da rotina de cuidado de cada residente. Por isso não trabalhamos com tabela única: fazemos uma avaliação individual, apresentamos uma proposta completa e explicamos o que está incluído — sem taxas escondidas.',
    },
    {
      id: 'incluido',
      question: 'O que está incluído na mensalidade?',
      answer:
        'A proposta detalha tudo o que faz parte do plano contratado: acomodação, refeições, rotina de atividades, acompanhamento diário e demais serviços combinados. Ajustamos o conteúdo conforme a realidade do residencial — revise este texto antes de publicar.',
    },
    {
      id: 'alzheimer',
      question: 'O residencial recebe idosos com Alzheimer?',
      answer:
        'Esse é um ponto importante e merece uma conversa individual. Na avaliação, avaliamos junto com a família o grau de dependência, as necessidades de segurança e a estrutura disponível para oferecer um cuidado adequado. Entre em contato para verificarmos juntos a melhor alternativa.',
    },
    {
      id: 'adaptacao',
      question: 'Como funciona a adaptação?',
      answer:
        'A adaptação acontece com calma e é conduzida junto com a família. Normalmente, começa com visitas e contatos mais próximos, seguidas de períodos progressivos de permanência, até que o residente e a família se sintam seguros. O tempo varia de pessoa para pessoa.',
    },
    {
      id: 'visitas',
      question: 'Os familiares podem visitar?',
      answer:
        'Sim. A participação da família é essencial e as visitas fazem parte da rotina. Basta combinarmos o melhor horário para recebê-lo com atenção — fale conosco para agendar sua visita.',
    },
    {
      id: 'temporaria',
      question: 'Existe hospedagem temporária?',
      answer:
        'Sim, oferecemos períodos temporários para situações como viagens, férias do cuidador, replanejamento familiar ou recuperação. A duração é combinada previamente, de forma transparente.',
    },
    {
      id: 'agendar',
      question: 'Como agendar uma visita?',
      answer:
        'É muito simples: preencha o formulário “Solicitar visita” aqui do site ou fale diretamente pelo WhatsApp. Combinamos um horário e recebemos você para conhecer a casa por inteiro.',
    },
    {
      id: 'doacao',
      question: 'Como posso fazer uma doação?',
      answer:
        'Você pode doar pelo Pix, usando a chave indicada na seção “Faça uma doação”, ou falar conosco pelo WhatsApp para outras formas de contribuição. Qualquer valor ajuda a reformar a casa e a cuidar de quem mora aqui — e agradecemos de coração cada doação.',
    },
    {
      id: 'doar-itens',
      question: 'Posso doar itens, como roupas, móveis ou mantimentos?',
      answer:
        'Sim, e muito bem-vindos! Antes de trazer, fale conosco para confirmarmos o que precisa e combinarmos o melhor momento da entrega. Roupas de cama e banho, enxoval, produtos de higiene, mantimentos e eletrodomésticos em bom estado são de grande ajuda.',
    },
    {
      id: 'documentos',
      question: 'Quais documentos são necessários?',
      answer:
        'Na etapa de admissão, a família recebe a lista completa de documentos. Em geral, são pedidos documentos de identificação, comprovante de residência, prontuário e informações de saúde do residente. Enviamos tudo por escrito para facilitar o preparo.',
    },
  ],
}

/* ------------------------------ DOAÇÕES ---------------------------- */
export const donation = {
  eyebrow: 'Faça uma doação',
  title: 'Sua doação transforma cada canto deste lar.',
  intro:
    'O Lar Bom Samaritano é mantido com carinho — e com o apoio de pessoas como você. Qualquer contribuição, em dinheiro ou em itens, é direcionada para as reformas, o conforto e o dia a dia de quem mora aqui.',
  image: 'images/doacao-maos.jpg',
  imageAlt: 'Mãos de uma pessoa mais jovem segurando com carinho as mãos de uma idosa',
  badge: 'Qualquer valor faz diferença',
  pixTitle: 'Doe pelo Pix',
  // ⚠️ CHAVE PIX DE EXEMPLO — troque pela chave real antes de publicar.
  pixKey: '[Chave Pix do lar]',
  pixNote: 'Chave de exemplo: substitua em src/data/content.js antes de publicar o site.',
  ways: [
    { icon: 'heart', title: 'Doação de valores', text: 'Um Pix, um depósito ou um valor mensal: por menor que seja, já vira tinta, madeira e conforto.' },
    { icon: 'gift', title: 'Doação de itens', text: 'Roupas de cama e banho, enxoval, higiene, mantimentos e eletrodomésticos em bom estado.' },
    { icon: 'users', title: 'Divulgue e participe', text: 'Conte para a sua família e para os amigos — quanto mais gente soube, mais rápido a casa muda.' },
  ],
  needsTitle: 'Para onde vai a sua doação',
  needs: [
    'Reformas e manutenção: pintura, elétrica, acessibilidade e segurança',
    'Enxoval, itens de higiene e conforto para os moradores',
    'Roupas de cama, toalhas e cobertores',
    'Mantimentos e gêneros alimentícios',
    'Móveis e eletrodomésticos em bom estado',
    'Atividades, lazer e momentos de convivência',
  ],
  note: 'Quer doar itens? Fale conosco antes de trazer — combinamos o melhor momento da entrega e o que precisa.',
  cta: 'Quero fazer uma doação',
  bannerTitle: 'Você pode fazer parte dessa transformação.',
  bannerText:
    'Cada doação — por menor que seja — vira tinta, madeira, segurança e conforto para quem mora aqui.',
  contactTitle: 'Quer ajudar de outra forma?',
  contactText:
    'Sua doação, em dinheiro ou em itens, transforma a casa e o dia a dia dos moradores. Conheça as formas de doar.',
}

/* -------------------------- CHAMADA FINAL -------------------------- */
export const finalCta = {
  title: 'Seu familiar merece cuidado, carinho e qualidade de vida.',
  text: 'Estamos prontos para receber sua família, apresentar nossa estrutura e esclarecer todas as suas dúvidas.',
  note: 'A visita é gratuita, sem compromisso e pode incluir o seu familiar.',
}

/* ------------------------------ RODAPÉ ----------------------------- */
export const footer = {
  navTitle: 'Navegue',
  contactTitle: 'Doar agora',
  hoursTitle: 'Atendimento',
}
