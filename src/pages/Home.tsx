import { Link } from "react-router-dom";


export default function Home(){


  return (


    <div className="container mt-5">


      <div className="card shadow">


        <div className="card-body text-center p-5">


          <h1 className="display-4 mb-3">
            API de Músicas
          </h1>



          <p className="lead">
            Gerencie músicas, artistas e álbuns
            através de uma aplicação React consumindo
            uma API REST.
          </p>



          <hr />



          <p>
            Cadastre novas músicas, visualize sua biblioteca
            e mantenha seus dados organizados.
          </p>



          <Link
            className="btn btn-primary btn-lg mt-3"
            to="/musicas"
          >
            Acessar músicas
          </Link>


        </div>


      </div>


    </div>


  );

}