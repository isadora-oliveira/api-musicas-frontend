import { api } from "./api";


interface LoginResposta {
  token: string;
}


async function login(email: string, senha: string) {

  const resposta = await api.post<LoginResposta>(
    "/login",
    {
      email,
      senha
    }
  );

  return resposta.data;

}


function logout() {

  localStorage.removeItem("token");

}


function obterToken() {

  return localStorage.getItem("token");

}


export default {

  login,

  logout,

  obterToken

};