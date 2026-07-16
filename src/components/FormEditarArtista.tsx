import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useArtistas } from "../hooks/useArtistas";

export default function FormEditarArtista(){

    const { id } = useParams();

    const navigate = useNavigate();

    const {
        buscarArtistaPorId,
        editarArtista
    } = useArtistas();

    const [nome,setNome] = useState("");

    const [genero,setGenero] = useState("");



    useEffect(()=>{

        carregarArtista();

    },[]);



    async function carregarArtista(){

        try{

            const artista = await buscarArtistaPorId(
                Number(id)
            );

            setNome(artista.nome);

            setGenero(artista.genero);

        }catch{

            navigate("/artistas");

        }

    }



    async function salvar(){

        try{

            await editarArtista(

                Number(id),

                {

                    nome,
                    genero

                }

            );

            navigate("/artistas");

        }catch(erro:any){

            alert(

                erro.response?.data?.error ||

                "Erro ao atualizar artista."

            );

        }

    }



    return(

        <div className="container mt-4">

            <h1>

                Editar Artista

            </h1>


            <div className="card shadow">

                <div className="card-body">

                    <div className="mb-3">

                        <label className="form-label">

                            Nome

                        </label>

                        <input
                            className="form-control"
                            value={nome}
                            onChange={(e)=>setNome(e.target.value)}
                        />

                    </div>



                    <div className="mb-3">

                        <label className="form-label">

                            Gênero

                        </label>

                        <input
                            className="form-control"
                            value={genero}
                            onChange={(e)=>setGenero(e.target.value)}
                        />

                    </div>



                    <button
                        className="btn btn-success"
                        onClick={salvar}
                    >
                        Salvar
                    </button>



                    <button
                        className="btn btn-secondary ms-2"
                        onClick={()=>navigate("/artistas")}
                    >
                        Voltar
                    </button>

                </div>

            </div>

        </div>

    );

}