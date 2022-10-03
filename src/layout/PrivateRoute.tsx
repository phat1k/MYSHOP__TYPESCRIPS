
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/authentication";
import { getToken } from "../utils/token";
export const PrivateRote = () => {
  const token = getToken()
//   const token = useAuth()
//   const tokenn = token.tokenContext
  console.log('firstcontextttt', token)
  if(!token ) return <Navigate to="/register"/>
  return (
     <Outlet />
  );
};
