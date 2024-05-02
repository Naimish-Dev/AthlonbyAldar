"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import CustomModal from "./CustomModal";
import FromSubmit from "./CustomModal/FromSubmit";

export const Hero = () => {
  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
    };
  }, []);

  const [isModel, setIsModel] = useState(false);
  const [isModel2, setIsModel2] = useState(false);

  const CloseModelHandler = () => {
    setIsModel(false);
  };

  const CloseSucessModelHandler = () => {
    setIsModel2(false);
  };

  const CloseSidebarActive = () => {
    setIsSidebarActive(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("Token");

    setTimeout(() => {
      if (!token) {
        setIsModel(true);
      }
    }, 1000);
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
          isSidebarActive ? `translate-x-0` : "-translate-x-full"
        }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-orange-200  text-white w-full min-h-screen h-full"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className=" flex justify-between  text-3xl bg-white p-2 py-4">
              <Link href={"/"} className="text-center">
                <img
                  src="/assets/logo/logoimg.webp"
                  className="h-14"
                  alt="logo"
                />
              </Link>
              <div className="mt-2">
                <IoCloseSharp
                  onClick={CloseSidebarActive}
                  className="cursor-pointer text-black"
                />
              </div>
            </div>
            <ul className=" text-center h-full w-full flex flex-col justify-center items-center">
              <Link
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
                href={"../#amenities"}
              >
                Amenities
              </Link>
              <Link href="../#overview">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]">
                  Overview
                </li>
              </Link>
              <Link
                className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]"
                href={"../#payment-plan"}
              >
                Payment Plan
              </Link>

              <Link href="../#location">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white text-[#000000]">
                  Location
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed z-10 top-0 left-0 w-screen text-black bg-gradient-to-b from-orange-100  to-transparent py-4 px-2 bg-opacity-30">
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <img src="/assets/logo/logoimg.webp" className="h-16" alt="logo" />
          </Link>
          <div className=" gap-4 font-medium hidden sm:flex mr-4">
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#amenities"}
            >
              Amenities
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#overview"}
            >
              Overview
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#payment-plan"}
            >
              Payment Plan
            </Link>

            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#location"}
            >
              Location
            </Link>
          </div>

          <button
            ref={openSidebarButton}
            className="px-4 text-2xl font-bold sm:hidden "
            id="open-sidebar"
            onClick={() => setIsSidebarActive(true)}
          >
            <FaList />
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="assets/hero/15536.webp"
          className="w-screen h-screen object-cover  "
        />

        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-40">
          <div className="text-white  flex gap-4 flex-col">
            <h2 className="text-2xl sm:text-3xl text-center font-bold">
              ATHLON BY ALDAR PROPERTIES IN DUBAI
              <br /> Prices starting from 2.8 Million AED
            </h2>
            <p className="text-md  w-[90%] md:w-[75%] mx-auto  text-center ">
              Discover a revolutionary concept in urban living at Athlon by
              Aldar Properties, Dubai's
            </p>

            <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
              <button
                onClick={() => {
                  const token = sessionStorage.getItem("Token");
                  if (token) {
                    setIsModel2(true);
                  } else {
                    setIsModel(true);
                  }
                }}
                className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out   text-black bg-orange-200 text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Download Broucher
              </button>
              <button
                onClick={() => setIsModel(true)}
                className="uppercase mt-5 px-3 py-3  hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-orange-200 text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Show your Interest
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModel && !isModel2 && (
        <CustomModal
          CloseModelHandler={CloseModelHandler}
          setIsModel2={setIsModel2}
        ></CustomModal>
      )}

      {!isModel && isModel2 && (
        <FromSubmit
          CloseSucessModelHandler={CloseSucessModelHandler}
        ></FromSubmit>
      )}
    </div>
  );
};
