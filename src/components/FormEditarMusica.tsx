import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../services/api";
import { useMusicas } from "../hooks/useMusicas";


export default function FormEditarMusica() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { editarMusica } = useMusicas();


  const [titulo, setTitulo] = useState("");

  const [duracaoSegundos, setDuracaoSegundos] = useState("");

  const [artista, setArtista] = useState("");

  const [album, setAlbum] = useState("");



  useEffect(() => {


    async function buscarMusica() {

      try {

        const resposta = await api.get(`/musicas/${id}`);

        const musica = resposta.data;


        setTitulo(musica.titulo);

        setDuracaoSegundos(
          String(musica.duracaoSegundos)
        );

        setArtista(
          musica.artista.nome
        );

        setAlbum(
          musica.album.titulo
        );


      } catch (erro) {

        console.error(erro);

        alert("Erro ao carregar música.");

      }

    }


    buscarMusica();


  }, [id]);





  async function salvar(e: React.FormEvent) {

    e.preventDefault();



    if (!titulo || !duracaoSegundos) {

      alert("Preencha todos os campos.");

      return;

    }



    if (Number(duracaoSegundos) <= 0) {

      alert("Duração inválida.");

      return;

    }



    try {


      await editarMusica(Number(id), {

        titulo,

        duracaoSegundos: Number(duracaoSegundos)

      });



      alert("Música atualizada com sucesso!");


      navigate("/musicas");


    } catch (erro) {

      console.error(erro);

      alert("Erro ao atualizar música.");

    }

  }





  return (

    <div className="container mt-4">


      <h1>
        Editar Música
      </h1>



      <form onSubmit={salvar}>


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

          <input
            className="form-control"
            value={artista}
            disabled
          />

        </div>




        <div className="mb-3">

          <label className="form-label">
            Álbum
          </label>

          <input
            className="form-control"
            value={album}
            disabled
          />

        </div>




        <button
          className="btn btn-primary"
          type="submit"
        >
          Salvar Alterações
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={()=>navigate("/musicas")}
        >
          Voltar
        </button>


      </form>


    </div>

  );

}