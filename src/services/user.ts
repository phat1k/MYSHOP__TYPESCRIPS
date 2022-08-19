import api, { API } from "../constants/api"

export interface UserInfo{
    data:{
        _id: number,
        username: string,
        name: string,
        email: string,
        avatar: string ,
    }
}

export const getInfo = async():Promise<UserInfo> => { 
    const res = await api.get(`/user/get-info`);
    return res;
}
// const userService = {
//     getInfo(){
//         // return fetch (`${API}/login`, data)
//         return api.get(`/user/get-info`)
//     }
// }
// export default userService