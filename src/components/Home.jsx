import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Modal from "./ModalBackDrop";

const Home = () => {
  return (
    <>
      <Modal />
      <Navbar />
      <Sidebar />
    </>
  );
};

export default Home;
