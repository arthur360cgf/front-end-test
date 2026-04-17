# 🧪 Teste Técnico – Front-End (React / Next.js)

## 📌 Sobre o projeto

Aplicação desenvolvida como parte de um teste técnico com foco em:

* Arquitetura com Atomic Design
* Gerenciamento de estado global
* Autenticação com JWT (mock)
* CRUD completo com filtros e paginação
* Dashboard com visualização de dados

O objetivo principal foi construir uma aplicação funcional, organizada e escalável, priorizando boas práticas de desenvolvimento.

---

## 🚀 Tecnologias utilizadas

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Zustand** (gerenciamento de estado)
* **Recharts** (gráficos)
* **React Hooks**
* CSS (ou Tailwind, se você usou)

---

## 🧱 Arquitetura

O projeto segue o padrão **Atomic Design**, organizado da seguinte forma:

* **Atoms** → Componentes básicos (Button, Input)
* **Molecules** → Combinação de componentes (InputField)
* **Organisms** → Blocos maiores (Forms, Listas, Navbar)
* **Templates** → Estrutura de páginas
* **Pages** → Páginas da aplicação

Além disso, foram separadas responsabilidades em:

* `store/` → estado global com Zustand
* `services/` → lógica de negócio
* `hooks/` → abstrações reutilizáveis
* `types/` → tipagens

---

## 🔐 Autenticação

A autenticação foi implementada com:

* Token JWT **mockado**
* Persistência via `localStorage`
* Gerenciamento com **Zustand**
* Proteção de rotas utilizando hook customizado (`useAuth`)

Fluxo:

1. Usuário realiza login
2. Token é armazenado
3. Rotas protegidas verificam autenticação
4. Redirecionamento automático se não autenticado

---

## 📄 Funcionalidades

### 🔐 Autenticação

* Login
* Cadastro
* Persistência de sessão
* Logout

---

### 📊 Dashboard

* Página protegida
* Exibição de gráfico com dados simulados
* Implementação com Recharts

---

### 📦 CRUD (tema livre)

* Criar item
* Listar itens
* Editar item
* Excluir item

Extras implementados:

* 🔍 Filtro por nome
* 📅 Filtro por data
* 📄 Paginação (6, 12, 24 itens por página)

---

## 🧠 Gerenciamento de estado

Foi utilizado **Zustand** por sua simplicidade e escalabilidade.

Estados globais:

* Usuário autenticado
* Token de acesso
* Lista de itens do CRUD

---

## ▶️ Como rodar o projeto

```bash
# Clonar repositório
git clone <SEU_REPO>

# Entrar na pasta
cd <NOME_DO_PROJETO>

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

## 🧪 Decisões técnicas

* **Zustand** foi escolhido por ser mais simples e direto que Context API
* Autenticação mockada para focar na arquitetura e fluxo
* Separação em Atomic Design para melhor escalabilidade
* CRUD implementado localmente para simplificar testes

---

## 🔮 Melhorias futuras

* Integração com API real
* Autenticação com cookies + middleware
* Testes automatizados
* Melhorias de UI/UX
* Persistência de dados em banco

---

## 📸 Prints da aplicação

> (adicione aqui screenshots das telas)

---

## 🚀 Deploy

> (adicione o link da aplicação, ex: Vercel)

---

## 👨‍💻 Autor

Desenvolvido por Arthur Aragão
