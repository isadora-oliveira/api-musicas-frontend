import { useEffect, useState } from "react";
import ArtistaService from "../services/ArtistaService";


export interface Artista {
  id:number;
  nome:string;
  genero:string;
}


export function useArtistas(){


const [artistas,setArtistas] = useState<Artista[]>([]);



async function buscarArtistas(){

    const resposta = await ArtistaService.listar();

    setArtistas(resposta);

}



async function criarArtista(dados:any){

    await ArtistaService.inserir(dados);

    await buscarArtistas();

}



async function excluirArtista(id:number){

    await ArtistaService.remover(id);

    await buscarArtistas();

}

async function buscarArtistaPorId(id:number){

    return await ArtistaService.buscarPorId(id);

}


async function editarArtista(id:number,dados:any){

    await ArtistaService.atualizar(
        id,
        dados
    );

    await buscarArtistas();

}



useEffect(()=>{

    buscarArtistas();

},[]);



return {

    artistas,
    buscarArtistas,
    criarArtista,
    excluirArtista,
    buscarArtistaPorId,
    editarArtista

};


}