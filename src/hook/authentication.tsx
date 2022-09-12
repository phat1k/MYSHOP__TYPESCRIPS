import { createContext, useContext, useState } from "react";
import { getToken } from "../utils/token";
interface TokenContext {
        accessToken: string,
        refreshToken: string,
}
export const ContextToken = createContext({})

export const AuthenticationProvider = ({ children }: { children: React.ReactNode }) => {
        const token = getToken()
        console.log('tokennnnnnnnnnnnnnnnnnnn', token)
        return <ContextToken.Provider value={{ token }}>{children}</ContextToken.Provider>

}
export const useAuth = () => useContext(ContextToken)

