import React, { useState } from "react";
import LoginContext from "../../../contexts/LoginContext";

import logo from "../../Header/logo.png";
import MenuAdmin from "../MenuAdmin/MenuAdmin";

import "./Admin_login.scss";

function AdminLogin() {
  const [userData, setUserData] = useState({
    user: "",
    pass: "",
  });

  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/Admin", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setTimeout(() => {
          setMessage();
        }, 2000);
        if (res.status === "Success") {
          localStorage.setItem("token", res.token);
          <LoginContext.Provider value={isLogin}>
            {setIsLogin(true)}
          </LoginContext.Provider>;
        }
      });
  };

  return (
    <div className="containerlogin">
      <div className="menu_admin" />
      <div className="container__adminlogin">
        {!message ? null : <div className="message">{message}</div>}

        <div className="container__logo">
          <img src={logo} alt="logo" className="logo" />
          <h1>Page d&apos;administration</h1>
        </div>
        {!isLogin && (
          <form className="container__login" onSubmit={handleSubmit}>
            <input
              title="rentrez un e mail valide"
              type="text"
              name="name"
              id="name"
              placeholder="Identifiant"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"
              value={userData.user}
              onChange={(e) =>
                setUserData({ user: e.target.value, pass: userData.pass })}
              autoComplete="on"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              value={userData.pass}
              onChange={(e) =>
                setUserData({ pass: e.target.value, user: userData.user })}
              autoComplete="on"
              required
            />
            <button type="submit">Connexion</button>
          </form>
        )}
        {isLogin ? <MenuAdmin /> : null}
      </div>
    </div>
  );
}

export default AdminLogin;
