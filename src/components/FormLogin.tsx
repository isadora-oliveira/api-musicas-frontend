import { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export default function FormLogin(){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();


  async function entrar(){


  try {

    const resposta = await AuthService.login(email, senha);

    login(resposta.token);

    alert("Login realizado com sucesso!");

    navigate("/");


  } catch(error){

    console.error(error);
    alert("Usuário ou senha inválidos");

  }

}


  return (

    <div className="container mt-4">

      <h1>Login</h1>


      <input
        className="form-control mb-2"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />


      <input
        className="form-control mb-2"
        placeholder="Senha"
        type="password"
        value={senha}
        onChange={(e)=>setSenha(e.target.value)}
      />

      <div className="mb-3">
        <button
          className="btn btn-primary"
          onClick={entrar}
        >
          Entrar
        </button>

        <button
          className="btn btn-secondary ms-2"
          onClick={()=>navigate("/")}
        >
            Voltar
        </button>

      </div>



    </div>

  );

}