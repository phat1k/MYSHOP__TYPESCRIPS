import { createContext, useContext, useState } from "react";
import { getToken } from "../utils/token";

// interface Children {
//     IsOpenSearchModal: boolean
// }

export const ContextToken = createContext({})

export const AuthenticationProvider = ({children}:{children:React.ReactNode}) =>{
        const token = getToken() || null
    return <ContextToken.Provider value={{b:2, token}}>{children}</ContextToken.Provider>

}
export const useAuth = () => useContext(ContextToken)

