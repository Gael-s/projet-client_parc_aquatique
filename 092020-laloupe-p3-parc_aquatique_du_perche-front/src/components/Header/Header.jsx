import React from "react";
import { Link } from "react-router-dom";

import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";

import "./Header.scss";

import logo from "./logo.png";
import img1 from "./IMG_4656.png";

function Header() {
  return (
    <>
      <div className="container__header">
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
        <img src={img1} alt="le parc aquatique" className="photo_acceuil" />
        <SideBar />
      </div>
      <Navbar />
    </>
  );
}

export default Header;
