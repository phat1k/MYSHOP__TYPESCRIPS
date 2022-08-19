import api, { API } from "../constants/api";

export interface LoginData {
  data: {
    accessToken: string;
    refreshToken: string;
    message: string;
  },
  error: number,
  message: string,
}
// export interface TokenMessage{
//   error: number,
//   message: string,
// }
interface FormLogin{
  username: string,
  password: string,
}
export interface RefreshTokenData {
  data: {
    accessToken: string;
  };
}
export const login = async (data: FormLogin): Promise<LoginData> => {
  const res: LoginData= await api.post(`/login`, data);
  return res;
};
export const refreshToken = async (data): Promise<RefreshTokenData> => {
  const res = await api.post(`/refresh-token`, data);
  // return api.post('/refresh-token', data)
  return res.data;
};

// const authServicee = {
//     // refreshToken(data){
//     //     return fetch (`${API}/refresh-token`, data)
//     // },
//     refreshToken(data) {
//         return api.post('/refresh-token', data)
//     },
//     login(data){
//         // return fetch (`${API}/login`, data)
//         return api.post(`/login`, data)
//     },
//     register(data){
//         // return fetch (`${API}/login`, data)
//         return api.post(`/register`, data)
//     }
// }
// export default authServicee
