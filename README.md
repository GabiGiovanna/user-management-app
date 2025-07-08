# 🧑‍💼 User Management App

✨ Aplicação web full stack para **cadastro, listagem, edição e exclusão de usuários**. Projeto moderno com frontend em **React** e backend em **Node.js**, com banco de dados **MongoDB** + **Prisma ORM**.

---

## 🚀 Funcionalidades

- 🆕 **Criar usuários**
- 📋 **Listar todos os usuários cadastrados**
- ✏️ **Editar dados de um usuário**
- ❌ **Excluir usuários do sistema**
- 🧠 **Validação de formulários** com feedback visual via toast
- 📱 **Interface responsiva** e estilizada com Tailwind CSS

---

## 🧪 Tecnologias Utilizadas

### 🔧 Backend
- ⚙️ **Node.js** + **Express**
- 🍃 **MongoDB** com **Prisma ORM**
- 🔐 **dotenv** para variáveis de ambiente
- 🌐 **CORS** para permitir requisições entre origens

### 🎨 Frontend
- ⚛️ **React.js** com SPA (Single Page Application)
- 🔗 **Axios** para requisições HTTP
- 💨 **Tailwind CSS** para estilização rápida e moderna
- 🔔 **React Toastify** para notificações
- 🔀 **React Router DOM** para rotas
- 🧹 **ESLint** para padronização de código

---

## 📁 Estrutura de Pastas

```bash
user-management-app/
├── backend/
│   ├── prisma/           # 📐 Esquema do banco e migrations
│   ├── routes/           # 🚦 Rotas da API
│   ├── controllers/      # 🧠 Lógica de negócio
│   ├── models/           # 🧱 (Opcional, se usar Mongoose)
│   ├── index.js          # 🚀 Inicialização do servidor
│   └── .env              # 🔐 Configurações sensíveis
│
├── frontend/
│   ├── src/
│   │   ├── Pages/        # 📄 Páginas principais
│   │   ├── Components/   # 🧩 Componentes reutilizáveis
│   │   ├── App.jsx       # 🎯 Rotas e estrutura base
│   │   └── main.jsx      # 🧨 Entrada principal do React
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── README.md 📚
└── package.json 📦
