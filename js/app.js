/**
 * =========================================================================
 * APLICAÇÃO PRINCIPAL - IGREJA BETEL JAGUARIBE
 * =========================================================================
 * Responsável por integrar o arquivo de configuração (conteudo.js) aos
 * elementos visuais do site, calcular o próximo culto dinâmico, gerenciar
 * modais, cópia de PIX e o painel de edição simplificado.
 */

document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.CONFIG_IGREJA || {};

  // Inicializar componentes
  inicializarCabecalho(cfg);
  inicializarHero(cfg);
  inicializarProximoCulto(cfg);
  inicializarSobreNos(cfg);
  inicializarCultos(cfg);
  inicializarMinisterios(cfg);
  inicializarSermoes(cfg);
  inicializarEventos(cfg);
  inicializarContribuicao(cfg);
  inicializarLocalizacaoEContato(cfg);
  inicializarMenuMobile();
  inicializarModalOracao(cfg);
  inicializarEditorRapido(cfg);

  // Inicializar ícones Lucide com tolerância a carregamento assíncrono do CDN
  renderizarIcones();
  setTimeout(renderizarIcones, 200);
  setTimeout(renderizarIcones, 800);
});

function renderizarIcones() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// ==========================================
// 1. CABEÇALHO & NAVEGAÇÃO
// ==========================================
function inicializarCabecalho(cfg) {
  const tituloLogo = document.getElementById('header-nome-igreja');
  if (tituloLogo && cfg.nomeCurto) {
    tituloLogo.textContent = cfg.nomeCurto;
  }

  // Link do WhatsApp no topo
  const btnTopoWhats = document.getElementById('btn-topo-whatsapp');
  if (btnTopoWhats && cfg.contato) {
    btnTopoWhats.href = `https://wa.me/${cfg.contato.whatsappNumero}?text=${encodeURIComponent(cfg.contato.whatsappMensagemPadrao)}`;
  }
}

// ==========================================
// 2. HERO SECTION
// ==========================================
function inicializarHero(cfg) {
  const elSlogan = document.getElementById('hero-slogan');
  const elSubtitulo = document.getElementById('hero-subtitulo');
  const elVersiculoTexto = document.getElementById('hero-versiculo-texto');
  const elVersiculoRef = document.getElementById('hero-versiculo-ref');

  if (elSlogan && cfg.slogan) elSlogan.textContent = cfg.slogan;
  if (elSubtitulo && cfg.subtitulo) elSubtitulo.textContent = cfg.subtitulo;
  
  if (cfg.versiculoTema) {
    if (elVersiculoTexto) elVersiculoTexto.textContent = `"${cfg.versiculoTema.texto}"`;
    if (elVersiculoRef) elVersiculoRef.textContent = `— ${cfg.versiculoTema.referencia}`;
  }
}

// ==========================================
// 3. CÁLCULO INTELIGENTE DO PRÓXIMO CULTO
// ==========================================
function inicializarProximoCulto(cfg) {
  const container = document.getElementById('card-proximo-culto');
  if (!container || !cfg.cultos || cfg.cultos.length === 0) return;

  const agora = new Date();
  const diaSemanaHoje = agora.getDay(); // 0 = Domingo, 1 = Segunda... 6 = Sábado
  const horaAtualMinutos = agora.getHours() * 60 + agora.getMinutes();

  let proximo = null;
  let diferencaMinima = Infinity;

  cfg.cultos.forEach(culto => {
    const [h, m] = culto.horario.split(':').map(Number);
    const minutoCulto = h * 60 + m;

    let diasAteCulto = (culto.diaSemanaNumero - diaSemanaHoje + 7) % 7;

    // Se é hoje, mas o culto já passou há mais de 2 horas (120 min)
    if (diasAteCulto === 0 && horaAtualMinutos > (minutoCulto + 120)) {
      diasAteCulto = 7;
    }

    const diferencaTotal = diasAteCulto * 1440 + (minutoCulto - horaAtualMinutos);

    if (diferencaTotal < diferencaMinima) {
      diferencaMinima = diferencaTotal;
      proximo = {
        ...culto,
        diasRestantes: diasAteCulto,
        ehHoje: diasAteCulto === 0
      };
    }
  });

  if (proximo) {
    let statusBadge = '';
    if (proximo.ehHoje) {
      statusBadge = `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-950 animate-pulse">
        <span class="w-2 h-2 rounded-full bg-amber-900 animate-ping"></span>
        HOJE TEM CULTO!
      </span>`;
    } else {
      const diasTexto = proximo.diasRestantes === 1 ? 'Amanhã' : `Em ${proximo.diasRestantes} dias`;
      statusBadge = `<span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
        <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
        ${diasTexto} (${proximo.dia})
      </span>`;
    }

    container.innerHTML = `
      <div class="flex items-center justify-between border-b border-white/15 pb-3 mb-3">
        <span class="text-xs uppercase tracking-widest text-amber-300 font-semibold flex items-center gap-1.5">
          <i data-lucide="clock" class="w-4 h-4"></i> PRÓXIMO ENCONTRO
        </span>
        ${statusBadge}
      </div>
      <h3 class="text-xl sm:text-2xl font-bold text-white mb-1">${proximo.nome}</h3>
      <p class="text-slate-200 text-sm mb-3">${proximo.descricao}</p>
      <div class="flex items-center gap-4 text-xs font-medium text-amber-300">
        <span class="flex items-center gap-1">
          <i data-lucide="calendar" class="w-4 h-4"></i> ${proximo.dia}
        </span>
        <span class="flex items-center gap-1">
          <i data-lucide="alarm-clock" class="w-4 h-4"></i> ${proximo.horario}h
        </span>
        <span class="flex items-center gap-1">
          <i data-lucide="map-pin" class="w-4 h-4"></i> Jaguaribe
        </span>
      </div>
    `;
  }
}

// ==========================================
// 4. SOBRE NÓS
// ==========================================
function inicializarSobreNos(cfg) {
  if (!cfg.sobre) return;

  const elTitulo = document.getElementById('sobre-titulo');
  const elMensagem = document.getElementById('sobre-mensagem');
  const elPastor = document.getElementById('sobre-pastor');
  const elMissao = document.getElementById('sobre-missao');
  const elVisao = document.getElementById('sobre-visao');
  const elValoresContainer = document.getElementById('sobre-valores-container');

  if (elTitulo) elTitulo.textContent = cfg.sobre.titulo;
  if (elMensagem) elMensagem.textContent = cfg.sobre.mensagemPastoral;
  if (elPastor) elPastor.textContent = cfg.sobre.pastorResponsavel;
  if (elMissao) elMissao.textContent = cfg.sobre.missao;
  if (elVisao) elVisao.textContent = cfg.sobre.visao;

  if (elValoresContainer && cfg.sobre.valores) {
    elValoresContainer.innerHTML = cfg.sobre.valores.map(val => `
      <div class="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm card-hover">
        <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
          <i data-lucide="check-circle-2" class="w-5 h-5"></i>
        </div>
        <h4 class="font-bold text-slate-900 mb-1.5 text-base">${val.titulo}</h4>
        <p class="text-slate-600 text-sm leading-relaxed">${val.descricao}</p>
      </div>
    `).join('');
  }
}

// ==========================================
// 5. PROGRAMAÇÃO DE CULTOS
// ==========================================
function inicializarCultos(cfg) {
  const container = document.getElementById('container-cultos');
  if (!container || !cfg.cultos) return;

  container.innerHTML = cfg.cultos.map(culto => `
    <div class="relative p-6 sm:p-7 rounded-3xl ${culto.destaque ? 'bg-gradient-to-br from-slate-900 to-[#0B1B3D] text-white shadow-xl border-2 border-amber-400/40' : 'bg-white text-slate-800 border border-slate-200 shadow-sm'} card-hover flex flex-col justify-between">
      ${culto.destaque ? `
        <span class="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
          Culto Principal
        </span>
      ` : ''}

      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${culto.destaque ? 'bg-white/10 text-amber-300' : 'bg-slate-100 text-slate-700'}">
            ${culto.categoria}
          </span>
          <div class="w-10 h-10 rounded-2xl ${culto.destaque ? 'bg-amber-400/20 text-amber-300' : 'bg-blue-50 text-blue-600'} flex items-center justify-center">
            <i data-lucide="${culto.icone || 'calendar'}" class="w-5 h-5"></i>
          </div>
        </div>

        <div class="mb-4">
          <span class="text-3xl font-extrabold ${culto.destaque ? 'text-amber-300' : 'text-blue-900'}">${culto.horario}</span>
          <span class="text-sm font-semibold ml-1 ${culto.destaque ? 'text-slate-300' : 'text-slate-500'}">• ${culto.dia}</span>
        </div>

        <h3 class="text-xl font-bold mb-2.5 ${culto.destaque ? 'text-white' : 'text-slate-900'}">${culto.nome}</h3>
        <p class="text-sm leading-relaxed mb-6 ${culto.destaque ? 'text-slate-300' : 'text-slate-600'}">${culto.descricao}</p>
      </div>

      <div class="pt-4 border-t ${culto.destaque ? 'border-white/10' : 'border-slate-100'} flex items-center justify-between text-xs">
        <span class="flex items-center gap-1 font-medium ${culto.destaque ? 'text-slate-300' : 'text-slate-500'}">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i> Presencial em Jaguaribe
        </span>
        <a href="#como-chegar" class="font-bold underline hover:text-amber-500 transition-colors">Como Chegar &rarr;</a>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 6. MINISTÉRIOS
// ==========================================
function inicializarMinisterios(cfg) {
  const container = document.getElementById('container-ministerios');
  if (!container || !cfg.ministerios) return;

  container.innerHTML = cfg.ministerios.map(min => `
    <div class="group rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm card-hover flex flex-col">
      <div class="relative h-48 overflow-hidden">
        <img 
          src="${min.foto}" 
          alt="${min.nome}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${min.corBadge} shadow-sm backdrop-blur-md">
            ${min.subtitulo}
          </span>
          <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
            <i data-lucide="${min.icone || 'heart'}" class="w-4 h-4"></i>
          </div>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">${min.nome}</h3>
          <p class="text-sm text-slate-600 leading-relaxed mb-4">${min.descricao}</p>
        </div>

        <div class="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
          <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-600"></i>
          <span>${min.horario}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 7. SERMÕES E MENSAGENS
// ==========================================
function inicializarSermoes(cfg) {
  if (!cfg.mensagens) return;

  const m = cfg.mensagens;
  const elDestaqueTitulo = document.getElementById('sermao-destaque-titulo');
  const elDestaquePregador = document.getElementById('sermao-destaque-pregador');
  const elDestaqueSerie = document.getElementById('sermao-destaque-serie');
  const elDestaqueData = document.getElementById('sermao-destaque-data');
  const elDestaqueResumo = document.getElementById('sermao-destaque-resumo');
  const elLinkYoutube = document.getElementById('btn-canal-youtube');
  const elIframeYoutube = document.getElementById('iframe-youtube-player');

  if (m.videoDestaque) {
    if (elDestaqueTitulo) elDestaqueTitulo.textContent = m.videoDestaque.titulo;
    if (elDestaquePregador) elDestaquePregador.textContent = m.videoDestaque.pregador;
    if (elDestaqueSerie) elDestaqueSerie.textContent = m.videoDestaque.serie;
    if (elDestaqueData) elDestaqueData.textContent = m.videoDestaque.data;
    if (elDestaqueResumo) elDestaqueResumo.textContent = m.videoDestaque.resumo;

    if (elIframeYoutube && m.videoDestaque.youtubeId) {
      elIframeYoutube.src = `https://www.youtube-nocookie.com/embed/${m.videoDestaque.youtubeId}?rel=0`;
    }
  }

  if (elLinkYoutube && m.canalYoutube) {
    elLinkYoutube.href = m.canalYoutube;
  }

  // Lista lateral de sermões
  const containerLista = document.getElementById('lista-outros-sermoes');
  if (containerLista && m.ultimasMensagens) {
    containerLista.innerHTML = m.ultimasMensagens.map(item => `
      <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-amber-400/40 transition-colors flex items-center justify-between gap-3">
        <div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 mr-2">${item.tag}</span>
          <span class="text-xs text-slate-400">${item.data}</span>
          <h4 class="text-sm font-bold text-white mt-1 line-clamp-1">${item.titulo}</h4>
          <p class="text-xs text-slate-400">${item.pregador} • ${item.duracao}</p>
        </div>
        <a href="${m.canalYoutube}" target="_blank" rel="noopener" class="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center transition-colors shrink-0">
          <i data-lucide="play" class="w-4 h-4 fill-current"></i>
        </a>
      </div>
    `).join('');
  }
}

// ==========================================
// 8. EVENTOS & AVISOS
// ==========================================
function inicializarEventos(cfg) {
  const container = document.getElementById('container-eventos');
  if (!container || !cfg.eventos) return;

  container.innerHTML = cfg.eventos.map(ev => `
    <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm card-hover flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800">
            ${ev.destaqueBadge || 'Evento'}
          </span>
          <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${ev.horario}
          </span>
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-2">${ev.titulo}</h3>
        <p class="text-sm text-slate-600 mb-4 leading-relaxed">${ev.descricao}</p>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span class="flex items-center gap-1">
          <i data-lucide="calendar" class="w-3.5 h-3.5 text-blue-600"></i> ${ev.data}
        </span>
        <span class="flex items-center gap-1">
          <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i> ${ev.local}
        </span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 9. CONTRIBUIÇÃO / DÍZIMOS E PIX
// ==========================================
function inicializarContribuicao(cfg) {
  if (!cfg.contribuicao) return;

  const c = cfg.contribuicao;
  const elVersiculo = document.getElementById('pix-versiculo');
  const elRef = document.getElementById('pix-versiculo-ref');
  const elChavePix = document.getElementById('pix-chave-texto');
  const elTitular = document.getElementById('pix-titular');
  const elBanco = document.getElementById('pix-banco');
  const elAgenciaConta = document.getElementById('pix-agencia-conta');
  const btnCopiarPix = document.getElementById('btn-copiar-pix');

  if (elVersiculo) elVersiculo.textContent = `"${c.versiculo}"`;
  if (elRef) elRef.textContent = `— ${c.versiculoRef}`;
  if (elChavePix) elChavePix.textContent = c.chavePix;
  if (elTitular) elTitular.textContent = c.titularPix;
  if (elBanco) elBanco.textContent = c.banco;
  if (elAgenciaConta) elAgenciaConta.textContent = `Agência: ${c.agencia} • Conta: ${c.contaCorrente}`;

  if (btnCopiarPix) {
    btnCopiarPix.addEventListener('click', () => {
      copiarParaClipboard(c.chavePix, 'Chave PIX copiada com sucesso!');
    });
  }
}

// ==========================================
// 10. LOCALIZAÇÃO E CONTATOS
// ==========================================
function inicializarLocalizacaoEContato(cfg) {
  if (!cfg.contato) return;

  const ct = cfg.contato;
  const elEndereco = document.getElementById('contato-endereco-completo');
  const elReferencia = document.getElementById('contato-referencia');
  const elWhatsLink = document.getElementById('link-whatsapp-direto');
  const elInstagramLink = document.getElementById('link-instagram');
  const elInstagramUser = document.getElementById('texto-instagram-user');
  const elGoogleMapsLink = document.getElementById('link-abrir-gmaps');
  const elIframeMaps = document.getElementById('iframe-google-maps');

  if (elEndereco) {
    elEndereco.textContent = `${ct.endereco} — ${ct.bairro}, ${ct.cidade} - ${ct.estado}`;
  }
  if (elReferencia) {
    elReferencia.textContent = `Ponto de referência: ${ct.pontoReferencia}`;
  }

  if (elWhatsLink) {
    elWhatsLink.href = `https://wa.me/${ct.whatsappNumero}?text=${encodeURIComponent(ct.whatsappMensagemPadrao)}`;
  }

  // Atualizar todos os links do Instagram
  const linksInstagram = document.querySelectorAll('a[href*="instagram.com"]');
  linksInstagram.forEach(link => {
    if (ct.instagram) link.href = ct.instagram;
  });
  if (elInstagramUser && ct.instagramUser) {
    elInstagramUser.textContent = ct.instagramUser;
  }

  if (elGoogleMapsLink && ct.linkGoogleMaps) {
    elGoogleMapsLink.href = ct.linkGoogleMaps;
  }

  if (elIframeMaps && ct.googleMapsEmbedUrl) {
    elIframeMaps.src = ct.googleMapsEmbedUrl;
  }
}

// ==========================================
// 11. MENU MOBILE
// ==========================================
function inicializarMenuMobile() {
  const btnToggle = document.getElementById('btn-menu-mobile');
  const menuContainer = document.getElementById('menu-mobile-dropdown');
  const links = menuContainer ? menuContainer.querySelectorAll('a') : [];

  if (!btnToggle || !menuContainer) return;

  btnToggle.addEventListener('click', () => {
    const isHidden = menuContainer.classList.contains('hidden');
    if (isHidden) {
      menuContainer.classList.remove('hidden');
    } else {
      menuContainer.classList.add('hidden');
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menuContainer.classList.add('hidden');
    });
  });
}

// ==========================================
// 12. MODAL DE PEDIDO DE ORAÇÃO
// ==========================================
function inicializarModalOracao(cfg) {
  const modal = document.getElementById('modal-pedido-oracao');
  const btnsAbrir = document.querySelectorAll('.btn-abrir-oracao');
  const btnFechar = document.getElementById('btn-fechar-modal-oracao');
  const formOracao = document.getElementById('form-pedido-oracao');

  if (!modal) return;

  btnsAbrir.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  if (btnFechar) {
    btnFechar.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });
  }

  // Fechar ao clicar no fundo escuro
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });

  // Envio do formulário direto para o WhatsApp da igreja
  if (formOracao) {
    formOracao.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('oracao-nome')?.value.trim() || 'Irmão(ã)';
      const motivo = document.getElementById('oracao-motivo')?.value.trim() || 'Geral';
      const pedido = document.getElementById('oracao-mensagem')?.value.trim() || '';

      const mensagemZap = `${cfg.contato.whatsappOracaoMensagem}\n\n*Nome:* ${nome}\n*Motivo:* ${motivo}\n*Mensagem:* ${pedido}`;
      const urlWhats = `https://wa.me/${cfg.contato.whatsappNumero}?text=${encodeURIComponent(mensagemZap)}`;

      modal.classList.add('hidden');
      modal.classList.remove('flex');
      formOracao.reset();
      
      window.open(urlWhats, '_blank');
      mostrarToast('Redirecionando para o WhatsApp da igreja...');
    });
  }
}

// ==========================================
// 13. EDITOR RÁPIDO & EXPORTADOR (FACILIDADE TOTAL)
// ==========================================
function inicializarEditorRapido(cfg) {
  const btnAbrir = document.getElementById('btn-abrir-editor-rapido');
  const modalEditor = document.getElementById('modal-editor-rapido');
  const btnFechar = document.getElementById('btn-fechar-editor');
  const btnSalvarEBaixar = document.getElementById('btn-baixar-novo-conteudo');
  const btnCopiarConfig = document.getElementById('btn-copiar-novo-conteudo');

  if (!btnAbrir || !modalEditor) return;

  btnAbrir.addEventListener('click', () => {
    // Preenche os campos do editor com o valor atual
    document.getElementById('edit-slogan').value = cfg.slogan || '';
    document.getElementById('edit-subtitulo').value = cfg.subtitulo || '';
    document.getElementById('edit-chave-pix').value = cfg.contribuicao?.chavePix || '';
    document.getElementById('edit-whatsapp').value = cfg.contato?.whatsappNumero || '';
    document.getElementById('edit-endereco').value = cfg.contato?.endereco || '';
    document.getElementById('edit-instagram').value = cfg.contato?.instagram || '';

    modalEditor.classList.remove('hidden');
    modalEditor.classList.add('flex');
  });

  if (btnFechar) {
    btnFechar.addEventListener('click', () => {
      modalEditor.classList.add('hidden');
      modalEditor.classList.remove('flex');
    });
  }

  function gerarConfigAtualizado() {
    const clone = JSON.parse(JSON.stringify(cfg));
    clone.slogan = document.getElementById('edit-slogan').value;
    clone.subtitulo = document.getElementById('edit-subtitulo').value;
    if (clone.contribuicao) clone.contribuicao.chavePix = document.getElementById('edit-chave-pix').value;
    if (clone.contato) {
      clone.contato.whatsappNumero = document.getElementById('edit-whatsapp').value;
      clone.contato.endereco = document.getElementById('edit-endereco').value;
      clone.contato.instagram = document.getElementById('edit-instagram').value;
    }
    return `/**\n * ARQUIVO DE CONFIGURAÇÃO E CONTEÚDO DO SITE - IGREJA BETEL JAGUARIBE\n * Atualizado via Editor Fácil\n */\nconst CONFIG_IGREJA = ${JSON.stringify(clone, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.CONFIG_IGREJA = CONFIG_IGREJA;\n}\n`;
  }

  if (btnSalvarEBaixar) {
    btnSalvarEBaixar.addEventListener('click', () => {
      const conteudoAtualizado = gerarConfigAtualizado();
      const blob = new Blob([conteudoAtualizado], { type: 'text/javascript;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'conteudo.js';
      link.click();
      mostrarToast('Arquivo conteudo.js baixado! Basta substituir na pasta do site.');
    });
  }

  if (btnCopiarConfig) {
    btnCopiarConfig.addEventListener('click', () => {
      const conteudoAtualizado = gerarConfigAtualizado();
      copiarParaClipboard(conteudoAtualizado, 'Código copiado! Cole no seu conteudo.js.');
    });
  }
}

// ==========================================
// FUNÇÕES AUXILIARES (CLIPBOARD & TOAST)
// ==========================================
function copiarParaClipboard(texto, mensagemSucesso) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(texto).then(() => {
      mostrarToast(mensagemSucesso);
    }).catch(() => fallbackCopiar(texto, mensagemSucesso));
  } else {
    fallbackCopiar(texto, mensagemSucesso);
  }
}

function fallbackCopiar(texto, mensagemSucesso) {
  const inputTemp = document.createElement('textarea');
  inputTemp.value = texto;
  inputTemp.style.position = 'fixed';
  inputTemp.style.opacity = '0';
  document.body.appendChild(inputTemp);
  inputTemp.select();
  try {
    document.execCommand('copy');
    mostrarToast(mensagemSucesso);
  } catch (err) {
    alert('Por favor copie manualmente: ' + texto);
  }
  document.body.removeChild(inputTemp);
}

function mostrarToast(mensagem) {
  const toast = document.getElementById('toast-notification');
  const textoToast = document.getElementById('toast-texto');
  if (!toast) return;

  if (textoToast) textoToast.textContent = mensagem;
  toast.classList.remove('hidden');
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 3500);
}
