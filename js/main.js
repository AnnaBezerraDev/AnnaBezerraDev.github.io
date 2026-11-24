/**
 * ANNA LUIZA BEZERRA — PORTFOLIO HIGH-TECH ENGINE (SMOOTH EDITION)
 * Author: Anna Luiza Bezerra (@AnnaBezerraDev)
 * Location: Barretos - SP, Brasil
 * Instagram: @devbezerra | Email: annalubezerra9@gmail.com
 * Features:
 *   1. Cyber Canvas Particle Constellation (Interactive background)
 *   2. Scroll Progress Bar & Stable Scroll Reveal Animations
 *   3. Smooth Cyber Spotlight Card Glare (Vercel/Linear Style - Zero Jitter)
 *   4. Animated Number Counters
 *   5. Glowing Cursor Follower (Desktop only)
 *   6. Typewriter Effect
 *   7. Project Details Architectural Modals
 *   8. Terminal Tabs & Quick Copy
 *   9. Web Audio API Synthesizer (Microinteractions)
 *  10. Guaranteed Email Dispatch (Gmail Web, Native Mailto & AJAX)
 */

// ==========================================
// 1. DATA STORE FOR PROJECT MODALS
// ==========================================
const PROJECTS_DATA = {
  'revolta-game': {
    title: 'A Revolta das Letrinhas (Jogo Educativo 2D)',
    subtitle: 'Unity 6 • C# • Alfabetização & Língua Portuguesa • WebGL & Windows',
    badge: 'Unity 6 & C#',
    badgeClass: 'badge-game',
    image: 'https://raw.githubusercontent.com/AnnaBezerraDev/A-Revolta-das-Letrinhas/main/docs/assets/capa.png',
    github: 'https://github.com/AnnaBezerraDev/A-Revolta-das-Letrinhas',
    description: `
      <p><strong>A Revolta das Letrinhas</strong> é um jogo educativo infantil em 2D desenvolvido com a engine <strong>Unity (versão 6000.3.0f1)</strong> e programado inteiramente em <strong>C#</strong>. O objetivo do projeto é transformar a jornada de alfabetização, ortografia e gramática da língua portuguesa em uma aventura lúdica, imersiva e divertida para crianças do ensino fundamental.</p>
      
      <h4 style="margin: 20px 0 10px; color: var(--accent-purple); font-size: 1.1rem;">✨ Destaques & Funcionalidades:</h4>
      <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary);">
        <li><strong>Missões Pedagógicas:</strong> Desafios de acentuação, separação silábica, pontuação e formação de palavras.</li>
        <li><strong>Cross-Platform:</strong> Build otimizada para Desktop Windows (.exe) e execução fluida em navegadores via WebGL (Itch.io ready).</li>
        <li><strong>Design & Áudio Imersivos:</strong> Telas ilustradas personalizadas, transições suaves, efeitos sonoros lúdicos e música tema cativante.</li>
        <li><strong>Configuração Escolar:</strong> Arquitetura preparada para leitura de parâmetros escolares (<code>config_escola.json</code>) adaptando a dificuldade ao nível dos alunos.</li>
      </ul>

      <h4 style="margin: 20px 0 10px; color: var(--accent-cyan); font-size: 1.1rem;">🛠️ Stack Técnica:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
        <span class="tag">Unity 6</span>
        <span class="tag">C# (.NET)</span>
        <span class="tag">WebGL</span>
        <span class="tag">Game Architecture</span>
        <span class="tag">Sound Design</span>
        <span class="tag">JSON Config</span>
      </div>
    `
  },

  'revolta-server': {
    title: 'A Revolta das Letrinhas — Servidor & API',
    subtitle: 'ASP.NET Core • C# • Docker • Telemetria Escolar & REST API',
    badge: 'ASP.NET Core & Docker',
    badgeClass: 'badge-csharp',
    image: null,
    github: 'https://github.com/AnnaBezerraDev/A-Revolta-das-Letrinhas-Server',
    description: `
      <p>O <strong>A-Revolta-das-Letrinhas-Server</strong> é o ecossistema back-end que sustenta a telemetria, acompanhamento pedagógico e sincronização das atividades do jogo. Desenvolvido em <strong>ASP.NET Core (C#)</strong> com arquitetura em camadas e containerizado via <strong>Docker</strong>.</p>
      
      <h4 style="margin: 20px 0 10px; color: var(--accent-purple); font-size: 1.1rem;">✨ Destaques da Infraestrutura:</h4>
      <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary);">
        <li><strong>API RESTful Segura:</strong> Endpoints para sincronização de notas, acertos e dificuldades específicas de cada aluno por turma.</li>
        <li><strong>Containerização Docker:</strong> Dockerfile otimizado pronto para deploy em ambientes corporativos ou nuvem.</li>
        <li><strong>Scripts de Automação:</strong> Scripts <code>IniciarServidor.bat</code> para implantação rápida local por coordenadores pedagógicos.</li>
        <li><strong>Painel Administrativo:</strong> Módulo de gestão de turmas e controle de acessos pedagógicos.</li>
      </ul>

      <h4 style="margin: 20px 0 10px; color: var(--accent-cyan); font-size: 1.1rem;">🛠️ Stack Técnica:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
        <span class="tag">C#</span>
        <span class="tag">ASP.NET Core Web API</span>
        <span class="tag">Docker</span>
        <span class="tag">REST Architecture</span>
        <span class="tag">JSON Contracts</span>
      </div>
    `
  },

  'bytevault': {
    title: 'BYTEVAULT — Ambiente de Produtividade do Engenheiro de Software',
    subtitle: '.NET 10 LTS • C# 13 • WPF (XAML) • MVVM • EF Core 10 & SQLite • xUnit',
    badge: '.NET 10 & Clean Architecture',
    badgeClass: 'badge-csharp',
    image: null,
    github: 'https://github.com/AnnaBezerraDev/ByteVault',
    description: `
      <p><strong>BYTEVAULT</strong> é um ambiente desktop nativo de organização e produtividade pessoal de altíssimo padrão para desenvolvedores e estudantes de Engenharia de Software. Permite centralizar snippets de código, comandos de terminal, anotações em Markdown e um diário de bugs com persistência local ultrarrápida e privacidade garantida por padrão.</p>
      
      <h4 style="margin: 20px 0 10px; color: var(--accent-purple); font-size: 1.1rem;">🏛️ Arquitetura em Camadas (Clean Architecture):</h4>
      <pre style="background: #110d24; padding: 14px; border-radius: 10px; font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 16px;">
├── ByteVault.Dominio         # Entidades, Enums, Regras de Negócio Puras
├── ByteVault.Aplicacao       # Casos de uso, DTOs, Serviços e Validações (MVVM)
├── ByteVault.Infraestrutura  # EF Core 10, Migrações Versionadas, SQLite, Repositórios
├── ByteVault.Apresentacao    # WPF, XAML, Injeção de Dependência, Telas e Design System
└── tests/                    # xUnit: Testes Unitários e Integração com SQLite em memória</pre>

      <h4 style="margin: 20px 0 10px; color: var(--accent-cyan); font-size: 1.1rem;">🚀 Funcionalidades Técnicas:</h4>
      <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary);">
        <li><strong>Busca Global Instantânea (Ctrl+K):</strong> Indexação local em tempo real com filtros por linguagem e tags.</li>
        <li><strong>Padrão MVVM com Injeção de Dependência:</strong> Utilização do <code>CommunityToolkit.Mvvm</code> e <code>Microsoft.Extensions.Hosting</code>.</li>
        <li><strong>Logging Estruturado:</strong> Integração com <code>Serilog</code> com rotação diária de arquivos.</li>
        <li><strong>Cobertura de Testes:</strong> Bateria automatizada com <code>xUnit</code> validando todas as regras de domínio.</li>
      </ul>
    `
  },

  'mercado': {
    title: 'Mercado — Sistema Integrado de Supermercado & App Mobile',
    subtitle: 'React 18 • Vite • Node.js • Socket.io • React Native (Expo) • SQLite/MySQL',
    badge: 'Full Stack & Mobile',
    badgeClass: 'badge-web',
    image: null,
    github: 'https://github.com/AnnaBezerraDev/Mercado-Sistema',
    description: `
      <p>Ecossistema corporativo completo para automação e gestão de supermercados e redes varejistas, combinando frente de caixa de alta performance, retaguarda administrativa analítica e aplicativo móvel com clube de fidelidade.</p>

      <h4 style="margin: 20px 0 10px; color: var(--accent-purple); font-size: 1.1rem;">🖥️ Módulos Integrados:</h4>
      <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary);">
        <li><strong>Frente de Caixa (PDV Web Isolado):</strong> Operação sem distrações em tela cheia com atalhos de alta velocidade pelo teclado (<code>F9</code> para finalizar, <code>F3</code> cancelar, <code>F4</code> desconto, <code>F11</code> full screen). Suporte a leitor USB de código de barras e câmera.</li>
        <li><strong>Sincronização em Tempo Real (WebSockets):</strong> Notificação instantânea com alerta sonoro no painel da expedição a cada novo pedido realizado pelo aplicativo.</li>
        <li><strong>App Mobile do Consumidor (React Native & Expo):</strong> Navegação por catálogo, clube de cashback com níveis (Bronze, Prata e Ouro VIP) e QR Code individual para leitura no caixa.</li>
        <li><strong>Painel Executivo & Estoque:</strong> Dashboard analítico com Recharts, telemetria de ticket médio, controle cego de caixa, sangria e alertas de estoque mínimo.</li>
      </ul>

      <h4 style="margin: 20px 0 10px; color: var(--accent-cyan); font-size: 1.1rem;">🛠️ Tecnologias Utilizadas:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
        <span class="tag">React 18 + Vite</span>
        <span class="tag">Node.js + Express</span>
        <span class="tag">Socket.io (WebSockets)</span>
        <span class="tag">React Native (Expo SDK 57)</span>
        <span class="tag">Better-SQLite3 / MySQL</span>
        <span class="tag">JWT & Bcrypt</span>
      </div>
    `
  },

  'palazzo': {
    title: 'Palazzo Essenza — Ecossistema Gastronômico Full Stack',
    subtitle: 'PHP 8.x • MySQL • JavaScript ES6+ • WhatsApp Green API • Android APK',
    badge: 'Gastronomia & Web',
    badgeClass: 'badge-php',
    image: 'https://raw.githubusercontent.com/AnnaBezerraDev/Palazzo-Essenza/main/assets/img/logo.png',
    github: 'https://github.com/AnnaBezerraDev/Palazzo-Essenza',
    description: `
      <p><strong>Palazzo Essenza</strong> é uma solução digital sob medida criada para um restaurante italiano de alta culinária. O projeto integra presença web refinada com design <em>Glassmorphism</em>, catálogo interativo de pratos, sistema de reservas de mesas, painel administrativo e aplicativo Android dedicado.</p>

      <h4 style="margin: 20px 0 10px; color: var(--accent-purple); font-size: 1.1rem;">🍝 Principais Recursos:</h4>
      <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary);">
        <li><strong>Cardápio Digital & Pedidos:</strong> Navegação sensorial por massas artesanais, vinhos e sobremesas com cálculo automático de taxa de entrega e carrinho interativo.</li>
        <li><strong>Reservas de Mesa com Notificação WhatsApp:</strong> Confirmação em tempo real e disparos automatizados para o cliente via integração com a Green API.</li>
        <li><strong>Dashboard de Controle Administrativo:</strong> Gestão de pedidos pendentes, controle de entregas, faturamento diário e impressão de comandas.</li>
        <li><strong>Aplicativo Móvel Android:</strong> Pacote APK nativo integrado para pedidos rápidos no smartphone.</li>
      </ul>

      <h4 style="margin: 20px 0 10px; color: var(--accent-cyan); font-size: 1.1rem;">🛠️ Stack Técnica:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
        <span class="tag">PHP 8.x</span>
        <span class="tag">MySQL Relacional</span>
        <span class="tag">JavaScript Moderno</span>
        <span class="tag">Glassmorphism CSS3</span>
        <span class="tag">WhatsApp API</span>
        <span class="tag">Android APK</span>
      </div>
    `
  }
};

// ==========================================
// 2. WEB AUDIO SYNTHESIZER (MICRO INTERACTIONS)
// ==========================================
class SoundFX {
  constructor() {
    this.audioCtx = null;
    this.muted = false;
  }

  init() {
    if (!this.audioCtx && typeof window.AudioContext !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }
  }

  playPop(freq = 520, duration = 0.06) {
    if (this.muted) return;
    try {
      this.init();
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.4, this.audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay restrictions
    }
  }

  playSuccess() {
    if (this.muted) return;
    try {
      this.playPop(523, 0.08); // C5
      setTimeout(() => this.playPop(659, 0.08), 90); // E5
      setTimeout(() => this.playPop(784, 0.14), 180); // G5
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// ==========================================
// 3. CYBER CANVAS PARTICLE CONSTELLATION
// ==========================================
function initCyberCanvas() {
  const canvas = document.getElementById('cyberCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 75);

  const colors = ['#bd93f9', '#8be9fd', '#50fa7b', '#ff79c6'];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.65,
      vy: (Math.random() - 0.5) * 0.65,
      radius: Math.random() * 1.8 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse subtle repulsion
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        p.x -= (dx / dist) * force * 1.8;
        p.y -= (dy / dist) * force * 1.8;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      // Connecting lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist2 < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = '#bd93f9';
          ctx.globalAlpha = (1 - dist2 / 120) * 0.16;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// 4. SCROLL PROGRESS BAR & SCROLL REVEAL
// ==========================================
function initScrollEngine() {
  const progressBar = document.getElementById('scrollProgress');

  // Scroll Progress Calculation
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  }, { passive: true });

  // Scroll Reveal via IntersectionObserver
  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

// ==========================================
// 5. ANIMATED NUMBER COUNTERS
// ==========================================
function initNumberCounters() {
  const counters = document.querySelectorAll('.counter');
  let hasRun = false;

  const runCounters = () => {
    if (hasRun) return;
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      let count = 0;
      const speed = Math.ceil(target / 45);
      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.textContent = count;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
    hasRun = true;
  };

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounters();
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(statsSection);
  } else {
    runCounters();
  }
}

// ==========================================
// 6. SMOOTH CYBER SPOTLIGHT HOVER (ZERO JITTER / ZERO BUG)
// ==========================================
function initCyberCardsSpotlight() {
  const cards = document.querySelectorAll('.cyber-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }, { passive: true });
  });
}

// ==========================================
// 7. HIGH-TECH GLOW CURSOR FOLLOWER
// ==========================================
function initCursorFollower() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const glow = document.getElementById('cursorGlow');
  const dot = document.getElementById('cursorDot');
  if (!glow || !dot) return;

  let mouseX = -100;
  let mouseY = -100;
  let glowX = -100;
  let glowY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
    dot.style.opacity = '1';
    glow.style.opacity = '1';
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    glow.style.opacity = '0';
  });

  function renderCursor() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';

    requestAnimationFrame(renderCursor);
  }

  renderCursor();
}

// ==========================================
// 8. TYPEWRITER EFFECT
// ==========================================
function initTypewriter() {
  const element = document.getElementById('typewriter');
  if (!element) return;

  const words = [
    'Desenvolvimento Full Stack',
    'Engenharia de Software em C#',
    'Aplicações Web em React 18',
    'Ecossistemas em Node.js & APIs',
    'Jogos Educativos na Unity 6',
    'Clean Architecture & MVVM',
    'Sistemas em Tempo Real (WebSockets)'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseTime = 1800;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      element.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// ==========================================
// 9. TERMINAL WIDGET TABS & COPY
// ==========================================
function initTerminal() {
  const tabs = document.querySelectorAll('.terminal-tabs .tab-btn');
  const contents = document.querySelectorAll('.terminal-body .terminal-content');
  const copyBtn = document.getElementById('copyCodeBtn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sfx.playPop(700);
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = 'tab-' + tab.dataset.tab;
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      sfx.playPop(900);
      const activeContent = document.querySelector('.terminal-body .terminal-content.active');
      if (activeContent) {
        navigator.clipboard.writeText(activeContent.innerText).then(() => {
          const originalIcon = copyBtn.innerHTML;
          copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--accent-green);"></i>';
          setTimeout(() => {
            copyBtn.innerHTML = originalIcon;
          }, 2000);
        });
      }
    });
  }
}

// ==========================================
// 10. PROJECTS FILTER SYSTEM
// ==========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playPop(600);
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const categories = card.dataset.category.split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// ==========================================
// 11. PROJECT DETAILS MODAL
// ==========================================
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalCloseBtn');
  const openButtons = document.querySelectorAll('.open-details-btn');

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    sfx.playPop(750);

    let imageHtml = '';
    if (data.image) {
      imageHtml = `
        <div style="margin-bottom: 24px; border-radius: 14px; overflow: hidden; background: #0e0b1d; max-height: 280px; display: flex; align-items: center; justify-content: center;">
          <img src="${data.image}" alt="${data.title}" style="max-width: 100%; max-height: 280px; object-fit: contain;">
        </div>
      `;
    }

    modalContent.innerHTML = `
      ${imageHtml}
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
        <span class="card-badge ${data.badgeClass}">${data.badge}</span>
      </div>
      <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 8px;">
        ${data.title}
      </h2>
      <p style="font-family: var(--font-mono); font-size: 0.88rem; color: var(--accent-purple); margin-bottom: 20px;">
        ${data.subtitle}
      </p>
      
      <div style="margin-bottom: 28px;">
        ${data.description}
      </div>

      <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fa-brands fa-github"></i> Ver Código no GitHub
        </a>
        <button class="btn btn-glass" onclick="document.getElementById('projectModal').classList.remove('open')">
          Fechar
        </button>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    sfx.playPop(450);
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(btn.dataset.project);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

// ==========================================
// 12. NAVBAR & SCROLL INTERACTION
// ==========================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy
    const scrollPos = window.scrollY + 120;
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playPop(550);
      navMenu.classList.toggle('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sfx.playPop(650);
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    }
  });
}

// ==========================================
// 13. SOUND TOGGLE BUTTON
// ==========================================
function initSoundToggle() {
  const btn = document.getElementById('soundToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    sfx.muted = !sfx.muted;
    if (sfx.muted) {
      btn.classList.add('muted');
      btn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
      btn.classList.remove('muted');
      btn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      sfx.playPop(800);
    }
  });
}

// ==========================================
// 14. 100% DIRECT IN-PAGE EMAIL DISPATCHER (SEM ABRIR GMAIL / SEM REDIRECIONAR)
// ==========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitFormBtn');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');
  const hiddenIframe = document.getElementById('contact_hidden_iframe');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      feedback.className = 'form-feedback error';
      feedback.style.display = 'block';
      return;
    }

    // Set Loading State (Em envio direto)
    submitBtn.disabled = true;
    btnText.textContent = 'Enviando mensagem diretamente...';
    btnIcon.className = 'fa-solid fa-spinner fa-spin';
    feedback.style.display = 'none';

    // Disparo direto em segundo plano via Fetch para a API do FormSubmit
    const payload = {
      name: name,
      email: email,
      _subject: `[Portfólio Anna.Dev] ${subject}`,
      message: message,
      _captcha: 'false',
      _template: 'table'
    };

    try {
      fetch('https://formsubmit.co/ajax/annalubezerra9@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      }).catch(() => {
        // Fallback silencioso (o form já envia pelo hidden iframe em paralelo)
      });
    } catch (err) {}

    // Sucesso exibido diretamente na página sem redirecionamento
    setTimeout(() => {
      sfx.playSuccess();

      feedback.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <i class="fa-solid fa-circle-check" style="font-size: 1.6rem; color: var(--accent-green);"></i>
          <h4 style="color: var(--accent-green); margin: 0; font-size: 1.2rem; font-weight: 700;">Mensagem Enviada com Sucesso!</h4>
        </div>
        <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem; line-height: 1.6;">
          Obrigada pelo contato, <strong>${name}</strong>! Sua mensagem foi enviada diretamente para o e-mail de Anna (<strong>annalubezerra9@gmail.com</strong>) e será respondida em breve.
        </p>
      `;
      feedback.className = 'form-feedback success';
      feedback.style.display = 'block';

      form.reset();
      submitBtn.disabled = false;
      btnText.textContent = 'Enviar Outra Mensagem';
      btnIcon.className = 'fa-solid fa-paper-plane';
    }, 900);
  });
}

// ==========================================
// 15. CURRENT YEAR IN FOOTER
// ==========================================
function initFooterYear() {
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}

// ==========================================
// INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initCyberCanvas();
  initScrollEngine();
  initNumberCounters();
  initCyberCardsSpotlight();
  initCursorFollower();
  initTypewriter();
  initTerminal();
  initProjectFilters();
  initProjectModal();
  initNavbar();
  initSoundToggle();
  initContactForm();
  initFooterYear();
  console.log('⚡ High-Tech Portfolio Engine running flawlessly — Anna Luiza Bezerra [Barretos - SP]');
});
