import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useArtistas } from "../hooks/useArtistas";
import { useAlbuns } from "../hooks/useAlbuns";
import { useMusicas } from "../hooks/useMusicas";


export default function NovaMusica() {

  const navigate = useNavigate();

  const { artistas } = useArtistas();

  const { albuns } = useAlbuns();

  const { criarMusica } = useMusicas();



  const [titulo, setTitulo] = useState("");

  const [duracaoSegundos, setDuracaoSegundos] = useState("");

  const [artistaId, setArtistaId] = useState("");

  const [albumId, setAlbumId] = useState("");



  const albunsFiltrados = albuns.filter(
    (album) => album.artista.id === Number(artistaId)
  );



  async function cadastrar(e: React.FormEvent) {

    e.preventDefault();



    if (!titulo || !duracaoSegundos || !artistaId || !albumId) {

      alert("Preencha todos os campos.");

      return;

    }



    if (titulo.trim().length < 3) {

      alert("O título deve ter pelo menos 3 caracteres.");

      return;

    }



    if (Number(duracaoSegundos) <= 0) {

      alert("A duração deve ser maior que zero.");

      return;

    }



    try {


      await criarMusica({

        titulo,

        duracaoSegundos: Number(duracaoSegundos),

        artistaId: Number(artistaId),

        albumId: Number(albumId)

      });



      alert("Música cadastrada com sucesso!");


      navigate("/musicas");



    } catch (erro: any) {


      console.error(erro);

      alert("Erro ao cadastrar música.");


    }

  }




  return (

    <div className="container mt-4">


      <h1>
        Nova Música
      </h1>



      <div className="card shadow">


        <div className="card-body">


          <form onSubmit={cadastrar}>


            <div className="mb-3">

              <label className="form-label">
                Título
              </label>

              <input

                className="form-control"

                value={titulo}

                onChange={(e)=>setTitulo(e.target.value)}

              />

            </div>




            <div className="mb-3">

              <label className="form-label">
                Duração (segundos)
              </label>

              <input

                type="number"

                className="form-control"

                value={duracaoSegundos}

                onChange={(e)=>setDuracaoSegundos(e.target.value)}

              />

            </div>




            <div className="mb-3">

              <label className="form-label">
                Artista
              </label>


              <select

                className="form-select"

                value={artistaId}

                onChange={(e)=>{

                  setArtistaId(e.target.value);

                  setAlbumId("");

                }}

              >


                <option value="">
                  Selecione um artista
                </option>


                {artistas.map((artista)=>(

                  <option

                    key={artista.id}

                    value={artista.id}

                  >

                    {artista.nome}

                  </option>

                ))}


              </select>


            </div>




            <div className="mb-3">

              <label className="form-label">
                Álbum
              </label>


              <select

                className="form-select"

                value={albumId}

                onChange={(e)=>setAlbumId(e.target.value)}

              >


                <option value="">
                  Selecione um álbum
                </option>



                {albunsFiltrados.map((album)=>(

                  <option

                    key={album.id}

                    value={album.id}

                  >

                    {album.titulo}

                  </option>

                ))}


              </select>


            </div>




            <button

              className="btn btn-success"

              type="submit"

            >

              Cadastrar

            </button>


          </form>


        </div>


      </div>


    </div>

  );

}