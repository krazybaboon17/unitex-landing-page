import './style.css'

const shortcutsData = [
  // AP Calc BC & Derivatives
  { trigger: '//ddx', output: 'd/dx(□)', category: 'calc', desc: 'Derivative template' },
  { trigger: '//ddt', output: 'd/dt(□)', category: 'calc', desc: 'Time derivative template' },
  { trigger: '//ddy', output: 'd/dy(□)', category: 'calc', desc: 'y-derivative template' },
  { trigger: '//dydx', output: 'dy/dx', category: 'calc', desc: 'First derivative' },
  { trigger: '//dydt', output: 'dy/dt', category: 'calc', desc: 'Rate of change' },
  { trigger: '//dxdt', output: 'dx/dt', category: 'calc', desc: 'Parametric velocity' },
  { trigger: '//to', output: '→', category: 'calc', desc: 'Right arrow / approaches' },
  { trigger: '//int', output: '∫_□^□ (e.g. ∫₀¹)', category: 'template', desc: 'Interactive definite integral template with sub/superscript limits' },
  { trigger: '//oint', output: '∮_□^□', category: 'template', desc: 'Contour line integral template with limit boxes' },
  { trigger: '//iint', output: '∬_□^□', category: 'template', desc: 'Double integral template with limit boxes' },
  { trigger: '//iiint', output: '∭_□^□', category: 'template', desc: 'Triple integral template with limit boxes' },
  { trigger: '//prime', output: '′', category: 'calc', desc: 'Prime notation (f′)' },
  { trigger: '//dprime', output: '″', category: 'calc', desc: 'Second derivative (f″)' },
  { trigger: '//infty', output: '∞', category: 'calc', desc: 'Infinity' },
  { trigger: '//partial', output: '∂', category: 'calc', desc: 'Partial differential' },
  { trigger: '//nabla', output: '∇', category: 'calc', desc: 'Del / gradient vector' },

  // Interactive Templates
  { trigger: '//frac', output: '(□)/(□)', category: 'template', desc: 'Fraction template' },
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

  // Operators, Logic & Constants
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
  { trigger: '//belong', output: '∈', category: 'operator', desc: 'Element of (belongs to)' },
  { trigger: '//Z', output: 'ℤ', category: 'operator', desc: 'Set of integers' },
  { trigger: '//forall', output: '∀', category: 'operator', desc: 'For all' },
  { trigger: '//exists', output: '∃', category: 'operator', desc: 'There exists' },
  { trigger: '//hbar', output: 'ℏ', category: 'operator', desc: 'Reduced Planck constant' },
  { trigger: '//deg', output: '°', category: 'operator', desc: 'Degree symbol' },
  { trigger: '//equiv', output: '≡', category: 'operator', desc: 'Identical / equivalent' },
  { trigger: '//cup', output: '∪', category: 'operator', desc: 'Set union' },
  { trigger: '//cap', output: '∩', category: 'operator', desc: 'Set intersection' },
  { trigger: '//subset', output: '⊂', category: 'operator', desc: 'Subset' },
  { trigger: '//land', output: '∧', category: 'operator', desc: 'Logical AND' },
  { trigger: '//lor', output: '∨', category: 'operator', desc: 'Logical OR' },
  { trigger: '//iff', output: '⇔', category: 'operator', desc: 'If and only if (biconditional)' }
];

document.querySelector('#app').innerHTML = `
  <div class="container">
    <nav class="top-nav">
      <div class="nav-left">
        <span class="nav-brand">UNIFLOW</span>
        <span class="status-pill"><span class="status-dot"></span> v1.1.0 • PURE UNICODE</span>
      </div>
      <div class="nav-links">
        <a href="#mappings" class="nav-link">Mappings</a>
        <a href="#philosophy" class="nav-link">Why Unicode</a>
        <a href="#how-it-works" class="nav-link">How It Works</a>
        <a href="#guide" class="nav-link">Guide</a>
        <a href="#install" class="nav-link">Install</a>
        <a href="https://github.com/krazybaboon17/unitex" target="_blank" rel="noopener noreferrer" class="nav-btn github-btn">
          <svg class="gh-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub ★
        </a>
      </div>
    </nav>

    <header>
      <h1>UNIFLOW</h1>
      <div class="subtitle">Global Math Typing Anywhere. Pure Unicode. Zero Friction.</div>
    </header>

    <div class="marquee">
      <div class="marquee-content">
        <span>100% PORTABLE UNICODE</span> • <span>WORKS IN ALL APPS</span> • <span>NO LATEX COMPILER NEEDED</span> • <span>DISCORD & GOOGLE DOCS READY</span> • <span>AP CALC BC ENGINE</span> • <span>//ddx & //ddt DERIVATIVES</span> • <span>ESC TO PAUSE</span> • <span>SUB-10MS LATENCY</span> • 
        <span>100% PORTABLE UNICODE</span> • <span>WORKS IN ALL APPS</span> • <span>NO LATEX COMPILER NEEDED</span> • <span>DISCORD & GOOGLE DOCS READY</span> • <span>AP CALC BC ENGINE</span> • <span>//ddx & //ddt DERIVATIVES</span> • <span>ESC TO PAUSE</span> • <span>SUB-10MS LATENCY</span> • 
      </div>
    </div>

    <!-- Design Philosophy Section -->
    <section class="philosophy-section" id="philosophy">
      <div class="philosophy-header">
        <span class="philosophy-badge">DESIGN ARCHITECTURE</span>
        <h2>Why Pure Unicode Instead of LaTeX?</h2>
        <p class="philosophy-subtitle">
          UniFlow is intentionally engineered around universal Unicode characters rather than generating raw LaTeX code. Here is why:
        </p>
      </div>

      <div class="philosophy-grid">
        <div class="philosophy-card">
          <div class="philosophy-icon">⚡</div>
          <h3>LaTeX Editors Already Have LaTeX</h3>
          <p>Overleaf, Obsidian, Typst, and MS Word Equation Editor already feature specialized LaTeX autocomplete. Building another LaTeX generator creates redundant complexity where solutions already exist.</p>
        </div>

        <div class="philosophy-card">
          <div class="philosophy-icon">🌐</div>
          <h3>Everywhere Else Has Nothing</h3>
          <p>When typing in Discord, Slack, Google Docs, Notion, email, Jupyter notebook comments, code docstrings, or terminal text fields, there is no TeX compiler. UniFlow brings clean, instant math notation everywhere.</p>
        </div>

        <div class="philosophy-card">
          <div class="philosophy-icon">📋</div>
          <h3>True Universal Portability</h3>
          <p>Real Unicode symbols copy and paste cleanly anywhere. Equations typed with UniFlow can be viewed on phones, tablets, and any OS without needing MathJax, KaTeX, or external rendering engines.</p>
        </div>
      </div>
    </section>

    <div class="grid">
      <div class="box engine-box">
        <h2>The Engine</h2>
        <p>UniFlow runs silently in the background across your entire Mac. Type intuitive shorthand like <code>//lim</code>, <code>//ddx</code>, <code>//theta</code>, or <code>//frac</code> anywhere—in Apple Notes, Notion, Slack, Discord, Google Docs, VS Code, or terminal.</p>
        <p>UniFlow erases the shorthand and types the formatted Unicode symbol or interactive template. Press <code>Esc</code> anytime to pause/resume or cancel an active template.</p>
        
        <div class="metrics">
          <div class="metric">
            <span class="metric-val">&lt; 10ms</span>
            <span class="metric-label">LATENCY</span>
          </div>
          <div class="metric">
            <span class="metric-val">100%</span>
            <span class="metric-label">PORTABILITY</span>
          </div>
          <div class="metric">
            <span class="metric-val">75+</span>
            <span class="metric-label">BUILT-IN MAPPINGS</span>
          </div>
          <div class="metric">
            <span class="metric-val">0</span>
            <span class="metric-label">COMPILERS NEEDED</span>
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
          <button class="cat-btn" data-category="operator">Operators & Logic</button>
        </div>

        <div class="mapping-list" id="mapping-list-container">
          <!-- Populated by JS -->
        </div>

        <p class="mapping-note">💡 Click any shortcut to copy its trigger. Fully customizable in <code>~/.uniflow/customShortcuts.txt</code>.</p>
      </div>
    </div>

    <div class="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div class="step-container">
        <div class="step">
          <div class="step-num">01</div>
          <h3>One-Line Install</h3>
          <p>Run the install command in your terminal. UniFlow installs directly to your system path with zero daemon bloat.</p>
        </div>
        <div class="step">
          <div class="step-num">02</div>
          <h3>Grant Permissions</h3>
          <p>Toggle Accessibility in macOS Privacy & Security. This allows UniFlow to detect keystrokes and insert Unicode symbols anywhere safely.</p>
        </div>
        <div class="step">
          <div class="step-num">03</div>
          <h3>Instant Math Typing</h3>
          <p>Launch with <code>uniflow</code>. Start typing your math notes anywhere in macOS. Press <code>Esc</code> to pause or resume at any time.</p>
        </div>
      </div>
    </div>


    <!-- Comprehensive How-To Guide Section -->
    <section class="guide-section" id="guide">
      <div class="guide-header">
        <span class="philosophy-badge">USER GUIDE</span>
        <h2>Mastering UniFlow</h2>
        <p class="philosophy-subtitle">Everything you need to write fluid, universal math notation at the speed of thought.</p>
      </div>

      <div class="guide-grid">
        <div class="guide-card">
          <div class="guide-num">01</div>
          <h3>Basic Shortcut Expansions</h3>
          <p>Anywhere in macOS—notes, web browsers, Discord, Word, or code editors—simply type <code>//</code> followed by the symbol name. UniFlow detects the shorthand, removes it in &lt;10ms, and replaces it with the Unicode character.</p>
          <div class="guide-example">
            <code>//pi</code> → <span>π</span> &nbsp;|&nbsp; <code>//theta</code> → <span>θ</span> &nbsp;|&nbsp; <code>//belong</code> → <span>∈</span>
          </div>
        </div>

        <div class="guide-card">
          <div class="guide-num">02</div>
          <h3>Interactive Integral Templates</h3>
          <p>Type <code>//int</code>, <code>//oint</code>, <code>//iint</code>, or <code>//iiint</code>. UniFlow instantly injects the integral template <code>∫_□^□</code> with the lower limit box automatically highlighted.</p>
          <div class="guide-steps">
            <div><strong>1. Lower Limit:</strong> Type your lower limit (e.g. <code>0</code> or <code>a</code>).</div>
            <div><strong>2. Switch Box:</strong> Press <kbd>Tab</kbd> or <kbd>→</kbd> to jump directly to the upper limit box.</div>
            <div><strong>3. Upper Limit:</strong> Type upper limit (e.g. <code>1</code>, <code>b</code>, or <code>//infty</code>).</div>
            <div><strong>4. Finalize:</strong> Press <kbd>Enter</kbd> or <kbd>Tab</kbd> to automatically format into <code>∫₀¹</code>.</div>
          </div>
        </div>

        <div class="guide-card">
          <div class="guide-num">03</div>
          <h3>Fractions & Nested Math</h3>
          <p>Type <code>//frac</code> for <code>(□)/(□)</code>. You can nest shortcuts and expressions right inside any box:</p>
          <div class="guide-example">
            <code>//frac</code> → type <code>//pi</code> → press <kbd>Tab</kbd> → type <code>2</code> → <kbd>Enter</kbd> → <span>(π)/(2)</span>
          </div>
        </div>

        <div class="guide-card">
          <div class="guide-num">04</div>
          <h3>Power & Subscript Shortcuts</h3>
          <p>Easily type exponents and indices. Type your variable followed by <code>//pow</code> or <code>//_</code>:</p>
          <div class="guide-example">
            <code>x//pow</code> → type <code>2</code> → <span>x²</span> &nbsp;|&nbsp; <code>x//_</code> → type <code>i</code> → <span>xᵢ</span>
          </div>
        </div>

        <div class="guide-card">
          <div class="guide-num">05</div>
          <h3>Pause, Resume & Cancel</h3>
          <p>Working on normal code where you type <code>//</code> comments? Press <kbd>Esc</kbd> anytime to toggle UniFlow pause mode. Press <kbd>Esc</kbd> during an active template to cancel it instantly.</p>
        </div>

        <div class="guide-card">
          <div class="guide-num">06</div>
          <h3>Custom Shortcuts</h3>
          <p>Easily map your own personal shorthand by launching UniFlow in settings mode (press <code>0</code> at startup) or adding lines to <code>~/.uniflow/customShortcuts.txt</code> in <code>shortcut : value</code> format.</p>
        </div>
      </div>
    </section>

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
        <code class="install-cmd" id="install-cmd-text">curl -sL https://uniflow-type.vercel.app/install.sh | bash</code>
      </div>
      
      <div class="setup-instructions">
        <div class="permissions-banner">
          <div class="perm-icon">🛡️</div>
          <div>
            <h3 style="margin: 0 0 0.4rem 0; color: #f8fafc;">macOS Privacy & Security Setup</h3>
            <p style="margin: 0; color: #cbd5e1; font-size: 0.92rem; line-height: 1.45;">
              Because UniFlow works globally across all apps by intercepting shorthand keys and typing Unicode replacements, macOS requires standard Accessibility authorization.
            </p>
          </div>
        </div>

        <div class="perm-steps-grid">
          <div class="perm-step-card">
            <span class="perm-badge">STEP 1</span>
            <h4>Open System Settings</h4>
            <p>Open <strong>System Settings</strong> and navigate to <strong>Privacy & Security → Accessibility</strong>.</p>
          </div>
          <div class="perm-step-card">
            <span class="perm-badge">STEP 2</span>
            <h4>Enable Terminal / IDE</h4>
            <p>Toggle your terminal app (<strong>Terminal</strong>, <strong>iTerm2</strong>, <strong>Warp</strong>, <strong>Ghostty</strong>, or <strong>VS Code</strong>) to <span style="color:#10b981; font-weight:600;">ON</span>.</p>
          </div>
          <div class="perm-step-card">
            <span class="perm-badge">STEP 3</span>
            <h4>Input Monitoring Check</h4>
            <p>Verify that your terminal or Python process is also allowed under <strong>Privacy & Security → Input Monitoring</strong>.</p>
          </div>
        </div>

        <div class="perm-troubleshoot-box">
          <div style="font-weight: 600; color: #38bdf8; margin-bottom: 0.35rem;">💡 Pro-Tip for Permissions:</div>
          <p style="margin: 0; font-size: 0.88rem; color: #94a3b8;">
            If shortcuts are not expanding after an OS update, simply toggle the switch in Accessibility <strong>OFF and back ON</strong>, or click <strong>+</strong> to re-add your terminal app. Then restart your terminal session.
          </p>
        </div>
      </div>

      <div style="text-align: center;">
        <span class="version-alert">[ v1.1.0 ACTIVE ] AP CALC BC ENGINE, //ddx & //ddt DERIVATIVES, NESTED TEMPLATES & GLOBAL UNICODE DEPLOYED.</span>
      </div>
    </div>

    <footer>
      <div class="footer-content">
        <p>CREATED FOR MACOS • AP CALC BC READY • PURE UNICODE • &copy; 2026 UNIFLOW</p>
        <div class="footer-links">
          <a href="https://github.com/krazybaboon17/unitex" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <span class="sep">•</span>
          <a href="https://github.com/krazybaboon17/unitex/blob/main/README.md" target="_blank" rel="noopener noreferrer">Documentation</a>
          <span class="sep">•</span>
          <a href="https://uniflow-type.vercel.app/install.sh" target="_blank" rel="noopener noreferrer">Install Script</a>
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
      <button class="chat-prompt-chip" data-prompt="Why is UniFlow not replacing text when I type?">Not expanding?</button>
      <button class="chat-prompt-chip" data-prompt="How do I add custom shortcuts in UniFlow?">Custom shortcuts</button>
    </div>
    <div class="chatbot-messages" id="chatbot-messages">
      <div class="msg bot">Hi! Need help with Mac Privacy & Security settings, Accessibility permissions, or setting up UniFlow? Ask me anything below!</div>
    </div>
    <div class="chatbot-input">
      <textarea id="chatbot-input-field" placeholder="Ask something..." rows="1"></textarea>
      <button id="chatbot-send">Send</button>
    </div>
  </div>
  <button class="chatbot-toggle" id="chatbot-toggle">💬</button>

  <div class="copy-toast" id="copy-toast">Copied to clipboard!</div>
`;

// Populate Mappings List
const mappingListContainer = document.getElementById('mapping-list-container');
const categoryTabs = document.getElementById('category-tabs');
const searchInput = document.getElementById('shortcut-search');
const copyToast = document.getElementById('copy-toast');

let currentCategory = 'all';
let currentSearch = '';
let toastTimeout = null;

function showToast(msg) {
  if (!copyToast) return;
  copyToast.textContent = msg;
  copyToast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    copyToast.classList.remove('show');
  }, 1800);
}

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
    <div class="mapping-item" data-code="${item.trigger}" title="Click to copy ${item.trigger}">
      <code>${item.trigger}</code>
      <span class="arrow">&rarr;</span>
      <span class="highlight">${item.output}</span>
    </div>
  `).join('');

  // Add click to copy shortcut
  mappingListContainer.querySelectorAll('.mapping-item').forEach(el => {
    el.addEventListener('click', async () => {
      const trigger = el.getAttribute('data-code');
      try {
        await navigator.clipboard.writeText(trigger);
      } catch (err) {
        const ta = document.createElement('textarea');
        ta.value = trigger;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      el.classList.add('copied');
      setTimeout(() => el.classList.remove('copied'), 600);
      showToast(`Copied ${trigger} to clipboard!`);
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
    showToast('Install command copied!');
    setTimeout(() => {
      copyBtnText.textContent = 'COPY COMMAND';
      copyCmdBtn.classList.remove('copied');
    }, 2200);
  } catch (err) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    copyBtnText.textContent = 'COPIED! ✓';
    copyCmdBtn.classList.add('copied');
    showToast('Install command copied!');
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
