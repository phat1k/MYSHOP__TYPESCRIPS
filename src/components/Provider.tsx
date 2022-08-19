import React from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate, unstable_HistoryRouter } from 'react-router-dom';


const Providerr = ({children}) => {
   let navigate = useNavigate();
  const checkToken = () => { 
   const token = localStorage.getItem("token");
    if(!token){
      navigate("/login", { replace: true });
      console.log("aaaaaaaaaaa")
    }
   }
   React.useEffect(() => {
    checkToken()
   }, []);
  return <>{children}</>;
}

export default Providerr;
