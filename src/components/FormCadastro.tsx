import { useState } from "react";
import UsuarioService from "../services/UsuarioService";
import { useNavigate } from "react-router-dom";


export default function FormCadastro(){


    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const navigate = useNavigate();



    async function cadastrar(){


        if(!email || !senha){

            alert("Email e senha são obrigatórios.");

            return;

        }


        try{


            await UsuarioService.inserir({
                email,
                senha
            });


            alert("Usuário cadastrado com sucesso!");

            navigate("/login");


        }catch(erro:any){


            console.error(erro);


            alert(
                erro.response?.data?.error
                ||
                "Erro ao cadastrar usuário."
            );


        }

    }



    return (

        <div className="container mt-4">


            <h1>
                Cadastro
            </h1>


            <div className="card shadow">

                <div className="card-body">


                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>


                        <input
                        className="form-control"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />

                    </div>



                    <div className="mb-3">

                        <label className="form-label">
                            Senha
                        </label>


                        <input
                        type="password"
                        className="form-control"
                        value={senha}
                        onChange={(e)=>setSenha(e.target.value)}
                        />

                    </div>



                    <button
                    className="btn btn-success"
                    onClick={cadastrar}
                    >
                        Cadastrar
                    </button>


                    <button
                    className="btn btn-secondary ms-2"
                    onClick={()=>navigate("/")}
                    >
                        Voltar
                    </button>


                </div>

            </div>


        </div>

    );

}