import { api } from "./api";


const URI = "/musicas";


async function listar() {

  const resposta = await api.get(URI);

  return resposta.data;

}


async function inserir(musica: any) {

  const resposta = await api.post(
    URI,
    musica
  );

  return resposta.data;

}


async function buscarPorId(id: number) {

  const resposta = await api.get(
    `${URI}/${id}`
  );

  return resposta.data;

}


async function atualizar(id: number, musica: any) {

  const resposta = await api.put(
    `${URI}/${id}`,
    musica
  );

  return resposta.data;

}


async function remover(id: number) {

  await api.delete(
    `${URI}/${id}`
  );

}


export default {
  listar,
  inserir,
  buscarPorId,
  atualizar,
  remover
};