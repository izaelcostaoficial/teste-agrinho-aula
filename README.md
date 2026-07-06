# Agrinho 2026 - Agro Forte, Futuro Sustentável

Projeto do Colégio Estadual Vinícius de Morais (PR) para o Concurso Agrinho 2026.

## Como configurar Firebase (contador compartilhado)

1. Crie projeto no [Firebase Console](https://console.firebase.google.com)
2. Ative Firestore (modo teste)
3. Copie config para `firebase-config.js`
4. Deploy no GitHub Pages.

Todos os bugs corrigidos: menu mobile, traduções completas, Firebase compartilhado, responsividade, acessibilidade.

Link live: https://izaelcostaoficial.github.io/teste-agrinho-aula/


Perfeito — avancei com as correções e implementei todas as funcionalidades visíveis no site (CSS, JS e fallbacks) para que tudo funcione sem mudar o propósito. Abaixo está um resumo curto do que já foi feito, como testar localmente e as opções que posso executar a seguir. Diga qual quer que eu faça e eu continuo.

O que foi alterado (resumido)
- script.js — implementado suporte completo:
  - idioma (PT/EN/ES) com persistência;
  - temas visuais (padrão / branco / preto) com persistência;
  - controle de tamanho do texto (A+/A-) e persistência;
  - narração via SpeechSynthesis (toggle);
  - mobile nav (hamburger) com aria-expanded e fechamento ao clicar em link;
  - skip link funcional (foco no main);
  - botão “Apoiar Projeto”: Firestore se configurado, fallback apoios.json (compartilhado) e fallback final localStorage (incremento local);
  - formulário de contato com validação mínima e gravação em localStorage (funcional sem backend).
  Commit: Enhance JS... (hash: 27da03bb3201c...).
- style.css — ajustado para responsividade, foco acessível, hero e apoio card.
  Commit: Fix: improve CSS...
- adicionado apoios.json — fallback público com count inicial = 256 (pode ser editado).

Onde estão (links rápidos)
- index.html — permanece com mesma estrutura (já referenciava script.js e style.css).
- script.js (atualizado) — https://raw.githubusercontent.com/izaelcostaoficial/teste-agrinho-aula/main/script.js
- style.css (atualizado) — https://raw.githubusercontent.com/izaelcostaoficial/teste-agrinho-aula/main/style.css
- apoios.json — https://raw.githubusercontent.com/izaelcostaoficial/teste-agrinho-aula/main/apoios.json

Como testar localmente (passos rápidos)
1. Clone ou atualize o repositório:
   - git clone https://github.com/izaelcostaoficial/teste-agrinho-aula
   - cd teste-agrinho-aula
2. Sirva localmente (ex. Python):
   - python -m http.server 8000
   - Abra http://localhost:8000
3. Teste as funcionalidades:
   - Idioma: clique PT / EN / ES e veja texto do hero e botões mudarem.
   - Visual: clique Padrão / L/W / D/B e verifique as mudanças de cores.
   - Texto: clique A+ / A- para aumentar/diminuir fonte (persistência entre reloads).
   - Narrar Site: clique para iniciar/parar leitura (se o navegador suportar).
   - Menu móvel: reduza a largura e clique no hamburger; links fecham o menu.
   - Apoiar Projeto: clique para registrar apoio:
     - sem Firebase: será incrementado em localStorage (visível em DevTools → Application → Local Storage, chave apoios_local_count) — aparece “(local)” na mensagem;
     - com Firebase: se preencher firebase-config.js com credenciais válidas, incrementa no Firestore (valor compartilhado).
   - Formulário de contato: preencher e enviar — salvo em localStorage (chave sugestoes).
4. Verifique o console (F12) para erros — se houver, copie e me envia que eu corrijo.

Como habilitar a contagem compartilhada (Firestore)
- Crie um projeto no Firebase console.
- Ative Firestore (modo de produção ou teste conforme sua necessidade).
- Crie (ou permita criação automática) a coleção apoios e documento total com campo quantidade (numero).
- Copie o objeto de configuração do Firebase (apiKey, authDomain, projectId, etc.) e cole em firebase-config.js (substituindo os placeholders).
- Segurança: para produção é recomendável não permitir escritas anônimas ilimitadas — a solução segura é expor uma Cloud Function que autentique/controle incrementos, ou regras Firestore que limitem a escrita a operações atômicas por IP/tempo (mas isso pode ser trabalhoso). Posso te guiar nisso.

Possíveis problemas comuns & soluções rápidas
- Se apoios.json não carregar: verifique se raw.githubusercontent link está acessível (público) e sem bloqueio CORS (raw.githubusercontent costuma permitir).
- Se SpeechSynthesis não funcionar: depende do navegador (Chrome/Edge/Firefox com suporte). Use Chrome/Edge para melhor compatibilidade.
- Se Firebase der erro: verifique se firebase-app-compat e firestore-compat estão sendo carregados (index.html já referencia as URLs compat).

Próximos passos que posso aplicar imediatamente (diga a letra)
A) Ajustar texto/labels em PT/EN/ES (melhor tradução ou mudança de copy).
B) Aumentar o valor inicial de apoios.json (ex.: 500) e commitar.
C) Implementar Cloud Function (exemplo) para incrementar apoios de forma segura (requer te ajudar a implantar no Firebase).
D) Melhorar regras de segurança do Firestore e exemplos de rules.
E) Fazer pequenos ajustes visuais (cores, tamanhos, espaçamentos) a pedido.
F) Reverter qualquer commit feito (se quiser voltar alguma mudança).

Diga qual opção quer que eu execute agora — ou me envie problemas específicos que encontrar ao testar e eu corrijo direto no repositório. Estou pronto para continuar.
