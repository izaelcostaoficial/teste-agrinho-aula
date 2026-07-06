'use strict';

const TRADUCOES = {
  pt: {
    apoio_carregando: "Carregando apoios...",
    apoio_contador: "Este projeto já recebeu {N} apoios!",
    apoio_registrando: "Registrando apoio...",
    apoio_ja_feito: "✅ Obrigado! Seu apoio foi registrado.",
    apoio_erro: "❌ Erro ao registrar. Tente novamente."
  }
};

let db = null;
let usingFirestore = false;
const REPO_RAW_APOIOS = 'https://raw.githubusercontent.com/izaelcostaoficial/teste-agrinho-aula/main/apoios.json';

function isFirebaseConfigValid(cfg) {
  if (!cfg || typeof cfg !== 'object') return false;
  // crude checks: ensure projectId not the placeholder
  const placeholders = ['SEU-PROJETO', 'COLE_SUA_API_KEY_AQUI', 'YOUR-PROJECT', 'REPLACE_ME'];
  return Boolean(cfg.projectId && !placeholders.includes(String(cfg.projectId)));
}

function initFirebase() {
  try {
    if (typeof firebase === "undefined" || !isFirebaseConfigValid(window.FIREBASE_CONFIG)) return;
    firebase.initializeApp(window.FIREBASE_CONFIG);
    db = firebase.firestore();
    usingFirestore = true;
    console.log('Firebase initialized. Using Firestore for apoios.');
  } catch (err) {
    console.warn('Firebase init failed or not configured:', err);
  }
}

async function fetchApoiosJsonFallback() {
  try {
    const res = await fetch(REPO_RAW_APOIOS, { cache: 'no-cache' });
    if (!res.ok) throw new Error('Não foi possível buscar apoios.json');
    const json = await res.json();
    return json;
  } catch (e) {
    console.warn('fetchApoiosJsonFallback error', e);
    return null;
  }
}

async function loadSupporters() {
  const el = document.getElementById("texto-apoios");
  if (el) el.textContent = TRADUCOES.pt.apoio_carregando;

  try {
    if (usingFirestore && db) {
      const doc = await db.collection("apoios").doc("total").get();
      const count = doc.exists ? (doc.data().quantidade || 0) : 0;
      if (el) el.textContent = TRADUCOES.pt.apoio_contador.replace("{N}", String(count));
      return;
    }

    // Fallback: try to read a static file in the repo (read-only) so visitors see a shared value if the maintainer updates apoios.json
    const json = await fetchApoiosJsonFallback();
    if (json && typeof json.count === 'number') {
      if (el) el.textContent = TRADUCOES.pt.apoio_contador.replace("{N}", String(json.count));
      return;
    }

    // Final fallback: use localStorage (per-browser)
    const localCount = Number(localStorage.getItem('apoios_local_count') || 0);
    if (localCount > 0) {
      if (el) el.textContent = TRADUCOES.pt.apoio_contador.replace("{N}", String(localCount));
    } else {
      if (el) el.textContent = TRADUCOES.pt.apoio_contador.replace("{N}", '0');
    }
  } catch (e) {
    console.error('loadSupporters error', e);
    if (el) el.textContent = TRADUCOES.pt.apoio_contador.replace("{N}", '0');
  }
}

let registering = false;

async function registerSupport() {
  if (registering) return;
  registering = true;
  const btn = document.getElementById("btn-apoiar");
  const status = document.getElementById("apoio-status");
  if (btn) btn.disabled = true;
  if (status) status.textContent = TRADUCOES.pt.apoio_registrando;

  try {
    if (usingFirestore && db) {
      // increment atomically using FieldValue
      await db.collection('apoios').doc('total').set({
        quantidade: firebase.firestore.FieldValue.increment(1),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      if (status) status.textContent = TRADUCOES.pt.apoio_ja_feito;
      await loadSupporters();
      return;
    }

    // Fallback: increment localStorage count (per-browser)
    const prev = Number(localStorage.getItem('apoios_local_count') || 0);
    const next = prev + 1;
    localStorage.setItem('apoios_local_count', String(next));

    if (status) status.textContent = TRADUCOES.pt.apoio_ja_feito + ' (local)';
    await loadSupporters();

    // Note to maintainer: to make this shared across visitors, enable Firebase (see README) or update apoios.json in the repo.
  } catch (e) {
    console.error('registerSupport error', e);
    if (status) status.textContent = TRADUCOES.pt.apoio_erro;
  } finally {
    setTimeout(() => { if (btn) btn.disabled = false; registering = false; }, 1200);
  }
}

function setupUIInteractions() {
  const apoiarBtn = document.getElementById('btn-apoiar');
  if (apoiarBtn) apoiarBtn.addEventListener('click', registerSupport);

  const hamburger = document.getElementById('btn-hamburger');
  const nav = document.getElementById('menu-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('active');
    });
  }

  // improve accessibility: focus skip link target
  const skipLink = document.querySelector('.link-pular');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      const target = document.getElementById('conteudo-principal');
      if (target) target.setAttribute('tabindex', '-1');
      setTimeout(() => { if (target) target.focus(); }, 10);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFirebase();
  setupUIInteractions();
  loadSupporters();
});
