<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" fill="none">
  <!-- Fundo sutil transparente -->
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D" />
      <stop offset="50%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Símbolo: Cruz estilizada com chama do Espírito e Casa de Deus (Betel = Casa de Deus) -->
  <g transform="translate(15, 12)">
    <!-- Círculo de fundo estilizado -->
    <circle cx="48" cy="48" r="46" fill="#0F172A" stroke="url(#goldGrad)" stroke-width="2.5" />
    
    <!-- Chama / Luz -->
    <path d="M48 18 C56 30 64 42 60 56 C57 66 48 72 40 68 C34 64 33 54 38 46 C41 40 44 32 48 18 Z" 
          fill="url(#goldGrad)" opacity="0.85" filter="url(#glow)" />
    
    <!-- Cruz Moderna Central -->
    <path d="M48 24 V72 M33 40 H63" 
          stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
    
    <!-- Base sutil da Casa de Deus (Betel) -->
    <path d="M30 76 L48 64 L66 76" 
          stroke="url(#goldGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- Tipografia: BETEL JAGUARIBE -->
  <g transform="translate(125, 30)">
    <!-- Letreiro BETEL -->
    <text x="0" y="38" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
          font-size="40" font-weight="800" letter-spacing="3" fill="#FFFFFF">
      BETEL
    </text>
    <text x="148" y="38" font-family="'Outfit', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
          font-size="40" font-weight="300" letter-spacing="3" fill="url(#goldGrad)">
      JAGUARIBE
    </text>

    <!-- Subtítulo institucional -->
    <text x="2" y="62" font-family="'Plus Jakarta Sans', system-ui, sans-serif" 
          font-size="12.5" font-weight="600" letter-spacing="4.5" fill="#94A3B8">
      IGREJA MISSIONÁRIA EVANGÉLICA
    </text>
  </g>
</svg>
