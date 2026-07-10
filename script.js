'use strict';         

var idiomaAtivo = 'pt';
var totalApoios = parseInt(localStorage.getItem('agrinho_apoios_2026') || 0);
var narratorAtivo = false;

var TRADUCOES = {
  pt: {
    page_title: 'Agrinho 2026 — Agro Forte, Futuro Sustentável',
    logo_titulo: 'Agrinho 2026',
    logo_subtitulo: 'SENAR · Paraná',
    sobre_p3: 'Este site foi criado como projeto de participação do Colégio Estadual Vinícius de Morais (PR).',
    apoio_contador: 'Este projeto já recebeu {N} apoios!',
    btn_narrar: '🔊 Narrar Site',
    btn_parar: '🛑 Parar Narração',
    rodape_copy: '© 2026 Concurso Agrinho — SENAR Paraná — Colégio Estadual Vinícius de Morais (PR).',
    // ... adicione as outras chaves aqui
  },
  en: {
    page_title: 'Agrinho 2026 — Strong Agro, Sustainable Future',
    sobre_p3: 'This website was created as a participation project by the Vinícius de Morais State School (PR).',
    apoio_contador: 'This project has received {N} supports!',
    btn_narrar: '🔊 Narrate Site',
    btn_parar: '🛑 Stop Narration',
    rodape_copy: '© 2026 Agrinho Contest — SENAR Parana — Vinícius de Morais State School (PR).',
  },
  es: {
    page_title: 'Agrinho 2026 — Agro fuerte, futuro sostenible',
    sobre_p3: 'Este sitio web fue creado como proyecto de participación de la Escuela Estatal Vinícius de Morais (PR).',
    apoio_contador: '¡Este proyecto ha recibido {N} apoyos!',
    btn_narrar: '🔊 Narrar Sitio',
    btn_parar: '🛑 Parar Narración',
    rodape_copy: '© 2026 Concurso Agrinho — SENAR Parana — Escuela Estatal Vinícius de Morais (PR).',
  }
};

function mudarIdioma(lang) {
  idiomaAtivo = lang;
  localStorage.setItem('agrinho_lang', lang);
  var dict = TRADUCOES[lang] || TRADUCOES.pt;
  document.querySelectorAll('[id]').forEach(function(el) {
    var chave = el.id.replace(/-/g, '_');
    if (dict[chave]) el.textContent = dict[chave];
  });
  atualizarContadorApoios();
}

function incrementarApoio() {
  totalApoios++;
  localStorage.setItem('agrinho_apoios_2026', totalApoios); // FIXA O NÚMERO
  atualizarContadorApoios();
}

function atualizarContadorApoios() {
  var dict = TRADUCOES[idiomaAtivo];
  var el = document.getElementById('texto-apoios');
  if (el) el.textContent = dict.apoio_contador.replace('{N}', totalApoios);
}

function alternarNarracao() {
  if (speechSynthesis.speaking) { speechSynthesis.cancel(); narratorAtivo = false; }
  else {
    var text = document.querySelector('main').innerText;
    var utterance = new SpeechSynthesisUtterance(text);
    if (idiomaAtivo === 'es') utterance.lang = 'es-ES'; // SOM EM ESPANHOL
    else if (idiomaAtivo === 'en') utterance.lang = 'en-US';
    else utterance.lang = 'pt-BR';
    speechSynthesis.speak(utterance);
    narratorAtivo = true;
  }
  atualizarBotaoNarrador();
}

function atualizarBotaoNarrador() {
  var btn = document.getElementById('btn-narrar');
  var dict = TRADUCOES[idiomaAtivo];
  btn.textContent = narratorAtivo ? dict.btn_parar : dict.btn_narrar;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-pt').onclick = function() { mudarIdioma('pt'); };
  document.getElementById('btn-en').onclick = function() { mudarIdioma('en'); };
  document.getElementById('btn-es').onclick = function() { mudarIdioma('es'); };
  document.getElementById('btn-apoiar').onclick = incrementarApoio;
  document.getElementById('btn-narrar').onclick = alternarNarracao;
  
  mudarIdioma(localStorage.getItem('agrinho_lang') || 'pt');
});
