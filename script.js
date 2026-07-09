'use strict';

let db = null;
let usingFirestore = false;

function initFirebase() {
  try {
    if (typeof firebase !== 'undefined' && window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.projectId !== 'SEU-PROJETO') {
      firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.firestore();
      usingFirestore = true;
    }
  } catch (e) { console.warn("Modo local ativo"); }
}

async function loadSupporters() {
  const el = document.getElementById('texto-apoios');
  const lang = localStorage.getItem('site_lang') || 'pt';
  const texts = TRANSLATIONS[lang];
  
  let count = 0;
  if (usingFirestore && db) {
    const doc = await db.collection('apoios').doc('total').get();
    count = doc.exists ? doc.data().quantidade : 0;
  } else {
    count = localStorage.getItem('apoios_local_count') || 0;
  }
  el.textContent = texts['apoio-contador'].replace('{N}', count);
}

function toggleNarration() {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    return;
  }
  const text = document.querySelector('main').innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  const lang = localStorage.getItem('site_lang') || 'pt';
  utterance.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-ES' : 'en-US';
  speechSynthesis.speak(utterance);
}

document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  
  // Eventos de botões omitidos para brevidade, mas devem ser incluídos como no exemplo anterior.
  
  applyTranslations();
  loadSupporters();
});

