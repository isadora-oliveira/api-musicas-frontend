import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Musicas from "../pages/Musicas";
import Login from "../pages/Login";
import FormNovaMusica from "../components/FormNovaMusica";
import FormEditarMusica from "../components/FormEditarMusica";
import Playlists from "../pages/Playlists2.tsx";
import FormNovaPlaylist from "../components/FormNovaPlaylist";
import DetalhePlaylist from "../pages/DetalhePlaylist";
import Cadastro from "../pages/Cadastro";
import Artistas from "../pages/Artistas";
import NovoArtista from "../pages/NovoArtista";
import EditarArtista from "../pages/EditarArtista";


import PrivateRoute from "./PrivateRoute";




export default function AppRoutes(){


  return (

    <Routes>


      <Route  path="/" element={<Home />} />


      <Route path="/login" element={<Login />} />

      <Route path="/cadastro" element={<Cadastro />}/>




      <Route element={<PrivateRoute />}>


        <Route path="/musicas" element={<Musicas />} />


        <Route path="/nova-musica" element={<FormNovaMusica />}  />


        <Route  path="/editar-musica/:id" element={<FormEditarMusica />} />

        <Route path="/playlists" element={<Playlists />} />


        <Route path="/nova-playlist" element={<FormNovaPlaylist />}  />


        <Route path="/playlist/:id" element={<DetalhePlaylist />}  />

        <Route path="/artistas" element={<Artistas />} />

        <Route path="/novo-artista" element={<NovoArtista />}  />
        
        <Route path="/editar-artista/:id" element={<EditarArtista />} />
      </Route>


    </Routes>

  );

}