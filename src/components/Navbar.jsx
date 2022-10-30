import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import { links } from "../data";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="w-vw mx-auto md:flex md:items-center md:justify-between xl:w-mFixed">
        <div className="w-vw p-4 mx-auto flex justify-between items-center ">
          <img src={Logo} alt="logo" />
          <button className="md:hidden" onClick={openSidebar}>
            <img src={IconMenu} alt="logo" />
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-9">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li
                  key={id}
                  className="hover:text-primarySoftRed cursor-pointer"
                >
                  <a href={url}>{text}</a>
                </li>
              );
            })}
            {/* <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
