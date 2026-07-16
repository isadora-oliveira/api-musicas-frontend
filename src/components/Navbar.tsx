import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export default function Navbar(){


  const { usuario, logout } = useAuth();

  const navigate = useNavigate();
    


  function sair(){

    logout();

    navigate("/");

  }



  return (

    <nav className="navbar navbar-dark bg-dark">


      <div className="container">



        <div>


          <Link 
            className="btn btn-dark"
            to="/"
          >
            Home
          </Link>




          {usuario && (

            <>

              <Link 
                className="btn btn-dark"
                to="/musicas"
              >
                Músicas
              </Link>
              <Link
                className="btn btn-dark"
                to="/artistas"
              >
                Artistas
              </Link>


              <Link 
                className="btn btn-dark"
                to="/playlists"
              >
                Playlists
              </Link>


              <button
                className="btn btn-dark"
                onClick={sair}
              >
                Sair
              </button>

            </>

          )}



        </div>


      </div>


    </nav>

  );

}