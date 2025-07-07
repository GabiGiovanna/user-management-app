import axios from "axios";

//Criar conexão com o servidor
const api = axios.create({
  //Endereço do backend
  baseURL: "http://localhost:3333",
});

export default api;
