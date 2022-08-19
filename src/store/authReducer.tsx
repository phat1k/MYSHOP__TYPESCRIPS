import  { login } from "../services/auth"
import  { getInfo } from "../services/user"
import { FomrLogin, PayloadFetchDataLogin } from "../utils/interface"
import { setToken, setUser } from "../utils/token"

const initialValue = {
}
export const fetchLogin = (payload: PayloadFetchDataLogin) =>{
    return async (dispatch) =>{
        try{
            // const token = await authServicee.login(payload.data)
            const token = await login(payload.data)
            console.log(`token`, token)
            if(token.data){
                setToken(token.data)
                // const user = await userService.getInfo()
                const user = await getInfo()
                setUser(user.data)
                dispatch({
                    type:"auth/setUser",
                    payload: user.data
                })
                // payload.success(user.data)
            }else if(token.data.message){
                payload.error(token)
            }
        }catch(error){
            console.log(error)
        }
    }
}
// export const fetchRegister = (payload) => {
//     return async (dispatch) => {
//         try{
//             const register = await authServicee.register(payload.data)
//             if(register.error){
//                 payload?.error(register)

//             }else{
//                 payload?.success(payload.data)
//             }
//         }catch(error){

//         }
//     }

// }



export const authReducer = (state = {}, action) => {
    switch(action.type){
        case 'auth/setUser':
            console.log("set user")
            return{
                ...state,
                user: action.payload
            }
        case 'user/logout':
            console.log("ẻtwẻtywẻ")
            return{
                ...state,
                user: null
            }
     }
    return state
}
export default authReducer