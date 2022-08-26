import { createContext, useContext, useState } from "react";

// interface Children {
//     IsOpenSearchModal: boolean
// }
export const ContextAuth = createContext({})
     

export const GlobalStateProvider = ({children}) =>{
    return <ContextAuth.Provider value={{a:1}}>{children}</ContextAuth.Provider>
}

export const useGlobalState = () => useContext(ContextAuth)

