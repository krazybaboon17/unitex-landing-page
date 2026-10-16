import './style.css'

const shortcutsData = [
  // AP Calc BC & Derivatives
  { trigger: '//ddx', output: 'd/dx(□)', category: 'calc', desc: 'Derivative template' },
  { trigger: '//ddt', output: 'd/dt(□)', category: 'calc', desc: 'Time derivative template' },
  { trigger: '//ddy', output: 'd/dy(□)', category: 'calc', desc: 'y-derivative template' },
  { trigger: '//dydx', output: 'dy/dx', category: 'calc', desc: 'First derivative' },
  { trigger: '//dydt', output: 'dy/dt', category: 'calc', desc: 'Rate of change' },
  { trigger: '//dxdt', output: 'dx/dt', category: 'calc', desc: 'Parametric velocity' },
  { trigger: '//lim', output: 'lim_(□→□) (□)', category: 'calc', desc: 'Limit template with box navigation' },
  { trigger: '//to', output: '→', category: 'calc', desc: 'Right arrow / approaches' },
  { trigger: '//int', output: '∫', category: 'calc', desc: 'Definite/indefinite integral' },
  { trigger: '//iint', output: '∬', category: 'calc', desc: 'Double integral' },
  { trigger: '//iiint', output: '∭', category: 'calc', desc: 'Triple integral' },
  { trigger: '//oint', output: '∮', category: 'calc', desc: 'Contour line integral' },
  { trigger: '//prime', output: '′', category: 'calc', desc: 'Prime notation (f′)' },
  { trigger: '//dprime', output: '″', category: 'calc', desc: 'Second derivative (f″)' },
  { trigger: '//infty', output: '∞', category: 'calc', desc: 'Infinity' },
  { trigger: '//partial', output: '∂', category: 'calc', desc: 'Partial differential' },
  { trigger: '//nabla', output: '∇', category: 'calc', desc: 'Del / gradient vector' },

  // Interactive Templates
  { trigger: '//frac', output: '(□)/(□)', category: 'template', desc: 'Nested fraction template' },
  { trigger: '//pow', output: '□^□ (e.g. x²)', category: 'template', desc: 'Superscript power template' },
  { trigger: '//log', output: 'log_□(□)', category: 'template', desc: 'Logarithm with custom base' },
  { trigger: '//ln', output: 'ln(□)', category: 'template', desc: 'Natural logarithm' },
  { trigger: '//sin', output: 'sin(□)', category: 'template', desc: 'Sine function' },
  { trigger: '//cos', output: 'cos(□)', category: 'template', desc: 'Cosine function' },
  { trigger: '//tan', output: 'tan(□)', category: 'template', desc: 'Tangent function' },
  { trigger: '//arcsin', output: 'arcsin(□)', category: 'template', desc: 'Inverse sine' },
  { trigger: '//arccos', output: 'arccos(□)', category: 'template', desc: 'Inverse cosine' },
  { trigger: '//arctan', output: 'arctan(□)', category: 'template', desc: 'Inverse tangent' },
  { trigger: '//cbrt', output: '∛(□)', category: 'template', desc: 'Cube root' },
  { trigger: '//_', output: '□ (e.g. x₁)', category: 'template', desc: 'Subscript template' },
  { trigger: '//vec', output: '□⃗', category: 'template', desc: 'Vector arrow overline' },
  { trigger: '//bar', output: '□̄', category: 'template', desc: 'Combining overline' },

  // Greek Symbols
  { trigger: '//alpha', output: 'α', category: 'greek', desc: 'Alpha' },
  { trigger: '//beta', output: 'β', category: 'greek', desc: 'Beta' },
  { trigger: '//gamma', output: 'γ', category: 'greek', desc: 'Gamma' },
  { trigger: '//delta', output: 'δ', category: 'greek', desc: 'Delta (lowercase)' },
  { trigger: '//Delta', output: 'Δ', category: 'greek', desc: 'Delta (uppercase)' },
  { trigger: '//epsilon', output: 'ε', category: 'greek', desc: 'Epsilon' },
  { trigger: '//theta', output: 'θ', category: 'greek', desc: 'Theta' },
  { trigger: '//Theta', output: 'Θ', category: 'greek', desc: 'Theta (uppercase)' },
  { trigger: '//lambda', output: 'λ', category: 'greek', desc: 'Lambda' },
  { trigger: '//Lambda', output: 'Λ', category: 'greek', desc: 'Lambda (uppercase)' },
  { trigger: '//mu', output: 'μ', category: 'greek', desc: 'Mu' },
  { trigger: '//pi', output: 'π', category: 'greek', desc: 'Pi' },
  { trigger: '//Pi', output: 'Π', category: 'greek', desc: 'Pi product' },
  { trigger: '//sigma', output: 'σ', category: 'greek', desc: 'Sigma' },
  { trigger: '//Sigma', output: 'Σ', category: 'greek', desc: 'Sigma summation' },
  { trigger: '//phi', output: 'φ', category: 'greek', desc: 'Phi' },
  { trigger: '//omega', output: 'ω', category: 'greek', desc: 'Omega' },
  { trigger: '//Omega', output: 'Ω', category: 'greek', desc: 'Omega (uppercase)' },

  // Operators & Sets
  { trigger: '//sqrt', output: '√', category: 'operator', desc: 'Square root' },
  { trigger: '//times', output: '×', category: 'operator', desc: 'Multiplication cross' },
  { trigger: '//div', output: '÷', category: 'operator', desc: 'Division symbol' },
  { trigger: '//cdot', output: '·', category: 'operator', desc: 'Center dot' },
  { trigger: '//pm', output: '±', category: 'operator', desc: 'Plus-minus' },
  { trigger: '//mp', output: '∓', category: 'operator', desc: 'Minus-plus' },
  { trigger: '//sum', output: '∑', category: 'operator', desc: 'Summation' },
  { trigger: '//prod', output: '∏', category: 'operator', desc: 'Product' },
  { trigger: '//approx', output: '≈', category: 'operator', desc: 'Approximately equal' },
  { trigger: '//neq', output: '≠', category: 'operator', desc: 'Not equal' },
  { trigger: '//leq', output: '≤', category: 'operator', desc: 'Less than or equal' },
  { trigger: '//geq', output: '≥', category: 'operator', desc: 'Greater than or equal' },
  { trigger: '//in', output: '∈', category: 'operator', desc: 'Element of' },
  { trigger: '//forall', output: '∀', category: 'operator', desc: 'For all' },
  { trigger: '//exists', output: '∃', category: 'operator', desc: 'There exists' }
];

// Interactive simulator conversions map
const simReplacements = {
  '//ddx': 'd/dx(x²)',
  '//ddt': 'd/dt(r)',
  '//ddy': 'd/dy(f)',
  '//dydx': 'dy/dx',
  '//dydt': 'dy/dt',
  '//dxdt': 'dx/dt',
  '//lim': 'lim_(x→0) ((sin(x))/(x))',
  '//to': '→',
  '//frac': '(a)/(b)',
  '//pow': 'x²',
  '//log': 'log₂(x)',
  '//ln': 'ln(x)',
  '//sin': 'sin(θ)',
  '//cos': 'cos(θ)',
  '//tan': 'tan(θ)',
  '//int': '∫',
  '//iint': '∬',
  '//iiint': '∭',
  '//oint': '∮',
  '//prime': '′',
  '//dprime': '″',
  '//sqrt': '√',
  '//cbrt': '∛(x)',
  '//pi': 'π',
  '//theta': 'θ',
  '//alpha': 'α',
  '//beta': 'β',
  '//infty': '∞',
  '//sum': '∑',
  '//prod': '∏',
  '//partial': '∂',
  '//nabla': '∇',
  '//times': '×',
  '//div': '÷',
  '//cdot': '·',
  '//pm': '±',
  '//approx': '≈',
  '//neq': '≠',
  '//leq': '≤',
  '//geq': '≥'
};

document.querySelector('#app').innerHTML = `
  <div class="container">
    <nav class="top-nav">
      <div class="nav-left">
        <span class="nav-brand">UNITEX</span>
        <span class="status-pill"><span class="status-dot"></span> v1.1.0 ACTIVE</span>
      </div>
      <div class="nav-links">
        <a href="#simulator" class="nav-link">Interactive Demo</a>
        <a href="#mappings" class="nav-link">Mappings</a>
        <a href="#how-it-works" class="nav-link">How It Works</a>
        <a href="#install" class="nav-link">Install</a>
        <a href="https://github.com/krazybaboon17/UniTeX" target="_blank" rel="noopener noreferrer" class="nav-btn github-btn">
          <svg class="gh-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub ★
        </a>
      </div>
    </nav>

    <header>
      <h1>UNITEX</h1>
      <div class="subtitle">Global Math Typing. Zero Friction.</div>
    </header>

    <div class="marquee">
      <div class="marquee-content">
        <span>WORKS IN ALL APPS</span> • <span>NO CONTEXT SWITCHING</span> • <span>GLOBAL LISTENER</span> • <span>NATIVE MACOS</span> • <span>AP CALC BC ENGINE</span> • <span>//ddx & //ddt DERIVATIVES</span> • <span>NESTED TEMPLATES</span> • <span>SUB-100MS LATENCY</span> • 
        <span>WORKS IN ALL APPS</span> • <span>NO CONTEXT SWITCHING</span> • <span>GLOBAL LISTENER</span> • <span>NATIVE MACOS</span> • <span>AP CALC BC ENGINE</span> • <span>//ddx & //ddt DERIVATIVES</span> • <span>NESTED TEMPLATES</span> • <span>SUB-100MS LATENCY</span> • 
      </div>
    </div>

    <!-- Live Interactive Simulator Section -->
    <section class="simulator-section" id="simulator">
      <div class="sim-header">
        <div class="sim-title-group">
          <span class="sim-badge">LIVE IN-BROWSER SIMULATOR</span>
          <h2>Try UniTeX Right Now</h2>
        </div>
        <p class="sim-subtitle">Type shorthands like <code>//ddx</code>, <code>//lim</code>, <code>//frac</code>, or <code>//pi</code> below to see UniTeX transform them on the fly:</p>
      </div>
      
      <div class="sim-window">
        <div class="sim-window-bar">
          <div class="mac-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="sim-window-title">unitex-live-engine ~ interactive-sandbox</span>
          <button class="sim-clear-btn" id="sim-clear-btn">Clear</button>
        </div>
        <div class="sim-input-area">
          <textarea id="sim-input" placeholder="Click here and type: //ddx or //lim or //frac or //pi..." rows="3"></textarea>
          <div class="sim-feedback" id="sim-feedback">UniTeX engine listening for // triggers...</div>
        </div>
        <div class="sim-chips-bar">
          <span class="chips-label">Quick Test Chips:</span>
          <button class="chip" data-code="//ddx">//ddx</button>
          <button class="chip" data-code="//ddt">//ddt</button>
          <button class="chip" data-code="//dydx">//dydx</button>
          <button class="chip" data-code="//lim">//lim</button>
          <button class="chip" data-code="//frac">//frac</button>
          <button class="chip" data-code="//int">//int</button>
          <button class="chip" data-code="//sqrt">//sqrt</button>
          <button class="chip" data-code="//pi">//pi</button>
          <button class="chip" data-code="//theta">//theta</button>
          <button class="chip" data-code="//infty">//infty</button>
        </div>
      </div>
    </section>

    <div class="grid">
      <div class="box engine-box">
        <h2>The Engine</h2>
        <p>UniTeX runs silently in the background across your entire Mac. Type intuitive triggers like <code>//lim</code>, <code>//ddx</code>, or <code>//frac</code> anywhere—in Apple Notes, Notion, Slack, Discord, Google Docs, VS Code, or terminal.</p>
        <p>UniTeX erases the shorthand and injects full math expressions instantly. Featuring a recursive multi-box template engine, easily nest fractions within limits and powers within fractions without breaking focus.</p>
        
        <div class="metrics">
          <div class="metric">
            <span class="metric-val">~0.1s</span>
            <span class="metric-label">LATENCY</span>
          </div>
          <div class="metric">
            <span class="metric-val">100%</span>
            <span class="metric-label">APP COMPATIBILITY</span>
          </div>
          <div class="metric">
            <span class="metric-val">50+</span>
            <span class="metric-label">BUILT-IN MAPPINGS</span>
          </div>
        </div>
      </div>
      
      <div class="box mappings-box" id="mappings">
        <div class="mappings-header-flex">
          <h2>Active Mappings</h2>
          <div class="search-wrap">
            <input type="text" id="shortcut-search" placeholder="Filter shortcuts..." autocomplete="off">
          </div>
        </div>

        <div class="category-tabs" id="category-tabs">
          <button class="cat-btn active" data-category="all">All</button>
          <button class="cat-btn" data-category="calc">AP Calc BC</button>
          <button class="cat-btn" data-category="template">Templates</button>
          <button class="cat-btn" data-category="greek">Greek</button>
          <button class="cat-btn" data-category="operator">Operators</button>
        </div>

        <div class="mapping-list" id="mapping-list-container">
          <!-- Populated by JS -->
        </div>

        <p class="mapping-note">* Fully customizable via <code>customShortcuts.txt</code> or <code>~/.unitex/customShortcuts.txt</code>.</p>
      </div>
    </div>

    <div class="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div class="step-container">
        <div class="step">
          <div class="step-num">01</div>
          <h3>One-Line Install</h3>
          <p>Run the single terminal command below. UniTeX installs directly to your system path with zero hassle.</p>
        </div>
        <div class="step">
          <div class="step-num">02</div>
          <h3>Grant Permissions</h3>
          <p>Toggle Accessibility in macOS Privacy & Security. This allows UniTeX to detect keystrokes and type math anywhere safely.</p>
        </div>
        <div class="step">
          <div class="step-num">03</div>
          <h3>Instant Math Typing</h3>
          <p>Launch with <code>unitex</code>. Start typing your math notes anywhere in macOS. Zero context switching forever.</p>
        </div>
      </div>
    </div>

    <div class="install-section" id="install">
      <h2>Install & Setup</h2>
      
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <div class="code-header-left">
            <div class="mac-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <span>TERMINAL</span>
          </div>
          <button class="copy-cmd-btn" id="copy-cmd-btn">
            <svg class="copy-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span id="copy-btn-text">COPY COMMAND</span>
          </button>
        </div>
        <code class="install-cmd" id="install-cmd-text">curl -sL https://unitex-seven.vercel.app/install.sh | bash</code>
      </div>

      <div class="manual-download-bar">
        <div class="manual-info">
          <strong>Prefer direct download?</strong>
          <span>Grab the standalone Apple Silicon Mach-O binary directly:</span>
        </div>
        <a href="/unitex" download="unitex" class="manual-dl-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download UniTeX Executable (~9.8 MB)
        </a>
      </div>
      
      <div class="setup-instructions">
        <h3>macOS Setup & Accessibility</h3>
        <ul>
          <li><strong>Run it anywhere:</strong> After running the install script, you can start the app from any terminal simply by typing <code>unitex</code>.</li>
          <li><strong>Permissions required:</strong> Because UniTeX simulates keyboard typing, macOS requires <strong>Accessibility Permissions</strong>. Go to <em>System Settings > Privacy & Security > Accessibility</em> and toggle your terminal app (Terminal, iTerm2, Warp, Ghostty) to <strong>ON</strong> the first time you run it.</li>
          <li><strong>Custom Shortcuts:</strong> Define your own shortcuts anytime in <code>~/.unitex/customShortcuts.txt</code> using <code>//trigger:replacement</code> format.</li>
        </ul>
      </div>

      <div style="text-align: center;">
        <span class="version-alert">[ v1.1.0 ACTIVE ] AP CALC BC ENGINE, //ddx & //ddt DERIVATIVES, NESTED TEMPLATES & GLOBAL SPEED DEPLOYED.</span>
      </div>
    </div>

    <footer>
      <div class="footer-content">
        <p>CREATED FOR MACOS • AP CALC BC READY • BUILT FOR SPEED • &copy; 2026 UNITEX</p>
        <div class="footer-links">
          <a href="https://github.com/krazybaboon17/UniTeX" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <span class="sep">•</span>
          <a href="https://github.com/krazybaboon17/UniTeX/blob/main/README.md" target="_blank" rel="noopener noreferrer">Documentation</a>
          <span class="sep">•</span>
          <a href="https://unitex-seven.vercel.app/install.sh" target="_blank" rel="noopener noreferrer">Install Script</a>
        </div>
      </div>
    </footer>
  </div>
  
  <div class="chatbot-container" id="chatbot">
    <div class="chatbot-header" id="chatbot-header">
      <span>Mac Privacy Helper</span>
      <button id="chatbot-close">✕</button>
    </div>
    <div class="chatbot-chips">
      <button class="chat-prompt-chip" data-prompt="How do I grant Accessibility permissions in macOS?">Accessibility guide</button>
      <button class="chat-prompt-chip" data-prompt="Why is UniTeX not replacing text when I type?">Not expanding?</button>
      <button class="chat-prompt-chip" data-prompt="How do I add custom shortcuts in UniTeX?">Custom shortcuts</button>
    </div>
    <div class="chatbot-messages" id="chatbot-messages">
      <div class="msg bot">Hi! Need help with Mac Privacy & Security settings, Accessibility permissions, or setting up UniTeX? Ask me anything below!</div>
    </div>
    <div class="chatbot-input">
      <textarea id="chatbot-input-field" placeholder="Ask something..." rows="1"></textarea>
      <button id="chatbot-send">Send</button>
    </div>
  </div>
  <button class="chatbot-toggle" id="chatbot-toggle">💬</button>
`;

// Populate Mappings List
const mappingListContainer = document.getElementById('mapping-list-container');
const categoryTabs = document.getElementById('category-tabs');
const searchInput = document.getElementById('shortcut-search');

let currentCategory = 'all';
let currentSearch = '';

function renderMappings() {
  const filtered = shortcutsData.filter(item => {
    const matchCategory = currentCategory === 'all' || item.category === currentCategory;
    const q = currentSearch.toLowerCase();
    const matchSearch = !q || 
      item.trigger.toLowerCase().includes(q) || 
      item.output.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    mappingListContainer.innerHTML = `<div class="no-results">No mappings match "${currentSearch}".</div>`;
    return;
  }

  mappingListContainer.innerHTML = filtered.map(item => `
    <div class="mapping-item" data-code="${item.trigger}" title="${item.desc} (click to try in simulator)">
      <code>${item.trigger}</code>
      <span class="arrow">&rarr;</span>
      <span class="highlight">${item.output}</span>
    </div>
  `).join('');

  // Add click to insert into simulator
  mappingListContainer.querySelectorAll('.mapping-item').forEach(el => {
    el.addEventListener('click', () => {
      const trigger = el.getAttribute('data-code');
      testInSimulator(trigger);
      const simSection = document.getElementById('simulator');
      simSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

categoryTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;
  categoryTabs.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCategory = btn.getAttribute('data-category');
  renderMappings();
});

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value.trim();
  renderMappings();
});

renderMappings();

// Interactive Simulator Logic
const simInput = document.getElementById('sim-input');
const simFeedback = document.getElementById('sim-feedback');
const simClearBtn = document.getElementById('sim-clear-btn');

function triggerTransformation() {
  let val = simInput.value;
  let replaced = false;

  // Check from longest trigger to shortest
  const triggers = Object.keys(simReplacements).sort((a, b) => b.length - a.length);
  for (const trig of triggers) {
    if (val.includes(trig)) {
      val = val.replaceAll(trig, simReplacements[trig]);
      replaced = true;
      simFeedback.innerHTML = `<span class="feedback-success">✓ Replaced <strong>${trig}</strong> &rarr; <strong>${simReplacements[trig]}</strong></span>`;
      break;
    }
  }

  if (replaced) {
    simInput.value = val;
    simInput.classList.add('flash-glow');
    setTimeout(() => simInput.classList.remove('flash-glow'), 500);
  } else if (!val.trim()) {
    simFeedback.textContent = 'UniTeX engine listening for // triggers...';
  }
}

simInput.addEventListener('input', triggerTransformation);

function testInSimulator(code) {
  simInput.value = code;
  triggerTransformation();
  simInput.focus();
}

document.querySelectorAll('.chips-bar .chip, .sim-chips-bar .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const code = chip.getAttribute('data-code');
    testInSimulator(code);
  });
});

simClearBtn.addEventListener('click', () => {
  simInput.value = '';
  simFeedback.textContent = 'UniTeX engine listening for // triggers...';
  simInput.focus();
});

// Copy install command button
const copyCmdBtn = document.getElementById('copy-cmd-btn');
const copyBtnText = document.getElementById('copy-btn-text');
const installCmdText = document.getElementById('install-cmd-text');

copyCmdBtn.addEventListener('click', async () => {
  const text = installCmdText.textContent.trim();
  try {
    await navigator.clipboard.writeText(text);
    copyBtnText.textContent = 'COPIED! ✓';
    copyCmdBtn.classList.add('copied');
    setTimeout(() => {
      copyBtnText.textContent = 'COPY COMMAND';
      copyCmdBtn.classList.remove('copied');
    }, 2200);
  } catch (err) {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    copyBtnText.textContent = 'COPIED! ✓';
    copyCmdBtn.classList.add('copied');
    setTimeout(() => {
      copyBtnText.textContent = 'COPY COMMAND';
      copyCmdBtn.classList.remove('copied');
    }, 2200);
  }
});

// Chatbot UI and Logic
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotToggle.addEventListener('click', () => {
  chatbot.style.display = 'flex';
  chatbotToggle.style.display = 'none';
  chatbotInput.focus();
});

chatbotClose.addEventListener('click', () => {
  chatbot.style.display = 'none';
  chatbotToggle.style.display = 'flex';
});

document.querySelectorAll('.chat-prompt-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    chatbotInput.value = chip.getAttribute('data-prompt');
    sendMessage();
  });
});

const sendMessage = async () => {
  const text = chatbotInput.value.trim();
  if (!text) return;
  
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.textContent = text;
  chatbotMessages.appendChild(userMsg);
  chatbotInput.value = '';
  chatbotInput.style.height = 'auto';
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  const typingMsg = document.createElement('div');
  typingMsg.className = 'msg bot';
  typingMsg.textContent = 'Thinking...';
  chatbotMessages.appendChild(typingMsg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });
    
    const data = await res.json();
    chatbotMessages.removeChild(typingMsg);

    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.textContent = data.response || data.error || 'Something went wrong.';
    chatbotMessages.appendChild(botMsg);
  } catch (err) {
    if (typingMsg.parentNode) {
      chatbotMessages.removeChild(typingMsg);
    }
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.textContent = 'Accessibility Tip: Open System Settings > Privacy & Security > Accessibility, and toggle Terminal or iTerm2 to ON.';
    chatbotMessages.appendChild(botMsg);
  }
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
};

chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
chatbotInput.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});
