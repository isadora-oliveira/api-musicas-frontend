import { useNavigate } from "react-router-dom";
import { useMusicas } from "../hooks/useMusicas";


export default function ListaMusicas() {

  const navigate = useNavigate();

  const { musicas, carregando, excluirMusica } = useMusicas();



  async function removerMusica(id: number) {

    const confirmar = window.confirm(
      "Deseja realmente excluir esta música?"
    );


    if (!confirmar) {
      return;
    }


    try {

      await excluirMusica(id);

      alert("Música excluída com sucesso!");

    } catch (erro) {

      console.error(erro);

      alert("Erro ao excluir música.");

    }

  }



  if (carregando) {
    return (
      <div className="container mt-4">
        <h3>Carregando músicas...</h3>
      </div>
    );
  }



  return (

    <div className="container mt-4">


      <div className="d-flex justify-content-between align-items-center mb-4">

        <h1>
          Lista de Músicas
        </h1>



      </div>



      <div className="card shadow">

        <div className="card-body">


          <table className="table table-striped table-hover">


            <thead className="table-dark">

              <tr>

                <th>ID</th>
                <th>Título</th>
                <th>Duração</th>
                <th>Artista</th>
                <th>Álbum</th>
                <th>Ações</th>

              </tr>

            </thead>



            <tbody>


              {musicas.map((musica)=>(

                <tr key={musica.id}>


                  <td>
                    {musica.id}
                  </td>


                  <td>
                    {musica.titulo}
                  </td>


                  <td>
                    {musica.duracaoSegundos}s
                  </td>


                  <td>
                    {musica.artista.nome}
                  </td>


                  <td>
                    {musica.album.titulo}
                  </td>


                  <td>


                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => navigate(`/editar-musica/${musica.id}`)}
                    >
                      Editar
                    </button>



                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removerMusica(musica.id)}
                    >
                      Excluir
                    </button>


                  </td>


                </tr>

              ))}


            </tbody>


          </table>


        </div>

      </div>


    </div>

  );

}