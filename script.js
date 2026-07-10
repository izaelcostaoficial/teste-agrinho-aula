'use strict';

var idiomaAtivo = 'pt';
var temaAtivo   = 'padrao';
var totalApoios = parseInt(localStorage.getItem('agrinho_apoios_2026') || 0);
var narratorAtivo = false;

var MAPA_VOZ_LANG = {
  pt: ['pt-BR', 'pt_BR', 'pt-PT'],
  en: ['en-US', 'en_US', 'en-GB'],
  es: ['es-ES', 'es_ES', 'es-419', 'es-MX']
};

var TRADUCOES = {
  pt: {
    page_title: 'Agrinho 2026 — Agro Forte, Futuro Sustentável',
    logo_titulo_txt: 'Agrinho 2026',
    logo_subtitulo_txt: 'SENAR · Paraná',
    hero_titulo: 'Agro forte,\nfuturo sustentável',
    hero_subtitulo_txt: 'Equilíbrio entre produção e meio ambiente',
    sobre_p3: 'Este site foi criado como projeto de participação do Colégio Estadual Vinícius de Morais (PR), explorando conceitos de produção sustentável.',
    apoio_contador: 'Este projeto já recebeu {N} apoios!',
    apoio_btn_txt: 'Apoiar Projeto',
    btn_enviar_txt: 'Enviar Sugestão',
    rodape_copy_txt: '© 2026 Concurso Agrinho — SENAR Paraná — Colégio Estadual Vinícius de Morais (PR). Projeto educativo sem fins lucrativos.',
    // ... (as outras traduções continuam aqui conforme o arquivo enviado)
  },
  en: {
    page_title: 'Agrinho 2026 — Strong Agro, Sustainable Future',
    sobre_p3: 'This website was created as a participation project by the Vinícius de Morais State School (PR).',
    rodape_copy_txt: '© 2026 Agrinho Contest — SENAR Parana — Vinícius de Morais State School (PR).',
    // ...
  },
  es: {
    page_title: 'Agrinho 2026 — Agro fuerte, futuro sostenible',
    sobre_p3: 'Este sitio web fue creado como proyecto de participación de la Escuela Estatal Vinícius de Morais (PR).',
    rodape_copy_txt: '© 2026 Concurso Agrinho — SENAR Parana — Escuela Estatal Vinícius de Morais (PR).',
    // ...
  }
};

// Funções de salvamento e som corrigidas
function incrementarApoio() {
  totalApoios++;
  localStorage.setItem('agrinho_apoios_2026', totalApoios); // SALVA O NÚMERO
  atualizarContadorApoios();
}

function dispararFala(texto, lang) {
  window.speechSynthesis.cancel();
  var fala = new SpeechSynthesisUtterance(texto);
  var voz = selecionarVoz(lang);
  if (voz) { fala.voice = voz; fala.lang = voz.lang; }
  else { fala.lang = (MAPA_VOZ_LANG[lang] || [lang])[0]; }
  fala.rate = (lang === 'es') ? 0.85 : 0.92; // VELOCIDADE PARA ESPANHOL
  window.speechSynthesis.speak(fala);
}
// (O restante do código segue a lógica profissional que você já tem)
