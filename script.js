'use strict';

/**
 * ════════════════════════════════════════════════════════════════
 * AGRINHO 2026 - SCRIPT PRINCIPAL
 * Sistema de Acessibilidade, Tradução, e Interações
 * ════════════════════════════════════════════════════════════════
 */

/* ────────────────────────────────────────────────────────────────
   1. VARIÁVEIS GLOBAIS
   ──────────────────────────────────────────────────────────────── */

let db = null;
let usingFirestore = false;
let narrationUtterance = null;
let registering = false;

const REPO_RAW_APOIOS = 'https://raw.githubusercontent.com/izaelcostaoficial/teste-agrinho-aula/main/apoios.json';

/* ────────────────────────────────────────────────────────────────
   2. FIREBASE INITIALIZATION
   ──────────────────────────────────────────────────────────────── */

/**
 * Valida se a configuração do Firebase é válida
 */
function isFirebaseConfigValid(cfg) {
  if (!cfg || typeof cfg !== 'object') return false;
  const placeholders = ['SEU-PROJETO', 'COLE_SUA_API_KEY_AQUI', 'YOUR-PROJECT', 'REPLACE_ME'];
  return Boolean(cfg.projectId && !placeholders.includes(String(cfg.projectId)));
}

/**
 * Inicializa Firebase Firestore
 */
function initFirebase() {
  try {
    if (typeof firebase === 'undefined' || !isFirebaseConfigValid(window.FIREBASE_CONFIG)) {
      console.log('Firebase não configurado. Usando fallbacks.');
      return;
    }
    
    firebase.initializeApp(window.FIREBASE_CONFIG);
    db = firebase.firestore();
    usingFirestore = true;
    console.log('✓ Firebase Firestore ativado com sucesso');
  } catch (err) {
    console.warn('⚠ Firebase inicialização falhou:', err.message);
  }
}

/* ────────────────────────────────────────────────────────────────
   3. SISTEMA DE SUPORTE/APOIO
   ──────────────────────────────────────────────────────────────── */

/**
 * Busca arquivo de apoios JSON como fallback
 */
async function fetchApoiosJsonFallback() {
  try {
    const res = await fetch(REPO_RAW_APOIOS, { cache: 'no-cache' });
    if (!res.ok) throw new Error('Apoios.json não encontrado');
    return await res.json();
  } catch (e) {
    console.warn('Erro ao buscar apoios.json:', e.message);
    return null;
  }
}

/**
 * Carrega e exibe contagem de apoios
 */
async function loadSupporters() {
  const el = document.getElementById('texto-apoios');
  if (!el) return;

  const translate = getTranslation;
  el.textContent = translate('apoio-carregando') || 'Carregando apoios...';

  try {
    let count = 0;

    // Prioridade 1: Firestore
    if (usingFirestore && db) {
      try {
        const doc = await db.collection('apoios').doc('total').get();
        count = doc.exists ? (doc.data().quantidade || 0) : 0;
        el.textContent = (translate('apoio-contador') || 'Este projeto já recebeu {N} apoios!').replace('{N}', String(count));
        return;
      } catch (e) {
        console.warn('Erro ao ler Firestore:', e.message);
      }
    }

    // Prioridade 2: Arquivo JSON compartilhado
    const json = await fetchApoiosJsonFallback();
    if (json && typeof json.count === 'number') {
      count = json.count;
      el.textContent = (translate('apoio-contador') || 'Este projeto já recebeu {N} apoios!').replace('{N}', String(count));
      return;
    }

    // Prioridade 3: localStorage local
    count = Number(localStorage.getItem('apoios_local_count') || 0);
    el.textContent = (translate('apoio-contador') || 'Este projeto já recebeu {N} apoios!').replace('{N}', String(count));
  } catch (e) {
    console.error('Erro ao carregar apoios:', e);
    el.textContent = (translate('apoio-contador') || 'Este projeto já recebeu {N} apoios!').replace('{N}', '0');
  }
}

/**
 * Registra novo apoio
 */
async function registerSupport() {
  if (registering) return;
  registering = true;

  const btn = document.getElementById('btn-apoiar');
  const status = document.getElementById('apoio-status');
  const translate = getTranslation;

  if (btn) btn.disabled = true;
  if (status) status.textContent = translate('apoio-registrando') || 'Registrando apoio...';

  try {
    // Firestore
    if (usingFirestore && db) {
      await db.collection('apoios').doc('total').set({
        quantidade: firebase.firestore.FieldValue.increment(1),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      if (status) status.textContent = translate('apoio-ja-feito') || '✅ Obrigado! Seu apoio foi registrado.';
      await loadSupporters();
      return;
    }

    // localStorage
    const prev = Number(localStorage.getItem('apoios_local_count') || 0);
    const next = prev + 1;
    localStorage.setItem('apoios_local_count', String(next));

    if (status) status.textContent = (translate('apoio-ja-feito') || '✅ Obrigado! Seu apoio foi registrado.') + ' (local)';
    await loadSupporters();
  } catch (e) {
    console.error('Erro ao registrar apoio:', e);
    if (status) status.textContent = translate('apoio-erro') || '❌ Erro ao registrar. Tente novamente.';
  } finally {
    setTimeout(() => {
      if (btn) btn.disabled = false;
      registering = false;
    }, 1200);
  }
}

/* ────────────────────────────────────────────────────────────────
   4. SISTEMA DE TRADUÇÃO
   ──────────────────────────────────────────────────────────────── */

/**
 * Obtém tradução do idioma atual
 */
function getTranslation(key) {
  const lang = localStorage.getItem('site_lang') || 'pt';
  if (typeof TRANSLATIONS === 'undefined') return key;
  const langData = TRANSLATIONS[lang] || TRANSLATIONS.pt;
  return langData[key] || key;
}

/**
 * Define idioma do site e aplica tradução
 */
function setLanguage(lang) {
  if (typeof TRANSLATIONS !== 'undefined' && !TRANSLATIONS[lang]) return;

  localStorage.setItem('site_lang', lang);

  // Atualiza botões de idioma
  ['pt', 'en', 'es'].forEach(l => {
    const btn = document.getElementById(`btn-${l}`);
    if (!btn) return;

    const isActive = l === lang;
    btn.classList.toggle('btn-ativo', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Aplica traduções
  if (typeof applyTranslations === 'function') {
    applyTranslations();
  }

  // Recarrega contagem com novo idioma
  loadSupporters();
}

/* ────────────────────────────────────────────────────────────────
   5. TEMAS VISUAIS
   ──────────────────────────────────────────────────────────────── */

/**
 * Define tema visual do site
 */
function setTheme(theme) {
  document.body.classList.remove('tema-branco', 'tema-preto');

  if (theme === 'branco') {
    document.body.classList.add('tema-branco');
  } else if (theme === 'preto') {
    document.body.classList.add('tema-preto');
  }

  localStorage.setItem('site_theme', theme);

  // Atualiza botões de tema
  ['colorido', 'branco', 'preto'].forEach(t => {
    const btn = document.getElementById(`btn-${t}`);
    if (!btn) return;

    const isActive =
      (theme === 'colorido' && t === 'colorido') ||
      (theme === 'branco' && t === 'branco') ||
      (theme === 'preto' && t === 'preto');

    btn.classList.toggle('btn-ativo', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

/**
 * Carrega tema salvo
 */
function applySavedTheme() {
  const theme = localStorage.getItem('site_theme') || 'colorido';
  setTheme(theme);
}

/* ────────────────────────────────────────────────────────────────
   6. TAMANHO DO TEXTO
   ──────────────────────────────────────────────────────────────── */

/**
 * Altera tamanho da fonte
 */
function changeFontSize(delta) {
  const root = document.documentElement;
  const current = parseFloat(getComputedStyle(root).fontSize) || 16;
  const next = Math.max(12, Math.min(28, current + delta));

  root.style.fontSize = next + 'px';
  localStorage.setItem('site_font_size', String(next));
}

/**
 * Carrega tamanho de fonte salvo
 */
function applySavedFontSize() {
  const saved = Number(localStorage.getItem('site_font_size'));
  if (saved && !isNaN(saved)) {
    document.documentElement.style.fontSize = saved + 'px';
  }
}

/* ────────────────────────────────────────────────────────────────
   7. NARRAÇÃO POR VOZ
   ──────────────────────────────────────────────────────────────── */

/**
 * Alterna narração de voz
 */
function toggleNarration() {
  const btn = document.getElementById('btn-narrar');
  const translate = getTranslation;

  if (!('speechSynthesis' in window)) {
    alert(translate('naracao-nao-suportada') || 'Narração não é suportada neste navegador.');
    return;
  }

  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    if (btn) btn.setAttribute('aria-pressed', 'false');
    return;
  }

  // Coleta conteúdo principal para narração
  const content = Array.from(
    document.querySelectorAll(
      '#conteudo-principal h1, #conteudo-principal h2, #conteudo-principal h3, #conteudo-principal p'
    )
  )
    .map(n => n.textContent.trim())
    .filter(Boolean)
    .slice(0, 50)
    .join('. ');

  if (!content) {
    alert('Nenhum conteúdo para narrar.');
    return;
  }

  narrationUtterance = new SpeechSynthesisUtterance(content);
  const lang = localStorage.getItem('site_lang') || 'pt';

  narrationUtterance.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es-ES' : 'en-US';
  narrationUtterance.rate = 0.9;
  narrationUtterance.pitch = 1;
  narrationUtterance.volume = 1;

  speechSynthesis.speak(narrationUtterance);
  if (btn) btn.setAttribute('aria-pressed', 'true');
}

/* ────────────────────────────────────────────────────────────────
   8. MENU MÓVEL
   ──────────────────────────────────────────────────────────────── */

/**
 * Configura comportamento do menu móvel
 */
function setupMobileMenu() {
  const hamburger = document.getElementById('btn-hamburger');
  const nav = document.getElementById('menu-nav');

  if (!hamburger || !nav) return;

  // Toggle menu
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active');
  });

  // Fechar menu ao clicar em link
  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
    });
  });
}

/* ────────────────────────────────────────────────────────────────
   9. FORMULÁRIO DE CONTATO
   ──────────────────────────────────────────────────────────────── */

/**
 * Configura validação e envio do formulário de contato
 */
function setupContactForm() {
  const form = document.getElementById('form-contato');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('campo-nome');
    const email = document.getElementById('campo-email');
    const mensagem = document.getElementById('campo-mensagem');
    const erroNome = document.getElementById('erro-nome');
    const erroMsg = document.getElementById('erro-msg');
    const retorno = document.getElementById('form-retorno');

    // Limpa erros anteriores
    if (erroNome) erroNome.textContent = '';
    if (erroMsg) erroMsg.textContent = '';
    if (retorno) retorno.textContent = '';

    let isValid = true;

    // Validação de nome
    if (!nome.value.trim()) {
      if (erroNome) erroNome.textContent = getTranslation('erro-nome') || 'Por favor, informe seu nome completo.';
      isValid = false;
    }

    // Validação de email (se preenchido)
    if (email.value.trim() && !isValidEmail(email.value)) {
      if (erroMsg) erroMsg.textContent = getTranslation('erro-email') || 'E-mail inválido.';
      isValid = false;
    }

    // Validação de mensagem
    if (!mensagem.value.trim()) {
      if (erroMsg) erroMsg.textContent = getTranslation('erro-msg') || 'A sugestão não pode ficar vazia.';
      isValid = false;
    }

    if (!isValid) return;

    // Salva em localStorage
    const submissions = JSON.parse(localStorage.getItem('sugestoes') || '[]');
    submissions.push({
      nome: nome.value.trim(),
      email: email.value.trim(),
      mensagem: mensagem.value.trim(),
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('sugestoes', JSON.stringify(submissions));

    // Feedback visual
    if (retorno) {
      retorno.textContent = getTranslation('form-sucesso') || 'Obrigado! Sua sugestão foi enviada com sucesso.';
      retorno.classList.add('success');
    }

    form.reset();

    setTimeout(() => {
      if (retorno) {
        retorno.textContent = '';
        retorno.classList.remove('success');
      }
    }, 4000);
  });
}

/**
 * Valida formato de email
 */
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/* ────────────────────────────────────────────────────────────────
   10. SKIP LINK
   ──────────────────────────────────────────────────────────────── */

/**
 * Configura skip link para acessibilidade
 */
function setupSkipLink() {
  const skipLink = document.querySelector('.link-pular');
  if (!skipLink) return;

  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById('conteudo-principal');
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus();
      target.addEventListener('blur', () => {
        target.removeAttribute('tabindex');
      });
    }
  });
}

/* ────────────────────────────────────────────────────────────────
   11. CONFIGURAÇÃO DE ACESSIBILIDADE
   ──────────────────────────────────────────────────────────────── */

/**
 * Configura todos os controles de acessibilidade
 */
function setupAccessibilityControls() {
  // Botões de idioma
  const btnPt = document.getElementById('btn-pt');
  const btnEn = document.getElementById('btn-en');
  const btnEs = document.getElementById('btn-es');

  if (btnPt) btnPt.addEventListener('click', () => setLanguage('pt'));
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnEs) btnEs.addEventListener('click', () => setLanguage('es'));

  // Botões de tema
  const btnColorido = document.getElementById('btn-colorido');
  const btnBranco = document.getElementById('btn-branco');
  const btnPreto = document.getElementById('btn-preto');

  if (btnColorido) btnColorido.addEventListener('click', () => setTheme('colorido'));
  if (btnBranco) btnBranco.addEventListener('click', () => setTheme('branco'));
  if (btnPreto) btnPreto.addEventListener('click', () => setTheme('preto'));

  // Botões de tamanho de texto
  const btnAmais = document.getElementById('btn-Amais');
  const btnAmenos = document.getElementById('btn-Amenos');

  if (btnAmais) btnAmais.addEventListener('click', () => changeFontSize(2));
  if (btnAmenos) btnAmenos.addEventListener('click', () => changeFontSize(-2));

  // Botão de narração
  const btnNarrar = document.getElementById('btn-narrar');
  if (btnNarrar) btnNarrar.addEventListener('click', toggleNarration);
}

/* ────────────────────────────────────────────────────────────────
   12. INICIALIZAÇÃO GERAL
   ──────────────────────────────────────────────────────────────── */

/**
 * Carrega estado salvo da UI
 */
function applySavedUIState() {
  applySavedTheme();
  applySavedFontSize();

  const lang = localStorage.getItem('site_lang') || 'pt';
  setLanguage(lang);
}

/**
 * Inicializa todo o site
 */
function initializeApp() {
  // Firebase
  initFirebase();

  // Setup de eventos
  setupAccessibilityControls();
  setupMobileMenu();
  setupContactForm();
  setupSkipLink();

  // Botão de apoio
  const btnApoiar = document.getElementById('btn-apoiar');
  if (btnApoiar) btnApoiar.addEventListener('click', registerSupport);

  // Carrega estado salvo
  applySavedUIState();

  // Carrega apoios
  loadSupporters();

  console.log('✓ Agrinho 2026 inicializado com sucesso');
}

/* ────────────────────────────────────────────────────────────────
   13. EXECUÇÃO
   ──────────────────────────────────────────────────────────────── */

// Inicia quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
