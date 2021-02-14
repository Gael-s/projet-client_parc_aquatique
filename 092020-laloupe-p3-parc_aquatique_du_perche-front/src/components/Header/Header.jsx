import React from "react";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";

import "./Header.scss";

import logo from "./logo.png";
import img1 from "./IMG_4656.png";

function Header() {
  return (
    <>
      <div className="container__header">
        <img src={logo} alt="logo" className="logo" />
        <img src={img1} alt="le parc aquatique" className="photo_acceuil" />
        <SideBar />
      </div>
      <Navbar />
    </>
  );
}

export default Header;
