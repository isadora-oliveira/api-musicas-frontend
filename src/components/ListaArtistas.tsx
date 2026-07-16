import { useNavigate } from "react-router-dom";
import { useArtistas } from "../hooks/useArtistas";

export default function ListaArtistas(){

    const navigate = useNavigate();

    const {
        artistas,
        excluirArtista
    } = useArtistas();


    async function remover(id:number){

        const confirmar = window.confirm(
            "Deseja excluir este artista?"
        );

        if(!confirmar){
            return;
        }

        try {

            await excluirArtista(id);

        } catch (erro: any) {

                alert(
                    erro.response?.data?.error ||
                    "Não foi possível excluir o artista."
                );
        }

    }


    return(

        <div className="container mt-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h1>
                    Artistas
                </h1>

                <button
                    className="btn btn-success"
                    onClick={()=>navigate("/novo-artista")}
                >
                    Novo Artista
                </button>

            </div>


            <div className="card shadow">

                <div className="card-body">

                    <table className="table table-striped table-hover">

                        <thead className="table-dark">

                            <tr>

                                <th>Nome</th>
                                <th>Gênero</th>
                                <th>Ações</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                artistas.map((artista)=>(

                                    <tr key={artista.id}>

                                        <td>{artista.nome}</td>

                                        <td>{artista.genero}</td>

                                        <td>

                                            <button
                                                className="btn btn-primary btn-sm me-2"
                                                onClick={()=>
                                                    navigate(`/editar-artista/${artista.id}`)
                                                }
                                            >
                                                Editar
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={()=>remover(artista.id)}
                                            >
                                                Excluir
                                            </button>

                                        </td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}