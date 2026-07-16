import { api } from "./api";


const URI = "/playlists";


async function listar(){

    const resposta = await api.get(URI);

    return resposta.data;

}


async function inserir(nome:string){

    const resposta = await api.post(
        URI,
        {
            nome
        }
    );

    return resposta.data;

}


async function atualizar(id:number, nome:string){

    const resposta = await api.put(
        `${URI}/${id}`,
        {
            nome
        }
    );

    return resposta.data;

}


async function remover(id:number){

    await api.delete(
        `${URI}/${id}`
    );

}


async function adicionarMusica(
    playlistId:number,
    musicaId:number
){

    const resposta = await api.post(
        `${URI}/${playlistId}/musicas`,
        {
            musicaId
        }
    );

    return resposta.data;

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
    adicionarMusica,
    buscarPorId
};