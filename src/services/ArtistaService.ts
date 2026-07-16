import { api } from "./api";


const URI = "/artistas";


async function listar() {

  const resposta = await api.get(URI);

  return resposta.data;

}


async function inserir(dados:any){

  const resposta = await api.post(
    URI,
    dados
  );

  return resposta.data;

}


async function atualizar(id:number, dados:any){

  const resposta = await api.put(
    `${URI}/${id}`,
    dados
  );

  return resposta.data;

}


async function remover(id:number){

  await api.delete(
    `${URI}/${id}`
  );

}
async function buscarPorId(id:number){

  const resposta = await api.get(
    `${URI}/${id}`
  );

  return resposta.data;

}


export default {

  listar,
  inserir,
  atualizar,
  remover,
  buscarPorId

};