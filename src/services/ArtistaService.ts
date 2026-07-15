import { api } from "./api";


const URI = "/artistas";


async function listar() {

  const resposta = await api.get(URI);

  return resposta.data;

}


export default {
  listar
};