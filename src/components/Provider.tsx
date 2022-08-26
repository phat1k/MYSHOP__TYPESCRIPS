import React from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate, unstable_HistoryRouter } from 'react-router-dom';
import { getToken } from '../utils/token';

interface Child {
  children:React.ReactNode
}
const Providerr:React.FC<Child>= ({children}) => {
  let navigate = useNavigate();
  const checkToken = () => { 
   const token = getToken()
    if(!token){
      navigate("/register", { replace: true });
    }
   }
   React.useEffect(() => {
    checkToken()
   }, []);
  return <>{children}</>;
}

export default Providerr;
