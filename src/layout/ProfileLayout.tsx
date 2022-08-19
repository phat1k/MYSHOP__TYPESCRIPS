import React from 'react'
import { useNavigate, Link, Outlet} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import api from '../constants/api';

export interface Profilee {
  login: boolean,
  submitLogout: () => void,
}

export const ProfileLayout: React.FC<Profilee> = ({ login, submitLogout }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // if (!login) return <Navigate to="/" />;
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <ul>
        <li>
          <Link to="">info</Link>
        </li>
        <li>
          <Link to="order">Order</Link>
        </li>
      </ul>
      <Outlet />
      <p></p>{status}
      <button onClick={submitLogout}>logout</button>
      <button onClick={logout}>LOGOUT</button>
      <button onClick={() => dispatch({ type: "OPEN_CARD" })}>ModalCard</button>
    </div>
  );
};

