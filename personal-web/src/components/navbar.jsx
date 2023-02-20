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
                    subpixel-antialiased ">

      <div className={`w-[82%]
                      flex flex-col items-start
                      m-auto px-3 py-3
                      transition-all duration-500
                      backdrop-blur-sm
                      border border-slate-900 rounded-md 
                      dark:border-white dark:text-white
                      ${IsOpen ? "h-[22rem]" : "h-[4.5rem]"}`}>

        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl max-sm:text-[0.8rem] font-black 
                       cursor-pointer mx-3">
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
                className="border
                             border-yellow-300 rounded-md p-2 
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
        <div className="w-full flex justify-center overflow-hidden mt-10 mb-3">
          <span className="p-3.5 w-[98%] 
                           flex opacity-60 
                           border border-slate-900 rounded-md 
                           bg-transparent
                           backdrop-blur-sm ">

            <ul className="p-5 space-y-10
                           flex flex-col justify-center items-start">
              <li className="font-normal hover:scale-110 hover:duration-500 hover:transition-all">
                <a href="">About</a>
              </li>
              <li className="font-normal hover:scale-110 hover:duration-500 hover:transition-all">
                <a href="">Work</a>
              </li>
              <li className="font-normal hover:scale-110 hover:duration-500 hover:transition-all">
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
