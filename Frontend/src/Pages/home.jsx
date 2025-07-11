//frontend/src/Pages/Home/home.jsx

import { Pencil, Trash2 } from 'lucide-react';
import api from '../services/api';
import { useEffect, useState, useRef } from 'react'; //Sempre executa assim que abrir(useEffects)
import { toast } from 'react-toastify'; //Para notificação
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [isEditing, setEditing] = useState(false); // Controla se estamos no modo de edição ou cadastro
  const [editingUserId, setEditingUserId] = useState(null); // Guarda o ID do usuário que está sendo editado
  const inputName = useRef(); //Para guardar o valor dos inputs
  const inputEmail = useRef();
  const inputImage = useRef();
  const inputAge = useRef();
  const [users, setUsers] = useState([]); //A variavel(users) é atualizada - coloca os dados(setUsers)na variavel(Users)

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios');
    setUsers(usersFromApi.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

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
    //Notificação de sucesso
    //Recarrega a lista de usuários após o cadastro
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    toast.success('Usuário Deletado!');
    getUsers();
  }

  async function editUsers(id) {
    await api.put(`/usuarios/${id}`, {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
      image: inputImage.current.value,
    });
    toast.success('Usuário editado com sucesso!');
    inputName.current.value = '';
    inputEmail.current.value = '';
    inputAge.current.value = '';
    inputImage.current.value = '';
    //Recarrega a lista de usuários após a edição
    getUsers();
  }

  function handleEdit(user) {
    inputName.current.value = user.name;
    inputEmail.current.value = user.email;
    inputAge.current.value = user.age;
    inputImage.current.value = user.image;
    setEditing(true);
    setEditingUserId(user.id);
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

          {/* BOTÕES */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={() => {
                if (isEditing) {
                  editUsers(editingUserId);
                  setEditing(false);
                  setEditingUserId(null);
                } else {
                  postUsers();
                }
              }}
              type="button"
              className={`flex-1 rounded-md border ${
                isEditing
                  ? 'border-yellow-500 text-yellow-700 hover:bg-yellow-600 hover:text-white'
                  : 'border-purple-700 text-purple-700 hover:bg-purple-800 hover:text-white'
              } px-4 py-2 text-sm font-medium transition duration-300 shadow-md`}
            >
              {isEditing ? 'Editar' : 'Cadastrar'}
            </button>

            {isEditing && (
              <button
                onClick={() => {
                  setEditing(false);
                  setEditingUserId(null);
                  inputName.current.value = '';
                  inputEmail.current.value = '';
                  inputAge.current.value = '';
                  inputImage.current.value = '';
                  toast.info('Edição cancelada');
                }}
                type="button"
                className="flex-1 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-300 px-4 py-2 text-sm font-medium transition duration-300 shadow-md"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
        {/* LISTA DE USUÁRIOS */}
        <div className="mt-8 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-start rounded-lg bg-purple-700 px-4 py-3 text-white shadow-md"
            >
              <div className="h-16 w-16 rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-white shadow-md">
                <img
                  src={user.image}
                  alt="Imagem"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-semibold">Nome:</span> {user.name}
                </p>
                <p>
                  <span className="font-semibold">Idade:</span> {user.age}
                </p>
                <p>
                  <span className="font-semibold">E-mail:</span> {user.email}
                </p>
              </div>
              <div className="flex flex-col space-y-2 ml-4">
                <button
                  title="Editar"
                  className="hover:text-yellow-300 transition"
                  onClick={() => handleEdit(user)}
                >
                  <Pencil size={18} />
                </button>
                <button
                  title="Deletar"
                  className="hover:text-red-400 transition"
                  onClick={() => deleteUsers(user.id)}
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
