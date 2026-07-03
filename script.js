'use strict';

/* ============================================================
   script.js — Agrinho 2026
   Correcoes v2:
   1. Narrador robusto: selecao de voz por .lang com fallback,
      retry via voiceschanged, cancelamento seguro pre-speak,
      compativel com Chrome, Edge, Firefox, Safari, iOS, Android
   2. Tema D/B: sem alteracoes no JS (correcoes ficam no CSS)
   ============================================================ */


// ============================================================
// DICIONARIO COMPLETO DE TRADUCOES (PT / EN / ES)
// ============================================================
var TRADUCOES = {

  /* ─────────────────────────────── PORTUGUES ─────────────────────────────── */
  pt: {
    page_title:         'Agrinho 2026 — Agro Forte, Futuro Sustentável',
    label_idioma:       'Idioma:',
    label_visual:       'Visual:',
    label_texto:        'Texto:',
    label_audio:        'Áudio:',
    btn_colorido:       'Padrão',
    btn_branco:         'L/W',
    btn_preto:          'D/B',
    btn_narrar:         '\uD83D\uDD0A Narrar Site',
    btn_parar:          '\uD83D\uDED1 Parar Narração',
    logo_titulo:        'Agrinho 2026',
    logo_subtitulo:     'SENAR \u00B7 Paraná',
    nav_sobre:          'Sobre',
    nav_tema:           'Tema',
    nav_tecnologias:    'Tecnologias',
    nav_video:          'Vídeo',
    nav_apoio:          'Apoiar',
    nav_contato:        'Contato',
    hero_eyebrow:       'Concurso Agrinho 2026',
    hero_titulo:        'Agro forte,\nfuturo sustentável',
    hero_subtitulo:     'Equilíbrio entre produção e meio ambiente',
    hero_btn_conhecer:  'Conhecer o Projeto',
    hero_btn_apoiar:    '\uD83D\uDC4D Apoiar Agora',
    sobre_eyebrow:      'O Programa',
    sobre_titulo:       'O que é o Agrinho?',
    sobre_p1:           'O Programa Agrinho é uma iniciativa do SENAR Paraná que existe há mais de 25 anos, conectando a educação do campo e da cidade por meio de temas como saúde, cidadania e, nesta edição, sustentabilidade agrícola.',
    sobre_p2:           'Em 2026, o tema convida estudantes a refletirem sobre como o agronegócio brasileiro pode ser economicamente forte sem comprometer os recursos naturais para as próximas gerações. Tecnologia, consciência e responsabilidade caminham juntas.',
    sobre_p3:           'Este site foi criado como projeto de participação do Colégio Estadual do Paraná, explorando conceitos de produção sustentável, inovação tecnológica no campo e o papel de cada cidadão na construção de um futuro mais verde.',
    estat_anos:         'Anos de Programa',
    estat_municipios:   'Municípios Participantes',
    estat_alunos:       'Alunos Impactados',
    tema_eyebrow:       'O Desafio',
    tema_titulo:        'Produção e Natureza em Equilíbrio',
    tema_intro:         'O Brasil é um dos maiores produtores de alimentos do mundo. Mas como garantir que essa produção respeite o planeta? Três pilares sustentam essa resposta:',
    pilar1_titulo:      'Agropecuária Responsável',
    pilar1_desc:        'Práticas como o plantio direto, rotação de culturas e integração lavoura-pecuária-floresta reduzem a erosão do solo, poupam água e aumentam a produtividade ao mesmo tempo.',
    pilar2_titulo:      'Economia Circular',
    pilar2_desc:        'Resíduos agrícolas como palha e esterco viram energia, compostagem e biofertilizantes. Nada se perde: tudo se transforma em mais produção com menos impacto ambiental.',
    pilar3_titulo:      'Cidadania Ambiental',
    pilar3_desc:        'O campo precisa de guardiões. Desde a escola, cada aluno aprende que escolhas de consumo, descarte correto do lixo e preservação de nascentes são atos de cidadania concreta.',
    tec_eyebrow:        'Inovação no Campo',
    tec_titulo:         'Tecnologias Sustentáveis',
    tec_intro:          'O agricultor moderno conta com ferramentas que antes pareciam ficção científica. Veja três exemplos que já transformam o agro brasileiro:',
    drone_credito:      '\uD83D\uDCF7 Foto: Pexels / Foto de Drone Agrícola',
    drone_titulo:       'Agricultura de Precisão com Drones',
    drone_desc:         'Drones equipados com câmeras multiespectrais sobrevoam as lavouras e identificam áreas com deficiência nutricional, pragas ou estresse hídrico com precisão de centímetros. Isso permite que o produtor aplique insumos somente onde é necessário, reduzindo o uso de defensivos em até 40% e economizando água e combustível. O resultado é uma lavoura mais saudável e um ambiente mais preservado.',
    irri_credito:       '\uD83D\uDCF7 Foto: Pexels / Foto de Irrigação por Gotejamento',
    irrigacao_titulo:   'Irrigação Inteligente por Gotejamento',
    irri_desc:          'O sistema de irrigação por gotejamento entrega água diretamente na raiz da planta, gota a gota, controlado por sensores de umidade do solo conectados à internet. Sensores monitoram em tempo real a necessidade hídrica de cada espécie e irrigam apenas quando necessário. Comparado à irrigação convencional por aspersão, o gotejamento inteligente economiza até 60% de água, um recurso vital cada vez mais escasso no planeta.',
    solar_credito:      '\uD83D\uDCF7 Foto: Pexels / Foto de Energia Solar Rural',
    solar_titulo:       'Energia Solar Fotovoltaica Rural',
    solar_desc:         'Painéis solares instalados em propriedades rurais geram eletricidade limpa diretamente do sol, eliminando ou reduzindo drasticamente a conta de energia de fazendas e sítios. A energia excedente pode ser injetada na rede elétrica, gerando créditos ao produtor. Com o custo dos painéis caindo mais de 80% na última década, a energia solar se tornou um dos investimentos mais inteligentes e sustentáveis para o agricultor brasileiro do século XXI.',
    video_eyebrow:      'Assista',
    video_titulo:       'O Campo em Movimento',
    video_intro:        'Veja a beleza e a força do agronegocio sustentável através das imagens abaixo.',
    video_credito:      '\uD83C\uDFAC Vídeo por: Fernando Sánchez Aranguren (Pexels)',
    video_fallback:     'Seu navegador não suporta a reprodução de vídeo HTML5.',
    apoio_eyebrow:      'Participe',
    apoio_titulo:       'Apoie Este Projeto',
    apoio_intro:        'Acredita num agro mais sustentável? Demonstre seu apoio clicando abaixo!',
    apoio_contador:     'Este projeto já recebeu {N} apoios!',
    apoio_btn:          'Apoiar Projeto',
    contato_eyebrow:    'Fale Conosco',
    contato_titulo:     'Deixe sua Sugestão',
    contato_intro:      'Tem uma ideia para tornar o projeto ainda melhor? Compartilhe com a gente!',
    label_nome:         'Nome completo',
    placeholder_nome:   'Digite seu nome completo',
    label_email:        'E-mail (opcional)',
    placeholder_email:  'seuemail@exemplo.com',
    label_mensagem:     'Sua sugestão ou mensagem',
    placeholder_msg:    'Escreva sua sugestão aqui...',
    btn_enviar:         'Enviar Sugestão',
    form_sucesso:       'Sugestão enviada com sucesso! Obrigado pela sua contribuição.',
    form_erro_nome:     'Por favor, preencha seu nome.',
    form_erro_msg:      'Por favor, escreva sua mensagem.',
    rodape_titulo:      'Agrinho 2026',
    rodape_subtitulo:   'SENAR \u00B7 Paraná',
    rodape_copy:        '\u00A9 2026 Concurso Agrinho \u2014 SENAR Paraná \u2014 Colégio Estadual do Paraná. Projeto educativo sem fins lucrativos.',
    rodape_nav_sobre:       'Sobre',
    rodape_nav_tema:        'Tema',
    rodape_nav_tecnologias: 'Tecnologias',
    rodape_nav_video:       'Vídeo',
    rodape_nav_contato:     'Contato'
  },

  /* ─────────────────────────────── INGLES ─────────────────────────────── */
  en: {
    page_title:         'Agrinho 2026 — Strong Agro, Sustainable Future',
    label_idioma:       'Language:',
    label_visual:       'Visual:',
    label_texto:        'Text:',
    label_audio:        'Audio:',
    btn_colorido:       'Default',
    btn_branco:         'L/W',
    btn_preto:          'D/B',
    btn_narrar:         '\uD83D\uDD0A Read Site Aloud',
    btn_parar:          '\uD83D\uDED1 Stop Reading',
    logo_titulo:        'Agrinho 2026',
    logo_subtitulo:     'SENAR \u00B7 Parana',
    nav_sobre:          'About',
    nav_tema:           'Theme',
    nav_tecnologias:    'Technologies',
    nav_video:          'Video',
    nav_apoio:          'Support',
    nav_contato:        'Contact',
    hero_eyebrow:       'Agrinho Contest 2026',
    hero_titulo:        'Strong Agro,\nSustainable Future',
    hero_subtitulo:     'Balance between production and the environment',
    hero_btn_conhecer:  'Learn About the Project',
    hero_btn_apoiar:    '\uD83D\uDC4D Support Now',
    sobre_eyebrow:      'The Program',
    sobre_titulo:       'What is Agrinho?',
    sobre_p1:           'The Agrinho Program is an initiative by SENAR Parana that has existed for over 25 years, connecting rural and urban education through topics such as health, citizenship and, in this edition, agricultural sustainability.',
    sobre_p2:           'In 2026, the theme invites students to reflect on how Brazilian agribusiness can be economically strong without compromising natural resources for future generations. Technology, awareness, and responsibility go hand in hand.',
    sobre_p3:           'This website was created as a participation project by the Colegio Estadual do Parana, exploring concepts of sustainable production, technological innovation in agriculture, and the role of every citizen in building a greener future.',
    estat_anos:         'Years of Program',
    estat_municipios:   'Participating Municipalities',
    estat_alunos:       'Students Impacted',
    tema_eyebrow:       'The Challenge',
    tema_titulo:        'Production and Nature in Balance',
    tema_intro:         'Brazil is one of the world\'s largest food producers. But how can we ensure this production respects the planet? Three pillars support this answer:',
    pilar1_titulo:      'Responsible Agriculture',
    pilar1_desc:        'Practices such as no-till farming, crop rotation, and crop-livestock-forest integration reduce soil erosion, save water, and increase productivity at the same time.',
    pilar2_titulo:      'Circular Economy',
    pilar2_desc:        'Agricultural waste such as straw and manure becomes energy, compost, and biofertilizers. Nothing is lost: everything is transformed into more production with less environmental impact.',
    pilar3_titulo:      'Environmental Citizenship',
    pilar3_desc:        'The countryside needs guardians. From school, each student learns that consumer choices, proper waste disposal, and preservation of springs are acts of concrete citizenship.',
    tec_eyebrow:        'Innovation in the Field',
    tec_titulo:         'Sustainable Technologies',
    tec_intro:          'The modern farmer has tools that once seemed like science fiction. See three examples already transforming Brazilian agriculture:',
    drone_credito:      '\uD83D\uDCF7 Photo: Pexels / Agricultural Drone Photo',
    drone_titulo:       'Precision Agriculture with Drones',
    drone_desc:         'Drones equipped with multispectral cameras fly over crops and identify areas with nutritional deficiencies, pests, or water stress with centimeter precision. This allows the producer to apply inputs only where needed, reducing pesticide use by up to 40% and saving water and fuel. The result is healthier crops and a more preserved environment.',
    irri_credito:       '\uD83D\uDCF7 Photo: Pexels / Drip Irrigation Photo',
    irrigacao_titulo:   'Smart Drip Irrigation',
    irri_desc:          'The drip irrigation system delivers water directly to the plant root, drop by drop, controlled by soil moisture sensors connected to the internet. Sensors monitor each species water needs in real time and irrigate only when necessary. Compared to conventional sprinkler irrigation, smart drip saves up to 60% of water, a vital resource that is increasingly scarce on the planet.',
    solar_credito:      '\uD83D\uDCF7 Photo: Pexels / Rural Solar Energy Photo',
    solar_titulo:       'Rural Photovoltaic Solar Energy',
    solar_desc:         'Solar panels installed on rural properties generate clean electricity directly from the sun, eliminating or drastically reducing the energy bills of farms and homesteads. Surplus energy can be fed into the electrical grid, generating credits for the producer. With panel costs falling more than 80% in the last decade, solar energy has become one of the smartest and most sustainable investments for the 21st century Brazilian farmer.',
    video_eyebrow:      'Watch',
    video_titulo:       'The Field in Motion',
    video_intro:        'See the beauty and strength of sustainable agribusiness through the images below.',
    video_credito:      '\uD83C\uDFAC Video by: Fernando Sanchez Aranguren (Pexels)',
    video_fallback:     'Your browser does not support HTML5 video playback.',
    apoio_eyebrow:      'Get Involved',
    apoio_titulo:       'Support This Project',
    apoio_intro:        'Do you believe in a more sustainable agro? Show your support by clicking below!',
    apoio_contador:     'This project has already received {N} endorsements!',
    apoio_btn:          'Support Project',
    contato_eyebrow:    'Contact Us',
    contato_titulo:     'Leave Your Suggestion',
    contato_intro:      'Do you have an idea to make the project even better? Share it with us!',
    label_nome:         'Full name',
    placeholder_nome:   'Enter your full name',
    label_email:        'E-mail (optional)',
    placeholder_email:  'youremail@example.com',
    label_mensagem:     'Your suggestion or message',
    placeholder_msg:    'Write your suggestion here...',
    btn_enviar:         'Send Suggestion',
    form_sucesso:       'Suggestion sent successfully! Thank you for your contribution.',
    form_erro_nome:     'Please fill in your name.',
    form_erro_msg:      'Please write your message.',
    rodape_titulo:      'Agrinho 2026',
    rodape_subtitulo:   'SENAR \u00B7 Parana',
    rodape_copy:        '\u00A9 2026 Agrinho Contest \u2014 SENAR Parana \u2014 Colegio Estadual do Parana. Non-profit educational project.',
    rodape_nav_sobre:       'About',
    rodape_nav_tema:        'Theme',
    rodape_nav_tecnologias: 'Technologies',
    rodape_nav_video:       'Video',
    rodape_nav_contato:     'Contact'
  },

  /* ─────────────────────────────── ESPANHOL ─────────────────────────────── */
  es: {
    page_title:         'Agrinho 2026 — Agro fuerte, futuro sostenible',
    label_idioma:       'Idioma:',
    label_visual:       'Visual:',
    label_texto:        'Texto:',
    label_audio:        'Audio:',
    btn_colorido:       'Estandar',
    btn_branco:         'L/W',
    btn_preto:          'D/B',
    btn_narrar:         '\uD83D\uDD0A Narrar Sitio',
    btn_parar:          '\uD83D\uDED1 Detener Narracion',
    logo_titulo:        'Agrinho 2026',
    logo_subtitulo:     'SENAR \u00B7 Parana',
    nav_sobre:          'Acerca de',
    nav_tema:           'Tema',
    nav_tecnologias:    'Tecnologias',
    nav_video:          'Video',
    nav_apoio:          'Apoyar',
    nav_contato:        'Contacto',
    hero_eyebrow:       'Concurso Agrinho 2026',
    hero_titulo:        'Agro fuerte,\nfuturo sostenible',
    hero_subtitulo:     'Equilibrio entre produccion y medio ambiente',
    hero_btn_conhecer:  'Conocer el Proyecto',
    hero_btn_apoiar:    '\uD83D\uDC4D Apoyar Ahora',
    sobre_eyebrow:      'El Programa',
    sobre_titulo:       'Que es Agrinho?',
    sobre_p1:           'El Programa Agrinho es una iniciativa de SENAR Parana que existe desde hace mas de 25 anos, conectando la educacion del campo y la ciudad a traves de temas como salud, ciudadania y, en esta edicion, sostenibilidad agricola.',
    sobre_p2:           'En 2026, el tema invita a los estudiantes a reflexionar sobre como el agronegocio brasileno puede ser economicamente fuerte sin comprometer los recursos naturales para las proximas generaciones. Tecnologia, conciencia y responsabilidad van de la mano.',
    sobre_p3:           'Este sitio fue creado como proyecto de participacion del Colegio Estadual do Parana, explorando conceptos de produccion sostenible, innovacion tecnologica en el campo y el papel de cada ciudadano en la construccion de un futuro mas verde.',
    estat_anos:         'Anos de Programa',
    estat_municipios:   'Municipios Participantes',
    estat_alunos:       'Alumnos Impactados',
    tema_eyebrow:       'El Desafio',
    tema_titulo:        'Produccion y Naturaleza en Equilibrio',
    tema_intro:         'Brasil es uno de los mayores productores de alimentos del mundo. Pero como garantizar que esa produccion respete el planeta? Tres pilares sostienen esta respuesta:',
    pilar1_titulo:      'Agropecuaria Responsable',
    pilar1_desc:        'Practicas como la siembra directa, la rotacion de cultivos y la integracion cultivo-ganaderia-forestal reducen la erosion del suelo, ahorran agua y aumentan la productividad al mismo tiempo.',
    pilar2_titulo:      'Economia Circular',
    pilar2_desc:        'Los residuos agricolas como la paja y el estiercol se convierten en energia, compostaje y biofertilizantes. Nada se pierde: todo se transforma en mas produccion con menos impacto ambiental.',
    pilar3_titulo:      'Ciudadania Ambiental',
    pilar3_desc:        'El campo necesita guardianes. Desde la escuela, cada alumno aprende que las elecciones de consumo, la correcta eliminacion de residuos y la preservacion de los manantiales son actos de ciudadania concreta.',
    tec_eyebrow:        'Innovacion en el Campo',
    tec_titulo:         'Tecnologias Sostenibles',
    tec_intro:          'El agricultor moderno cuenta con herramientas que antes parecian ciencia ficcion. Vea tres ejemplos que ya transforman el agro brasileno:',
    drone_credito:      '\uD83D\uDCF7 Foto: Pexels / Foto de Dron Agricola',
    drone_titulo:       'Agricultura de Precision con Drones',
    drone_desc:         'Los drones equipados con camaras multiespectrales sobrevuelan los cultivos e identifican areas con deficiencia nutricional, plagas o estres hidrico con precision centimetrica. Esto permite al productor aplicar insumos solo donde es necesario, reduciendo el uso de agroquimicos hasta en un 40% y ahorrando agua y combustible. El resultado es un cultivo mas saludable y un ambiente mas preservado.',
    irri_credito:       '\uD83D\uDCF7 Foto: Pexels / Foto de Riego por Goteo',
    irrigacao_titulo:   'Riego Inteligente por Goteo',
    irri_desc:          'El sistema de riego por goteo entrega agua directamente a la raiz de la planta, gota a gota, controlado por sensores de humedad del suelo conectados a internet. Los sensores monitorean en tiempo real la necesidad hidrica de cada especie y riegan solo cuando es necesario. En comparacion con el riego convencional por aspersion, el goteo inteligente ahorra hasta un 60% de agua, un recurso vital cada vez mas escaso en el planeta.',
    solar_credito:      '\uD83D\uDCF7 Foto: Pexels / Foto de Energia Solar Rural',
    solar_titulo:       'Energia Solar Fotovoltaica Rural',
    solar_desc:         'Los paneles solares instalados en propiedades rurales generan electricidad limpia directamente del sol, eliminando o reduciendo drasticamente la factura energetica de granjas y haciendas. La energia excedente puede inyectarse en la red electrica, generando creditos para el productor. Con el costo de los paneles cayendo mas del 80% en la ultima decada, la energia solar se ha convertido en una de las inversiones mas inteligentes y sostenibles para el agricultor brasileno del siglo XXI.',
    video_eyebrow:      'Mire',
    video_titulo:       'El Campo en Movimiento',
    video_intro:        'Vea la belleza y la fuerza del agronegocio sostenible a traves de las imagenes a continuacion.',
    video_credito:      '\uD83C\uDFAC Video de: Fernando Sanchez Aranguren (Pexels)',
    video_fallback:     'Su navegador no es compatible con la reproduccion de video HTML5.',
    apoio_eyebrow:      'Participa',
    apoio_titulo:       'Apoya Este Proyecto',
    apoio_intro:        'Crees en un agro mas sostenible? Demuestra tu apoyo haciendo clic abajo!',
    apoio_contador:     'Este proyecto ya recibio {N} apoyos!',
    apoio_btn:          'Apoyar Proyecto',
    contato_eyebrow:    'Contactanos',
    contato_titulo:     'Deja tu Sugerencia',
    contato_intro:      'Tienes una idea para hacer el proyecto aun mejor? Compartela con nosotros!',
    label_nome:         'Nombre completo',
    placeholder_nome:   'Escribe tu nombre completo',
    label_email:        'Correo electronico (opcional)',
    placeholder_email:  'tucorreo@ejemplo.com',
    label_mensagem:     'Tu sugerencia o mensaje',
    placeholder_msg:    'Escribe tu sugerencia aqui...',
    btn_enviar:         'Enviar Sugerencia',
    form_sucesso:       'Sugerencia enviada con exito! Gracias por tu contribucion.',
    form_erro_nome:     'Por favor, completa tu nombre.',
    form_erro_msg:      'Por favor, escribe tu mensaje.',
    rodape_titulo:      'Agrinho 2026',
    rodape_subtitulo:   'SENAR \u00B7 Parana',
    rodape_copy:        '\u00A9 2026 Concurso Agrinho \u2014 SENAR Parana \u2014 Colegio Estadual do Parana. Proyecto educativo sin fines de lucro.',
    rodape_nav_sobre:       'Acerca de',
    rodape_nav_tema:        'Tema',
    rodape_nav_tecnologias: 'Tecnologias',
    rodape_nav_video:       'Video',
    rodape_nav_contato:     'Contacto'
  }
};
// ============================================================
// ESTADO GLOBAL
// ============================================================
var idiomaAtivo   = 'pt';
var temaAtivo     = 'padrao';
var totalApoios   = 0;
var narratorAtivo = false;
var tamanhoFonte  = 16;

var FONTE_MINIMA = 10;
var FONTE_MAXIMA = 26;
var PASSO_FONTE  = 2;

/*
 * MAPA DE CODIGOS BCP-47 POR IDIOMA
 * Lista de fallbacks por idioma para maxima compatibilidade entre
 * Chrome, Edge, Firefox, Safari, iOS e Android.
 * iniciarNarracao() tenta cada codigo em ordem ate encontrar uma
 * voz disponivel, ou usa o primeiro como default absoluto.
 */
var MAPA_VOZ_LANG = {
  pt: ['pt-BR', 'pt-PT', 'pt'],
  en: ['en-US', 'en-GB', 'en'],
  es: ['es-ES', 'es-MX', 'es-US', 'es-419', 'es']
};

/* Lang principal (para o atributo html.lang e title) */
var MAPA_LANG_PRINCIPAL = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES'
};


// ============================================================
// MAPA DECLARATIVO: ID DO ELEMENTO → CHAVE NO DICIONARIO
// ============================================================
var MAPA_DOM = [
  { id: 'label-idioma',           chave: 'label_idioma',          prop: 'textContent' },
  { id: 'label-visual',           chave: 'label_visual',          prop: 'textContent' },
  { id: 'label-texto',            chave: 'label_texto',           prop: 'textContent' },
  { id: 'label-audio',            chave: 'label_audio',           prop: 'textContent' },
  { id: 'btn-colorido',           chave: 'btn_colorido',          prop: 'textContent' },
  { id: 'btn-branco',             chave: 'btn_branco',            prop: 'textContent' },
  { id: 'btn-preto',              chave: 'btn_preto',             prop: 'textContent' },
  { id: 'logo-titulo-txt',        chave: 'logo_titulo',           prop: 'textContent' },
  { id: 'logo-subtitulo-txt',     chave: 'logo_subtitulo',        prop: 'textContent' },
  { id: 'nav-sobre',              chave: 'nav_sobre',             prop: 'textContent' },
  { id: 'nav-tema',               chave: 'nav_tema',              prop: 'textContent' },
  { id: 'nav-tecnologias',        chave: 'nav_tecnologias',       prop: 'textContent' },
  { id: 'nav-video',              chave: 'nav_video',             prop: 'textContent' },
  { id: 'nav-apoio',              chave: 'nav_apoio',             prop: 'textContent' },
  { id: 'nav-contato',            chave: 'nav_contato',           prop: 'textContent' },
  { id: 'hero-eyebrow-txt',       chave: 'hero_eyebrow',          prop: 'textContent' },
  { id: 'hero-titulo',            chave: 'hero_titulo',           prop: 'innerHTML',   newline: true },
  { id: 'hero-subtitulo-txt',     chave: 'hero_subtitulo',        prop: 'textContent' },
  { id: 'hero-btn-conhecer',      chave: 'hero_btn_conhecer',     prop: 'textContent' },
  { id: 'hero-btn-apoiar',        chave: 'hero_btn_apoiar',       prop: 'textContent' },
  { id: 'sobre-eyebrow-txt',      chave: 'sobre_eyebrow',         prop: 'textContent' },
  { id: 'sobre-titulo',           chave: 'sobre_titulo',          prop: 'textContent' },
  { id: 'sobre-p1',               chave: 'sobre_p1',              prop: 'textContent' },
  { id: 'sobre-p2',               chave: 'sobre_p2',              prop: 'textContent' },
  { id: 'sobre-p3',               chave: 'sobre_p3',              prop: 'textContent' },
  { id: 'estat-anos',             chave: 'estat_anos',            prop: 'textContent' },
  { id: 'estat-municipios',       chave: 'estat_municipios',      prop: 'textContent' },
  { id: 'estat-alunos',           chave: 'estat_alunos',          prop: 'textContent' },
  { id: 'tema-eyebrow-txt',       chave: 'tema_eyebrow',          prop: 'textContent' },
  { id: 'tema-titulo',            chave: 'tema_titulo',           prop: 'textContent' },
  { id: 'tema-intro-txt',         chave: 'tema_intro',            prop: 'textContent' },
  { id: 'pilar1-titulo',          chave: 'pilar1_titulo',         prop: 'textContent' },
  { id: 'pilar1-desc',            chave: 'pilar1_desc',           prop: 'textContent' },
  { id: 'pilar2-titulo',          chave: 'pilar2_titulo',         prop: 'textContent' },
  { id: 'pilar2-desc',            chave: 'pilar2_desc',           prop: 'textContent' },
  { id: 'pilar3-titulo',          chave: 'pilar3_titulo',         prop: 'textContent' },
  { id: 'pilar3-desc',            chave: 'pilar3_desc',           prop: 'textContent' },
  { id: 'tec-eyebrow-txt',        chave: 'tec_eyebrow',           prop: 'textContent' },
  { id: 'tec-titulo',             chave: 'tec_titulo',            prop: 'textContent' },
  { id: 'tec-intro-txt',          chave: 'tec_intro',             prop: 'textContent' },
  { id: 'drone-credito-txt',      chave: 'drone_credito',         prop: 'textContent' },
  { id: 'drone-titulo',           chave: 'drone_titulo',          prop: 'textContent' },
  { id: 'drone-text-span',        chave: 'drone_desc',            prop: 'textContent' },
  { id: 'irri-credito-txt',       chave: 'irri_credito',          prop: 'textContent' },
  { id: 'irrigacao-titulo',       chave: 'irrigacao_titulo',      prop: 'textContent' },
  { id: 'irri-text-span',         chave: 'irri_desc',             prop: 'textContent' },
  { id: 'solar-credito-txt',      chave: 'solar_credito',         prop: 'textContent' },
  { id: 'solar-titulo',           chave: 'solar_titulo',          prop: 'textContent' },
  { id: 'solar-text-span',        chave: 'solar_desc',            prop: 'textContent' },
  { id: 'video-eyebrow-txt',      chave: 'video_eyebrow',         prop: 'textContent' },
  { id: 'video-titulo',           chave: 'video_titulo',          prop: 'textContent' },
  { id: 'video-intro-txt',        chave: 'video_intro',           prop: 'textContent' },
  { id: 'video-credito-txt',      chave: 'video_credito',         prop: 'textContent' },
  { id: 'video-fallback-txt',     chave: 'video_fallback',        prop: 'textContent' },
  { id: 'apoio-eyebrow-txt',      chave: 'apoio_eyebrow',         prop: 'textContent' },
  { id: 'apoio-titulo',           chave: 'apoio_titulo',          prop: 'textContent' },
  { id: 'apoio-intro-txt',        chave: 'apoio_intro',           prop: 'textContent' },
  { id: 'apoio-btn-txt',          chave: 'apoio_btn',             prop: 'textContent' },
  { id: 'contato-eyebrow-txt',    chave: 'contato_eyebrow',       prop: 'textContent' },
  { id: 'contato-titulo',         chave: 'contato_titulo',        prop: 'textContent' },
  { id: 'contato-intro-txt',      chave: 'contato_intro',         prop: 'textContent' },
  { id: 'label-nome',             chave: 'label_nome',            prop: 'textContent' },
  { id: 'label-email',            chave: 'label_email',           prop: 'textContent' },
  { id: 'label-mensagem',         chave: 'label_mensagem',        prop: 'textContent' },
  { id: 'campo-nome',             chave: 'placeholder_nome',      prop: 'placeholder' },
  { id: 'campo-email',            chave: 'placeholder_email',     prop: 'placeholder' },
  { id: 'campo-mensagem',         chave: 'placeholder_msg',       prop: 'placeholder' },
  { id: 'btn-enviar-txt',         chave: 'btn_enviar',            prop: 'textContent' },
  { id: 'rodape-titulo-txt',      chave: 'rodape_titulo',         prop: 'textContent' },
  { id: 'rodape-subtitulo-txt',   chave: 'rodape_subtitulo',      prop: 'textContent' },
  { id: 'rodape-copy-txt',        chave: 'rodape_copy',           prop: 'textContent' },
  { id: 'rodape-nav-sobre',       chave: 'rodape_nav_sobre',      prop: 'textContent' },
  { id: 'rodape-nav-tema',        chave: 'rodape_nav_tema',       prop: 'textContent' },
  { id: 'rodape-nav-tecnologias', chave: 'rodape_nav_tecnologias',prop: 'textContent' },
  { id: 'rodape-nav-video',       chave: 'rodape_nav_video',      prop: 'textContent' },
  { id: 'rodape-nav-contato',     chave: 'rodape_nav_contato',    prop: 'textContent' }
];


// ============================================================
// SISTEMA MULTI-IDIOMA
// ============================================================
function mudarIdioma(lang) {
  if (!TRADUCOES[lang]) return;
  idiomaAtivo = lang;
  aplicarTraduzoes(lang);
  atualizarBotoesIdioma(lang);
  atualizarContadorApoios();
  atualizarBotaoNarrador();
  document.documentElement.lang = MAPA_LANG_PRINCIPAL[lang] || lang;
  document.title = TRADUCOES[lang].page_title;
  var erroNome = document.getElementById('erro-nome');
  var erroMsg  = document.getElementById('erro-msg');
  var retorno  = document.getElementById('form-retorno');
  if (erroNome) erroNome.textContent = '';
  if (erroMsg)  erroMsg.textContent  = '';
  if (retorno)  { retorno.textContent = ''; retorno.className = ''; }
}

function aplicarTraduzoes(lang) {
  var dict = TRADUCOES[lang];
  for (var i = 0; i < MAPA_DOM.length; i++) {
    var entrada = MAPA_DOM[i];
    var el = document.getElementById(entrada.id);
    if (!el) continue;
    var valor = dict[entrada.chave];
    if (valor === undefined) continue;
    if (entrada.prop === 'placeholder') {
      el.placeholder = valor;
    } else if (entrada.prop === 'innerHTML' && entrada.newline) {
      el.innerHTML = valor.replace('\n', '<br>');
    } else {
      el.textContent = valor;
    }
  }
}

function atualizarBotoesIdioma(lang) {
  var ids   = ['btn-pt', 'btn-en', 'btn-es'];
  var langs = ['pt', 'en', 'es'];
  for (var i = 0; i < ids.length; i++) {
    var btn = document.getElementById(ids[i]);
    if (!btn) continue;
    var ativo = (langs[i] === lang);
    btn.classList.toggle('btn-ativo', ativo);
    btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  }
}


// ============================================================
// SISTEMA DE TEMAS VISUAIS
// ============================================================
function mudarTema(tema) {
  var corpo = document.body;
  corpo.classList.remove('tema-branco', 'tema-preto');
  var btnColorido = document.getElementById('btn-colorido');
  var btnBranco   = document.getElementById('btn-branco');
  var btnPreto    = document.getElementById('btn-preto');
  if (btnColorido) btnColorido.classList.remove('btn-ativo');
  if (btnBranco)   btnBranco.classList.remove('btn-ativo');
  if (btnPreto)    btnPreto.classList.remove('btn-ativo');
  if (tema === 'branco') {
    corpo.classList.add('tema-branco');
    if (btnBranco) btnBranco.classList.add('btn-ativo');
  } else if (tema === 'preto') {
    corpo.classList.add('tema-preto');
    if (btnPreto) btnPreto.classList.add('btn-ativo');
  } else {
    if (btnColorido) btnColorido.classList.add('btn-ativo');
  }
  temaAtivo = tema;
}


// ============================================================
// ZOOM DE FONTE VIA REM
// ============================================================
function aumentarFonte() {
  if (tamanhoFonte < FONTE_MAXIMA) {
    tamanhoFonte += PASSO_FONTE;
    document.documentElement.style.fontSize = tamanhoFonte + 'px';
  }
}

function diminuirFonte() {
  if (tamanhoFonte > FONTE_MINIMA) {
    tamanhoFonte -= PASSO_FONTE;
    document.documentElement.style.fontSize = tamanhoFonte + 'px';
  }
}


// ============================================================
// NARRADOR DE TELA — CORRIGIDO v2
// Compativel com Chrome, Edge, Firefox, Safari, iOS, Android
// online e offline.
// ============================================================

/*
 * ESTRATEGIA DE SELECAO DE VOZ:
 * Problema central: getVoices() retorna lista VAZIA na primeira
 * chamada em Chrome/Edge/Android. As vozes so ficam disponiveis
 * apos o evento 'voiceschanged'. Em Firefox/iOS a lista ja esta
 * disponivel imediatamente.
 *
 * Solucao:
 * 1. selecionarVoz() percorre getVoices() buscando uma voz cujo
 *    .lang comece com qualquer prefixo da lista MAPA_VOZ_LANG[lang].
 * 2. Se getVoices() esta vazio, registra 'voiceschanged' e tenta
 *    de novo quando as vozes carregam (Chrome/Android).
 * 3. Se nenhuma voz compativel for encontrada mesmo assim, cria
 *    utterance sem definir .voice — o navegador usa o default,
 *    que pelo menos tenta o .lang correto.
 * 4. Texto narrado usa apenas ASCII (sem acentos) para espanhol,
 *    evitando falhas de fonetica em motores TTS do sistema.
 * 5. window.speechSynthesis.cancel() e chamado SEMPRE antes de
 *    .speak() para evitar fila travada.
 */

/**
 * Tenta encontrar uma voz instalada que corresponda ao idioma.
 * @param {string} lang — 'pt' | 'en' | 'es'
 * @returns {SpeechSynthesisVoice|null}
 */
function selecionarVoz(lang) {
  if (!window.speechSynthesis) return null;
  var vozes    = window.speechSynthesis.getVoices();
  var prefixos = MAPA_VOZ_LANG[lang] || [lang];

  /* Primeira passagem: busca correspondencia exata de lang */
  for (var p = 0; p < prefixos.length; p++) {
    for (var v = 0; v < vozes.length; v++) {
      if (vozes[v].lang === prefixos[p]) return vozes[v];
    }
  }

  /* Segunda passagem: busca por prefixo (ex: "es" casa "es-419") */
  for (var p2 = 0; p2 < prefixos.length; p2++) {
    var pref = prefixos[p2].split('-')[0]; /* "es-ES" → "es" */
    for (var v2 = 0; v2 < vozes.length; v2++) {
      if (vozes[v2].lang.toLowerCase().indexOf(pref.toLowerCase()) === 0) {
        return vozes[v2];
      }
    }
  }

  return null; /* Nenhuma voz encontrada; deixa o navegador decidir */
}

/**
 * Monta e dispara uma SpeechSynthesisUtterance com a voz correta.
 * Chamada diretamente ou pelo callback de voiceschanged.
 * @param {string} texto
 * @param {string} lang — 'pt' | 'en' | 'es'
 */
function dispararFala(texto, lang) {
  /* Cancela qualquer fala anterior (reset obrigatorio de fila) */
  window.speechSynthesis.cancel();

  var fala  = new SpeechSynthesisUtterance(texto);
  var voz   = selecionarVoz(lang);

  /* Define a voz se encontrada; caso contrario usa o lang como hint */
  if (voz) {
    fala.voice = voz;
    fala.lang  = voz.lang;
  } else {
    /*
     * Fallback de lang: usa o codigo mais especifico disponivel
     * para que o motor TTS tente ao menos o idioma correto,
     * mesmo sem uma voz instalada explicitamente.
     */
    fala.lang = (MAPA_VOZ_LANG[lang] || [lang])[0];
  }

  /*
   * Taxa por idioma:
   * es: 0.85 (mais lenta para fonetica espanhola sem contaminacao)
   * pt/en: 0.92 (natural)
   *
   * Pitch e volume ficam no default (1.0) pois valores customizados
   * causam rejeicao silenciosa em alguns motores TTS do Android.
   */
  fala.rate = (lang === 'es') ? 0.85 : 0.92;

  fala.onend = function () {
    narratorAtivo = false;
    atualizarBotaoNarrador();
  };

  fala.onerror = function (ev) {
    /* 'interrupted' e disparado pelo cancel() seguinte, nao e erro real */
    if (ev.error === 'interrupted') return;
    narratorAtivo = false;
    atualizarBotaoNarrador();
  };

  window.speechSynthesis.speak(fala);
  narratorAtivo = true;
  atualizarBotaoNarrador();
}

/**
 * Alterna entre iniciar e parar a narracao.
 */
function alternarNarracao() {
  if (!window.speechSynthesis) {
    alert('Seu navegador nao suporta a API de sintese de voz.');
    return;
  }
  if (narratorAtivo) {
    pararNarracao();
  } else {
    iniciarNarracao();
  }
}

/**
 * Inicia a narracao do conteudo principal.
 *
 * FLUXO ROBUSTO:
 * 1. Extrai texto do #conteudo-principal.
 * 2. Verifica se getVoices() ja tem dados.
 *    a. Se SIM → chama dispararFala() imediatamente.
 *    b. Se NAO (Chrome/Android na primeira chamada) → registra
 *       handler 'voiceschanged' ONE-SHOT que chama dispararFala()
 *       quando as vozes ficam prontas. Tambem agenda um timeout
 *       de 2 s como ultimo fallback para browsers que nao disparam
 *       o evento (ex: Firefox em alguns sistemas).
 */
function iniciarNarracao() {
  var conteudo = document.getElementById('conteudo-principal');
  if (!conteudo) return;

  var texto = (conteudo.innerText || conteudo.textContent || '').trim();
  if (!texto) return;

  var lang = idiomaAtivo;

  var vozes = window.speechSynthesis.getVoices();

  if (vozes && vozes.length > 0) {
    /* Vozes ja disponíveis: dispara imediatamente */
    dispararFala(texto, lang);
  } else {
    /*
     * Chrome/Android: vozes ainda nao carregaram.
     * Registra listener de voiceschanged ONE-SHOT e um timeout
     * de fallback para garantir que a fala aconteca de qualquer
     * forma, mesmo que o evento nao seja disparado.
     */
    var disparou = false;

    function aoVozesCarregadas() {
      if (disparou) return;
      disparou = true;
      window.speechSynthesis.removeEventListener('voiceschanged', aoVozesCarregadas);
      dispararFala(texto, lang);
    }

    window.speechSynthesis.addEventListener('voiceschanged', aoVozesCarregadas);

    /* Timeout de seguranca: 2 segundos */
    setTimeout(function () {
      if (!disparou) {
        disparou = true;
        window.speechSynthesis.removeEventListener('voiceschanged', aoVozesCarregadas);
        dispararFala(texto, lang);
      }
    }, 2000);
  }
}

/**
 * Para a narracao imediatamente.
 */
function pararNarracao() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  narratorAtivo = false;
  atualizarBotaoNarrador();
}

/**
 * Atualiza o texto do botao de narracao.
 */
function atualizarBotaoNarrador() {
  var btn = document.getElementById('btn-narrar');
  if (!btn) return;
  var dict = TRADUCOES[idiomaAtivo];
  btn.textContent = narratorAtivo ? dict.btn_parar : dict.btn_narrar;
}


// ============================================================
// CONTADOR DE APOIOS
// ============================================================
function incrementarApoio() {
  totalApoios++;
  var btn = document.getElementById('btn-apoiar');
  if (btn) {
    btn.classList.remove('apoiar-animado');
    void btn.offsetWidth;
    btn.classList.add('apoiar-animado');
  }
  atualizarContadorApoios();
}

function atualizarContadorApoios() {
  var dict     = TRADUCOES[idiomaAtivo];
  var template = dict.apoio_contador;
  var texto    = template.replace('{N}', totalApoios);
  var el = document.getElementById('texto-apoios');
  if (el) el.textContent = texto;
}


// ============================================================
// FORMULARIO
// ============================================================
function enviarFormulario() {
  var dict     = TRADUCOES[idiomaAtivo];
  var campNome = document.getElementById('campo-nome');
  var campMsg  = document.getElementById('campo-mensagem');
  var erroNome = document.getElementById('erro-nome');
  var erroMsg  = document.getElementById('erro-msg');
  var retorno  = document.getElementById('form-retorno');

  erroNome.textContent = '';
  erroMsg.textContent  = '';
  retorno.textContent  = '';
  retorno.className    = '';

  var nomeValor = campNome.value.trim();
  var msgValor  = campMsg.value.trim();
  var temErro   = false;

  if (nomeValor === '') {
    erroNome.textContent = dict.form_erro_nome;
    campNome.focus();
    temErro = true;
  }

  if (msgValor === '') {
    erroMsg.textContent = dict.form_erro_msg;
    if (!temErro) campMsg.focus();
    temErro = true;
  }

  if (temErro) return;

  retorno.textContent = dict.form_sucesso;
  retorno.className   = 'sucesso';

  campNome.value = '';
  campMsg.value  = '';

  setTimeout(function () {
    retorno.textContent = '';
    retorno.className   = '';
  }, 6000);
}


// ============================================================
// MENU MOBILE
// ============================================================
function toggleMenuMobile() {
  var menu = document.getElementById('menu-nav');
  var btn  = document.getElementById('btn-hamburger');
  if (!menu || !btn) return;
  var aberto = menu.classList.contains('menu-aberto');
  if (aberto) {
    menu.classList.remove('menu-aberto');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '\u2630';
  } else {
    menu.classList.add('menu-aberto');
    btn.setAttribute('aria-expanded', 'true');
    btn.textContent = '\u2715';
  }
}

function configurarFechamentoMenu() {
  var links = document.querySelectorAll('#menu-nav a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      var menu = document.getElementById('menu-nav');
      var btn  = document.getElementById('btn-hamburger');
      if (!menu || !btn) return;
      menu.classList.remove('menu-aberto');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '\u2630';
    });
  }
}

function configurarClickFora() {
  document.addEventListener('click', function (ev) {
    var menu  = document.getElementById('menu-nav');
    var btn   = document.getElementById('btn-hamburger');
    var cabec = document.getElementById('cabecalho');
    if (!menu || !btn || !cabec) return;
    if (!cabec.contains(ev.target) && menu.classList.contains('menu-aberto')) {
      menu.classList.remove('menu-aberto');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '\u2630';
    }
  });
}


// ============================================================
// ANIMACAO DE SCROLL
// ============================================================
function configurarAnimacaoScroll() {
  if (!window.IntersectionObserver) return;
  var alvos = document.querySelectorAll(
    'section:not(#hero), .pilar-card, .tec-item, .estatistica-card'
  );
  var obs = new IntersectionObserver(function (entradas) {
    for (var k = 0; k < entradas.length; k++) {
      if (entradas[k].isIntersecting) {
        entradas[k].target.classList.add('visivel');
        obs.unobserve(entradas[k].target);
      }
    }
  }, { threshold: 0.12 });
  for (var m = 0; m < alvos.length; m++) {
    alvos[m].classList.add('secao-animada');
    obs.observe(alvos[m]);
  }
}


// ============================================================
// EVENT LISTENERS
// ============================================================
function registrarEventListeners() {
  var map = {
    'btn-pt':       function () { mudarIdioma('pt'); },
    'btn-en':       function () { mudarIdioma('en'); },
    'btn-es':       function () { mudarIdioma('es'); },
    'btn-colorido': function () { mudarTema('padrao'); },
    'btn-branco':   function () { mudarTema('branco'); },
    'btn-preto':    function () { mudarTema('preto'); },
    'btn-Amais':    aumentarFonte,
    'btn-Amenos':   diminuirFonte,
    'btn-narrar':   alternarNarracao,
    'btn-hamburger':toggleMenuMobile,
    'btn-apoiar':   incrementarApoio,
    'btn-enviar':   enviarFormulario
  };
  for (var id in map) {
    if (Object.prototype.hasOwnProperty.call(map, id)) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('click', map[id]);
    }
  }
}


// ============================================================
// PONTO DE ENTRADA
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
  registrarEventListeners();
  configurarFechamentoMenu();
  configurarClickFora();
  configurarAnimacaoScroll();
  mudarTema('padrao');
  mudarIdioma('pt');
});