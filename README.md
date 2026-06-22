# Deepfakes & IA — Cidadania Digital 2026

## 🎯 Título do Projeto
**Cidadania Digital e Inteligência Artificial: O Impacto das Deepfakes e da Desinformação na Sociedade**

## 📋 Objetivo do Site
Site educativo voltado à comunidade escolar com o objetivo de:
- Explicar o que são deepfakes e como a IA pode criar mídias falsas
- Alertar sobre os perigos das fake news automatizadas por inteligência artificial
- Ensinar técnicas práticas para identificar conteúdo manipulado
- Promover boas práticas de segurança e cidadania digital

## 🗂️ Estrutura do Projeto
```
/
├── index.html          ← Página principal com estrutura semântica
├── css/
│   └── style.css       ← Estilização com Flexbox, Grid e Media Queries
├── js/
│   └── script.js       ← Interatividade: dark mode, quiz e validação de formulário
└── README.md           ← Este arquivo
```

## ⚙️ Tecnologias Utilizadas
- **HTML5** — tags semânticas: `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<form>`
- **CSS3** — Flexbox, CSS Grid, Custom Properties (variáveis), Media Queries, animações
- **JavaScript (Vanilla)** — sem frameworks ou bibliotecas externas

## 🚀 Funcionalidades JavaScript
1. **Modo Escuro / Light Mode** — alternância com persistência via `localStorage` e detecção de preferência do sistema operacional (`prefers-color-scheme`)
2. **Menu Hambúrguer** — menu responsivo para dispositivos móveis com animação CSS
3. **Quiz Interativo** — 6 perguntas sobre deepfakes e fake news com pontuação, feedback por questão e nível de resultado
4. **Validação de Formulário** — validação em tempo real com mensagens de erro acessíveis (atributos ARIA)
5. **Scroll Reveal** — animação de entrada dos cards ao rolar a página com `IntersectionObserver`
6. **Navegação Ativa** — destaque do link atual no menu conforme a seção visível

## 🤖 Uso de Inteligência Artificial

Este projeto utilizou **Claude (Anthropic)** como assistente de desenvolvimento. Abaixo estão os prompts utilizados:

---

### Prompt 1 — Geração da estrutura e conteúdo do site

```
Tema: "Cidadania Digital e Inteligência Artificial: O Impacto das Deepfakes e da Desinformação na Sociedade"
O objetivo do site é conscientizar a comunidade escolar sobre como identificar mídias manipuladas por IA (deepfakes), os perigos das fake news automatizadas e boas práticas de segurança na internet.

Regras Técnicas Obrigatórias: Use apenas HTML5, CSS3 e JavaScript (Vanilla). É proibido o uso de qualquer outra linguagem, framework ou construtores automáticos.

O projeto deve conter:
- Tags semânticas (main, section, footer, form)
- Flexbox e Media Queries para responsividade mobile
- JavaScript com: quiz sobre fake news, botão de Modo Escuro e validação de formulário
- Estrutura de pastas com /css e /js separados
- README.md com objetivo, estrutura e prompts de IA utilizados

Desenvolva o projeto completo com código pronto para uso.
```

---

### Prompt 2 — Ajuste de design e paleta de cores

*(Utilizado internamente pelo assistente para planejar a identidade visual)*

```
Crie uma identidade visual para um site educativo sobre deepfakes e desinformação voltado a estudantes do ensino médio. 
A paleta deve transmitir tecnologia e alerta sem ser genérica. 
Utilize tipografia do Google Fonts que seja moderna mas legível. 
O elemento visual de destaque deve ser uma animação de "scan" simulando detecção de deepfake.
```

---

## 📚 Fontes e Referências
- **Agência Lupa** — [lupa.uol.com.br](https://lupa.uol.com.br)
- **Aos Fatos** — [aosfatos.org](https://aosfatos.org)
- **SaferNet Brasil** — [safernet.org.br](https://www.safernet.org.br)
- **ANPD** — Autoridade Nacional de Proteção de Dados — [gov.br/anpd](https://www.gov.br/anpd)
- MIT Media Lab — Pesquisa sobre velocidade de espalhamento de fake news
- Intel FakeCatcher — Ferramenta de detecção de deepfakes em tempo real

## 🏷️ Tag do Projeto
`#cidadaniadigital2026`

---

*Desenvolvido para projeto escolar — 2026*
