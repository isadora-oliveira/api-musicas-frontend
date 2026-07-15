import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Musicas from "../pages/Musicas";
import Login from "../pages/Login";

import FormNovaMusica from "../components/FormNovaMusica";
import FormEditarMusica from "../components/FormEditarMusica";

import PrivateRoute from "./PrivateRoute";


export default function AppRoutes(){


  return (

    <Routes>


      <Route  path="/" element={<Home />} />


      <Route path="/login" element={<Login />} />



      <Route element={<PrivateRoute />}>


        <Route path="/musicas" element={<Musicas />} />


        <Route path="/nova-musica" element={<FormNovaMusica />}  />


        <Route  path="/editar-musica/:id" element={<FormEditarMusica />} />


      </Route>


    </Routes>

  );

}