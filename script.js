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
  } catch (e) { console.warn("Firebase offline"); }
}

async function loadSupporters() {
  const el = document.getElementById('texto-apoios');
  const lang = localStorage.getItem('site_lang') || 'pt';
  const texts = TRANSLATIONS[lang];
  
  if (usingFirestore) {
    const doc = await db.collection('apoios').doc('total').get();
    const count = doc.exists ? doc.data().quantidade : 0;
    el.textContent = texts['apoio-contador'].replace('{N}', count);
  } else {
    const count = localStorage.getItem('apoios_local') || 0;
    el.textContent = texts['apoio-contador'].replace('{N}', count);
  }
}

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
  
  document.getElementById('btn-pt').onclick = () => setLanguage('pt');
  document.getElementById('btn-en').onclick = () => setLanguage('en');
  document.getElementById('btn-es').onclick = () => setLanguage('es');
  
  document.getElementById('btn-colorido').onclick = () => setTheme('colorido');
  document.getElementById('btn-branco').onclick = () => setTheme('branco');
  document.getElementById('btn-preto').onclick = () => setTheme('preto');

  document.getElementById('btn-hamburger').onclick = () => {
    document.getElementById('menu-nav').classList.toggle('active');
  };

  applyTranslations();
  setTheme(localStorage.getItem('site_theme') || 'colorido');
  loadSupporters();
});
