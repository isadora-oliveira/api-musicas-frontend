import { api } from "./api";


async function inserir(usuario:any){

    const resposta = await api.post(
        "/usuarios",
        usuario
    );

    return resposta.data;

}


export default {
    inserir
};