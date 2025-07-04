//frontend/src/Pages/Home/home.jsx

import { Pencil, Trash2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-800 via-purple-800 to-fuchsia-800 px-4 py-10">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <h2 className="mb-6 text-center text-3xl font-bold text-purple-800 font-ubuntu">
          CRUD de Usuário
        </h2>

        <form action="#" method="POST" className="space-y-5">
          {/* NOME */}
          <div>
            <label
              htmlFor="nome"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* IDADE */}
          <div>
            <label
              htmlFor="idade"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Idade
            </label>
            <input
              type="number"
              name="idade"
              id="idade"
              required
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* IMAGEM */}
          <div>
            <label
              htmlFor="image"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              URL da Imagem (opcional)
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* BOTÃO */}
          <div>
            <button
              type="submit"
              className="w-full rounded-md border border-purple-700 px-4 py-2 text-sm font-medium text-purple-700 transition duration-300 hover:bg-purple-800 shadow-md hover:text-white"
            >
              Cadastrar
            </button>
          </div>
        </form>
        {/* LISTA DE USUÁRIOS */}
        <div className="mt-8 space-y-4">
          {[
            // Simulação de dados (depois substitua por dados da API)
            { id: 1, nome: "Joaquim", idade: 33, email: "joaquim@email.com" },
            { id: 2, nome: "Paulo", idade: 32, email: "paulo@email.com" },
          ].map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-start rounded-lg bg-purple-700 px-4 py-3 text-white shadow-md"
            >
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-semibold">Nome:</span> {user.nome}
                </p>
                <p>
                  <span className="font-semibold">Idade:</span> {user.idade}
                </p>
                <p>
                  <span className="font-semibold">E-mail:</span> {user.email}
                </p>
              </div>
              <div className="flex flex-col space-y-2 ml-4">
                <button
                  title="Editar"
                  className="hover:text-yellow-300 transition"
                  onClick={() => console.log("Editar", user.id)}
                >
                  <Pencil size={18} />
                </button>
                <button
                  title="Deletar"
                  className="hover:text-red-400 transition"
                  onClick={() => console.log("Deletar", user.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
