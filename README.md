# 🌱 Agrinho 2026 — Agro Forte, Futuro Sustentável

Projeto educativo desenvolvido para o **Concurso Agrinho 2026 – SENAR Paraná**, pelo **Colégio Estadual Vinícius de Morais (PR)**.

O tema central é **"Agro Forte, Futuro Sustentável – Equilíbrio entre Produção e Meio Ambiente"**, demonstrando como o agronegócio pode crescer de forma responsável, utilizando tecnologia, inovação e preservação ambiental.

O projeto foi desenvolvido utilizando apenas **HTML5, CSS3 e JavaScript puro**, mantendo alta compatibilidade com navegadores modernos e hospedagem gratuita pelo GitHub Pages.

---

# 📁 Estrutura do Projeto

```
/
├── index.html              Estrutura principal do site
├── style.css               Estilos, animações e responsividade
├── script.js               Lógica do site
├── firebase.js             Configuração do Firebase (caso utilizado)
├── README.md               Documentação
├── imagens/
│   ├── drone.jpg
│   ├── irrigacao.jpg
│   └── solar.jpg
└── videos/
    └── projeto.mp4
```

> **IMPORTANTE**
>
> A pasta do vídeo deve se chamar **videos** (sem acento e em letras minúsculas).
>
> O GitHub Pages utiliza servidores Linux, portanto diferencia letras maiúsculas, minúsculas e caracteres acentuados.

---

# 🌎 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6
- Firebase Firestore (contador de apoios e formulário)
- Web Speech API
- IntersectionObserver API
- GitHub Pages

---

# ♿ Recursos de Acessibilidade

O projeto possui um sistema completo de acessibilidade utilizando apenas APIs nativas do navegador.

## ✔ Tradução do Site

Idiomas disponíveis:

- 🇧🇷 Português
- 🇺🇸 Inglês
- 🇪🇸 Espanhol

Todo o conteúdo do site é traduzido automaticamente.

Também é alterado o atributo

```html
<html lang="">
```

para melhorar a leitura por leitores de tela.

---

## ✔ Temas Visuais

O usuário pode escolher entre:

- Tema Padrão
- Alto Contraste Claro
- Alto Contraste Escuro

Todos utilizando variáveis CSS.

---

## ✔ Controle de Fonte

Botões:

- A+
- A-

Permitem aumentar ou diminuir o tamanho do texto em todo o site.

---

## ✔ Narrador do Site

O narrador utiliza a **Web Speech API**.

Foram corrigidos:

- atraso (delay);
- troca incorreta de idioma;
- travamentos;
- repetição de frases;
- fila de leitura da SpeechSynthesis.

Antes de iniciar uma nova leitura é executado:

```javascript
speechSynthesis.cancel();
```

garantindo uma nova narração limpa.

### Idiomas utilizados

Português

```
pt-BR
```

Inglês

```
en-US
```

Espanhol

```
es-ES
```

O sistema procura automaticamente a melhor voz disponível no navegador.

Compatível com:

- Chrome
- Edge
- Firefox
- Safari

---

# ❤️ Sistema de Apoios

O contador de apoios utiliza **Firebase Firestore**.

Características:

- contador compartilhado entre todos os visitantes;
- atualização em tempo real;
- compatível com GitHub Pages;
- evita múltiplos apoios do mesmo navegador;
- tratamento automático de falhas de conexão.

Caso o Firebase fique indisponível, o sistema tenta reconectar automaticamente sem interromper o funcionamento do restante do site.

---

# ✉️ Formulário de Contato

O formulário permite enviar sugestões diretamente ao banco de dados.

Campos:

- Nome
- Email (opcional)
- Mensagem

Possui:

- validação;
- mensagens de erro;
- confirmação de envio;
- tratamento de exceções;
- compatibilidade com leitores de tela.

---

# 🎥 Vídeo

O vídeo é reproduzido utilizando:

```html
controls
muted
autoplay
loop
playsinline
preload="auto"
```

Esses atributos garantem compatibilidade com:

- Chrome
- Edge
- Firefox
- Safari
- Android
- iOS

---

# 🖼 Créditos das Imagens

📷 **Foto: Pexels / Foto de Drone Agrícola**

📷 **Foto: Pexels / Foto de Irrigação por Gotejamento**

📷 **Foto: Pexels / Foto de Energia Solar Rural**

---

# 🎬 Crédito do Vídeo

🎬 **Vídeo por: Fernando Sanchez Aranguren (Pexels)**

Todos os créditos das mídias foram preservados conforme o projeto original.

---

# 🚀 Publicação no GitHub Pages

1. Faça upload dos arquivos para um repositório público.
2. Mantenha exatamente esta estrutura de pastas.
3. Abra:

```
Settings
```

4. Depois:

```
Pages
```

5. Selecione a branch:

```
main
```

ou

```
master
```

6. Clique em **Save**.

O GitHub Pages publicará automaticamente o arquivo:

```
index.html
```

---

# 🌐 Compatibilidade

Testado para:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Android
- iPhone
- GitHub Pages

---

# 📚 Objetivo do Projeto

Demonstrar, de forma educativa, como tecnologia, inovação e sustentabilidade podem fortalecer o agronegócio brasileiro, preservando o meio ambiente e promovendo a conscientização ambiental.

O projeto foi desenvolvido como participação no **Concurso Agrinho 2026**, valorizando o aprendizado interdisciplinar e a responsabilidade socioambiental.

---

# 👨‍🏫 Instituição

**Colégio Estadual Vinícius de Morais (PR)**

Projeto educativo desenvolvido para o **Concurso Agrinho 2026 – SENAR Paraná**.

---

# 📄 Licença

Projeto desenvolvido exclusivamente para fins educacionais e participação no Concurso Agrinho 2026.

Sem fins lucrativos.

---

© 2026 **Concurso Agrinho – SENAR Paraná**

**Colégio Estadual Vinícius de Morais (PR)**

Todos os direitos das imagens e do vídeo pertencem aos respectivos autores licenciados pela plataforma **Pexels**.
