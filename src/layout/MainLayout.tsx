
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalCard from "../components/ModalCard";
// import Modal from "../components/ModalPopup";
export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ModalCard />
      {/* <Modal/> */}
    </div>
  );
};
