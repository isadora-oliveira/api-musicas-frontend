import { api } from "./api";


const URI = "/albuns";


async function listar() {

  const resposta = await api.get(URI);

  return resposta.data;

}


export default {
  listar
};