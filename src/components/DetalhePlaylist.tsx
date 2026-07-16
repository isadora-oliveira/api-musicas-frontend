import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { usePlaylists } from "../hooks/usePlaylists";
import AdicionarMusicaPlaylist from "./AdicionarMusicaPlaylist";


export default function DetalhePlaylistComponent(){


const {id} = useParams();



const {
    buscarPorId
} = usePlaylists();


const [playlist,setPlaylist] = useState<any>();



useEffect(()=>{

    async function carregar(){

        const dados = await buscarPorId(Number(id));

        setPlaylist(dados);

    }


    carregar();


},[]);



if(!playlist){

    return <h3>Carregando...</h3>;

}



return (

<div className="container mt-4">

<h1>
{playlist.nome}
</h1>



<div className="card shadow mt-4">

<div className="card-body">


<table className="table table-striped">


<thead className="table-dark">

<tr>

<th>
Título
</th>

<th>
Artista
</th>

<th>
Álbum
</th>

</tr>

</thead>



<tbody>

{
playlist.musicas.map((musica:any)=>(

<tr key={musica.id}>

<td>
{musica.titulo}
</td>

<td>
{musica.artista.nome}
</td>

<td>
{musica.album.titulo}
</td>

</tr>

))
}

</tbody>


</table>


</div>

</div>



<AdicionarMusicaPlaylist />


</div>

);


}