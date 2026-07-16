import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMusicas } from "../hooks/useMusicas";
import { usePlaylists } from "../hooks/usePlaylists";
import { useNavigate } from "react-router-dom";


export default function AdicionarMusicaPlaylist(){


    const { id } = useParams();
    const navigate = useNavigate();


    const {
        musicas
    } = useMusicas();


    const {
        adicionarMusica
    } = usePlaylists();



    const [musicaSelecionada, setMusicaSelecionada] = useState("");



    async function adicionar(){


        if(!musicaSelecionada){

            alert("Selecione uma música.");

            return;

        }



        try {


            await adicionarMusica(
                Number(id),
                Number(musicaSelecionada)
            );


            alert(
                "Música adicionada na playlist com sucesso!"
            );


            window.location.reload();



        } catch(erro){


            console.error(
                erro
            );


            alert(
                "Erro ao adicionar música na playlist."
            );


        }


    }



    return (

        <div className="card shadow mt-4">


            <div className="card-body">


                <h3>
                    Adicionar música
                </h3>



                <select

                    className="form-select"

                    value={musicaSelecionada}

                    onChange={
                        (e)=>setMusicaSelecionada(e.target.value)
                    }

                >


                    <option value="">
                        Selecione uma música
                    </option>



                    {
                        musicas.map((musica)=>(

                            <option

                                key={musica.id}

                                value={musica.id}

                            >

                                {musica.titulo} -
                                {musica.artista.nome}

                            </option>

                        ))
                    }


                </select>





                <div className="mt-3">

                    <button
                    className="btn btn-success"
                    onClick={adicionar}
                    >
                        Adicionar música
                    </button>

                    <button
                    className="btn btn-secondary ms-2"
                    onClick={()=>navigate("/playlists")}
                    >
                        Voltar
                    </button>

                </div>


            </div>


        </div>

    );

}