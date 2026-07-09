/**
 * ════════════════════════════════════════════════════════════════
 * SISTEMA DE TRADUÇÃO COMPLETO
 * Português (PT), Inglês (EN) e Espanhol (ES)
 * ════════════════════════════════════════════════════════════════
 */

const TRANSLATIONS = {
  pt: {
    // Logo e Header
    'logo-titulo': 'Agrinho 2026',
    'logo-subtitulo': 'SENAR · Paraná',
    
    // Navegação
    'nav-sobre': 'Sobre',
    'nav-tema': 'Tema',
    'nav-tecnologias': 'Tecnologias',
    'nav-video': 'Vídeo',
    'nav-apoio': 'Apoiar',
    'nav-contato': 'Contato',
    
    // Barra de Acessibilidade
    'label-idioma': 'Idioma:',
    'label-visual': 'Visual:',
    'label-texto': 'Texto:',
    'label-audio': 'Áudio:',
    'btn-visual-padrao': 'Padrão',
    'btn-visual-claro': 'L/W',
    'btn-visual-escuro': 'D/B',
    'btn-narrar': 'Narrar Site',
    
    // Hero
    'hero-eyebrow': 'Concurso Agrinho 2026',
    'hero-titulo': 'Agro forte, futuro sustentável',
    'hero-subtitulo': 'Equilíbrio entre produção e meio ambiente',
    'hero-btn-conhecer': 'Conhecer o Projeto',
    'hero-btn-apoiar': 'Apoiar Agora',
    
    // Sobre
    'sobre-eyebrow': 'O Programa',
    'sobre-titulo': 'O que é o Agrinho?',
    'sobre-p1': 'O Programa Agrinho é uma iniciativa do SENAR Paraná que existe há mais de 25 anos, conectando a educação do campo e da cidade por meio de temas como saúde, cidadania e sustentabilidade.',
    'sobre-p2': 'Em 2026, o tema convida estudantes a refletirem sobre como o agronegócio brasileiro pode ser economicamente forte sem comprometer os recursos naturais para as próximas gerações.',
    'sobre-p3': 'Este site foi criado como projeto de participação do Colégio Estadual Vinícius de Morais (PR), explorando conceitos de produção sustentável, inovação tecnológica e responsabilidade ambiental.',
    'estat-anos': 'Anos de Programa',
    'estat-municipios': 'Municípios Participantes',
    'estat-alunos': 'Alunos Impactados',
    
    // Tema
    'tema-eyebrow': 'O Desafio',
    'tema-titulo': 'Produção e Natureza em Equilíbrio',
    'tema-intro': 'O Brasil é um dos maiores produtores de alimentos do mundo. Mas como garantir que essa produção respeite o planeta? Três pilares sustentam essa transformação.',
    'pilar1-titulo': 'Agropecuária Responsável',
    'pilar1-desc': 'Práticas como o plantio direto, rotação de culturas e integração lavoura-pecuária-floresta reduzem a erosão do solo, poupam água e aumentam a produtividade sustentável.',
    'pilar2-titulo': 'Economia Circular',
    'pilar2-desc': 'Resíduos agrícolas como palha e esterco viram energia, compostagem e biofertilizantes. Nada se perde: tudo se transforma em mais produção com menos impacto ambiental.',
    'pilar3-titulo': 'Cidadania Ambiental',
    'pilar3-desc': 'O campo precisa de guardiões. Desde a escola, cada aluno aprende que escolhas de consumo, descarte correto do lixo e preservação de nascentes são atos de cidadania.',
    
    // Tecnologias
    'tec-eyebrow': 'Inovação no Campo',
    'tec-titulo': 'Tecnologias Sustentáveis',
    'tec-intro': 'O agricultor moderno conta com ferramentas que antes pareciam ficção científica. Veja três exemplos que já transformam o agro brasileiro:',
    'drone-titulo': 'Agricultura de Precisão com Drones',
    'drone-text': 'Drones equipados com câmeras multiespectrais sobrevoam as lavouras e identificam áreas com deficiência nutricional, pragas ou estresse hídrico com precisão milimétrica, reduzindo desperdício.',
    'drone-credito': 'Foto: Pexels / Foto de Drone Agrícola',
    'irrigacao-titulo': 'Irrigação Inteligente por Gotejamento',
    'irrigacao-text': 'O sistema de irrigação por gotejamento entrega água diretamente na raiz da planta, gota a gota, controlado por sensores de umidade do solo conectados à nuvem, economizando até 60% de água.',
    'irrigacao-credito': 'Foto: Pexels / Foto de Irrigação por Gotejamento',
    'solar-titulo': 'Energia Solar Fotovoltaica Rural',
    'solar-text': 'Painéis solares instalados em propriedades rurais geram eletricidade limpa diretamente do sol, eliminando ou reduzindo drasticamente a conta de energia e as emissões de carbono.',
    'solar-credito': 'Foto: Pexels / Foto de Energia Solar Rural',
    
    // Vídeo
    'video-eyebrow': 'Assista',
    'video-titulo': 'O Campo em Movimento',
    'video-intro': 'Veja a beleza e a força do agronegócio sustentável através das imagens abaixo.',
    'video-credito': 'Vídeo por: Fernando Sanchez Aranguren (Pexels)',
    'video-fallback': 'Seu navegador não suporta reprodução de vídeo HTML5.',
    
    // Apoio
    'apoio-eyebrow': 'Participe',
    'apoio-titulo': 'Apoie Este Projeto',
    'apoio-intro': 'Acredita num agro mais sustentável? Demonstre seu apoio clicando abaixo!',
    'apoio-carregando': 'Carregando apoios...',
    'apoio-contador': 'Este projeto já recebeu {N} apoios!',
    'apoio-btn-txt': 'Apoiar Projeto',
    'apoio-registrando': 'Registrando apoio...',
    'apoio-ja-feito': '✅ Obrigado! Seu apoio foi registrado.',
    'apoio-erro': '❌ Erro ao registrar. Tente novamente.',
    
    // Contato
    'contato-eyebrow': 'Fale Conosco',
    'contato-titulo': 'Deixe sua Sugestão',
    'contato-intro': 'Tem uma ideia para tornar o projeto ainda melhor? Compartilhe com a gente!',
    'label-nome': 'Nome completo',
    'label-email': 'E-mail (opcional)',
    'label-mensagem': 'Sua sugestão ou mensagem',
    'placeholder-nome': 'Digite seu nome completo',
    'placeholder-email': 'seuemail@exemplo.com',
    'placeholder-mensagem': 'Escreva sua sugestão aqui...',
    'btn-enviar-txt': 'Enviar Sugestão',
    'erro-nome': 'Por favor, informe seu nome completo.',
    'erro-email': 'E-mail inválido.',
    'erro-msg': 'A sugestão não pode ficar vazia.',
    'form-sucesso': '✅ Obrigado! Sua sugestão foi enviada com sucesso.',
    
    // Rodapé
    'rodape-titulo': 'Agrinho 2026',
    'rodape-subtitulo': 'SENAR · Paraná',
    'rodape-copy': '© 2026 Concurso Agrinho — SENAR Paraná — Colégio Estadual Vinícius de Morais (PR). Projeto educativo sem fins lucrativos.',
  },
  
  en: {
    'logo-titulo': 'Agrinho 2026',
    'logo-subtitulo': 'SENAR · Paraná',
    
    'nav-sobre': 'About',
    'nav-tema': 'Theme',
    'nav-tecnologias': 'Technologies',
    'nav-video': 'Video',
    'nav-apoio': 'Support',
    'nav-contato': 'Contact',
    
    'label-idioma': 'Language:',
    'label-visual': 'Visual:',
    'label-texto': 'Text:',
    'label-audio': 'Audio:',
    'btn-visual-padrao': 'Default',
    'btn-visual-claro': 'L/W',
    'btn-visual-escuro': 'D/B',
    'btn-narrar': 'Narrate Site',
    
    'hero-eyebrow': 'Agrinho Contest 2026',
    'hero-titulo': 'Strong Agriculture, Sustainable Future',
    'hero-subtitulo': 'Balance between production and environment',
    'hero-btn-conhecer': 'Learn About the Project',
    'hero-btn-apoiar': 'Support Now',
    
    'sobre-eyebrow': 'The Program',
    'sobre-titulo': 'What is Agrinho?',
    'sobre-p1': 'The Agrinho Program is an initiative by SENAR Paraná that has existed for over 25 years, connecting rural and urban education through themes such as health, citizenship and sustainability.',
    'sobre-p2': 'In 2026, the theme invites students to reflect on how Brazilian agribusiness can be economically strong without compromising natural resources for future generations.',
    'sobre-p3': 'This website was created as a participation project of the Vinícius de Morais State School (PR), exploring concepts of sustainable production, technological innovation and environmental responsibility.',
    'estat-anos': 'Years of Program',
    'estat-municipios': 'Participating Municipalities',
    'estat-alunos': 'Students Impacted',
    
    'tema-eyebrow': 'The Challenge',
    'tema-titulo': 'Production and Nature in Balance',
    'tema-intro': 'Brazil is one of the world\'s largest food producers. But how can we ensure that this production respects the planet? Three pillars support this transformation.',
    'pilar1-titulo': 'Responsible Farming',
    'pilar1-desc': 'Practices such as direct planting, crop rotation and integration of crop-livestock-forest reduce soil erosion, save water and increase sustainable productivity.',
    'pilar2-titulo': 'Circular Economy',
    'pilar2-desc': 'Agricultural waste such as straw and manure become energy, compost and biofertilizers. Nothing is wasted: everything is transformed into more production with less environmental impact.',
    'pilar3-titulo': 'Environmental Citizenship',
    'pilar3-desc': 'The countryside needs guardians. From school onwards, every student learns that consumption choices, proper waste disposal and spring preservation are acts of citizenship.',
    
    'tec-eyebrow': 'Innovation in the Field',
    'tec-titulo': 'Sustainable Technologies',
    'tec-intro': 'The modern farmer has tools that once seemed like science fiction. See three examples that are already transforming Brazilian agriculture:',
    'drone-titulo': 'Precision Agriculture with Drones',
    'drone-text': 'Drones equipped with multispectral cameras fly over crops and identify areas with nutritional deficiencies, pests or water stress with millimeter precision, reducing waste.',
    'drone-credito': 'Photo: Pexels / Agricultural Drone Photo',
    'irrigacao-titulo': 'Smart Drip Irrigation',
    'irrigacao-text': 'The drip irrigation system delivers water directly to the plant root, drop by drop, controlled by soil moisture sensors connected to the cloud, saving up to 60% of water.',
    'irrigacao-credito': 'Photo: Pexels / Drip Irrigation Photo',
    'solar-titulo': 'Rural Photovoltaic Solar Energy',
    'solar-text': 'Solar panels installed on rural properties generate clean electricity directly from the sun, drastically eliminating or reducing energy bills and carbon emissions.',
    'solar-credito': 'Photo: Pexels / Rural Solar Energy Photo',
    
    'video-eyebrow': 'Watch',
    'video-titulo': 'The Countryside in Motion',
    'video-intro': 'See the beauty and strength of sustainable agribusiness through the images below.',
    'video-credito': 'Video by: Fernando Sanchez Aranguren (Pexels)',
    'video-fallback': 'Your browser does not support HTML5 video playback.',
    
    'apoio-eyebrow': 'Participate',
    'apoio-titulo': 'Support This Project',
    'apoio-intro': 'Believe in more sustainable agriculture? Show your support by clicking below!',
    'apoio-carregando': 'Loading supports...',
    'apoio-contador': 'This project has already received {N} supporters!',
    'apoio-btn-txt': 'Support Project',
    'apoio-registrando': 'Registering support...',
    'apoio-ja-feito': '✅ Thank you! Your support has been registered.',
    'apoio-erro': '❌ Error registering. Try again.',
    
    'contato-eyebrow': 'Get in Touch',
    'contato-titulo': 'Leave Your Suggestion',
    'contato-intro': 'Have an idea to make the project even better? Share it with us!',
    'label-nome': 'Full name',
    'label-email': 'Email (optional)',
    'label-mensagem': 'Your suggestion or message',
    'placeholder-nome': 'Enter your full name',
    'placeholder-email': 'youremail@example.com',
    'placeholder-mensagem': 'Write your suggestion here...',
    'btn-enviar-txt': 'Send Suggestion',
    'erro-nome': 'Please enter your full name.',
    'erro-email': 'Invalid email.',
    'erro-msg': 'The suggestion cannot be empty.',
    'form-sucesso': '✅ Thank you! Your suggestion has been sent successfully.',
    
    'rodape-titulo': 'Agrinho 2026',
    'rodape-subtitulo': 'SENAR · Paraná',
    'rodape-copy': '© 2026 Agrinho Contest — SENAR Paraná — Vinícius de Morais State School (PR). Educational project for non-profit purposes.',
  },
  
  es: {
    'logo-titulo': 'Agrinho 2026',
    'logo-subtitulo': 'SENAR · Paraná',
    
    'nav-sobre': 'Acerca de',
    'nav-tema': 'Tema',
    'nav-tecnologias': 'Tecnologías',
    'nav-video': 'Video',
    'nav-apoio': 'Apoyar',
    'nav-contato': 'Contacto',
    
    'label-idioma': 'Idioma:',
    'label-visual': 'Visual:',
    'label-texto': 'Texto:',
    'label-audio': 'Audio:',
    'btn-visual-padrao': 'Predeterminado',
    'btn-visual-claro': 'L/W',
    'btn-visual-escuro': 'D/B',
    'btn-narrar': 'Narrar Sitio',
    
    'hero-eyebrow': 'Concurso Agrinho 2026',
    'hero-titulo': 'Agricultura fuerte, futuro sostenible',
    'hero-subtitulo': 'Equilibrio entre producción y medio ambiente',
    'hero-btn-conocer': 'Conocer el Proyecto',
    'hero-btn-apoiar': 'Apoyar Ahora',
    
    'sobre-eyebrow': 'El Programa',
    'sobre-titulo': '¿Qué es Agrinho?',
    'sobre-p1': 'El Programa Agrinho es una iniciativa de SENAR Paraná que existe desde hace más de 25 años, conectando la educación rural y urbana a través de temas como salud, ciudadanía y sostenibilidad.',
    'sobre-p2': 'En 2026, el tema invita a los estudiantes a reflexionar sobre cómo la agroindustria brasileña puede ser económicamente fuerte sin comprometer los recursos naturales para las generaciones futuras.',
    'sobre-p3': 'Este sitio web fue creado como un proyecto de participación de la Escuela Estatal Vinícius de Morais (PR), explorando conceptos de producción sostenible, innovación tecnológica y responsabilidad ambiental.',
    'estat-anos': 'Años de Programa',
    'estat-municipios': 'Municipios Participantes',
    'estat-alunos': 'Estudiantes Impactados',
    
    'tema-eyebrow': 'El Desafío',
    'tema-titulo': 'Producción y Naturaleza en Equilibrio',
    'tema-intro': 'Brasil es uno de los mayores productores de alimentos del mundo. Pero ¿cómo garantizar que esta producción respete el planeta? Tres pilares apoyan esta transformación.',
    'pilar1-titulo': 'Agricultura Responsable',
    'pilar1-desc': 'Prácticas como siembra directa, rotación de cultivos e integración de cultivo-ganadería-bosque reducen la erosión del suelo, ahorran agua y aumentan la productividad sostenible.',
    'pilar2-titulo': 'Economía Circular',
    'pilar2-desc': 'Los residuos agrícolas como paja y estiércol se convierten en energía, compost y biofertilizantes. Nada se pierde: todo se transforma en más producción con menor impacto ambiental.',
    'pilar3-titulo': 'Ciudadanía Ambiental',
    'pilar3-desc': 'El campo necesita guardianes. Desde la escuela, cada estudiante aprende que las elecciones de consumo, la eliminación adecuada de residuos y la preservación de manantiales son actos de ciudadanía.',
    
    'tec-eyebrow': 'Innovación en el Campo',
    'tec-titulo': 'Tecnologías Sostenibles',
    'tec-intro': 'El agricultor moderno tiene herramientas que alguna vez parecían ciencia ficción. Vea tres ejemplos que ya están transformando la agricultura brasileña:',
    'drone-titulo': 'Agricultura de Precisión con Drones',
    'drone-text': 'Los drones equipados con cámaras multiespectrales vuelan sobre los cultivos e identifican áreas con deficiencias nutricionales, plagas o estrés hídrico con precisión milimétrica, reduciendo desperdicios.',
    'drone-credito': 'Foto: Pexels / Foto de Dron Agrícola',
    'irrigacao-titulo': 'Riego Inteligente por Goteo',
    'irrigacao-text': 'El sistema de riego por goteo entrega agua directamente a la raíz de la planta, gota a gota, controlado por sensores de humedad del suelo conectados a la nube, ahorrando hasta el 60% de agua.',
    'irrigacao-credito': 'Foto: Pexels / Foto de Riego por Goteo',
    'solar-titulo': 'Energía Solar Fotovoltaica Rural',
    'solar-text': 'Los paneles solares instalados en propiedades rurales generan electricidad limpia directamente del sol, eliminando o reduciendo drásticamente las facturas de energía y las emisiones de carbono.',
    'solar-credito': 'Foto: Pexels / Foto de Energía Solar Rural',
    
    'video-eyebrow': 'Ver',
    'video-titulo': 'El Campo en Movimiento',
    'video-intro': 'Vea la belleza y la fuerza de la agroindustria sostenible a través de las imágenes a continuación.',
    'video-credito': 'Video por: Fernando Sanchez Aranguren (Pexels)',
    'video-fallback': 'Su navegador no admite reproducción de video HTML5.',
    
    'apoio-eyebrow': 'Participar',
    'apoio-titulo': 'Apoye Este Proyecto',
    'apoio-intro': '¿Cree en una agricultura más sostenible? ¡Muestre su apoyo haciendo clic a continuación!',
    'apoio-carregando': 'Cargando apoyos...',
    'apoio-contador': '¡Este proyecto ya ha recibido {N} apoyos!',
    'apoio-btn-txt': 'Apoyar Proyecto',
    'apoio-registrando': 'Registrando apoyo...',
    'apoio-ja-feito': '✅ ¡Gracias! Tu apoyo ha sido registrado.',
    'apoio-erro': '❌ Error al registrar. Intenta de nuevo.',
    
    'contato-eyebrow': 'Contáctenos',
    'contato-titulo': 'Deje su Sugerencia',
    'contato-intro': '¿Tiene una idea para mejorar el proyecto? ¡Compártela con nosotros!',
    'label-nome': 'Nombre completo',
    'label-email': 'Correo electrónico (opcional)',
    'label-mensagem': 'Su sugerencia o mensaje',
    'placeholder-nome': 'Ingrese su nombre completo',
    'placeholder-email': 'tuemail@ejemplo.com',
    'placeholder-mensagem': 'Escribe tu sugerencia aquí...',
    'btn-enviar-txt': 'Enviar Sugerencia',
    'erro-nome': 'Por favor, ingrese su nombre completo.',
    'erro-email': 'Correo electrónico no válido.',
    'erro-msg': 'La sugerencia no puede estar vacía.',
    'form-sucesso': '✅ ¡Gracias! Tu sugerencia ha sido enviada con éxito.',
    
    'rodape-titulo': 'Agrinho 2026',
    'rodape-subtitulo': 'SENAR · Paraná',
    'rodape-copy': '© 2026 Concurso Agrinho — SENAR Paraná — Escuela Estatal Vinícius de Morais (PR). Proyecto educativo sin fines de lucro.',
  }
};

/**
 * Aplica todas as traduções ao DOM
 */
function applyTranslations() {
  const lang = localStorage.getItem('site_lang') || 'pt';
  const texts = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  
  // Itera por todos os elementos com id e aplica tradução
  document.querySelectorAll('[id]').forEach(el => {
    const key = el.id + '-txt';
    if (texts[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = texts[key];
      } else if (el.tagName === 'LABEL') {
        el.textContent = texts[key];
      } else {
        el.textContent = texts[key];
      }
    }
  });
  
  // Tradução de labels específicos
  const labelIdioma = document.getElementById('label-idioma');
  const labelVisual = document.getElementById('label-visual');
  const labelTexto = document.getElementById('label-texto');
  const labelAudio = document.getElementById('label-audio');
  
  if (labelIdioma) labelIdioma.textContent = texts['label-idioma'] || 'Idioma:';
  if (labelVisual) labelVisual.textContent = texts['label-visual'] || 'Visual:';
  if (labelTexto) labelTexto.textContent = texts['label-texto'] || 'Texto:';
  if (labelAudio) labelAudio.textContent = texts['label-audio'] || 'Áudio:';
}

// Exporta função para uso no script principal
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS, applyTranslations };
}
