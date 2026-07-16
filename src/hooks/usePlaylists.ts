import { useEffect, useState } from "react";
import PlaylistService from "../services/PlaylistService";


export interface Playlist {

    id:number;

    nome:string;

    musicas:any[];

}



export function usePlaylists(){


    const [playlists,setPlaylists] = useState<Playlist[]>([]);

    const [carregando,setCarregando] = useState(false);



    async function buscarPlaylists(){

        try{

            setCarregando(true);

            const dados = await PlaylistService.listar();

            setPlaylists(dados);

        }catch(erro){

            console.error(
                "Erro ao buscar playlists:",
                erro
            );

        }finally{

            setCarregando(false);

        }

    }



    async function criarPlaylist(nome:string){

        await PlaylistService.inserir(nome);

        await buscarPlaylists();

    }



    async function editarPlaylist(
        id:number,
        nome:string
    ){

        await PlaylistService.atualizar(
            id,
            nome
        );

        await buscarPlaylists();

    }



    async function excluirPlaylist(id:number){

        await PlaylistService.remover(id);

        await buscarPlaylists();

    }



    async function adicionarMusica(
        playlistId:number,
        musicaId:number
    ){

        await PlaylistService.adicionarMusica(
            playlistId,
            musicaId
        );

        await buscarPlaylists();

    }


    async function buscarPorId(id:number){

        const playlist = await PlaylistService.buscarPorId(id);

        return playlist;

    }


    useEffect(()=>{

        buscarPlaylists();

    },[]);



    return {

        playlists,
        carregando,
        buscarPlaylists,
        criarPlaylist,
        editarPlaylist,
        excluirPlaylist,
        adicionarMusica,
        buscarPorId

    };

}