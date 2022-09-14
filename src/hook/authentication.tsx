import { createContext, useContext, useState } from "react";
import { getToken } from "../utils/token";
interface TokenContext {
        accessToken: string,
        refreshToken: string,
}
interface TestContext {
        user: string,
}
const ContextToken = createContext({})

export const AuthenticationProvider = ({ children }: { children: React.ReactNode }) => {
        // const [tokenContext, setTokenContext] = useState<TokenContext>()


        const [tokenContext, setTokenContext] = useState<TokenContext>()

        const [tokenLogin, setTokenLogin] = useState<TestContext>()

        return <ContextToken.Provider value={{ tokenLogin, setTokenLogin, tokenContext, setTokenContext}}>{children}</ContextToken.Provider>

}
export const useAuth = () => useContext(ContextToken)

