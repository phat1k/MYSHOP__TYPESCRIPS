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
export interface TokenAccess{
  accessToken: string,
}
export interface FormLogin{
  email:string,
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
export const refreshToken = async (data:TokenAccess): Promise<RefreshTokenData> => {
  const res = await api.post(`/refresh-token`, data);
  return res.data;
};


