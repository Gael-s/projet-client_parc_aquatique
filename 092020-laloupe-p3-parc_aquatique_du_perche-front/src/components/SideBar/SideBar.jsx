import React, { useState } from "react";

import { Link } from "react-router-dom";

import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

import SideBarData from "./SidebarData";

import "./SideBar.scss";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="sidebar">
        <div className="menu-bars">
          <HiIcons.HiMenu onClick={showSidebar} />
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar} aria-hidden="true">
          <li className="navbar-toggle">
            <div className="menu-bars-cross">
              <AiIcons.AiOutlineClose />
            </div>
          </li>
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

export default SideBar;
