import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlaylists } from "../hooks/usePlaylists";


export default function FormNovaPlaylist(){


const [nome,setNome]=useState("");

const navigate=useNavigate();

const {
 criarPlaylist
}=usePlaylists();



async function salvar(){

    if(!nome.trim()){

        alert("O nome da playlist é obrigatório.");

        return;

    }


    try {

        await criarPlaylist(nome);

        alert("Playlist criada com sucesso!");

        navigate("/playlists");

    } catch(erro){

        console.error(erro);

        alert("Erro ao criar playlist.");

    }

}



return(

    <div className="container mt-4">


        <h1>
        Nova Playlist
        </h1>


        <div className="card shadow">

            <div className="card-body">


                <label>
                Nome
                </label>


                <input
                className="form-control"
                value={nome}
                onChange={
                e=>setNome(e.target.value)
                }
                />


                <div className="mt-3">

                <button
                className="btn btn-primary"
                type="button"
                onClick={salvar}
                >
                    Salvar
                </button>


                <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={()=>navigate("/playlists")}
                >
                    Voltar
                </button>

            </div>


            </div>

        </div>


    </div>

)

}