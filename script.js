/* ===========================================
   CIDADANIA DIGITAL 2026 — script.js
   Funcionalidades:
   1. Dark Mode (com persistência no localStorage)
   2. Menu hambúrguer mobile
   3. Quiz interativo com pontuação e feedback
   4. Validação de formulário de contato
   5. Navegação ativa ao rolar a página
=========================================== */

// ============================================
// 1. DARK MODE
// ============================================

const darkToggle = document.getElementById('darkToggle');
const body = document.body;

// Aplica preferência salva no localStorage
function initDarkMode() {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    darkToggle.setAttribute('aria-label', 'Desativar modo escuro');
  } else if (savedMode === null) {
    // Sem preferência salva: respeita preferência do sistema operacional
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    }
  }
}

darkToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    darkToggle.setAttribute('aria-label', 'Desativar modo escuro');
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkToggle.setAttribute('aria-label', 'Ativar modo escuro');
  }
});

initDarkMode();

// ============================================
// 2. MENU HAMBÚRGUER (MOBILE)
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function () {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen.toString());
});

// Fecha o menu ao clicar em um link
navMenu.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function (event) {
  const isInsideNav = event.target.closest('.navbar');
  if (!isInsideNav && navMenu.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// ============================================
// 3. NAV ATIVA AO ROLAR
// ============================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  var scrollY = window.pageYOffset;

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - 90;
    var sectionBottom = sectionTop + section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ============================================
// 4. QUIZ
// ============================================

var quizData = [
  {
    pergunta: 'O que é uma "deepfake"?',
    opcoes: [
      'Um vírus de computador que rouba dados pessoais',
      'Um conteúdo de vídeo, imagem ou áudio falso criado com inteligência artificial',
      'Uma técnica de hackers para invadir redes sociais',
      'Um filtro de beleza disponível em aplicativos de câmera'
    ],
    correta: 1,
    explicacao: 'Correto! Deepfake combina "deep learning" (IA) com "fake" (falso). É uma tecnologia que usa redes neurais para criar conteúdo falso extremamente realista de pessoas reais.'
  },
  {
    pergunta: 'Qual dessas características pode indicar que um vídeo é uma deepfake?',
    opcoes: [
      'O vídeo tem boa qualidade de imagem',
      'A pessoa fala com fluência e clareza',
      'Piscadas de olho irregulares ou ausentes e bordas do rosto borradas',
      'O vídeo foi gravado em local público'
    ],
    correta: 2,
    explicacao: 'Exato! Deepfakes frequentemente apresentam piscadas irregulares ou ausentes, bordas imprecisas no cabelo e no pescoço, e reflexos de luz inconsistentes nos olhos.'
  },
  {
    pergunta: 'Segundo pesquisa do MIT, como as fake news se espalham nas redes sociais comparadas às notícias verdadeiras?',
    opcoes: [
      'Mais devagar, pois as pessoas costumam verificar antes de compartilhar',
      'Na mesma velocidade, sem diferença significativa',
      'Apenas entre grupos fechados de WhatsApp',
      'Muito mais rápido — chegam a 1.500 pessoas 6 vezes mais velozmente'
    ],
    correta: 3,
    explicacao: 'Infelizmente correto. Notícias falsas se espalham muito mais rápido que as verdadeiras porque exploram emoções como medo, raiva e surpresa — gatilhos que fazem as pessoas compartilharem sem verificar.'
  },
  {
    pergunta: 'Você recebe um vídeo impressionante de um político famoso dizendo algo polêmico. Qual é a melhor atitude?',
    opcoes: [
      'Compartilhar imediatamente, pois parece ser verdade',
      'Salvar e enviar apenas para amigos próximos',
      'Verificar em sites de checagem como Aos Fatos ou Agência Lupa antes de compartilhar',
      'Acreditar se vier de um contato conhecido'
    ],
    correta: 2,
    explicacao: 'Perfeito! Antes de compartilhar qualquer conteúdo sensacional, verifique em agências especializadas como Aos Fatos, Agência Lupa ou UOL Confere. Conteúdo vindo de contatos conhecidos também pode ser falso.'
  },
  {
    pergunta: 'O que é a "busca reversa de imagem" e para que serve?',
    opcoes: [
      'Uma forma de editar imagens online gratuitamente',
      'Uma técnica para aumentar a resolução de fotos antigas',
      'Uma pesquisa que encontra de onde uma foto realmente veio, revelando manipulações ou contextos falsos',
      'Um filtro de privacidade que remove seus dados de fotos'
    ],
    correta: 2,
    explicacao: 'Isso mesmo! Ferramentas como Google Imagens e TinEye permitem pesquisar de onde uma foto realmente veio. Você pode descobrir se a imagem foi tirada de contexto ou se é uma foto antiga sendo usada de forma enganosa.'
  },
  {
    pergunta: 'Por que é importante ativar a autenticação de dois fatores (2FA) nas suas contas?',
    opcoes: [
      'Ela aumenta a velocidade da sua internet',
      'Adiciona uma segunda camada de segurança, dificultando o acesso mesmo que alguém descubra sua senha',
      'Ela apaga automaticamente mensagens suspeitas',
      'Serve apenas para contas bancárias, não para redes sociais'
    ],
    correta: 1,
    explicacao: 'Correto! O 2FA exige uma segunda verificação (como um código no celular) além da senha. Mesmo que alguém descubra sua senha, não conseguirá acessar sua conta sem o segundo fator. Ative agora em todas as suas contas!'
  }
];

var quizState = {
  questaoAtual: 0,
  pontuacao: 0,
  respondida: false
};

var quizContainer = document.getElementById('quizContainer');

function iniciarQuiz() {
  quizState.questaoAtual = 0;
  quizState.pontuacao = 0;
  quizState.respondida = false;
  renderizarQuestao();
}

function renderizarQuestao() {
  var q = quizData[quizState.questaoAtual];
  var total = quizData.length;
  var numero = quizState.questaoAtual + 1;
  var porcentagem = Math.round(((quizState.questaoAtual) / total) * 100);
  var letras = ['A', 'B', 'C', 'D'];

  var opcoesHTML = q.opcoes.map(function (opcao, index) {
    return (
      '<button class="quiz-option" data-index="' + index + '" aria-label="Opção ' + letras[index] + ': ' + opcao + '">' +
        '<span class="option-letter" aria-hidden="true">' + letras[index] + '</span>' +
        '<span>' + opcao + '</span>' +
      '</button>'
    );
  }).join('');

  quizContainer.innerHTML =
    '<div class="quiz-progress">' +
      '<span>Pergunta ' + numero + ' de ' + total + '</span>' +
      '<span>' + quizState.pontuacao + ' ponto' + (quizState.pontuacao !== 1 ? 's' : '') + '</span>' +
    '</div>' +
    '<div class="progress-bar" role="progressbar" aria-valuenow="' + porcentagem + '" aria-valuemin="0" aria-valuemax="100">' +
      '<div class="progress-fill" style="width: ' + porcentagem + '%"></div>' +
    '</div>' +
    '<div class="quiz-question-box">' +
      '<p class="quiz-question-text">' + q.pergunta + '</p>' +
      '<div class="quiz-options" role="group" aria-label="Opções de resposta">' +
        opcoesHTML +
      '</div>' +
      '<div class="quiz-feedback" id="quizFeedback" role="alert"></div>' +
      '<button class="btn btn-primary quiz-next-btn" id="quizNextBtn">' +
        (numero < total ? 'Próxima pergunta →' : 'Ver resultado') +
      '</button>' +
    '</div>';

  // Adiciona eventos nas opções
  var opcoesBotoes = quizContainer.querySelectorAll('.quiz-option');
  opcoesBotoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
      if (!quizState.respondida) {
        var indice = parseInt(botao.getAttribute('data-index'));
        responder(indice, opcoesBotoes);
      }
    });
  });

  // Evento no botão de próxima
  var nextBtn = document.getElementById('quizNextBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      quizState.questaoAtual++;
      if (quizState.questaoAtual < quizData.length) {
        quizState.respondida = false;
        renderizarQuestao();
      } else {
        mostrarResultado();
      }
    });
  }
}

function responder(indice, opcoesBotoes) {
  quizState.respondida = true;
  var q = quizData[quizState.questaoAtual];
  var correto = indice === q.correta;

  if (correto) {
    quizState.pontuacao++;
  }

  // Desabilita todas as opções
  opcoesBotoes.forEach(function (botao, i) {
    botao.disabled = true;
    if (i === q.correta) {
      botao.classList.add('correct');
    } else if (i === indice && !correto) {
      botao.classList.add('wrong');
    }
  });

  // Exibe feedback
  var feedbackEl = document.getElementById('quizFeedback');
  if (feedbackEl) {
    feedbackEl.textContent = (correto ? '✅ ' : '❌ ') + q.explicacao;
    feedbackEl.className = 'quiz-feedback show ' + (correto ? 'feedback-correct' : 'feedback-wrong');
  }

  // Mostra botão de próxima
  var nextBtn = document.getElementById('quizNextBtn');
  if (nextBtn) {
    nextBtn.classList.add('show');
  }
}

function mostrarResultado() {
  var total = quizData.length;
  var pontos = quizState.pontuacao;
  var porcentagem = Math.round((pontos / total) * 100);

  var cor, mensagem, nivel;

  if (pontos === total) {
    cor = '#16A34A';
    mensagem = '🏆 Incrível! Você é um(a) verdadeiro(a) especialista em cidadania digital!';
    nivel = 'Especialista';
  } else if (pontos >= 4) {
    cor = '#0057FF';
    mensagem = '👏 Muito bem! Você tem bom conhecimento sobre deepfakes e desinformação.';
    nivel = 'Avançado';
  } else if (pontos >= 2) {
    cor = '#FFB300';
    mensagem = '📚 Bom começo! Vale revisar as dicas e tentar novamente para melhorar.';
    nivel = 'Intermediário';
  } else {
    cor = '#DC2626';
    mensagem = '⚠️ Atenção! Leia com cuidado o conteúdo desta página — ele pode proteger você!';
    nivel = 'Iniciante';
  }

  quizContainer.innerHTML =
    '<div class="quiz-result">' +
      '<div class="result-score" style="color: ' + cor + '">' + pontos + '/' + total + '</div>' +
      '<p class="result-label">Nível: <strong>' + nivel + '</strong> · ' + porcentagem + '% de acertos</p>' +
      '<p class="result-message">' + mensagem + '</p>' +
      '<button class="quiz-restart-btn" id="quizRestartBtn">↩ Tentar novamente</button>' +
    '</div>';

  var restartBtn = document.getElementById('quizRestartBtn');
  if (restartBtn) {
    restartBtn.addEventListener('click', iniciarQuiz);
  }
}

// Inicia o quiz ao carregar a página
iniciarQuiz();

// ============================================
// 5. VALIDAÇÃO DE FORMULÁRIO
// ============================================

var contactForm = document.getElementById('contactForm');

function mostrarErro(campoId, mensagem) {
  var errorEl = document.getElementById(campoId + 'Error');
  var campo = document.getElementById(campoId);
  if (errorEl) errorEl.textContent = mensagem;
  if (campo) {
    campo.classList.add('field-error');
    campo.classList.remove('field-ok');
  }
}

function limparErro(campoId) {
  var errorEl = document.getElementById(campoId + 'Error');
  var campo = document.getElementById(campoId);
  if (errorEl) errorEl.textContent = '';
  if (campo) {
    campo.classList.remove('field-error');
    campo.classList.add('field-ok');
  }
}

function validarEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validação em tempo real (ao sair do campo)
var campos = ['nome', 'email', 'tipoConteudo', 'link'];

campos.forEach(function (campoId) {
  var campo = document.getElementById(campoId);
  if (campo) {
    campo.addEventListener('blur', function () {
      validarCampo(campoId);
    });

    campo.addEventListener('input', function () {
      if (campo.classList.contains('field-error')) {
        validarCampo(campoId);
      }
    });
  }
});

function validarCampo(campoId) {
  var campo = document.getElementById(campoId);
  if (!campo) return true;

  var valor = campo.value.trim();

  if (campoId === 'nome') {
    if (valor === '') {
      mostrarErro('nome', 'Por favor, informe seu nome completo.');
      return false;
    }
    if (valor.length < 3) {
      mostrarErro('nome', 'O nome deve ter pelo menos 3 caracteres.');
      return false;
    }
    limparErro('nome');
    return true;
  }

  if (campoId === 'email') {
    if (valor === '') {
      mostrarErro('email', 'Por favor, informe seu e-mail.');
      return false;
    }
    if (!validarEmail(valor)) {
      mostrarErro('email', 'Digite um e-mail válido (ex: nome@dominio.com).');
      return false;
    }
    limparErro('email');
    return true;
  }

  if (campoId === 'tipoConteudo') {
    if (valor === '') {
      mostrarErro('tipoConteudo', 'Selecione o tipo de conteúdo.');
      return false;
    }
    limparErro('tipoConteudo');
    return true;
  }

  if (campoId === 'link') {
    if (valor === '') {
      mostrarErro('link', 'Descreva ou cole o link do conteúdo suspeito.');
      return false;
    }
    if (valor.length < 20) {
      mostrarErro('link', 'Forneça mais detalhes sobre o conteúdo suspeito (mínimo 20 caracteres).');
      return false;
    }
    limparErro('link');
    return true;
  }

  return true;
}

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var nomeOk    = validarCampo('nome');
    var emailOk   = validarCampo('email');
    var tipoOk    = validarCampo('tipoConteudo');
    var linkOk    = validarCampo('link');

    var termos = document.getElementById('termos');
    var termosOk = false;
    var termosError = document.getElementById('termosError');

    if (termos && !termos.checked) {
      if (termosError) termosError.textContent = 'Você precisa confirmar que leu as instruções.';
      termosOk = false;
    } else {
      if (termosError) termosError.textContent = '';
      termosOk = true;
    }

    var tudo = nomeOk && emailOk && tipoOk && linkOk && termosOk;

    if (tudo) {
      // Simula envio bem-sucedido (projeto educativo sem backend)
      var successEl = document.getElementById('formSuccess');
      var submitBtn = contactForm.querySelector('.btn-form');

      if (successEl) {
        successEl.hidden = false;
        successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = '✅ Enviado!';
        submitBtn.style.background = '#16A34A';
        submitBtn.style.borderColor = '#16A34A';
      }

      // Reseta o formulário após 5 segundos
      setTimeout(function () {
        contactForm.reset();
        if (successEl) successEl.hidden = true;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar relato';
          submitBtn.style.background = '';
          submitBtn.style.borderColor = '';
        }
        campos.forEach(function (campoId) {
          var el = document.getElementById(campoId);
          if (el) {
            el.classList.remove('field-ok', 'field-error');
          }
        });
      }, 5000);

    } else {
      // Rola até o primeiro campo com erro
      var primeiroErro = contactForm.querySelector('.field-error');
      if (primeiroErro) {
        primeiroErro.focus();
        primeiroErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}

// ============================================
// 6. ANIMAÇÃO DE ENTRADA AO ROLAR (SCROLL REVEAL)
// ============================================

function revelarAoRolar() {
  var elementos = document.querySelectorAll(
    '.tip-card, .info-card, .process-step, .practice-group, .stat-item'
  );

  elementos.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  var observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = '1';
        entrada.target.style.transform = 'translateY(0)';
        observer.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elementos.forEach(function (el) {
    observer.observe(el);
  });
}

// Só aplica scroll reveal se o usuário não preferir menos movimento
var prefereReducao = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefereReducao) {
  revelarAoRolar();
}
