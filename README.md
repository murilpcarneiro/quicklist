# 📋 Quicklist

Uma aplicação web responsiva e acessível para gerenciar listas de compras de forma rápida e intuitiva.

## ✨ Features

- ✅ **Adicionar itens** - Adicione novos itens à lista com validação de campos vazios
- ✅ **Marcar como concluído** - Clique no checkbox para marcar itens como concluídos (com riscado)
- ✅ **Remover itens** - Delete itens da lista com notificação de confirmação
- ✅ **Responsivo** - Design otimizado para desktop, tablet e mobile
- ✅ **Acessível** - Suporte completo a leitores de tela e navegação por teclado
- ✅ **Design moderno** - Interface limpa com paleta de cores consistente

## 🚀 Tecnologias

- **HTML5** - Semântica e acessibilidade
- **CSS3** - Grid, Flexbox e Media Queries para responsividade
- **JavaScript (Vanilla)** - Lógica funcional sem dependências
- **Font Inter** - Tipografia moderna do Google Fonts

## 📁 Estrutura do Projeto

```
quicklist/
├── index.html          # Estrutura HTML semântica
├── index.css           # Estilos com variáveis CSS e responsividade
├── script.js           # Lógica da aplicação (refatorada)
├── assets/             # Ícones e imagens
│   ├── logo.svg
│   ├── trash.svg
│   ├── check.svg
│   ├── warning-circle-filled.svg
│   └── delete-small.svg
└── README.md           # Este arquivo
```

## 🎯 Como Usar

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/quicklist.git
cd quicklist
```

### 2. Abrir no navegador

Abra o arquivo `index.html` diretamente no seu navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com VS Code (Live Server)
# Clique com botão direito em index.html > "Open with Live Server"
```

Acesse `http://localhost:8000`

### 3. Usar a aplicação

1. **Adicionar item** - Digite um item no campo de input e clique "Adicionar item"
2. **Marcar como concluído** - Clique no checkbox ao lado do item (texto fica riscado)
3. **Remover item** - Clique no ícone de lixeira para deletar
4. **Fechar notificação** - Clique sobre a notificação de exclusão

## 🎨 Paleta de Cores

| Variável | Cor | Uso |
|----------|-----|-----|
| `--background-primary` | `#F4F5FB` | Fundo da página |
| `--background-secondary` | `#FFFFFF` | Fundo dos itens |
| `--color-brand` | `#CA3884` | Cor primária (botão, checkbox) |
| `--color-brand-hover` | `#A52C6B` | Hover da cor primária |
| `--color-danger` | `#C93847` | Cor de alerta (notificação) |
| `--content-primary` | `#080B12` | Texto principal |
| `--border-primary` | `#D1D5DB` | Borda padrão |

## ♿ Acessibilidade

- ✅ Labels associados a inputs (`<label for="">`)
- ✅ ARIA labels para buttons e elementos interativos
- ✅ Touch targets de 44x44px (smartphone)
- ✅ Cores com contraste adequado (WCAG AA)
- ✅ Navegação por teclado completa
- ✅ Live regions para notificações

## 📱 Responsividade

| Breakpoint | Mudanças |
|-----------|----------|
| **768px** | Formulário em coluna; botão 100% da largura |
| **480px** | Padding reduzido; fontes menores; otimizado para toque |

## 🔄 Refatorações Implementadas

### CSS
- ✅ Variáveis de spacing e border-radius
- ✅ Transições suaves em hover/focus
- ✅ Media queries para responsividade
- ✅ Organização modular e manutenível

### JavaScript
- ✅ Funções reutilizáveis e bem documentadas
- ✅ Delegação de eventos (melhor performance)
- ✅ IDs dinâmicos com `Date.now()`
- ✅ Nomes em camelCase
- ✅ Separação de responsabilidades

### HTML
- ✅ Semântica HTML5 (`<nav>`, `<aside>`, `<label>`)
- ✅ ARIA labels para acessibilidade
- ✅ Comentários nas seções principais
- ✅ Atributos descritivos (alt, aria-label)

## 📋 Funcionalidades Implementadas

### Requisitos Atendidos

- ✅ Estrutura inicial (HTML, CSS, JS linkados)
- ✅ Título e botão "Voltar" no topo
- ✅ Campo input e botão "Adicionar item"
- ✅ Lista de itens com checkbox, nome e botão delete
- ✅ Itens pré-cadastrados
- ✅ Adicionar novo item com validação
- ✅ Remover item com notificação
- ✅ Marcar como concluído (riscado)
- ✅ Desmarcar itens

## 🎓 O que você aprenderá

- Manipulação do DOM com JavaScript vanilla
- Delegação de eventos
- CSS moderno com variáveis e media queries
- Acessibilidade web (WCAG)
- Semântica HTML5
- Responsividade mobile-first
- Refatoração de código

## 🐛 Possíveis Melhorias Futuras

- Persistência de dados (LocalStorage)
- Modo escuro
- Filtros (Todos, Concluídos, Pendentes)
- Editar itens
- Categorias/Tags
- Animações ao adicionar/remover
- PWA (Progressive Web App)

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 👤 Autor

Desenvolvido como desafio da formação **Full Stack** da Rocketseat.

---

**Desenvolvido com 💜 por você | Desafio Rocketseat**
