import { useEffect, useState } from "react";
import ArtistaService from "../services/ArtistaService";

export interface Artista {
  id: number;
  nome: string;
  genero: string;
}

export function useArtistas() {
  const [artistas, setArtistas] = useState<Artista[]>([]);

  async function buscarArtistas() {
    const resposta = await ArtistaService.listar();
    setArtistas(resposta);
  }

  useEffect(() => {
    buscarArtistas();
  }, []);

  return { artistas };
}