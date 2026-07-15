import { useEffect, useState } from "react";
import AlbumService from "../services/AlbumService";

export interface Album {
  id: number;
  titulo: string;
  anoLancamento: number;
  artista: {
    id: number;
    nome: string;
    genero: string;
  };
}

export function useAlbuns() {
    const [albuns, setAlbuns] = useState<Album[]>([]);

    async function buscarAlbuns() {

        const resposta = await AlbumService.listar();

        setAlbuns(resposta);

    }   

    useEffect(() => {
    buscarAlbuns();
    }, []);

    return { albuns };
}