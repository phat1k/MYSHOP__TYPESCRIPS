import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  ACCOUNT_PATH, AUTH_PATH } from "../../constants/path"
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    useParams,
    Link,
    Outlet,
  } from 'react-router-dom'
import { logoutAction } from '../../store/authReducer'

export default function AccountLayout() {
    const { user } = useSelector(store => store.UserRe  )

    const dispatch = useDispatch()
    const onLogout = (ev) =>{
      console.log(`adnaodig`)
      // ev.preventDefault();
      dispatch(logoutAction())
    }
   const token = localStorage.getItem("token");
    if(!user) return <Navigate to={AUTH_PATH}/>
    return (
        <div>
        <nav className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Breadcrumb */}
                <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                  <li className="breadcrumb-item">
                    <a className="text-gray-400" href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    My Account
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
        {/* CONTENT */}
        <section className="pt-7 pb-12">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                {/* Heading */}
                <h3 className="mb-10">My Account</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                {/* Nav */}
                <nav className="mb-10 mb-md-0">
                  <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-orders.html">
                      Orders
                    </a>
                    <Link className="list-group-item list-group-item-action dropright-toggle " to={'/profile'}>
                      Widhlist
                    </Link>
                    <a className="list-group-item list-group-item-action dropright-toggle active" href="account-personal-info.html">
                      Personal Info
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-address.html">
                      Addresses
                    </a>
                    <a className="list-group-item list-group-item-action dropright-toggle " href="account-payment.html">
                      Payment Methods
                    </a>
                    <a onClick={onLogout} className="list-group-item list-group-item-action dropright-toggle" href="#!">
                      Logout
                    </a>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                {/* Form */}
                <form >
                  <div className="row">
                    
                    <div className="col-12 col-md-6">
                      {/* Email */}
                     
                    </div>
                    <div className="col-12">
                      {/* Email */}
                  
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Password */}
                    
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Password */}
                    
                    </div>
                    <div className="col-12 col-lg-6">
                      {/* Birthday */}
                     
                    </div>
                    
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>    
      
    )
}
