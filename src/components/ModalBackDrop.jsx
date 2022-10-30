import React from "react";
import { useGlobalContext } from "../context";

const ModalBackDrop = () => {
  const { isModalOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen
          ? "fixed w-full h-full bg-nVeryDarkBlue opacity-25 md:hidden "
          : "hidden"
      }`}
      onClick={closeSidebar}
    ></div>
  );
};

export default ModalBackDrop;
