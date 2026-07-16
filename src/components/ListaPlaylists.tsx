import { useNavigate } from "react-router-dom";
import { usePlaylists } from "../hooks/usePlaylists";



export default function ListaPlaylists(){


const navigate = useNavigate();

const {
    playlists,
    carregando,
    excluirPlaylist
}=usePlaylists();



async function remover(id:number){

    const confirmar = window.confirm(
        "Deseja excluir esta playlist?"
    );


    if(!confirmar){
        return;
    }


    await excluirPlaylist(id);

}



if(carregando){

    return(
        <div className="container mt-4">
            <h3>Carregando playlists...</h3>
        </div>
    )

}



return(

<div className="container mt-4">


    <div className="d-flex justify-content-between align-items-center mb-4">

        <h1>
        Minhas Playlists
        </h1>


        <button
        className="btn btn-success"
        onClick={()=>navigate("/nova-playlist")}
        >
        Nova Playlist
        </button>


        </div>




            <div className="card shadow">

            <div className="card-body">


            <table className="table table-striped table-hover">


                <thead className="table-dark">

                    <tr>
                        <th>Nome</th>
                        <th>Músicas</th>
                        <th>Ações</th>

                    </tr>

                </thead>


                <tbody>


                    {
                    playlists.map((playlist)=>(


                    <tr key={playlist.id}>



                        <td>
                        {playlist.nome}
                        </td>


                        <td>
                        {playlist.musicas?.length || 0}
                        </td>


                        <td>


                            <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={()=>
                            navigate(`/playlist/${playlist.id}`)
                            }
                            >
                            Detalhes
                            </button>



                            <button
                            className="btn btn-danger btn-sm"
                            onClick={()=>remover(playlist.id)}
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

)

}