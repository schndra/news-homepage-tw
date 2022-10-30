import React from "react";
import CloseButton from "../assets/images/icon-menu-close.svg";
import { links } from "../data";

const Sidebar = () => {
  return (
    <>
      <aside className="fixed grid  grid-flow-row gap-y-4 top-0 right-0 bg-nOffWhite w-[325px] h-full z-10 ">
        <button className="fixed top-8 right-8">
          <img src={CloseButton} alt="close-btn" />
        </button>
        <ul className="row-start-2 row-span-2 pl-8">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} className="mb-6">
                <a href={url} className="hover:text-primarySoftRed">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
