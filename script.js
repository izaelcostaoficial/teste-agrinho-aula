'use strict';

let db = null;
let usingFirestore = false;

// Configuração do Firebase fornecida por você
window.FIREBASE_CONFIG = {
  apiKey: "COLE_SUA_API_KEY_AQUI",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxxxxxxxx"
};

function initFirebase() {
  try {
    if (typeof firebase !== 'undefined' && window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.projectId !== 'SEU-PROJETO') {
      firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.firestore();
      usingFirestore = true;
      console.log("Firebase Conectado!");
    }
  } catch (e) {
    console.warn("Firebase não configurado. Usando armazenamento local.");
  }
}

// Carregar e Salvar Apoios
async function loadSupporters() {
  const el = document.getElementById('texto-apoios');
  const lang = localStorage.getItem('site_lang') || 'pt';
  const texts = TRANSLATIONS[lang];
  let count = 0;

  if (usingFirestore) {
    const doc = await db.collection('apoios').doc('total').get();
    count = doc.exists ? doc.data().quantidade : 0;
  } else {
    count = parseInt(localStorage.getItem('apoios_count') || 0);
  }
  
  if (el) el.textContent = texts['apoio-contador'].replace('{N}', count);
}

async function registerSupport() {
  const status = document.getElementById('apoio-status');
  const lang = localStorage.getItem('site_lang') || 'pt';
  const texts = TRANSLATIONS[lang];
  
  if (status) status.textContent = texts['apoio-registrando'];

  if (usingFirestore) {
    await db.collection('apoios').doc('total').set({
      quantidade: firebase.firestore.FieldValue.increment(1)
    }, { merge: true });
  } else {
    let count = parseInt(localStorage.getItem('apoios_count') || 0);
    localStorage.setItem('apoios_count', count + 1);
  }
  
  if (status) status.textContent = texts['apoio-ja-feito'];
  loadSupporters();
}

// Narração com Som em Espanhol, Inglês e Português
function toggleNarration() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    return;
  }
  const text = document.querySelector('main').innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  const lang = localStorage.getItem('site_lang') || 'pt';
  
  // Define a voz correta
  if (lang === 'es') utterance.lang = 'es-ES';
  else if (lang === 'en') utterance.lang = 'en-US';
  else utterance.lang = 'pt-BR';
  
  speechSynthesis.speak(utterance);
}

// Funções de Idioma e Tema
function setLanguage(lang) {
  localStorage.setItem('site_lang', lang);
  applyTranslations();
  loadSupporters();
}

function setTheme(theme) {
  document.body.classList.remove('tema-branco', 'tema-preto');
  if (theme === 'branco') document.body.classList.add('tema-branco');
  if (theme === 'preto') document.body.classList.add('tema-preto');
  localStorage.setItem('site_theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  
  // Botões de Idioma
  document.getElementById('btn-pt').onclick = () => setLanguage('pt');
  document.getElementById('btn-en').onclick = () => setLanguage('en');
  document.getElementById('btn-es').onclick = () => setLanguage('es');
  
  // Botões de Visual
  document.getElementById('btn-colorido').onclick = () => setTheme('colorido');
  document.getElementById('btn-branco').onclick = () => setTheme('branco');
  document.getElementById('btn-preto').onclick = () => setTheme('preto');

  // Acessibilidade
  document.getElementById('btn-narrar').onclick = toggleNarration;
  document.getElementById('btn-apoiar').onclick = registerSupport;

  applyTranslations();
  setTheme(localStorage.getItem('site_theme') || 'colorido');
  loadSupporters();
});

