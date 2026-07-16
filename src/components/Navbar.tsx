import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {

  const { usuario, logout } = useAuth();

  const navigate = useNavigate();

  function sair() {
    logout();
    navigate("/login");
  }

  return (

    <nav className="navbar navbar-expand-lg">

      <div className="container d-flex justify-content-center align-items-center">

      
        <div className="d-flex align-items-center gap-2">

          <Link
            className="btn"
            to="/"
          >
            Home
          </Link>

          {!usuario && (

            <Link
              className="btn"
              to="/login"
            >
              Login
            </Link>

          )}

          {usuario && (

            <>

              <Link
                className="btn"
                to="/musicas"
              >
                Músicas
              </Link>

              <Link
                className="btn"
                to="/artistas"
              >
                Artistas
              </Link>

              <Link
                className="btn"
                to="/playlists"
              >
                Playlists
              </Link>

              <button
                className="btn"
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