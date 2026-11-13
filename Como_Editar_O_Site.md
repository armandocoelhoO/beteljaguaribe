# 📖 Guia de Manutenção e Edição - Igreja Betel Jaguaribe

Este site foi planejado especialmente para ser **moderno, elegante, rápido** e, acima de tudo, **extremamente fácil de manter e atualizar**. Qualquer pessoa da equipe pastoral, secretaria ou mídia da igreja consegue alterar horários, avisos, chave PIX e fotos em poucos minutos!

---

## 🚀 1. Como Abrir o Site no Computador

1. Entre na pasta do projeto:
   `C:\Users\Pichau\.gemini\antigravity\scratch\igreja-betel-jaguaribe`
2. Dê dois cliques no arquivo **`Iniciar_Site_Local.bat`** (ou dê duplo clique direto em **`index.html`**).
3. O site abrirá instantaneamente no seu navegador padrão (Google Chrome, Edge, Firefox, etc.) sem precisar instalar nenhum programa adicional!

---

## ✏️ 2. Como Alterar Textos, Horários e Chave PIX

Toda a informação editável do site está concentrada em **um único arquivo central**:
👉 **`conteudo.js`**

### Passo a passo para editar:
1. Clique com o botão direito no arquivo **`conteudo.js`** e escolha **"Abrir com" ➔ "Bloco de Notas"** (ou VS Code).
2. Localize a informação que deseja trocar (está tudo separado por seções com títulos explicativos):

### Exemplos práticos:

#### A) Mudar a Chave PIX:
Localize a linha de contribuição:
```javascript
chavePix: "igrejabeteljaguaribe@email.com",
```
Altere para a chave desejada:
```javascript
chavePix: "83988887777",
```

#### B) Mudar o Horário de um Culto:
Localize a seção `cultos`:
```javascript
{
  diaSemanaNumero: 0,
  dia: "Domingo",
  horario: "18:00",
  nome: "Culto de Celebração e Família",
  ...
}
```
Basta alterar `"18:00"` para o novo horário (ex: `"18:30"`).

#### C) Adicionar ou Alterar um Aviso / Evento:
Na seção `eventos`, altere o título, data e descrição:
```javascript
{
  titulo: "Conferência Missionária 2026",
  data: "15 a 17 de Novembro",
  horario: "19:30",
  local: "Templo Betel Jaguaribe",
  descricao: "Venha participar deste mover missionário na nossa igreja!",
  destaqueBadge: "Especial"
}
```

3. **Salve o arquivo** (`Ctrl + S` no Bloco de Notas).
4. Volte ao seu navegador e aperte **F5** (Recarregar). Pronto! As alterações já estarão no ar!

---

## 🎨 3. Usando o Painel de Edição Rápida Embutido no Site

Se preferir não mexer em arquivos de código, o site tem um recurso visual:
1. No rodapé da página, clique no botão **"🛠️ Editor Rápido do Site"**.
2. Uma janelinha se abrirá permitindo que você digite os novos valores (Chave PIX, Slogan, WhatsApp, etc.).
3. Clique em **"Baixar Novo conteudo.js"**.
4. Mova o arquivo baixado para dentro da pasta do site, substituindo o anterior.

---

## 🌐 4. Como Colocar o Site na Internet (Hospedagem Gratuita ou Própria)

Este site não necessita de banco de dados nem de servidores complexos. Ele pode ser hospedado gratuitamente ou em qualquer plano existente:

### Opção A: Vercel / Netlify (Mais recomendada, 100% Gratuita e Rápida)
1. Crie uma conta gratuita em [vercel.com](https://vercel.com) ou [netlify.com](https://netlify.com).
2. Basta arrastar a pasta `igreja-betel-jaguaribe` para dentro do painel.
3. Em menos de 30 segundos seu site estará online com certificado SSL (HTTPS) gratuito!
4. Você pode conectar o domínio próprio da igreja (ex: `www.beteljaguaribe.com.br`).

### Opção B: GitHub Pages (100% Gratuito)
1. Crie um repositório no GitHub com os arquivos desta pasta.
2. Ative o **GitHub Pages** nas configurações do repositório.

### Opção C: Hospedagem Tradicional (Hostinger, Locaweb, cPanel)
1. Conecte no Gerenciador de Arquivos do seu painel cPanel (pasta `public_html`).
2. Envie os arquivos da pasta `igreja-betel-jaguaribe` para lá.

---

## 📱 Destaques Incluídos no Site
- ✅ **Design 100% Responsivo:** Perfeito em celulares, tablets e computadores.
- ✅ **Cálculo Automático do Próximo Culto:** O site sabe que dia e hora é hoje e informa o visitante se hoje tem culto ou em quantos dias será o próximo!
- ✅ **Botão Copiar Chave PIX:** Copia com 1 toque no celular e avisa o usuário.
- ✅ **Pedido de Oração:** Conecta o visitante diretamente ao WhatsApp pastoral com formulário preenchido.
- ✅ **Mapa Interativo Integrado:** Já direcionado para a Rua Eng. Leonardo Arcoverde, 145 - Jaguaribe.
- ✅ **Player de Sermões:** Integrado ao canal do YouTube da Betel Jaguaribe.
