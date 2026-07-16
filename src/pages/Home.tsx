import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Home() {

    const { usuario } = useAuth();

    return (

        <div className="container mt-5">

            <div className="text-center mb-5">

                <h1>🎵 API Músicas</h1>

                <p className="lead">
                    Gerencie artistas, músicas e playlists em um único lugar.
                </p>

            </div>

            {!usuario ? (

                <div className="text-center">

                    <p className="mb-4">
                        Faça login para acessar todas as funcionalidades do sistema.
                    </p>

                    <Link
                        className="btn btn-primary me-3"
                        to="/login"
                    >
                        Entrar
                    </Link>

                    <Link
                        className="btn btn-success"
                        to="/cadastro"
                    >
                        Criar Conta
                    </Link>

                </div>

            ) : (

                <>

                    <div className="row g-4">

                        <div className="col-md-4">

                            <div className="card h-100">

                                <div className="card-body text-center">

                                    <h2>🎶</h2>

                                    <h5>Músicas</h5>

                                    <p>
                                        Cadastre, edite e organize suas músicas.
                                    </p>

                                    <Link
                                        className="btn btn-primary"
                                        to="/musicas"
                                    >
                                        Acessar
                                    </Link>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card h-100">

                                <div className="card-body text-center">

                                    <h2>🎤</h2>

                                    <h5>Artistas</h5>

                                    <p>
                                        Gerencie todos os artistas cadastrados.
                                    </p>

                                    <Link
                                        className="btn btn-primary"
                                        to="/artistas"
                                    >
                                        Acessar
                                    </Link>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card h-100">

                                <div className="card-body text-center">

                                    <h2>🎼</h2>

                                    <h5>Playlists</h5>

                                    <p>
                                        Crie playlists e adicione suas músicas favoritas.
                                    </p>

                                    <Link
                                        className="btn btn-primary"
                                        to="/playlists"
                                    >
                                        Acessar
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </>

            )}

        </div>

    );

}