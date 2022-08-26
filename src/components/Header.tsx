import React, { useContext } from "react";
import { ACCOUNT_PATH } from "../constants/path";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  // const params = useContext(ContextApi)
  const _openSearchModal = (ev) => {
    ev.preventDefault();
    dispatch({ type: "OPEN_CARDMODAL" });
  };
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <Link className="nav-link" data-toggle="dropdown" to="/product">Product</Link>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <Link className="nav-link" data-toggle="dropdown" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
            </ul>
            {/* Nav */}
            <ul className="navbar-nav flex-row">
           
              <li className="nav-item ml-lg-n4">
                <Link className="nav-link" to="/profile">
                  <i className="fe fe-user" />
                </Link>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" data-toggle="modal" onClick={_openSearchModal}>
                  <span data-cart-items={2}>
                    <i className="fe fe-shopping-cart" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
