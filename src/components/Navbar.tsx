import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export default function Navbar(){


  const { usuario, logout } = useAuth();

  const navigate = useNavigate();
    


  function sair(){

    logout();

    navigate("/login");

  }



  return (

    <nav className="navbar navbar-dark bg-dark">


      <div className="container">


        <Link 
          className="navbar-brand" 
          to="/"
        >
          API Músicas
        </Link>



        <div>


          <Link 
            className="btn btn-dark"
            to="/"
          >
            Home
          </Link>



          {!usuario && (

            <Link 
              className="btn btn-dark"
              to="/login"
            >
              Login
            </Link>

          )}




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
                to="/nova-musica"
              >
                Nova Música
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