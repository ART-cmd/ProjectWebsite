import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import useColorMode from "../hook/usecolormode";

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen my-6 fixed
                    flex justify-center items-center
                    antialiased">

      <div className={`w-[82%] z-50
                      flex flex-col items-start
                      transition-[height] duration-500 
                      drop-shadow-lg backdrop-blur-lg	
                      bg-primary bg-opacity-20 rounded-md
                      dark:border-transparent dark:bg-secondary dark:bg-opacity-20 dark:drop-shadow-md
                      ${IsOpen ? 'h-[20rem]' : 'h-[4.5rem]'}`}>

        <div className="w-full 
                        flex justify-between items-center 
                        px-3 pt-3 pb-3 max-sm:pt-1
                        text-secondary">
          <h1 className="text-2xl max-sm:text-[0.8rem] font-black 
                         cursor-pointer px-3">
            <a href="">Atichat Thongnak</a>
          </h1>
          <ul className="hidden h-full
                       lg:flex items-center 
                       font-bold text-xl">
            <li>
              <a className="nav-link m-12" href="">
                About
              </a>
            </li>
            <li>
              <a className="nav-link m-12" href="">
                Works
              </a>
            </li>
            <li>
              <a className="nav-link m-12" href="">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex">
            <span className="mx-1.5">
              <button
                className="border border-yellow-300 rounded-md p-2 hover:bg-cover"
                onClick={() =>
                  setColorMode(colorMode === "light" ? "dark" : "light")}>

                {colorMode === "dark" ? (
                  <BsFillMoonStarsFill
                    size={27}
                    className="hover:scale-110 hover:duration-300 hover:transition-all" />
                ) : (
                  <BsFillSunFill
                    size={27}
                    className="hover:scale-110 hover:duration-300 hover:transition-all" />
                )}
              </button>
            </span>
            <span className="lg:hidden mx-1.5 ">
              <button
                className="border border-yellow-300 rounded-md p-2 
                             hover:bg-cover"
                onClick={() => setIsOpen((prev) => !prev)}>

                {!IsOpen ? (
                  <FiMenu
                    size={27}
                    className="hover:scale-110 hover:duration-300 hover:transition-all"/>
                ) : (
                  <AiOutlineClose
                    size={27}
                    className="hover:scale-110 hover:duration-300 hover:transition-all"/>
                )}
              </button>
            </span>
          </div>
        </div>
        <div className="w-[100%] flex justify-center overflow-hidden">
          <span className="p-3.5 w-[92%] mt-5 mb-5
                           flex text-start
                           text-secondary
                           border border-primary rounded-md border-opacity-50
                           dark:border-primary dark:border-opacity-50 dark:drop-shadow-md 
                           bg-transparent">

            <ul className="p-5 space-y-10
                           flex flex-col justify-center">
              <li className="font-normal 
                             hover:scale-110 hover:duration-500 hover:transition-all">
                <a href="">About</a>
              </li>
              <li className="font-normal 
                             hover:scale-110 hover:duration-500 hover:transition-all">
                <a href="">Work</a>
              </li>
              <li className="font-normal 
                             hover:scale-110 hover:duration-500 hover:transition-all">
                <a href="">Contact</a>
              </li>
            </ul>
          </span>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
