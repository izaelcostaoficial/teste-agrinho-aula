'use strict';

const TRADUCOES = {
  pt: {
    apoio_carregando: "Carregando apoios...",
    apoio_contador: "Este projeto já recebeu {N} apoios!",
    apoio_registrando: "Registrando apoio...",
    apoio_ja_feito: "✅ Obrigado! Seu apoio foi registrado.",
    apoio_erro: "❌ Erro ao registrar. Tente novamente.",

    // UI
    hero_titulo: 'Agro forte,\nfuturo sustentável',
    hero_subtitulo: 'Equilíbrio entre produção e meio ambiente',
    btn_conhecer: 'Conhecer o Projeto',
    btn_apoiar: 'Apoiar Agora'
  },
  en: {
    apoio_carregando: 'Loading supports...',
    apoio_contador: 'This project has received {N} supports!',
    apoio_registrando: 'Registering support...',
    apoio_ja_feito: '✅ Thanks! Your support was registered.',
    apoio_erro: '❌ Error registering. Try again.',

    hero_titulo: 'Strong agriculture,\nsustainable future',
    hero_subtitulo: 'Balance between production and environment',
    btn_conhecer: 'Learn about the Project',
    btn_apoiar: 'Support Now'
  },
  es: {
    apoio_carregando: 'Cargando apoyos...',
    apoio_contador: '¡Este proyecto ha recibido {N} apoyos!',
    apoio_registrando: 'Registrando apoyo...',
    apoio_ja_feito: '✅ ¡Gracias! Tu apoyo ha sido registrado.',
    apoio_erro: '❌ Error al registrar. Intenta de nuevo.',

    hero_titulo: 'Agro fuerte,\nfuturo sostenible',
    hero_subtitulo: 'Equilibrio entre producción y medio ambiente',
    btn_conhecer: 'Conocer el Proyecto',
    btn_apoiar: 'Apoyar Ahora'
  }
};

let db = null;
let usingFirestore = false;
const REPO_RAW_APOIOS = 'https://raw.githubusercontent.com/izaelcostaoficial/teste-agrinho-aula/main/apoios.json';

function isFirebaseConfigValid(cfg) {
  if (!cfg || typeof cfg !== 'object') return false;
  const placeholders = ['SEU-PROJETO', 'COLE_SUA_API_KEY_AQUI', 'YOUR-PROJECT', 'REPLACE_ME'];
  return Boolean(cfg.projectId && !placeholders.includes(String(cfg.projectId)));
}

function initFirebase() {
  try {
    if (typeof firebase === 'undefined' || !isFirebaseConfigValid(window.FIREBASE_CONFIG)) return;
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
  const el = document.getElementById('texto-apoios');
  if (!el) return;
  el.textContent = getTranslation().apoio_carregando;

  try {
    if (usingFirestore && db) {
      const doc = await db.collection('apoios').doc('total').get();
      const count = doc.exists ? (doc.data().quantidade || 0) : 0;
      el.textContent = getTranslation().apoio_contador.replace('{N}', String(count));
      return;
    }

    const json = await fetchApoiosJsonFallback();
    if (json && typeof json.count === 'number') {
      el.textContent = getTranslation().apoio_contador.replace('{N}', String(json.count));
      return;
    }

    const localCount = Number(localStorage.getItem('apoios_local_count') || 0);
    el.textContent = getTranslation().apoio_contador.replace('{N}', String(localCount));
  } catch (e) {
    console.error('loadSupporters error', e);
    el.textContent = getTranslation().apoio_contador.replace('{N}', '0');
  }
}

let registering = false;

async function registerSupport() {
  if (registering) return;
  registering = true;
  const btn = document.getElementById('btn-apoiar');
  const status = document.getElementById('apoio-status');
  if (btn) btn.disabled = true;
  if (status) status.textContent = getTranslation().apoio_registrando;

  try {
    if (usingFirestore && db) {
      await db.collection('apoios').doc('total').set({
        quantidade: firebase.firestore.FieldValue.increment(1),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      if (status) status.textContent = getTranslation().apoio_ja_feito;
      await loadSupporters();
      return;
    }

    const prev = Number(localStorage.getItem('apoios_local_count') || 0);
    const next = prev + 1;
    localStorage.setItem('apoios_local_count', String(next));

    if (status) status.textContent = getTranslation().apoio_ja_feito + ' (local)';
    await loadSupporters();
  } catch (e) {
    console.error('registerSupport error', e);
    if (status) status.textContent = getTranslation().apoio_erro;
  } finally {
    setTimeout(() => { if (btn) btn.disabled = false; registering = false; }, 1200);
  }
}

// Language + UI state
function getTranslation() {
  const lang = localStorage.getItem('site_lang') || 'pt';
  return TRADUCOES[lang] || TRADUCOES.pt;
}

function applyTranslations() {
  const t = getTranslation();
  // map of element id -> translation key
  const map = {
    'hero-titulo': 'hero_titulo',
    'hero-subtitulo-txt': 'hero_subtitulo',
    'hero-btn-conhecer': 'btn_conhecer',
    'hero-btn-apoiar': 'btn_apoiar',
    'texto-apoios': 'apoio_carregando',
    'apoio-btn-txt': 'btn_apoiar'
  };

  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const key = map[id];
    // replace textContent but preserve inner HTML for buttons with icons
    if (el.tagName.toLowerCase() === 'button' || el.tagName.toLowerCase() === 'a' || el.tagName.toLowerCase() === 'span' || el.tagName.toLowerCase() === 'p' || el.tagName.toLowerCase() === 'h1' || el.tagName.toLowerCase() === 'h2') {
      el.textContent = t[key] || el.textContent;
    }
  });
}

function setLanguage(lang) {
  if (!TRADUCOES[lang]) return;
  localStorage.setItem('site_lang', lang);
  // update aria-pressed buttons
  ['btn-pt','btn-en','btn-es'].forEach(id=>{
    const b = document.getElementById(id);
    if (!b) return;
    b.classList.toggle('btn-ativo', id === `btn-${lang}`);
    b.setAttribute('aria-pressed', String(id === `btn-${lang}`));
  });
  applyTranslations();
}

// Theme (visual)
function setTheme(theme) {
  document.body.classList.remove('tema-branco','tema-preto');
  if (theme === 'branco') document.body.classList.add('tema-branco');
  if (theme === 'preto') document.body.classList.add('tema-preto');
  localStorage.setItem('site_theme', theme);

  ['btn-colorido','btn-branco','btn-preto'].forEach(id=>{
    const b = document.getElementById(id);
    if (!b) return;
    b.classList.toggle('btn-ativo', (theme === 'padrao' && id==='btn-colorido') || (theme==='branco' && id==='btn-branco') || (theme==='preto' && id==='btn-preto'));
    b.setAttribute('aria-pressed', String(b.classList.contains('btn-ativo')));
  });
}

// Text size control
function changeFontSize(delta) {
  const root = document.documentElement;
  const current = parseFloat(getComputedStyle(root).fontSize) || 16;
  const next = Math.max(12, Math.min(22, current + delta));
  root.style.fontSize = next + 'px';
  localStorage.setItem('site_font_size', String(next));
}

function applySavedFontSize() {
  const saved = Number(localStorage.getItem('site_font_size'));
  if (saved && !isNaN(saved)) document.documentElement.style.fontSize = saved + 'px';
}

// Narration
let narrationUtterance = null;
function toggleNarration() {
  const btn = document.getElementById('btn-narrar');
  if (!('speechSynthesis' in window)) {
    alert('Narration not supported in this browser.');
    return;
  }
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    if (btn) btn.setAttribute('aria-pressed','false');
    return;
  }

  const content = Array.from(document.querySelectorAll('#conteudo-principal h1, #conteudo-principal h2, #conteudo-principal p'))
    .map(n=>n.textContent)
    .filter(Boolean)
    .slice(0,20)
    .join('\n');

  narrationUtterance = new SpeechSynthesisUtterance(content);
  const lang = localStorage.getItem('site_lang') || 'pt';
  narrationUtterance.lang = (lang === 'pt' ? 'pt-BR' : (lang === 'es' ? 'es-ES' : 'en-US'));
  speechSynthesis.speak(narrationUtterance);
  if (btn) btn.setAttribute('aria-pressed','true');
}

// Contact form handling
function setupForm() {
  const form = document.getElementById('form-contato');
  if (!form) return;
  form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const nome = document.getElementById('campo-nome');
    const email = document.getElementById('campo-email');
    const msg = document.getElementById('campo-mensagem');
    const erroNome = document.getElementById('erro-nome');
    const erroMsg = document.getElementById('erro-msg');
    const retorno = document.getElementById('form-retorno');

    let ok = true;
    erroNome.textContent = '';
    erroMsg.textContent = '';
    retorno.textContent = '';

    if (!nome.value.trim()) { erroNome.textContent = 'Por favor informe seu nome.'; ok = false; }
    if (!msg.value.trim()) { erroMsg.textContent = 'A mensagem não pode ficar vazia.'; ok = false; }
    if (!ok) return;

    // store submission in localStorage (demo) and show confirmation
    const submissions = JSON.parse(localStorage.getItem('sugestoes') || '[]');
    submissions.push({ nome: nome.value.trim(), email: email.value.trim(), mensagem: msg.value.trim(), createdAt: new Date().toISOString() });
    localStorage.setItem('sugestoes', JSON.stringify(submissions));

    retorno.textContent = 'Obrigado! Sua sugestão foi enviada.';
    form.reset();
    setTimeout(()=>{ retorno.textContent = ''; }, 4000);
  });
}

function setupAccessibilityControls() {
  // Language buttons
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');
  if (btnPt) btnPt.addEventListener('click', ()=>setLanguage('pt'));
  if (btnEn) btnEn.addEventListener('click', ()=>setLanguage('en'));
  if (btnEs) btnEs.addEventListener('click', ()=>setLanguage('es'));

  // Visual theme
  const btnColorido = document.getElementById('btn-colorido');
  const btnBranco = document.getElementById('btn-branco');
  const btnPreto = document.getElementById('btn-preto');
  if (btnColorido) btnColorido.addEventListener('click', ()=>setTheme('padrao'));
  if (btnBranco) btnBranco.addEventListener('click', ()=>setTheme('branco'));
  if (btnPreto) btnPreto.addEventListener('click', ()=>setTheme('preto'));

  // Text size
  const btnAmais = document.getElementById('btn-Amais');
  const btnAmenos = document.getElementById('btn-Amenos');
  if (btnAmais) btnAmais.addEventListener('click', ()=>changeFontSize(2));
  if (btnAmenos) btnAmenos.addEventListener('click', ()=>changeFontSize(-2));

  // Narration
  const btnNarrar = document.getElementById('btn-narrar');
  if (btnNarrar) btnNarrar.addEventListener('click', toggleNarration);
}

function closeMobileNavOnLinkClick() {
  const nav = document.getElementById('menu-nav');
  if (!nav) return;
  nav.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', ()=>{
      if (nav.classList.contains('active')) nav.classList.remove('active');
      const hamburger = document.getElementById('btn-hamburger');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

function applySavedUIState() {
  const theme = localStorage.getItem('site_theme') || 'padrao';
  setTheme(theme);
  applySavedFontSize();
  const lang = localStorage.getItem('site_lang') || 'pt';
  setLanguage(lang);
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

  const skipLink = document.querySelector('.link-pular');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      const target = document.getElementById('conteudo-principal');
      if (target) target.setAttribute('tabindex', '-1');
      setTimeout(() => { if (target) target.focus(); }, 10);
    });
  }

  closeMobileNavOnLinkClick();
  setupAccessibilityControls();
  setupForm();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initFirebase();
  setupUIInteractions();
  applySavedUIState();
  loadSupporters();
});
