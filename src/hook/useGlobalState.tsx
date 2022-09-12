import { createContext, useContext, useState } from "react";

interface Children {
    accessToken: boolean,
}
export const ContextAuth = createContext({})
     

export const GlobalStateProvider = ({children}:{children:React.ReactNode}) =>{
    return <ContextAuth.Provider value={{a:1}}>{children}</ContextAuth.Provider>
}

export const useGlobalState = () => useContext(ContextAuth)

