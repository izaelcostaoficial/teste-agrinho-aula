'use strict';

/* ============================================================
   script.js - Agrinho 2026
   Projeto: Colégio Estadual Vinícius de Morais
   Funcionalidades:
   - Tradução PT / EN / ES
   - Temas de acessibilidade
   - Controle de fonte
   - Narração com Web Speech API
   - Contador global de apoios com Firebase Firestore
   - Menu mobile
   - Formulário local de sugestão
   - Animação de entrada ao rolar
   ============================================================ */

/* ============================================================
   DICIONÁRIO DE TRADUÇÕES
   ============================================================ */

var TRADUCOES = {
  pt: {
    page_title: 'Agrinho 2026 - Agro Forte, Futuro Sustentável',
    label_idioma: 'Idioma:',
    label_visual: 'Visual:',
    label_texto: 'Texto:',
    label_audio: 'Áudio:',
    btn_colorido: 'Padrão',
    btn_branco: 'L/W',
    btn_preto: 'D/B',
    btn_narrar: '🔊 Narrar Site',
    btn_parar: '🛑 Parar Narração',
    logo_titulo: 'Agrinho 2026',
    logo_subtitulo: 'SENAR · Paraná',
    nav_sobre: 'Sobre',
    nav_tema: 'Tema',
    nav_tecnologias: 'Tecnologias',
    nav_video: 'Vídeo',
    nav_apoio: 'Apoiar',
    nav_contato: 'Contato',
    hero_eyebrow: 'Concurso Agrinho 2026',
    hero_titulo: 'Agro forte,\nfuturo sustentável',
    hero_subtitulo: 'Equilíbrio entre produção e meio ambiente',
    hero_btn_conhecer: 'Conhecer o Projeto',
    hero_btn_apoiar: '👍 Apoiar Agora',
    sobre_eyebrow: 'O Programa',
    sobre_titulo: 'O que é o Agrinho?',
    sobre_p1: 'O Programa Agrinho é uma iniciativa do SENAR Paraná que existe há mais de 25 anos, conectando a educação do campo e da cidade por meio de temas como saúde, cidadania e, nesta edição, sustentabilidade agrícola.',
    sobre_p2: 'Em 2026, o tema convida estudantes a refletirem sobre como o agronegócio brasileiro pode ser economicamente forte sem comprometer os recursos naturais para as próximas gerações. Tecnologia, consciência e responsabilidade caminham juntas.',
    sobre_p3: 'Este site foi criado como projeto de participação do Colégio Estadual Vinícius de Morais, explorando conceitos de produção sustentável, inovação tecnológica no campo e o papel de cada cidadão na construção de um futuro mais verde.',
    estat_anos: 'Anos de Programa',
    estat_municipios: 'Municípios Participantes',
    estat_alunos: 'Alunos Impactados',
    tema_eyebrow: 'O Desafio',
    tema_titulo: 'Produção e Natureza em Equilíbrio',
    tema_intro: 'O Brasil é um dos maiores produtores de alimentos do mundo. Mas como garantir que essa produção respeite o planeta? Três pilares sustentam essa resposta:',
    pilar1_titulo: 'Agropecuária Responsável',
    pilar1_desc: 'Práticas como o plantio direto, rotação de culturas e integração lavoura-pecuária-floresta reduzem a erosão do solo, poupam água e aumentam a produtividade ao mesmo tempo.',
    pilar2_titulo: 'Economia Circular',
    pilar2_desc: 'Resíduos agrícolas como palha e esterco viram energia, compostagem e biofertilizantes. Nada se perde: tudo se transforma em mais produção com menos impacto ambiental.',
    pilar3_titulo: 'Cidadania Ambiental',
    pilar3_desc: 'O campo precisa de guardiões. Desde a escola, cada aluno aprende que escolhas de consumo, descarte correto do lixo e preservação de nascentes são atos de cidadania concreta.',
    tec_eyebrow: 'Inovação no Campo',
    tec_titulo: 'Tecnologias Sustentáveis',
    tec_intro: 'O agricultor moderno conta com ferramentas que antes pareciam ficção científica. Veja três exemplos que já transformam o agro brasileiro:',
    drone_credito: '📷 Foto: Pexels / Foto de Drone Agrícola',
    drone_titulo: 'Agricultura de Precisão com Drones',
    drone_desc: 'Drones equipados com câmeras multiespectrais sobrevoam as lavouras e identificam áreas com deficiência nutricional, pragas ou estresse hídrico com precisão de centímetros. Isso permite que o produtor aplique insumos somente onde é necessário, reduzindo o uso de defensivos em até 40% e economizando água e combustível. O resultado é uma lavoura mais saudável e um ambiente mais preservado.',
    irri_credito: '📷 Foto: Pexels / Foto de Irrigação por Gotejamento',
    irrigacao_titulo: 'Irrigação Inteligente por Gotejamento',
    irri_desc: 'O sistema de irrigação por gotejamento entrega água diretamente na raiz da planta, gota a gota, controlado por sensores de umidade do solo conectados à internet. Sensores monitoram em tempo real a necessidade hídrica de cada espécie e irrigam apenas quando necessário. Comparado à irrigação convencional por aspersão, o gotejamento inteligente economiza até 60% de água, um recurso vital cada vez mais escasso no planeta.',
    solar_credito: '📷 Foto: Pexels / Foto de Energia Solar Rural',
    solar_titulo: 'Energia Solar Fotovoltaica Rural',
    solar_desc: 'Painéis solares instalados em propriedades rurais geram eletricidade limpa diretamente do sol, eliminando ou reduzindo drasticamente a conta de energia de fazendas e sítios. A energia excedente pode ser injetada na rede elétrica, gerando créditos ao produtor. Com o custo dos painéis caindo mais de 80% na última década, a energia solar se tornou um dos investimentos mais inteligentes e sustentáveis para o agricultor brasileiro do século XXI.',
    video_eyebrow: 'Assista',
    video_titulo: 'O Campo em Movimento',
    video_intro: 'Veja a beleza e a força do agronegócio sustentável através das imagens abaixo.',
    video_credito: '🎬 Vídeo por: Fernando Sánchez Aranguren (Pexels)',
    video_fallback: 'Seu navegador não suporta a reprodução de vídeo HTML5.',
    apoio_eyebrow: 'Participe',
    apoio_titulo: 'Apoie Este Projeto',
    apoio_intro: 'Acredita num agro mais sustentável? Demonstre seu apoio clicando abaixo!',
    apoio_contador: 'Este projeto já recebeu {N} apoios!',
    apoio_carregando: 'Carregando apoios...',
    apoio_btn: 'Apoiar Projeto',
    apoio_ja_realizado: 'Este navegador já registrou um apoio.',
    apoio_registrando: 'Registrando apoio...',
    apoio_erro: 'Não foi possível registrar o apoio agora. Verifique a configuração do Firebase.',
    apoio_offline: 'Contador temporariamente indisponível.',
    contato_eyebrow: 'Fale Conosco',
    contato_titulo: 'Deixe sua Sugestão',
    contato_intro: 'Tem uma ideia para tornar o projeto ainda melhor? Compartilhe com a gente!',
    label_nome: 'Nome completo',
    placeholder_nome: 'Digite seu nome completo',
    label_email: 'E-mail (opcional)',
    placeholder_email: 'seuemail@exemplo.com',
    label_mensagem: 'Sua sugestão ou mensagem',
    placeholder_msg: 'Escreva sua sugestão aqui...',
    btn_enviar: 'Enviar Sugestão',
    form_sucesso: 'Sugestão enviada com sucesso! Obrigado pela sua contribuição.',
    form_erro_nome: 'Por favor, preencha seu nome.',
    form_erro_msg: 'Por favor, escreva sua mensagem.',
    rodape_titulo: 'Agrinho 2026',
    rodape_subtitulo: 'SENAR · Paraná',
    rodape_copy: '© 2026 Concurso Agrinho - SENAR Paraná - Colégio Estadual Vinícius de Morais. Projeto educativo sem fins lucrativos.',
    rodape_nav_sobre: 'Sobre',
    rodape_nav_tema: 'Tema',
    rodape_nav_tecnologias: 'Tecnologias',
    rodape_nav_video: 'Vídeo',
    rodape_nav_contato: 'Contato'
  },

  en: {
    page_title: 'Agrinho 2026 - Strong Agro, Sustainable Future',
    label_idioma: 'Language:',
    label_visual: 'Visual:',
    label_texto: 'Text:',
    label_audio: 'Audio:',
    btn_colorido: 'Default',
    btn_branco: 'L/W',
    btn_preto: 'D/B',
    btn_narrar: '🔊 Read Site Aloud',
    btn_parar: '🛑 Stop Reading',
    logo_titulo: 'Agrinho 2026',
    logo_subtitulo: 'SENAR · Paraná',
    nav_sobre: 'About',
    nav_tema: 'Theme',
    nav_tecnologias: 'Technologies',
    nav_video: 'Video',
    nav_apoio: 'Support',
    nav_contato: 'Contact',
    hero_eyebrow: 'Agrinho Contest 2026',
    hero_titulo: 'Strong Agro,\nSustainable Future',
    hero_subtitulo: 'Balance between production and the environment',
    hero_btn_conhecer: 'Learn About the Project',
    hero_btn_apoiar: '👍 Support Now',
    sobre_eyebrow: 'The Program',
    sobre_titulo: 'What is Agrinho?',
    sobre_p1: 'The Agrinho Program is an initiative by SENAR Paraná that has existed for over 25 years, connecting rural and urban education through topics such as health, citizenship and, in this edition, agricultural sustainability.',
    sobre_p2: 'In 2026, the theme invites students to reflect on how Brazilian agribusiness can be economically strong without compromising natural resources for future generations. Technology, awareness and responsibility go hand in hand.',
    sobre_p3: 'This website was created as a participation project by Colégio Estadual Vinícius de Morais, exploring concepts of sustainable production, technological innovation in agriculture and the role of every citizen in building a greener future.',
    estat_anos: 'Years of Program',
    estat_municipios: 'Participating Municipalities',
    estat_alunos: 'Students Impacted',
    tema_eyebrow: 'The Challenge',
    tema_titulo: 'Production and Nature in Balance',
    tema_intro: 'Brazil is one of the world\'s largest food producers. But how can we ensure this production respects the planet? Three pillars support this answer:',
    pilar1_titulo: 'Responsible Agriculture',
    pilar1_desc: 'Practices such as no-till farming, crop rotation and crop-livestock-forest integration reduce soil erosion, save water and increase productivity at the same time.',
    pilar2_titulo: 'Circular Economy',
    pilar2_desc: 'Agricultural waste such as straw and manure becomes energy, compost and biofertilizers. Nothing is lost: everything is transformed into more production with less environmental impact.',
    pilar3_titulo: 'Environmental Citizenship',
    pilar3_desc: 'The countryside needs guardians. From school, each student learns that consumer choices, proper waste disposal and preservation of springs are concrete acts of citizenship.',
    tec_eyebrow: 'Innovation in the Field',
    tec_titulo: 'Sustainable Technologies',
    tec_intro: 'The modern farmer has tools that once seemed like science fiction. See three examples already transforming Brazilian agriculture:',
    drone_credito: '📷 Photo: Pexels / Agricultural Drone Photo',
    drone_titulo: 'Precision Agriculture with Drones',
    drone_desc: 'Drones equipped with multispectral cameras fly over crops and identify areas with nutritional deficiencies, pests or water stress with centimeter precision. This allows the producer to apply inputs only where needed, reducing pesticide use by up to 40% and saving water and fuel. The result is healthier crops and a more preserved environment.',
    irri_credito: '📷 Photo: Pexels / Drip Irrigation Photo',
    irrigacao_titulo: 'Smart Drip Irrigation',
    irri_desc: 'The drip irrigation system delivers water directly to the plant root, drop by drop, controlled by soil moisture sensors connected to the internet. Sensors monitor each species water needs in real time and irrigate only when necessary. Compared to conventional sprinkler irrigation, smart drip saves up to 60% of water, a vital resource that is increasingly scarce on the planet.',
    solar_credito: '📷 Photo: Pexels / Rural Solar Energy Photo',
    solar_titulo: 'Rural Photovoltaic Solar Energy',
    solar_desc: 'Solar panels installed on rural properties generate clean electricity directly from the sun, eliminating or drastically reducing the energy bills of farms and homesteads. Surplus energy can be fed into the electrical grid, generating credits for the producer. With panel costs falling more than 80% in the last decade, solar energy has become one of the smartest and most sustainable investments for the 21st century Brazilian farmer.',
    video_eyebrow: 'Watch',
    video_titulo: 'The Field in Motion',
    video_intro: 'See the beauty and strength of sustainable agribusiness through the images below.',
    video_credito: '🎬 Video by: Fernando Sánchez Aranguren (Pexels)',
    video_fallback: 'Your browser does not support HTML5 video playback.',
    apoio_eyebrow: 'Get Involved',
    apoio_titulo: 'Support This Project',
    apoio_intro: 'Do you believe in a more sustainable agro? Show your support by clicking below!',
    apoio_contador: 'This project has already received {N} endorsements!',
    apoio_carregando: 'Loading endorsements...',
    apoio_btn: 'Support Project',
    apoio_ja_realizado: 'This browser has already registered an endorsement.',
    apoio_registrando: 'Registering endorsement...',
    apoio_erro: 'It was not possible to register the endorsement now. Check the Firebase configuration.',
    apoio_offline: 'Counter temporarily unavailable.',
    contato_eyebrow: 'Contact Us',
    contato_titulo: 'Leave Your Suggestion',
    contato_intro: 'Do you have an idea to make the project even better? Share it with us!',
    label_nome: 'Full name',
    placeholder_nome: 'Enter your full name',
    label_email: 'E-mail (optional)',
    placeholder_email: 'youremail@example.com',
    label_mensagem: 'Your suggestion or message',
    placeholder_msg: 'Write your suggestion here...',
    btn_enviar: 'Send Suggestion',
    form_sucesso: 'Suggestion sent successfully! Thank you for your contribution.',
    form_erro_nome: 'Please fill in your name.',
    form_erro_msg: 'Please write your message.',
    rodape_titulo: 'Agrinho 2026',
    rodape_subtitulo: 'SENAR · Paraná',
    rodape_copy: '© 2026 Agrinho Contest - SENAR Paraná - Colégio Estadual Vinícius de Morais. Non-profit educational project.',
    rodape_nav_sobre: 'About',
    rodape_nav_tema: 'Theme',
    rodape_nav_tecnologias: 'Technologies',
    rodape_nav_video: 'Video',
    rodape_nav_contato: 'Contact'
  },

  es: {
    page_title: 'Agrinho 2026 - Agro fuerte, futuro sostenible',
    label_idioma: 'Idioma:',
    label_visual: 'Visual:',
    label_texto: 'Texto:',
    label_audio: 'Audio:',
    btn_colorido: 'Estándar',
    btn_branco: 'L/W',
    btn_preto: 'D/B',
    btn_narrar: '🔊 Narrar Sitio',
    btn_parar: '🛑 Detener Narración',
    logo_titulo: 'Agrinho 2026',
    logo_subtitulo: 'SENAR · Paraná',
    nav_sobre: 'Acerca de',
    nav_tema: 'Tema',
    nav_tecnologias: 'Tecnologías',
    nav_video: 'Video',
    nav_apoio: 'Apoyar',
    nav_contato: 'Contacto',
    hero_eyebrow: 'Concurso Agrinho 2026',
    hero_titulo: 'Agro fuerte,\nfuturo sostenible',
    hero_subtitulo: 'Equilibrio entre producción y medio ambiente',
    hero_btn_conhecer: 'Conocer el Proyecto',
    hero_btn_apoiar: '👍 Apoyar Ahora',
    sobre_eyebrow: 'El Programa',
    sobre_titulo: '¿Qué es Agrinho?',
    sobre_p1: 'El Programa Agrinho es una iniciativa de SENAR Paraná que existe desde hace más de 25 años, conectando la educación del campo y la ciudad a través de temas como salud, ciudadanía y, en esta edición, sostenibilidad agrícola.',
    sobre_p2: 'En 2026, el tema invita a los estudiantes a reflexionar sobre cómo el agronegocio brasileño puede ser económicamente fuerte sin comprometer los recursos naturales para las próximas generaciones. Tecnología, conciencia y responsabilidad van de la mano.',
    sobre_p3: 'Este sitio fue creado como proyecto de participación del Colégio Estadual Vinícius de Morais, explorando conceptos de producción sostenible, innovación tecnológica en el campo y el papel de cada ciudadano en la construcción de un futuro más verde.',
    estat_anos: 'Años de Programa',
    estat_municipios: 'Municipios Participantes',
    estat_alunos: 'Alumnos Impactados',
    tema_eyebrow: 'El Desafío',
    tema_titulo: 'Producción y Naturaleza en Equilibrio',
    tema_intro: 'Brasil es uno de los mayores productores de alimentos del mundo. Pero, ¿cómo garantizar que esa producción respete el planeta? Tres pilares sostienen esta respuesta:',
    pilar1_titulo: 'Agropecuaria Responsable',
    pilar1_desc: 'Prácticas como la siembra directa, la rotación de cultivos y la integración cultivo-ganadería-forestal reducen la erosión del suelo, ahorran agua y aumentan la productividad al mismo tiempo.',
    pilar2_titulo: 'Economía Circular',
    pilar2_desc: 'Los residuos agrícolas como la paja y el estiércol se convierten en energía, compostaje y biofertilizantes. Nada se pierde: todo se transforma en más producción con menos impacto ambiental.',
    pilar3_titulo: 'Ciudadanía Ambiental',
    pilar3_desc: 'El campo necesita guardianes. Desde la escuela, cada alumno aprende que las elecciones de consumo, la correcta eliminación de residuos y la preservación de los manantiales son actos de ciudadanía concreta.',
    tec_eyebrow: 'Innovación en el Campo',
    tec_titulo: 'Tecnologías Sostenibles',
    tec_intro: 'El agricultor moderno cuenta con herramientas que antes parecían ciencia ficción. Vea tres ejemplos que ya transforman el agro brasileño:',
    drone_credito: '📷 Foto: Pexels / Foto de Dron Agrícola',
    drone_titulo: 'Agricultura de Precisión con Drones',
    drone_desc: 'Los drones equipados con cámaras multiespectrales sobrevuelan los cultivos e identifican áreas con deficiencia nutricional, plagas o estrés hídrico con precisión centimétrica. Esto permite al productor aplicar insumos solo donde es necesario, reduciendo el uso de agroquímicos hasta en un 40% y ahorrando agua y combustible. El resultado es un cultivo más saludable y un ambiente más preservado.',
    irri_credito: '📷 Foto: Pexels / Foto de Riego por Goteo',
    irrigacao_titulo: 'Riego Inteligente por Goteo',
    irri_desc: 'El sistema de riego por goteo entrega agua directamente a la raíz de la planta, gota a gota, controlado por sensores de humedad del suelo conectados a internet. Los sensores monitorean en tiempo real la necesidad hídrica de cada especie y riegan solo cuando es necesario. En comparación con el riego convencional por aspersión, el goteo inteligente ahorra hasta un 60% de agua, un recurso vital cada vez más escaso en el planeta.',
    solar_credito: '📷 Foto: Pexels / Foto de Energía Solar Rural',
    solar_titulo: 'Energía Solar Fotovoltaica Rural',
    solar_desc: 'Los paneles solares instalados en propiedades rurales generan electricidad limpia directamente del sol, eliminando o reduciendo drásticamente la factura energética de granjas y haciendas. La energía excedente puede inyectarse en la red eléctrica, generando créditos para el productor. Con el costo de los paneles cayendo más del 80% en la última década, la energía solar se ha convertido en una de las inversiones más inteligentes y sostenibles para el agricultor brasileño del siglo XXI.',
    video_eyebrow: 'Mire',
    video_titulo: 'El Campo en Movimiento',
    video_intro: 'Vea la belleza y la fuerza del agronegocio sostenible a través de las imágenes a continuación.',
    video_credito: '🎬 Video de: Fernando Sánchez Aranguren (Pexels)',
    video_fallback: 'Su navegador no es compatible con la reproducción de video HTML5.',
    apoio_eyebrow: 'Participa',
    apoio_titulo: 'Apoya Este Proyecto',
    apoio_intro: '¿Crees en un agro más sostenible? ¡Demuestra tu apoyo haciendo clic abajo!',
    apoio_contador: '¡Este proyecto ya recibió {N} apoyos!',
    apoio_carregando: 'Cargando apoyos...',
    apoio_btn: 'Apoyar Proyecto',
    apoio_ja_realizado: 'Este navegador ya registró un apoyo.',
    apoio_registrando: 'Registrando apoyo...',
    apoio_erro: 'No fue posible registrar el apoyo ahora. Verifique la configuración de Firebase.',
    apoio_offline: 'Contador temporalmente no disponible.',
    contato_eyebrow: 'Contáctanos',
    contato_titulo: 'Deja tu Sugerencia',
    contato_intro: '¿Tienes una idea para hacer el proyecto aún mejor? ¡Compártela con nosotros!',
    label_nome: 'Nombre completo',
    placeholder_nome: 'Escribe tu nombre completo',
    label_email: 'Correo electrónico (opcional)',
    placeholder_email: 'tucorreo@ejemplo.com',
    label_mensagem: 'Tu sugerencia o mensaje',
    placeholder_msg: 'Escribe tu sugerencia aquí...',
    btn_enviar: 'Enviar Sugerencia',
    form_sucesso: '¡Sugerencia enviada con éxito! Gracias por tu contribución.',
    form_erro_nome: 'Por favor, completa tu nombre.',
    form_erro_msg: 'Por favor, escribe tu mensaje.',
    rodape_titulo: 'Agrinho 2026',
    rodape_subtitulo: 'SENAR · Paraná',
    rodape_copy: '© 2026 Concurso Agrinho - SENAR Paraná - Colégio Estadual Vinícius de Morais. Proyecto educativo sin fines de lucro.',
    rodape_nav_sobre: 'Acerca de',
    rodape_nav_tema: 'Tema',
    rodape_nav_tecnologias: 'Tecnologías',
    rodape_nav_video: 'Video',
    rodape_nav_contato: 'Contacto'
  }
};

/* ============================================================
   ESTADO GLOBAL
   ============================================================ */

var idiomaAtivo = 'pt';
var temaAtivo = 'padrao';
var totalApoios = 0;
var tamanhoFonte = 16;
var narracaoAtiva = false;
var narracaoPreparando = false;
var utteranceAtual = null;
var firebaseDisponivel = false;
var firestoreDb = null;
var unsubscribeApoios = null;
var apoioEmProcessamento = false;

var FONTE_MINIMA = 10;
var FONTE_MAXIMA = 26;
var PASSO_FONTE = 2;
var STORAGE_APOIO_ID = 'agrinho2026_apoio_id';
var STORAGE_APOIO_CONFIRMADO = 'agrinho2026_apoio_confirmado';

var MAPA_LANG_PRINCIPAL = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES'
};

var MAPA_VOZ_LANG = {
  pt: ['pt-BR', 'pt-PT', 'pt'],
  en: ['en-US', 'en-GB', 'en'],
  es: ['es-ES', 'es-MX', 'es-US', 'es-419', 'es']
};

var MAPA_DOM = [
  { id: 'label-idioma', chave: 'label_idioma', prop: 'textContent' },
  { id: 'label-visual', chave: 'label_visual', prop: 'textContent' },
  { id: 'label-texto', chave: 'label_texto', prop: 'textContent' },
  { id: 'label-audio', chave: 'label_audio', prop: 'textContent' },
  { id: 'btn-colorido', chave: 'btn_colorido', prop: 'textContent' },
  { id: 'btn-branco', chave: 'btn_branco', prop: 'textContent' },
  { id: 'btn-preto', chave: 'btn_preto', prop: 'textContent' },
  { id: 'logo-titulo-txt', chave: 'logo_titulo', prop: 'textContent' },
  { id: 'logo-subtitulo-txt', chave: 'logo_subtitulo', prop: 'textContent' },
  { id: 'nav-sobre', chave: 'nav_sobre', prop: 'textContent' },
  { id: 'nav-tema', chave: 'nav_tema', prop: 'textContent' },
  { id: 'nav-tecnologias', chave: 'nav_tecnologias', prop: 'textContent' },
  { id: 'nav-video', chave: 'nav_video', prop: 'textContent' },
  { id: 'nav-apoio', chave: 'nav_apoio', prop: 'textContent' },
  { id: 'nav-contato', chave: 'nav_contato', prop: 'textContent' },
  { id: 'hero-eyebrow-txt', chave: 'hero_eyebrow', prop: 'textContent' },
  { id: 'hero-titulo', chave: 'hero_titulo', prop: 'innerHTML', newline: true },
  { id: 'hero-subtitulo-txt', chave: 'hero_subtitulo', prop: 'textContent' },
  { id: 'hero-btn-conhecer', chave: 'hero_btn_conhecer', prop: 'textContent' },
  { id: 'hero-btn-apoiar', chave: 'hero_btn_apoiar', prop: 'textContent' },
  { id: 'sobre-eyebrow-txt', chave: 'sobre_eyebrow', prop: 'textContent' },
  { id: 'sobre-titulo', chave: 'sobre_titulo', prop: 'textContent' },
  { id: 'sobre-p1', chave: 'sobre_p1', prop: 'textContent' },
  { id: 'sobre-p2', chave: 'sobre_p2', prop: 'textContent' },
  { id: 'sobre-p3', chave: 'sobre_p3', prop: 'textContent' },
  { id: 'estat-anos', chave: 'estat_anos', prop: 'textContent' },
  { id: 'estat-municipios', chave: 'estat_municipios', prop: 'textContent' },
  { id: 'estat-alunos', chave: 'estat_alunos', prop: 'textContent' },
  { id: 'tema-eyebrow-txt', chave: 'tema_eyebrow', prop: 'textContent' },
  { id: 'tema-titulo', chave: 'tema_titulo', prop: 'textContent' },
  { id: 'tema-intro-txt', chave: 'tema_intro', prop: 'textContent' },
  { id: 'pilar1-titulo', chave: 'pilar1_titulo', prop: 'textContent' },
  { id: 'pilar1-desc', chave: 'pilar1_desc', prop: 'textContent' },
  { id: 'pilar2-titulo', chave: 'pilar2_titulo', prop: 'textContent' },
  { id: 'pilar2-desc', chave: 'pilar2_desc', prop: 'textContent' },
  { id: 'pilar3-titulo', chave: 'pilar3_titulo', prop: 'textContent' },
  { id: 'pilar3-desc', chave: 'pilar3_desc', prop: 'textContent' },
  { id: 'tec-eyebrow-txt', chave: 'tec_eyebrow', prop: 'textContent' },
  { id: 'tec-titulo', chave: 'tec_titulo', prop: 'textContent' },
  { id: 'tec-intro-txt', chave: 'tec_intro', prop: 'textContent' },
  { id: 'drone-credito-txt', chave: 'drone_credito', prop: 'textContent' },
  { id: 'drone-titulo', chave: 'drone_titulo', prop: 'textContent' },
  { id: 'drone-text-span', chave: 'drone_desc', prop: 'textContent' },
  { id: 'irri-credito-txt', chave: 'irri_credito', prop: 'textContent' },
  { id: 'irrigacao-titulo', chave: 'irrigacao_titulo', prop: 'textContent' },
  { id: 'irri-text-span', chave: 'irri_desc', prop: 'textContent' },
  { id: 'solar-credito-txt', chave: 'solar_credito', prop: 'textContent' },
  { id: 'solar-titulo', chave: 'solar_titulo', prop: 'textContent' },
  { id: 'solar-text-span', chave: 'solar_desc', prop: 'textContent' },
  { id: 'video-eyebrow-txt', chave: 'video_eyebrow', prop: 'textContent' },
  { id: 'video-titulo', chave: 'video_titulo', prop: 'textContent' },
  { id: 'video-intro-txt', chave: 'video_intro', prop: 'textContent' },
  { id: 'video-credito-txt', chave: 'video_credito', prop: 'textContent' },
  { id: 'video-fallback-txt', chave: 'video_fallback', prop: 'textContent' },
  { id: 'apoio-eyebrow-txt', chave: 'apoio_eyebrow', prop: 'textContent' },
  { id: 'apoio-titulo', chave: 'apoio_titulo', prop: 'textContent' },
  { id: 'apoio-intro-txt', chave: 'apoio_intro', prop: 'textContent' },
  { id: 'apoio-btn-txt', chave: 'apoio_btn', prop: 'textContent' },
  { id: 'contato-eyebrow-txt', chave: 'contato_eyebrow', prop: 'textContent' },
  { id: 'contato-titulo', chave: 'contato_titulo', prop: 'textContent' },
  { id: 'contato-intro-txt', chave: 'contato_intro', prop: 'textContent' },
  { id: 'label-nome', chave: 'label_nome', prop: 'textContent' },
  { id: 'label-email', chave: 'label_email', prop: 'textContent' },
  { id: 'label-mensagem', chave: 'label_mensagem', prop: 'textContent' },
  { id: 'campo-nome', chave: 'placeholder_nome', prop: 'placeholder' },
  { id: 'campo-email', chave: 'placeholder_email', prop: 'placeholder' },
  { id: 'campo-mensagem', chave: 'placeholder_msg', prop: 'placeholder' },
  { id: 'btn-enviar-txt', chave: 'btn_enviar', prop: 'textContent' },
  { id: 'rodape-titulo-txt', chave: 'rodape_titulo', prop: 'textContent' },
  { id: 'rodape-subtitulo-txt', chave: 'rodape_subtitulo', prop: 'textContent' },
  { id: 'rodape-copy-txt', chave: 'rodape_copy', prop: 'textContent' },
  { id: 'rodape-nav-sobre', chave: 'rodape_nav_sobre', prop: 'textContent' },
  { id: 'rodape-nav-tema', chave: 'rodape_nav_tema', prop: 'textContent' },
  { id: 'rodape-nav-tecnologias', chave: 'rodape_nav_tecnologias', prop: 'textContent' },
  { id: 'rodape-nav-video', chave: 'rodape_nav_video', prop: 'textContent' },
  { id: 'rodape-nav-contato', chave: 'rodape_nav_contato', prop: 'textContent' }
];

/* ============================================================
   UTILITÁRIOS
   ============================================================ */

function obterElemento(id) {
  return document.getElementById(id);
}

function definirTexto(id, texto) {
  var el = obterElemento(id);
  if (el) el.textContent = texto;
}

function obterDict() {
  return TRADUCOES[idiomaAtivo] || TRADUCOES.pt;
}

function gerarIdVisitante() {
  if (window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }

  return 'visitante-' + Date.now() + '-' + Math.random().toString(36).slice(2);
}

function obterIdVisitante() {
  var id = sessionStorage.getItem(STORAGE_APOIO_ID);

  if (!id) {
    id = gerarIdVisitante();
    sessionStorage.setItem(STORAGE_APOIO_ID, id);
  }

  return id;
}

function navegadorJaApoiou() {
  return sessionStorage.getItem(STORAGE_APOIO_CONFIRMADO) === 'true';
}

function marcarNavegadorComoApoiador() {
  sessionStorage.setItem(STORAGE_APOIO_CONFIRMADO, 'true');
}

/* ============================================================
   SISTEMA MULTI-IDIOMA
   ============================================================ */

function mudarIdioma(lang) {
  if (!TRADUCOES[lang]) return;

  var estavaNarrando = narracaoAtiva || narracaoPreparando;

  if (estavaNarrando) {
    pararNarracao();
  }

  idiomaAtivo = lang;
  aplicarTraduzoes(lang);
  atualizarBotoesIdioma(lang);
  atualizarContadorApoios(totalApoios);
  atualizarBotaoNarrador();
  atualizarStatusApoio();

  document.documentElement.lang = MAPA_LANG_PRINCIPAL[lang] || lang;
  document.title = TRADUCOES[lang].page_title;

  limparMensagensFormulario();

  if (estavaNarrando) {
    iniciarNarracao();
  }
}

function aplicarTraduzoes(lang) {
  var dict = TRADUCOES[lang];

  MAPA_DOM.forEach(function (entrada) {
    var el = obterElemento(entrada.id);
    var valor = dict[entrada.chave];

    if (!el || valor === undefined) return;

    if (entrada.prop === 'placeholder') {
      el.placeholder = valor;
    } else if (entrada.prop === 'innerHTML' && entrada.newline) {
      el.innerHTML = valor.split('\n').map(escapeHtml).join('<br />');
    } else {
      el.textContent = valor;
    }
  });
}

function escapeHtml(valor) {
  return String(valor)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function atualizarBotoesIdioma(lang) {
  var botoes = [
    { id: 'btn-pt', lang: 'pt' },
    { id: 'btn-en', lang: 'en' },
    { id: 'btn-es', lang: 'es' }
  ];

  botoes.forEach(function (item) {
    var btn = obterElemento(item.id);
    if (!btn) return;

    var ativo = item.lang === lang;
    btn.classList.toggle('btn-ativo', ativo);
    btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  });
}

/* ============================================================
   TEMAS VISUAIS
   ============================================================ */

function mudarTema(tema) {
  var corpo = document.body;

  if (!corpo) return;

  corpo.classList.remove('tema-branco', 'tema-preto');

  atualizarBotaoTema('btn-colorido', tema === 'padrao');
  atualizarBotaoTema('btn-branco', tema === 'branco');
  atualizarBotaoTema('btn-preto', tema === 'preto');

  if (tema === 'branco') {
    corpo.classList.add('tema-branco');
  } else if (tema === 'preto') {
    corpo.classList.add('tema-preto');
  } else {
    tema = 'padrao';
  }

  temaAtivo = tema;
}

function atualizarBotaoTema(id, ativo) {
  var btn = obterElemento(id);
  if (!btn) return;

  btn.classList.toggle('btn-ativo', ativo);
  btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
}

/* ============================================================
   CONTROLE DE FONTE
   ============================================================ */

function aplicarTamanhoFonte() {
  document.documentElement.style.fontSize = tamanhoFonte + 'px';
}

function aumentarFonte() {
  if (tamanhoFonte >= FONTE_MAXIMA) return;
  tamanhoFonte += PASSO_FONTE;
  aplicarTamanhoFonte();
}

function diminuirFonte() {
  if (tamanhoFonte <= FONTE_MINIMA) return;
  tamanhoFonte -= PASSO_FONTE;
  aplicarTamanhoFonte();
}

/* ============================================================
   NARRAÇÃO COM WEB SPEECH API
   ============================================================ */

function speechDisponivel() {
  return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

function obterVozesQuandoDisponiveis() {
  return new Promise(function (resolve) {
    if (!speechDisponivel()) {
      resolve([]);
      return;
    }

    var synth = window.speechSynthesis;
    var vozes = synth.getVoices();

    if (vozes.length > 0) {
      resolve(vozes);
      return;
    }

    var finalizado = false;

    function concluir() {
      if (finalizado) return;
      finalizado = true;
      synth.removeEventListener('voiceschanged', concluir);
      resolve(synth.getVoices());
    }

    synth.addEventListener('voiceschanged', concluir);

    setTimeout(concluir, 1200);
  });
}

function selecionarVoz(vozes, lang) {
  var preferencias = MAPA_VOZ_LANG[lang] || [lang];

  for (var i = 0; i < preferencias.length; i++) {
    for (var j = 0; j < vozes.length; j++) {
      if (vozes[j].lang && vozes[j].lang.toLowerCase() === preferencias[i].toLowerCase()) {
        return vozes[j];
      }
    }
  }

  for (var p = 0; p < preferencias.length; p++) {
    var prefixo = preferencias[p].split('-')[0].toLowerCase();

    for (var v = 0; v < vozes.length; v++) {
      if (vozes[v].lang && vozes[v].lang.toLowerCase().indexOf(prefixo) === 0) {
        return vozes[v];
      }
    }
  }

  return null;
}

function montarTextoNarracao() {
  var ids = [
    'hero-eyebrow-txt',
    'hero-titulo',
    'hero-subtitulo-txt',
    'sobre-titulo',
    'sobre-p1',
    'sobre-p2',
    'sobre-p3',
    'tema-titulo',
    'tema-intro-txt',
    'pilar1-titulo',
    'pilar1-desc',
    'pilar2-titulo',
    'pilar2-desc',
    'pilar3-titulo',
    'pilar3-desc',
    'tec-titulo',
    'tec-intro-txt',
    'drone-titulo',
    'drone-text-span',
    'irrigacao-titulo',
    'irri-text-span',
    'solar-titulo',
    'solar-text-span',
    'video-titulo',
    'video-intro-txt',
    'apoio-titulo',
    'apoio-intro-txt',
    'contato-titulo',
    'contato-intro-txt'
  ];

  var partes = [];
  var ultimoTexto = '';

  ids.forEach(function (id) {
    var el = obterElemento(id);
    if (!el) return;

    var texto = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();

    if (!texto || texto === ultimoTexto) return;

    partes.push(texto);
    ultimoTexto = texto;
  });

  return partes.join('. ');
}

function alternarNarracao() {
  if (narracaoAtiva || narracaoPreparando) {
    pararNarracao();
    return;
  }

  iniciarNarracao();
}

function iniciarNarracao() {
  if (!speechDisponivel()) {
    alert('Seu navegador não suporta a API de síntese de voz.');
    return;
  }

  if (narracaoAtiva || narracaoPreparando) {
    pararNarracao();
  }

  var texto = montarTextoNarracao();

  if (!texto) return;

  narracaoPreparando = true;
  atualizarBotaoNarrador();

  window.speechSynthesis.cancel();

  obterVozesQuandoDisponiveis().then(function (vozes) {
    if (!narracaoPreparando) return;

    var lang = idiomaAtivo;
    var voz = selecionarVoz(vozes, lang);
    var fala = new SpeechSynthesisUtterance(texto);

    utteranceAtual = fala;

    if (voz) {
      fala.voice = voz;
      fala.lang = voz.lang;
    } else {
      fala.lang = MAPA_LANG_PRINCIPAL[lang] || lang;
    }

    fala.rate = lang === 'es' ? 0.88 : 0.92;
    fala.pitch = 1;
    fala.volume = 1;

    fala.onstart = function () {
      narracaoPreparando = false;
      narracaoAtiva = true;
      atualizarBotaoNarrador();
    };

    fala.onend = function () {
      if (utteranceAtual !== fala) return;
      narracaoPreparando = false;
      narracaoAtiva = false;
      utteranceAtual = null;
      atualizarBotaoNarrador();
    };

    fala.onerror = function (evento) {
      if (evento && evento.error === 'interrupted') return;
      if (utteranceAtual !== fala) return;
      narracaoPreparando = false;
      narracaoAtiva = false;
      utteranceAtual = null;
      atualizarBotaoNarrador();
    };

    window.speechSynthesis.cancel();

    setTimeout(function () {
      if (!narracaoPreparando || utteranceAtual !== fala) return;
      window.speechSynthesis.speak(fala);
    }, 80);
  });
}

function pararNarracao() {
  if (speechDisponivel()) {
    window.speechSynthesis.cancel();
  }

  narracaoPreparando = false;
  narracaoAtiva = false;
  utteranceAtual = null;
  atualizarBotaoNarrador();
}

function atualizarBotaoNarrador() {
  var btn = obterElemento('btn-narrar');
  if (!btn) return;

  var dict = obterDict();
  var ativo = narracaoAtiva || narracaoPreparando;

  btn.textContent = ativo ? dict.btn_parar : dict.btn_narrar;
  btn.setAttribute('aria-pressed', ativo ? 'true' : 'false');
}

/* ============================================================
   FIREBASE / CONTADOR GLOBAL DE APOIOS
   ============================================================ */

function firebaseConfigValida(config) {
  if (!config) return false;
  if (!config.apiKey || config.apiKey.indexOf('COLE_AQUI') !== -1) return false;
  if (!config.projectId || config.projectId.indexOf('COLE_AQUI') !== -1) return false;
  if (!config.appId || config.appId.indexOf('COLE_AQUI') !== -1) return false;
  return true;
}

function inicializarFirebase() {
  var dict = obterDict();

  if (!window.firebase || !window.firebase.firestore) {
    firebaseDisponivel = false;
    definirTexto('texto-apoios', dict.apoio_offline);
    atualizarStatusApoio();
    return;
  }

  if (!firebaseConfigValida(window.FIREBASE_CONFIG)) {
    firebaseDisponivel = false;
    definirTexto('texto-apoios', dict.apoio_offline);
    atualizarStatusApoio();
    return;
  }

  try {
    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(window.FIREBASE_CONFIG);
    }

    firestoreDb = window.firebase.firestore();
    firebaseDisponivel = true;

    iniciarListenerApoios();
  } catch (erro) {
    firebaseDisponivel = false;
    definirTexto('texto-apoios', dict.apoio_offline);
    atualizarStatusApoio();
  }
}

function obterDocContador() {
  return firestoreDb.collection('agrinho2026').doc('apoios');
}

function obterDocVisitante(idVisitante) {
  return firestoreDb.collection('agrinho2026_apoios_visitantes').doc(idVisitante);
}

function iniciarListenerApoios() {
  if (!firebaseDisponivel || !firestoreDb) return;

  if (typeof unsubscribeApoios === 'function') {
    unsubscribeApoios();
  }

  unsubscribeApoios = obterDocContador().onSnapshot(function (doc) {
    var dados = doc.exists ? doc.data() : {};
    var total = Number(dados.total || 0);

    totalApoios = Number.isFinite(total) && total >= 0 ? total : 0;

    atualizarContadorApoios(totalApoios);
    atualizarStatusApoio();
  }, function () {
    definirTexto('texto-apoios', obterDict().apoio_offline);
  });
}

function atualizarContadorApoios(total) {
  var dict = obterDict();
  var numero = Number(total || 0);
  var texto = dict.apoio_contador.replace('{N}', numero);

  definirTexto('texto-apoios', texto);
}

function atualizarStatusApoio(mensagemTemporaria) {
  var dict = obterDict();
  var btn = obterElemento('btn-apoiar');
  var status = obterElemento('apoio-status');

  if (status) {
    if (mensagemTemporaria) {
      status.textContent = mensagemTemporaria;
    } else if (navegadorJaApoiou()) {
      status.textContent = dict.apoio_ja_realizado;
    } else if (!firebaseDisponivel) {
      status.textContent = dict.apoio_offline;
    } else {
      status.textContent = '';
    }
  }

  if (btn) {
    var desativado = apoioEmProcessamento || navegadorJaApoiou() || !firebaseDisponivel;
    btn.disabled = desativado;
    btn.setAttribute('aria-disabled', desativado ? 'true' : 'false');
  }
}

function incrementarApoio() {
  if (!firebaseDisponivel || !firestoreDb) {
    atualizarStatusApoio(obterDict().apoio_erro);
    return;
  }

  if (apoioEmProcessamento || navegadorJaApoiou()) {
    atualizarStatusApoio();
    return;
  }

  apoioEmProcessamento = true;
  atualizarStatusApoio(obterDict().apoio_registrando);

  var idVisitante = obterIdVisitante();
  var contadorRef = obterDocContador();
  var visitanteRef = obterDocVisitante(idVisitante);
  var agora = window.firebase.firestore.FieldValue.serverTimestamp();

  firestoreDb.runTransaction(function (transaction) {
    return transaction.get(visitanteRef).then(function (visitanteDoc) {
      if (visitanteDoc.exists) {
        return false;
      }

      return transaction.get(contadorRef).then(function (contadorDoc) {
        var totalAtual = 0;

        if (contadorDoc.exists) {
          totalAtual = Number(contadorDoc.data().total || 0);
        }

        transaction.set(visitanteRef, {
          createdAt: agora,
          userAgent: navigator.userAgent.slice(0, 180)
        });

        transaction.set(contadorRef, {
          total: totalAtual + 1,
          updatedAt: agora
        }, { merge: true });

        return true;
      });
    });
  }).then(function (registrou) {
    if (registrou) {
      marcarNavegadorComoApoiador();
      animarBotaoApoio();
    } else {
      marcarNavegadorComoApoiador();
    }

    apoioEmProcessamento = false;
    atualizarStatusApoio();
  }).catch(function () {
    apoioEmProcessamento = false;
    atualizarStatusApoio(obterDict().apoio_erro);
  });
}

function animarBotaoApoio() {
  var btn = obterElemento('btn-apoiar');
  if (!btn) return;

  btn.classList.remove('apoiar-animado');
  void btn.offsetWidth;
  btn.classList.add('apoiar-animado');
}

/* ============================================================
   FORMULÁRIO
   ============================================================ */

function limparMensagensFormulario() {
  definirTexto('erro-nome', '');
  definirTexto('erro-msg', '');

  var retorno = obterElemento('form-retorno');
  if (retorno) {
    retorno.textContent = '';
    retorno.className = '';
  }
}

function enviarFormulario(evento) {
  if (evento) evento.preventDefault();

  var dict = obterDict();
  var campNome = obterElemento('campo-nome');
  var campMsg = obterElemento('campo-mensagem');
  var erroNome = obterElemento('erro-nome');
  var erroMsg = obterElemento('erro-msg');
  var retorno = obterElemento('form-retorno');

  if (!campNome || !campMsg || !erroNome || !erroMsg || !retorno) return;

  erroNome.textContent = '';
  erroMsg.textContent = '';
  retorno.textContent = '';
  retorno.className = '';

  var nomeValor = campNome.value.trim();
  var msgValor = campMsg.value.trim();
  var temErro = false;

  if (nomeValor === '') {
    erroNome.textContent = dict.form_erro_nome;
    campNome.focus();
    temErro = true;
  }

  if (msgValor === '') {
    erroMsg.textContent = dict.form_erro_msg;

    if (!temErro) {
      campMsg.focus();
    }

    temErro = true;
  }

  if (temErro) return;

  retorno.textContent = dict.form_sucesso;
  retorno.className = 'sucesso';

  campNome.value = '';
  campMsg.value = '';

  setTimeout(function () {
    retorno.textContent = '';
    retorno.className = '';
  }, 6000);
}

/* ============================================================
   MENU MOBILE
   ============================================================ */

function toggleMenuMobile() {
  var menu = obterElemento('menu-nav');
  var btn = obterElemento('btn-hamburger');

  if (!menu || !btn) return;

  var aberto = menu.classList.contains('menu-aberto');

  menu.classList.toggle('menu-aberto', !aberto);
  btn.setAttribute('aria-expanded', aberto ? 'false' : 'true');
  btn.setAttribute('aria-label', aberto ? 'Abrir menu' : 'Fechar menu');
  btn.textContent = aberto ? '\u2630' : '\u2715';
}

function fecharMenuMobile() {
  var menu = obterElemento('menu-nav');
  var btn = obterElemento('btn-hamburger');

  if (!menu || !btn) return;

  menu.classList.remove('menu-aberto');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Abrir menu');
  btn.textContent = '\u2630';
}

function configurarMenuMobile() {
  var links = document.querySelectorAll('#menu-nav a');

  links.forEach(function (link) {
    link.addEventListener('click', fecharMenuMobile);
  });

  document.addEventListener('click', function (evento) {
    var menu = obterElemento('menu-nav');
    var cabecalho = obterElemento('cabecalho');

    if (!menu || !cabecalho) return;

    if (!cabecalho.contains(evento.target) && menu.classList.contains('menu-aberto')) {
      fecharMenuMobile();
    }
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') {
      fecharMenuMobile();
      pararNarracao();
    }
  });
}

/* ============================================================
   ANIMAÇÃO DE SCROLL
   ============================================================ */

function configurarAnimacaoScroll() {
  var alvos = document.querySelectorAll('section:not(#hero), .pilar-card, .tec-item, .estatistica-card');

  if (!('IntersectionObserver' in window)) {
    alvos.forEach(function (alvo) {
      alvo.classList.add('visivel');
    });
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  alvos.forEach(function (alvo) {
    alvo.classList.add('secao-animada');
    observador.observe(alvo);
  });
}

/* ============================================================
   EVENT LISTENERS
   ============================================================ */

function registrarEventListeners() {
  var eventos = {
    'btn-pt': function () { mudarIdioma('pt'); },
    'btn-en': function () { mudarIdioma('en'); },
    'btn-es': function () { mudarIdioma('es'); },
    'btn-colorido': function () { mudarTema('padrao'); },
    'btn-branco': function () { mudarTema('branco'); },
    'btn-preto': function () { mudarTema('preto'); },
    'btn-Amais': aumentarFonte,
    'btn-Amenos': diminuirFonte,
    'btn-narrar': alternarNarracao,
    'btn-hamburger': toggleMenuMobile,
    'btn-apoiar': incrementarApoio
  };

  Object.keys(eventos).forEach(function (id) {
    var el = obterElemento(id);

    if (el) {
      el.addEventListener('click', eventos[id]);
    }
  });

  var form = obterElemento('form-contato');

  if (form) {
    form.addEventListener('submit', enviarFormulario);
  }

  window.addEventListener('beforeunload', function () {
    pararNarracao();

    if (typeof unsubscribeApoios === 'function') {
      unsubscribeApoios();
    }
  });
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  registrarEventListeners();
  configurarMenuMobile();
  configurarAnimacaoScroll();

  mudarTema(temaAtivo);
  mudarIdioma(idiomaAtivo);
  aplicarTamanhoFonte();
  inicializarFirebase();
});
