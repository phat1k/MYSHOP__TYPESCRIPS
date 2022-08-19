export interface FomrLogin{
    username: string,
    password: string,
    
}
export interface PayloadFetchDataLogin{
    data:FomrLogin,
    error:(error) => void,
    success:() => void,
}