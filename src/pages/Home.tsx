import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export default function Home(){

    const { usuario } = useAuth();


    return (

        <div className="container mt-5">


            {!usuario ? (

                <>

                    <h1>
                        Bem-vindo à API Músicas
                    </h1>


                    <p>
                        Gerencie artistas, álbuns, músicas e playlists.
                    </p>


                    <Link
                    className="btn btn-primary me-2"
                    to="/login"
                    >
                        Entrar
                    </Link>


                    <Link
                    className="btn btn-success"
                    to="/cadastro"
                    >
                        Criar conta
                    </Link>


                </>


            ) : (


                <>

                    <h1>
                        Bem-vindo!
                    </h1>


                    <p>
                        Acesse suas músicas e playlists.
                    </p>


                    <Link
                    className="btn btn-primary me-2"
                    to="/musicas"
                    >
                        Músicas
                    </Link>


                    <Link
                    className="btn btn-success"
                    to="/playlists"
                    >
                        Playlists
                    </Link>


                </>


            )}


        </div>

    );

}