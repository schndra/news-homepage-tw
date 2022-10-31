import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Modal from "./ModalBackDrop";
import Web3MobileImg from "../assets/images/image-web-3-mobile.jpg";
import Web3DesktopImg from "../assets/images/image-web-3-desktop.jpg";
import { newListData } from "../data";

//imgaes
import RetroPcImg from "../assets/images/image-retro-pcs.jpg";
import LaptopsImg from "../assets/images/image-top-laptops.jpg";
import GamingGrowthImg from "../assets/images/image-gaming-growth.jpg";

const Home = () => {
  return (
    <>
      <Modal />
      <Navbar />
      <Sidebar />

      <main className="grid grid-cols-1  mt-4 w-vw mx-auto xl:w-mFixed gap-y-16 lg:grid-cols-3 gap-x-8">
        <section className="lg:col-span-2">
          <div>
            <img
              src={Web3MobileImg}
              alt="web3MobileImage"
              className="md:hidden"
            />
            <img
              src={Web3DesktopImg}
              alt="web3DesktopmImg"
              className="hidden md:block"
            />
            <div className="lg:flex lg:items-center">
              <h1 className="text-5xl font-extrabold  text-nVeryDarkBlue mt-7">
                The Bright Future of Web 3.0?
              </h1>
              <div>
                <p className="text-[15px] text-nDarkGrayishBlue mt-5 ">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="uppercase mt-[31px] text-nOffWhite bg-primarySoftRed p-4 w-2/4 lg:w-2/5 font-bold tracking-widest hover:bg-nVeryDarkBlue hover:text-nGrayishBlue ">
                  read more
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-nVeryDarkBlue text-nGrayishBlue p-4">
            <h1 className="text-primarySoftOrange font-bold text-2xl">New</h1>
            <ul className="mt-6">
              {newListData.map((list) => {
                const { id, title, des } = list;

                return (
                  <div key={id}>
                    <li>
                      <h1 className="text-nOffWhite font-bold mb-2 hover:text-primarySoftOrange cursor-pointer">
                        {title}
                      </h1>
                      <p className="text-[15px]">{des}</p>
                    </li>
                    {id === newListData.length ? (
                      ""
                    ) : (
                      <div className="border-none h-[1px] bg-nDarkGrayishBlue my-8"></div>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="lg:flex lg:items-center lg:col-span-3">
          <div className="flex mb-8 gap-4 items-center  ">
            <div className="h-32 w-24 ">
              <img
                src={RetroPcImg}
                alt="retropc img"
                className="h-full w-full object-fill "
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-nGrayishBlue mb-2">01</h1>
              <h2 className="text-nVeryDarkBlue font-extrabold mb-2 hover:text-primarySoftRed hover:cursor-pointer">
                Reviving Retro PCs
              </h2>
              <p className="text-nDarkGrayishBlue text-[15px]">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="flex  mb-8 gap-4 items-center ">
            <div className="h-32 w-24 ">
              <img
                src={LaptopsImg}
                alt="retropc img"
                className="h-full w-full object-fill"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-nGrayishBlue mb-2">02</h1>
              <h2 className="text-nVeryDarkBlue font-extrabold mb-2 hover:text-primarySoftRed hover:cursor-pointer">
                Top 10 Laptops of 2022
              </h2>
              <p className="text-nDarkGrayishBlue text-[15px]">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>

          <div className="flex gap-4 mb-8 items-center">
            <div className="h-32 w-24 ">
              <img
                src={GamingGrowthImg}
                alt="retropc img"
                className="h-full w-full object-fill"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-nGrayishBlue mb-2">03</h1>
              <h2 className="text-nVeryDarkBlue font-extrabold mb-2 hover:text-primarySoftRed hover:cursor-pointer">
                The Growth of Gaming
              </h2>
              <p className="text-nDarkGrayishBlue text-[15px]">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
