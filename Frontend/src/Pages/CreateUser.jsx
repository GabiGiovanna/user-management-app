import { Pencil, Trash2 } from 'lucide-react';
import api from '../services/api';
import { useEffect, useState, useRef } from 'react'; //Sempre executa assim que abrir(useEffects)
import { toast } from 'react-toastify'; //Para notificação
import 'react-toastify/dist/ReactToastify.css';

export default function CreateUser() {
  const inputName = useRef(); //Para guardar o valor dos inputs
  const inputEmail = useRef();
  const inputImage = useRef();
  const inputAge = useRef();
  async function postUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
      image: inputImage.current.value,
    });
    toast.success('Usuário cadastrado com sucesso!');
    inputName.current.value = '';
    inputEmail.current.value = '';
    inputAge.current.value = '';
    inputImage.current.value = '';
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-red-800 via-purple-800 to-fuchsia-800 px-4 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-white font-ubuntu">
        Gabi Gio
      </h1>
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
              ref={inputName}
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
              ref={inputEmail}
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
              ref={inputAge}
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
              ref={inputImage}
              id="image"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Botão de cadastro */}

          <button
            onClick={postUsers}
            type="button"
            className=" border border-[#9932cc] rounded-md transition duration-300 shadow-md w-full p-2 hover:bg-[#9932cc] hover:text-white"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
