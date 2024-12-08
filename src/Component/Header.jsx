import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; // Import user icon
import Nav from "../Component/Navbar/Nav";
import NavMobile from "../Component/Navbar/NavMobile";
import Logo from "./hotelio.ico";

const Header = () => {
  return (
    <header
      className="fixed inset-0 mt-8 flex items-center justify-between bg-white shadow-sm shadow-red-400 w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500"
    >
      <div className="flex items-center">
        <a href="/">
          <img src={Logo} alt="Logo" className="h-16 w-auto mr-2" />
        </a>
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex gap-x-4 lg:gap-x-9">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="w-8 h-8 text-gray-700 cursor-pointer"
          />
        </div>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
