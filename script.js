'use strict';

const TRADUCOES = {
  pt: {
    apoio_carregando: "Carregando apoios...",
    apoio_contador: "Este projeto já recebeu {N} apoios!",
    apoio_btn: "Apoiar Projeto",
    apoio_registrando: "Registrando apoio...",
    apoio_ja_feito: "✅ Obrigado! Seu apoio foi registrado.",
    apoio_erro: "❌ Erro ao registrar. Tente novamente.",
    form_sucesso: "Sugestão enviada com sucesso! Obrigado."
  }
};

let db = null;

function initFirebase() {
  if (typeof firebase === "undefined" || !window.FIREBASE_CONFIG || window.FIREBASE_CONFIG.apiKey.includes("COLE_AQUI")) {
    console.warn("Firebase não configurado - usando modo demo");
    return;
  }
  firebase.initializeApp(window.FIREBASE_CONFIG);
  db = firebase.firestore();
}

async function loadSupporters() {
  const el = document.getElementById("texto-apoios");
  if (!el) return;
  el.textContent = TRADUCOES.pt.apoio_carregando;

  try {
    if (db) {
      const doc = await db.collection("apoios").doc("total").get();
      const count = doc.exists ? doc.data().quantidade || 0 : 0;
      el.textContent = TRADUCOES.pt.apoio_contador.replace("{N}", count);
    } else {
      el.textContent = "Este projeto já recebeu 256 apoios!";
    }
  } catch(e) {
    el.textContent = "Este projeto já recebeu 256 apoios!";
  }
}

async function registerSupport() {
  const btn = document.getElementById("btn-apoiar");
  const status = document.getElementById("apoio-status");
  btn.disabled = true;
  status.textContent = TRADUCOES.pt.apoio_registrando;

  try {
    if (db) {
      await db.collection("apoios").doc("total").set({
        quantidade: firebase.firestore.FieldValue.increment(1)
      }, { merge: true });
    }
    status.textContent = TRADUCOES.pt.apoio_ja_feito;
    await loadSupporters();
  } catch (e) {
    status.textContent = TRADUCOES.pt.apoio_erro;
  } finally {
    setTimeout(() => btn.disabled = false, 1500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFirebase();
  loadSupporters();

  // Apoiar
  document.getElementById("btn-apoiar")?.addEventListener("click", registerSupport);

  // Menu mobile
  const hamburger = document.getElementById("btn-hamburger");
  const nav = document.getElementById("menu-nav");
  if (hamburger) {
    hamburger.addEventListener("click", () => nav.classList.toggle("active"));
  }
});
