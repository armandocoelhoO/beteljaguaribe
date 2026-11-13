/**
 * =========================================================================
 * ARQUIVO DE CONFIGURAÇÃO E CONTEÚDO DO SITE - IGREJA BETEL JAGUARIBE
 * =========================================================================
 * 
 * Este arquivo foi planejado para que qualquer pessoa (mesmo sem conhecimento de programação)
 * possa atualizar os textos, horários dos cultos, chave PIX, avisos, sermões e contatos
 * de forma rápida e segura!
 * 
 * 💡 DICA: Basta alterar o texto entre as aspas 'exemplo' e salvar este arquivo.
 * Ao atualizar a página no navegador (F5), as alterações aparecerão automaticamente!
 * =========================================================================
 */

const CONFIG_IGREJA = {
  // ==========================================
  // 1. INFORMAÇÕES BÁSICAS DA IGREJA
  // ==========================================
  nome: "Igreja Missionária Evangélica Betel Brasileiro",
  nomeCurto: "Betel Jaguaribe",
  slogan: "Um lugar de fé, comunhão e amor em Cristo Jesus",
  subtitulo: "Uma igreja acolhedora no coração de Jaguaribe para você e toda a sua família.",
  versiculoTema: {
    texto: "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.",
    referencia: "Mateus 18:20"
  },
  
  // Ano de fundação ou lema anual
  lemaAno: "De volta ao altar",

  // ==========================================
  // 2. HORÁRIOS DOS CULTOS E REUNIÕES
  // ==========================================
  // (O site atualiza automaticamente o destaque do "Próximo Culto" com base nestes dias)
  cultos: [
    {
      diaSemanaNumero: 0, // 0 = Domingo
      dia: "Domingo",
      horario: "09:00",
      nome: "Escola Bíblica Dominical (EBD)",
      descricao: "Momento dedicado ao estudo aprofundado da Palavra de Deus para todas as faixas etárias (crianças, jovens e adultos).",
      categoria: "Ensino Bíblico",
      icone: "book-open",
      destaque: false
    },
    {
      diaSemanaNumero: 0, // 0 = Domingo
      dia: "Domingo",
      horario: "18:00",
      nome: "Culto de Celebração e Família",
      descricao: "Culto principal com louvor congregacional, adoração, ministração da Palavra e comunhão para toda a família.",
      categoria: "Celebração",
      icone: "heart-handshake",
      destaque: true
    },
    {
      diaSemanaNumero: 3, // 3 = Quarta-feira
      dia: "Quarta-feira",
      horario: "19:30",
      nome: "Culto de Oração e Doutrina",
      descricao: "Noite de intercessão clamando pelas famílias, enfermos e nações, acompanhado de estudo prático das Escrituras.",
      categoria: "Oração & Estudo",
      icone: "flame",
      destaque: false
    },
    {
      diaSemanaNumero: 6, // 6 = Sábado
      dia: "Sábado",
      horario: "19:30",
      nome: "Culto dos Jovens",
      descricao: "Encontro dinâmico da juventude com louvor contemporâneo, reflexões atuais e comunhão entre as gerações.",
      categoria: "Juventude",
      icone: "sparkles",
      destaque: false
    }
  ],

  // ==========================================
  // 3. MENSAGEM PASTORAL E SOBRE NÓS
  // ==========================================
  sobre: {
    titulo: "Bem-vindo à Família Betel Jaguaribe",
    mensagemPastoral: "A Igreja Betel no bairro de Jaguaribe nasceu com a missão de ser farol da graça de Deus em João Pessoa. Cremos que cada pessoa é preciosa para o Senhor e tem um propósito singular no Reino. Nosso desejo é que você e sua família encontrem aqui um lar espiritual com braços abertos, ensino bíblico fiel e relacionamentos verdadeiros.",
    pastorResponsavel: "Pastor e Liderança Betel Jaguaribe",
    missao: "Pregar o Evangelho integral de Jesus Cristo, discipular vidas com base nas Sagradas Escrituras e servir com amor à comunidade de Jaguaribe e João Pessoa.",
    visao: "Ser uma igreja bíblica, relevante, calorosa e missionária, multiplicando discípulos e transformando realidades pelo poder do Espírito Santo.",
    valores: [
      { titulo: "Fidelidade Bíblica", descricao: "A Bíblia Sagrada é nossa única regra inegociável de fé e prática." },
      { titulo: "Amor & Acolhimento", descricao: "Cada visitante e membro é recebido com carinho fraternal e cuidado." },
      { titulo: "Oração Constante", descricao: "Acreditamos que a oração move a mão de Deus e sustenta toda a nossa caminhada." },
      { titulo: "Coração Missionário", descricao: "Comprometidos com missões locais, nacionais e transculturais." }
    ]
  },

  // ==========================================
  // 4. MINISTÉRIOS E DEPARTAMENTOS
  // ==========================================
  ministerios: [
    {
      nome: "Betel Kids (Infantil)",
      subtitulo: "Cuidado e ensino bíblico lúdico",
      descricao: "Equipe dedicada que cuida dos nossos pequenos com amor, histórias bíblicas, teatro e atividades criativas durante os cultos.",
      horario: "Durante os cultos de Domingo (18h)",
      corBadge: "bg-amber-100 text-amber-800",
      icone: "smile",
      foto: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=700&q=80"
    },
    {
      nome: "JUBEC",
      subtitulo: "Juventude apaixonada por Jesus",
      descricao: "Geração que busca a Deus com intensidade, desenvolvendo amizades sólidas, projetos evangelísticos e encontros inspiradores.",
      horario: "Sábados às 19:30",
      corBadge: "bg-blue-100 text-blue-800",
      icone: "zap",
      foto: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80"
    },
    {
      nome: "Ministério de Louvor",
      subtitulo: "Adoração com excelência e unção",
      descricao: "Músicos e cantores vocacionados para conduzir a igreja em adoração profunda através de hinos clássicos e louvores contemporâneos.",
      horario: "Ensaios semanais e cultos",
      corBadge: "bg-purple-100 text-purple-800",
      icone: "music",
      foto: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80"
    },
    {
      nome: "Mulheres",
      subtitulo: "Mulheres sábias edificando lares",
      descricao: "Reuniões especiais de oração, chás de comunhão, palestras e apoio mútuo para mulheres, mães e jovens adultas.",
      horario: "Encontros mensais programados",
      corBadge: "bg-rose-100 text-rose-800",
      icone: "heart",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
    },
    {
      nome: "Homens",
      subtitulo: "Sacerdócio no lar e na sociedade",
      descricao: "Cafés de comunhão, estudo da Palavra e oração direcionados aos desafios do homem cristão, pai e profissional moderno.",
      horario: "Café dos homens mensal",
      corBadge: "bg-emerald-100 text-emerald-800",
      icone: "shield-check",
      foto: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
    },
    {
      nome: "Ação Social & Evangelismo",
      subtitulo: "Fé demonstrada em atitudes",
      descricao: "Distribuição de cestas básicas, visitas a lares de idosos, apoio comunitário em Jaguaribe e acolhimento a famílias vulneráveis.",
      horario: "Atendimento contínuo",
      corBadge: "bg-teal-100 text-teal-800",
      icone: "gift",
      foto: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=700&q=80"
    }
  ],

  // ==========================================
  // 5. SERMÕES E MENSAGENS EM VÍDEO
  // ==========================================
  // Você pode trocar o ID do vídeo do YouTube pelo ID de um vídeo recente do canal Betel Jaguaribe
  mensagens: {
    canalYoutube: "https://www.youtube.com/@BetelJaguaribe",
    videoDestaque: {
      titulo: "Firmados na Rocha: A Segurança de Quem Confia em Deus",
      pregador: "Pastor Betel Jaguaribe",
      data: "Último Domingo",
      serie: "Série Edificados",
      youtubeId: "sjV9MJx66HE", // ID de vídeo ou substitua pelo ID do culto
      resumo: "Uma mensagem encorajadora sobre como manter a paz e a firmeza espiritual mesmo diante das maiores tempestades da vida."
    },
    ultimasMensagens: [
      {
        titulo: "O Poder da Oração Eficaz",
        pregador: "Ministério Pastoral",
        data: "Quarta-feira",
        duracao: "42 min",
        tag: "Oração"
      },
      {
        titulo: "Graça Que Transforma Lares",
        pregador: "Culto da Família",
        data: "Domingo Anterior",
        duracao: "50 min",
        tag: "Família"
      },
      {
        titulo: "Vivendo Como Sal e Luz",
        pregador: "Culto de Celebração",
        data: "Semana Anterior",
        duracao: "48 min",
        tag: "Vida Cristã"
      }
    ]
  },

  // ==========================================
  // 6. PRÓXIMOS EVENTOS E AVISOS DA SEMANA
  // ==========================================
  eventos: [
    {
      titulo: "Culto de Santa Ceia do Senhor",
      data: "1º Domingo do Mês",
      horario: "18:00",
      local: "Templo Principal - Jaguaribe",
      descricao: "Culto solene de celebração em memória do sacrifício e ressurreição de nosso Senhor Jesus Cristo. Venha com o coração grato!",
      destaqueBadge: "Especial"
    },
    {
      titulo: "Culto dos Jovens",
      data: "Sábado Especial",
      horario: "19:30",
      local: "Espaço Betel Jaguaribe",
      descricao: "Uma noite cheia de música acústica, bate-papo descontraído sobre propósito, gincana e muita comunhão entre os jovens.",
      destaqueBadge: "Juventude"
    },
    {
      titulo: "Manhã de Oração e Consagração",
      data: "Domingo pela Manhã",
      horario: "09:00 às 11:00",
      local: "Templo Betel Jaguaribe",
      descricao: "Tempo reservado para buscar a face de Deus em clamor e oração pelas famílias, pela igreja e pela nossa cidade.",
      destaqueBadge: "Oração"
    }
  ],

  // ==========================================
  // 7. DÍZIMOS E OFERTAS (CHAVE PIX E BANCO)
  // ==========================================
  // Altere os dados abaixo para a chave PIX e conta real da igreja
  contribuicao: {
    versiculo: "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama a quem dá com alegria.",
    versiculoRef: "2 Coríntios 9:7",
    chavePix: "09.132.432.0037-31", // Chave PIX (E-mail, CNPJ ou Telefone)
    tipoPix: "Chave E-mail / CNPJ",
    titularPix: "Igreja Evangélica Betel Brasileiro Jaguaribe",
    banco: "Banco do Brasil / Caixa / Bradesco",
    agencia: "0000-0",
    contaCorrente: "00000-0",
    cnpj: "09.132.432.0037-31",
    qrCodePixUrl: "" // Se tiver imagem de QR Code do PIX, coloque o caminho aqui (ex: 'assets/pix.png')
  },

  // ==========================================
  // 8. LOCALIZAÇÃO E CONTATO
  // ==========================================
  contato: {
    endereco: "Rua Engenheiro Leonardo Arcoverde, 145",
    bairro: "Jaguaribe",
    cidade: "João Pessoa",
    estado: "PB",
    cep: "58015-660",
    pontoReferencia: "Próximo ao Hemocentro da Paraíba",
    
    // Contatos diretos
    telefoneFormatado: "(83) 98888-0000",
    whatsappNumero: "5583988880000", // Somente números (com DDI 55 e DDD 83)
    whatsappMensagemPadrao: "Olá! Visitei o site da Betel Jaguaribe e gostaria de mais informações.",
    whatsappOracaoMensagem: "Olá equipe pastoral da Betel Jaguaribe! Gostaria de deixar um pedido de oração:",
    
    email: "beteljaguaribe@gmail.com",
    
    // Redes Sociais
    instagram: "https://www.instagram.com/beteljaguaribe/",
    instagramUser: "@beteljaguaribe",
    youtube: "https://www.youtube.com/results?search_query=Igreja+Betel+Jaguaribe",
    facebook: "https://www.facebook.com/beteljaguaribe",
    
    // Links de navegação e mapa
    linkGoogleMaps: "https://maps.google.com/?q=Rua+Engenheiro+Leonardo+Arcoverde,+145+-+Jaguaribe,+Jo%C3%A3o+Pessoa+-+PB",
    linkWaze: "https://waze.com/ul?q=Rua+Engenheiro+Leonardo+Arcoverde+145+Jaguaribe+Joao+Pessoa",
    
    // Iframe embed Google Maps seguro
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.946399434865!2d-34.88720082419409!3d-7.132213792871895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace816b3fcf8ad%3A0xe5a3637db7f66a2!2sR.%20Eng.%20Leonardo%20Arcoverde%2C%20145%20-%20Jaguaribe%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058015-660!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
  }
};

// Torna disponível globalmente para o navegador
if (typeof window !== 'undefined') {
  window.CONFIG_IGREJA = CONFIG_IGREJA;
}
