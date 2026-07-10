'use strict';

var idiomaAtivo = 'pt';
var totalApoios = parseInt(localStorage.getItem('agrinho_apoios_2026') || 0);
var narratorAtivo = false;

// Configurações de Voz
var MAPA_VOZ_LANG = {
  pt: ['pt-BR', 'pt_BR'],
  en: ['en-US', 'en_US'],
  es: ['es-ES', 'es_ES', 'es-419']
};

// TRADUÇÕES COMPLETAS (Incluindo a Escola)
var TRADUCOES = {
  pt: {
    page_title: 'Agrinho 2026 — Agro Forte, Futuro Sustentável',
    sobre_p3: 'Este site foi criado como projeto de participação do Colégio Estadual Vinícius de Morais (PR).',
    apoio_contador: 'Este projeto já recebeu {N} apoios!',
    btn_narrar: '🔊 Narrar Site',
    btn_parar: '🛑 Parar Narração',
    rodape_copy: '© 2026 Concurso Agrinho — SENAR Paraná — Colégio Estadual Vinícius de Morais (PR).',
    // ... (mantenha as outras chaves que você já tem)
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

// FUNÇÃO DE CORES (CORRIGIDA)
function mudarTema(tema) {
  document.body.classList.remove('tema-branco', 'tema-preto');
  if (tema === 'branco') document.body.classList.add('tema-branco');
  if (tema === 'preto') document.body.classList.add('tema-preto');
  localStorage.setItem('agrinho_tema', tema);
  
  // Atualiza visual dos botões
  document.getElementById('btn-colorido').classList.toggle('btn-ativo', tema === 'padrao');
  document.getElementById('btn-branco').classList.toggle('btn-ativo', tema === 'branco');
  document.getElementById('btn-preto').classList.toggle('btn-ativo', tema === 'preto');
}

// APOIOS (FIXADOS)
function incrementarApoio() {
  totalApoios++;
  localStorage.setItem('agrinho_apoios_2026', totalApoios);
  atualizarContadorApoios();
}

function atualizarContadorApoios() {
  var dict = TRADUCOES[idiomaAtivo];
  var el = document.getElementById('texto-apoios');
  if (el) el.textContent = dict.apoio_contador.replace('{N}', totalApoios);
}

// NARRAÇÃO (SOM EM ESPANHOL FIXADO)
function alternarNarracao() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    narratorAtivo = false;
  } else {
    var text = document.getElementById('conteudo-principal').innerText;
    var utterance = new SpeechSynthesisUtterance(text);
    if (idiomaAtivo === 'es') utterance.lang = 'es-ES';
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

// LIGA OS EVENTOS AOS BOTÕES
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-pt').onclick = function() { idiomaAtivo = 'pt'; applyTranslations(); };
  document.getElementById('btn-en').onclick = function() { idiomaAtivo = 'en'; applyTranslations(); };
  document.getElementById('btn-es').onclick = function() { idiomaAtivo = 'es'; applyTranslations(); };
  
  document.getElementById('btn-colorido').onclick = function() { mudarTema('padrao'); };
  document.getElementById('btn-branco').onclick = function() { mudarTema('branco'); };
  document.getElementById('btn-preto').onclick = function() { mudarTema('preto'); };
  
  document.getElementById('btn-apoiar').onclick = incrementarApoio;
  document.getElementById('btn-narrar').onclick = alternarNarracao;

  mudarTema(localStorage.getItem('agrinho_tema') || 'padrao');
  atualizarContadorApoios();
});
