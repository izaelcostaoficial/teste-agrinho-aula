'use strict';

// CONFIGURAÇÃO FIREBASE (CONFORME SOLICITADO)
window.FIREBASE_CONFIG = {
  apiKey: "COLE_SUA_API_KEY_AQUI",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxxxxxxxx"
};

var idiomaAtivo = 'pt';
var totalApoios = parseInt(localStorage.getItem('agrinho_apoios_2026') || 0);
var narratorAtivo = false;

var TRADUCOES = {
    pt: {
        page_title: 'Agrinho 2026 — Agro Forte, Futuro Sustentável',
        logo_titulo: 'Agrinho 2026',
        logo_subtitulo: 'SENAR · Paraná',
        hero_titulo: 'Agro forte, futuro sustentável',
        hero_subtitulo: 'Equilíbrio entre produção e meio ambiente',
        sobre_p3: 'Este site foi criado como projeto de participação do Colégio Estadual Vinícius de Morais (PR).',
        apoio_contador: 'Este projeto já recebeu {N} apoios!',
        btn_narrar: '🔊 Narrar Site',
        btn_parar: '🛑 Parar Narração',
        placeholder_nome: 'Digite seu nome completo',
        placeholder_mensagem: 'Escreva sua sugestão aqui...',
        rodape_copy: '© 2026 Concurso Agrinho — SENAR Paraná — Colégio Estadual Vinícius de Morais (PR).'
    },
    en: {
        page_title: 'Agrinho 2026 — Strong Agro, Sustainable Future',
        logo_titulo: 'Agrinho 2026',
        logo_subtitulo: 'SENAR · Parana',
        hero_titulo: 'Strong Agro, Sustainable Future',
        hero_subtitulo: 'Balance between production and environment',
        sobre_p3: 'This website was created as a participation project by the Vinícius de Morais State School (PR).',
        apoio_contador: 'This project has received {N} supports!',
        btn_narrar: '🔊 Narrate Site',
        btn_parar: '🛑 Stop Narration',
        placeholder_nome: 'Enter your full name',
        placeholder_mensagem: 'Write your suggestion here...',
        rodape_copy: '© 2026 Agrinho Contest — SENAR Parana — Vinícius de Morais State School (PR).'
    },
    es: {
        page_title: 'Agrinho 2026 — Agro fuerte, futuro sostenible',
        logo_titulo: 'Agrinho 2026',
        logo_subtitulo: 'SENAR · Parana',
        hero_titulo: 'Agro fuerte, futuro sostenible',
        hero_subtitulo: 'Equilibrio entre producción y medio ambiente',
        sobre_p3: 'Este sitio web fue creado como proyecto de participación de la Escuela Estatal Vinícius de Morais (PR).',
        apoio_contador: '¡Este projeto ha recibido {N} apoyos!',
        btn_narrar: '🔊 Narrar Sitio',
        btn_parar: '🛑 Parar Narración',
        placeholder_nome: 'Ingrese su nombre completo',
        placeholder_mensagem: 'Escriba su sugerencia aquí...',
        rodape_copy: '© 2026 Concurso Agrinho — SENAR Parana — Escuela Estatal Vinícius de Morais (PR).'
    }
};

function mudarIdioma(lang) {
    idiomaAtivo = lang;
    localStorage.setItem('agrinho_lang', lang);
    var dict = TRADUCOES[lang];
    document.querySelectorAll('[id]').forEach(el => {
        var chave = el.id.replace(/-/g, '_');
        if (dict[chave]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                var pKey = 'placeholder_' + el.id.replace('campo-', '');
                if (dict[pKey]) el.placeholder = dict[pKey];
            } else {
                el.textContent = dict[chave];
            }
        }
    });
    document.title = dict.page_title;
    atualizarContadorApoios();
}

function mudarTema(tema) {
    document.body.classList.remove('tema-branco', 'tema-preto');
    if (tema === 'branco') document.body.classList.add('tema-branco');
    if (tema === 'preto') document.body.classList.add('tema-preto');
    localStorage.setItem('agrinho_tema', tema);
    document.getElementById('btn-colorido').classList.toggle('btn-ativo', tema === 'padrao');
    document.getElementById('btn-branco').classList.toggle('btn-ativo', tema === 'branco');
    document.getElementById('btn-preto').classList.toggle('btn-ativo', tema === 'preto');
}

function alternarNarracao() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        narratorAtivo = false;
    } else {
        var text = document.getElementById('conteudo-principal').innerText;
        var utterance = new SpeechSynthesisUtterance(text);
        if (idiomaAtivo === 'es') utterance.lang = 'es-ES'; // SOM EM ESPANHOL
        else if (idiomaAtivo === 'en') utterance.lang = 'en-US';
        else utterance.lang = 'pt-BR';
        speechSynthesis.speak(utterance);
        narratorAtivo = true;
    }
    var btn = document.getElementById('btn-narrar');
    btn.textContent = narratorAtivo ? TRADUCOES[idiomaAtivo].btn_parar : TRADUCOES[idiomaAtivo].btn_narrar;
}

function atualizarContadorApoios() {
    var el = document.getElementById('texto-apoios');
    if (el) el.textContent = TRADUCOES[idiomaAtivo].apoio_contador.replace('{N}', totalApoios);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-pt').onclick = () => mudarIdioma('pt');
    document.getElementById('btn-en').onclick = () => mudarIdioma('en');
    document.getElementById('btn-es').onclick = () => mudarIdioma('es');
    document.getElementById('btn-colorido').onclick = () => mudarTema('padrao');
    document.getElementById('btn-branco').onclick = () => mudarTema('branco');
    document.getElementById('btn-preto').onclick = () => mudarTema('preto');
    document.getElementById('btn-apoiar').onclick = () => {
        totalApoios++;
        localStorage.setItem('agrinho_apoios_2026', totalApoios);
        atualizarContadorApoios();
    };
    document.getElementById('btn-narrar').onclick = alternarNarracao;
    
    mudarIdioma(localStorage.getItem('agrinho_lang') || 'pt');
    mudarTema(localStorage.getItem('agrinho_tema') || 'padrao');
});
;
