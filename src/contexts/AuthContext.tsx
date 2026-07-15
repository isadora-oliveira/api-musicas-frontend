import { createContext, useState } from "react";


interface AuthContextType {

  usuario: boolean;

  login: (token: string) => void;

  logout: () => void;

}


export const AuthContext = createContext<AuthContextType | null>(null);



export function AuthProvider({ children }: { children: React.ReactNode }) {


    const [usuario, setUsuario] = useState(!!localStorage.getItem("token"));



    function login(token: string){

   

    localStorage.setItem(
      "token",
      token
    );


    setUsuario(true);


  }





  function logout(){


    localStorage.removeItem("token");


    setUsuario(false);


  }





  return (

    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}