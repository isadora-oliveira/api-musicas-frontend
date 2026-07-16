import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useArtistas } from "../hooks/useArtistas";

export default function FormNovoArtista(){

    const [nome,setNome] = useState("");

    const [genero,setGenero] = useState("");

    const navigate = useNavigate();

    const { criarArtista } = useArtistas();


    async function salvar(){

        try{

            await criarArtista({

                nome,
                genero

            });

            navigate("/artistas");

        }catch(erro:any){

            alert(
                erro.response?.data?.error ||
                "Erro ao cadastrar artista."
            );

        }

    }


    return(

        <div className="container mt-4">

            <h1>
                Novo Artista
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