import React from "react";
import Image from "next/image";
import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="cont">
        <Image
          className="imagen"
          src="/logoP.png"
          width={500}
          height={500}
          alt="Logo hotel"
        />
        <span>Hotel Pairumani</span>
      </div>
      <Navbar/>
      
    </header>
  );
};

export default Header;
