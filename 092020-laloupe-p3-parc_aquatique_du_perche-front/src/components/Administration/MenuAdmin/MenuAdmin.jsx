import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../../contexts/LoginContext";

import "./MenuAdmin.scss";

function MenuAdmin() {
  const [isLogin, setisLogin] = useState(true);

  const unSubmit = () => {
    localStorage.removeItem('token');
    <LoginContext.Provider value={isLogin}>
      {setisLogin(false)}
      {alert("utilisateur deconnecté")}
    </LoginContext.Provider>;
  };

  return (
    <>
      <nav className="menuAdmin">
        <Link to="/">
          <button type="submit" onClick={unSubmit}>
            Déconnexion
          </button>
        </Link>
        <ul>
          <li>
            <Link to="/Admin/new">
              <span>new admin</span>
            </Link>
          </li>
          <li>
            <Link to="/Admin/Espaces">
              <span>Espaces</span>
            </Link>
          </li>
          <li>
            <Link to="/Admin/Activites">
              <span>Activités</span>
            </Link>
          </li>
          <li>
            <Link to="/Admin/Actualites">
              <span>Acualités</span>
            </Link>
          </li>
          <li>
            <Link to="/Admin/Aquagym">
              <span>Aquagym</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MenuAdmin;
