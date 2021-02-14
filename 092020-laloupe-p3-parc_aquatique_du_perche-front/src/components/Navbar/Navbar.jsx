import React from "react";

import { Link } from "react-router-dom";

import SideBarData from "../SideBar/SidebarData";

import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="container__navbar">
        <ul className="navbar">
          {SideBarData.map((item, index) => {
            return (
              <li key={("item", index)} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
