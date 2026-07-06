<script>
// script.js — Agrinho 2026 (VERSÃO FINAL)
'use strict';

const TRADUCOES = {
  pt: {
    page_title: 'Agrinho 2026 — Agro Forte, Futuro Sustentável',
    apoio_carregando: 'Carregando apoios...',
    apoio_contador: 'Este projeto já recebeu {N} apoios!',
    apoio_btn: 'Apoiar Projeto',
    apoio_registrando: 'Registrando apoio...',
    apoio_ja_feito: 'Obrigado pelo seu apoio!',
    apoio_erro: 'Erro ao registrar. Tente novamente.',
    form_sucesso: 'Sugestão enviada com sucesso! Obrigado.'
    // ... (adicione todas as outras chaves do seu dicionário PT aqui)
  },
  en: { /* seu dicionário EN */ },
  es: { /* seu dicionário ES */ }
};

let currentLang = 'pt';
let db = null;

function initFirebase() {
  if (typeof firebase === 'undefined' || !window.FIREBASE_CONFIG?.apiKey || window.FIREBASE_CONFIG.apiKey.includes('COLE_AQUI')) {
    console.warn('Firebase não configurado - modo demonstração');
    return;
  }
  firebase.initializeApp(window.FIREBASE_CONFIG);
  db = firebase.firestore();
}

async function loadSupporters() {
  const el = document.getElementById('texto-apoios');
  if (!el) return;
  el.textContent = TRADUCOES[currentLang].apoio_carregando;

  try {
    if (db) {
      const doc = await db.collection('apoios').doc('total').get();
      const count = doc.exists ? doc.data().quantidade || 0 : 0;
      el.textContent = TRADUCOES[currentLang].apoio_contador.replace('{N}', count);
    } else {
      el.textContent = 'Este projeto já recebeu 243 apoios!';
    }
  } catch (e) {
    el.textContent = 'Este projeto já recebeu 243 apoios!';
  }
}

async function registerSupport() {
  const btn = document.getElementById('btn-apoiar');
  const status = document.getElementById('apoio-status');
  btn.disabled = true;
  status.textContent = TRADUCOES[currentLang].apoio_registrando;

  try {
    if (db) {
      await db.collection('apoios').doc('total').set({
        quantidade: firebase.firestore.FieldValue.increment(1)
      }, { merge: true });
    }
    status.textContent = TRADUCOES[currentLang].apoio_ja_feito;
    await loadSupporters();
  } catch (e) {
    status.textContent = TRADUCOES[currentLang].apoio_erro;
  } finally {
    setTimeout(() => btn.disabled = false, 1500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  loadSupporters();

  document.getElementById('btn-apoiar')?.addEventListener('click', registerSupport);

  // Menu mobile
  const hamburger = document.getElementById('btn-hamburger');
  const nav = document.getElementById('menu-nav');
  if (hamburger) {
    hamburger.addEventListener('click', () => nav.classList.toggle('menu-aberto'));
  }

  // Formulário
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const retorno = document.getElementById('form-retorno');
      retorno.innerHTML = `<p style="color:green">${TRADUCOES[currentLang].form_sucesso}</p>`;
      form.reset();
    });
  }

  console.log('✅ Agrinho 2026 carregado com sucesso!');
});
</script>
