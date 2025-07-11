const [isEditing, setEditing] = useState(false) // Controla se estamos no modo de edição ou cadastro
const [editingUserId, setEditingUserId] = useState(null) // Guarda o ID do usuário que está sendo editado
const inputName = useRef(); //Para guardar o valor dos inputs
const inputEmail = useRef();
const inputImage = useRef();
const inputAge = useRef();
const [users, setUsers] = useState([]); //A variavel(users) é atualizada - coloca os dados(setUsers)na variavel(Users)

async function getUsers() {
  const usersFromApi = await api.get("/usuarios");
  setUsers(usersFromApi.data);
}

useEffect(() => {
  getUsers();
}, []);

async function postUsers() {
  await api.post("/usuarios", {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value,
    image: inputImage.current.value,
  });
  toast.success("Usuário cadastrado com sucesso!");
  inputName.current.value = "";
  inputEmail.current.value = "";
  inputAge.current.value = "";
  inputImage.current.value = "";
  //Notificação de sucesso
  //Recarrega a lista de usuários após o cadastro
  getUsers();
}

async function deleteUsers(id) {
  await api.delete(`/usuarios/${id}`);
  toast.success("Usuário Deletado!");
  getUsers();
}

async function editUsers(id) {
  await api.put(`/usuarios/${id}`, {
    name: inputName.current.value,
    age: inputAge.current.value,
    email: inputEmail.current.value,
    image: inputImage.current.value,
  });
  toast.success("Usuário editado com sucesso!");
  inputName.current.value = "";
  inputEmail.current.value = "";
  inputAge.current.value = "";
  inputImage.current.value = "";
  //Recarrega a lista de usuários após a edição
  getUsers();
}

function handleEdit(user) {

  inputName.current.value = user.name
  inputEmail.current.value = user.email
  inputAge.current.value = user.age
  inputImage.current.value = user.image
  setEditing(true)
  setEditingUserId(user.id)

}