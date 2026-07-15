import { useEffect, useState } from "react";
import MusicaService from "../services/MusicaService";


export interface Artista {
  id: number;
  nome: string;
}


export interface Album {
  id: number;
  titulo: string;
}


export interface Musica {
  id: number;
  titulo: string;
  duracaoSegundos: number;
  artista: Artista;
  album: Album;
}


export interface DadosNovaMusica {
  titulo: string;
  duracaoSegundos: number;
  artistaId: number;
  albumId: number;
}


export interface DadosEdicaoMusica {
  titulo: string;
  duracaoSegundos: number;
}

export function useMusicas() {


    const [musicas, setMusicas] = useState<Musica[]>([]);

    const [carregando, setCarregando] = useState(false);



    async function buscarMusicas(){

        try {

        setCarregando(true);

        const musicas = await MusicaService.listar();

        setMusicas(musicas);

        } catch (erro) {

        console.error("Erro ao buscar músicas:", erro);

        } finally {

        setCarregando(false);

        }

    }



    async function criarMusica(dados: DadosNovaMusica){

        await MusicaService.inserir(dados);

        await buscarMusicas();

    }



    async function editarMusica(id:number, dados: DadosEdicaoMusica){

        await MusicaService.atualizar(id, dados);

        await buscarMusicas();

    }



    async function excluirMusica(id: number) {

        await MusicaService.remover(id);

        await buscarMusicas();

    }



    useEffect(() => {

    buscarMusicas();

    }, []);



    return {

    musicas,

    carregando,

    buscarMusicas,

    criarMusica,

    editarMusica,

    excluirMusica

    };

}