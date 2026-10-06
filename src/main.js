import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <h1>UNITEX</h1>
      <div class="subtitle">Global Math Typing. Zero Friction.</div>
    </header>

    <div class="marquee">
      <div class="marquee-content">
        <span>WORKS IN ALL APPS</span> • <span>NO CONTEXT SWITCHING</span> • <span>GLOBAL LISTENER</span> • <span>NATIVE MAC OS</span> • <span>NO MENU BAR CLUTTER</span> • 
        <span>WORKS IN ALL APPS</span> • <span>NO CONTEXT SWITCHING</span> • <span>GLOBAL LISTENER</span> • <span>NATIVE MAC OS</span> • <span>NO MENU BAR CLUTTER</span> • 
      </div>
    </div>

    <div class="grid">
      <div class="box">
        <h2>The Engine</h2>
        <p>UniTeX listens globally across macOS. Type a shorthand like <code>//pi</code> anywhere—whether in your notes, browser, or terminal. It intercepts it, erases the trigger, and drops the correct symbol instantly. No menus. No copy-pasting. Pure typing flow.</p>
        <div class="metrics">
          <div class="metric">
            <span class="metric-val">~0.1s</span>
            <span class="metric-label">LATENCY</span>
          </div>
          <div class="metric">
            <span class="metric-val">100%</span>
            <span class="metric-label">APP COMPATIBILITY</span>
          </div>
        </div>
      </div>
      
      <div class="box mappings-box">
        <h2>Active Mappings</h2>
        <div class="mapping-list">
          <div class="mapping-item">
            <code>//pi</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">π</span>
          </div>
          <div class="mapping-item">
            <code>//theta</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">θ</span>
          </div>
          <div class="mapping-item">
            <code>//int</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">∫</span>
          </div>
          <div class="mapping-item">
            <code>//sqrt</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">√</span>
          </div>
          <div class="mapping-item">
            <code>//alpha</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">α</span>
          </div>
          <div class="mapping-item">
            <code>//sum</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">∑</span>
          </div>
        </div>
        <p class="mapping-note">* Fully customizable via JSON configuration.</p>
      </div>
    </div>

    <div class="how-it-works">
      <h2>How It Works</h2>
      <div class="step-container">
        <div class="step">
          <div class="step-num">01</div>
          <h3>Install</h3>
          <p>Download the CLI tool and grant Accessibility permissions so UniTeX can listen to your keyboard input securely.</p>
        </div>
        <div class="step">
          <div class="step-num">02</div>
          <h3>Run</h3>
          <p>Start UniTeX in your terminal. It runs silently in the background with an incredibly minimal memory footprint.</p>
        </div>
        <div class="step">
          <div class="step-num">03</div>
          <h3>Type</h3>
          <p>Type math naturally anywhere you want. Watch it transform instantly into the symbols you need.</p>
        </div>
      </div>
    </div>

    <div class="install-section">
      <h2>Install & Setup</h2>
      
      <div class="code-block-wrapper">
        <div class="code-block-header">TERMINAL</div>
        <code class="install-cmd">curl -sL https://unitex-seven.vercel.app/install.sh | bash</code>
      </div>
      
      <div class="setup-instructions">
        <h3>Setup Instructions</h3>
        <ul>
          <li><strong>Run it anywhere:</strong> After running the install script, you can start the app from any terminal simply by typing <code>unitex</code>.</li>
          <li><strong>Permissions required:</strong> Because UniTeX magically types text for you, macOS will require you to grant it <strong>Accessibility Permissions</strong>. Go to <em>System Settings > Privacy & Security > Accessibility</em> and toggle your terminal app (like Terminal or iTerm) to <strong>ON</strong> the first time you run it, or it will not be able to replace your text.</li>
        </ul>
      </div>

      <div style="text-align: center;">
        <span class="version-alert">[ v1.0.0 ACTIVE ] UNICODE ONLY. LATEX STRINGS (e.g. \\pi) DEPLOYING IN v2.0.0.</span>
      </div>
    </div>

    <footer>
      <p>CREATED FOR MACOS. BUILT FOR SPEED. &copy; 2026 UNITEX.</p>
    </footer>
  </div>
`
