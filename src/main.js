import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <h1>UNITEX</h1>
      <div class="subtitle">Global Math Typing. Zero Friction.</div>
    </header>

    <div class="marquee">
      <div class="marquee-content">
        <span>WORKS IN ALL APPS</span> • <span>NO CONTEXT SWITCHING</span> • <span>GLOBAL LISTENER</span> • <span>NATIVE MAC OS</span> • <span>AP CALC BC ENGINE</span> • <span>NESTED MATH TEMPLATES</span> • 
        <span>WORKS IN ALL APPS</span> • <span>NO CONTEXT SWITCHING</span> • <span>GLOBAL LISTENER</span> • <span>NATIVE MAC OS</span> • <span>AP CALC BC ENGINE</span> • <span>NESTED MATH TEMPLATES</span> • 
      </div>
    </div>

    <div class="grid">
      <div class="box">
        <h2>The Engine</h2>
        <p>UniTeX listens globally across macOS. Type shorthand like <code>//lim</code> or <code>//frac</code> anywhere—whether in your notes, browser, or terminal. It intercepts triggers, erases them, and injects math templates instantly. With full nested template support, compose fractions inside limits and powers inside fractions without awkward spaces or breaking your flow.</p>
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
            <code>//lim</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">lim_(□→□) (□)</span>
          </div>
          <div class="mapping-item">
            <code>//to</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">→</span>
          </div>
          <div class="mapping-item">
            <code>//frac</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">(□)/(□)</span>
          </div>
          <div class="mapping-item">
            <code>//pow</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">x²</span>
          </div>
          <div class="mapping-item">
            <code>//int</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">∫</span>
          </div>
          <div class="mapping-item">
            <code>//prime</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">′</span>
          </div>
          <div class="mapping-item">
            <code>//sqrt</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">√</span>
          </div>
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
            <code>//infty</code>
            <span class="arrow">&rarr;</span>
            <span class="highlight">∞</span>
          </div>
        </div>
        <p class="mapping-note">* Fully customizable via customShortcuts.txt or ~/.unitex/customShortcuts.txt.</p>
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
          <p>Type math naturally anywhere you want. Templates and nested expressions transform instantly with seamless box navigation.</p>
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
        <span class="version-alert">[ v1.1.0 ACTIVE ] AP CALC BC ENGINE & NESTED TEMPLATES DEPLOYED. LATEX STRINGS DEPLOYING IN v2.0.0.</span>
      </div>
    </div>

    <footer>
      <p>CREATED FOR MACOS. BUILT FOR SPEED. &copy; 2026 UNITEX.</p>
    </footer>
  </div>
  
  <div class="chatbot-container" id="chatbot">
    <div class="chatbot-header" id="chatbot-header">
      <span>Mac Privacy Helper</span>
      <button id="chatbot-close">✕</button>
    </div>
    <div class="chatbot-messages" id="chatbot-messages">
      <div class="msg bot">Hi! Need help with Mac Privacy & Security settings for UniTeX?</div>
    </div>
    <div class="chatbot-input">
      <textarea id="chatbot-input-field" placeholder="Ask something..." rows="1"></textarea>
      <button id="chatbot-send">Send</button>
    </div>
  </div>
  <button class="chatbot-toggle" id="chatbot-toggle">💬</button>
`

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotToggle.addEventListener('click', () => {
  chatbot.style.display = 'flex';
  chatbotToggle.style.display = 'none';
});

chatbotClose.addEventListener('click', () => {
  chatbot.style.display = 'none';
  chatbotToggle.style.display = 'flex';
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
    chatbotMessages.removeChild(typingMsg);
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.textContent = 'Oops, I am having trouble connecting to my brain. Please try again later!';
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
