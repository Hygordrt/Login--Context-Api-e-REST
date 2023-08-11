import React, {createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()


    useEffect(() => {
        const user = getUserLocalStorage()
        //Carregar o contexto se o user estiver logado
        if (user) {
            setUser(user);
        }
    }, [])
    
    async function authenticate (email:string, password:string) {
        const response = await LoginRequest(email, password)

        const payload = {token: response.token, email}

        //Salvo o stado do usuario em memoria
        setUser(payload);
        //Salvo o stado do usuario no local storage
        setUserLocalStorage(payload)
    }

    function logout () {
        setUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout}}>
           {children} 
        </AuthContext.Provider>
    )

}