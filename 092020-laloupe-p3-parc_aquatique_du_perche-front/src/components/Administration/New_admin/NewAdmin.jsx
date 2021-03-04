import React, { useState, useEffect } from "react";

import "./NewAdmin.scss";

function NewAdmin() {
  const [passConfirmation, setpassConfirmation] = useState("");
  const [message, setMessage] = useState();
  const [newAdmin, setNewAdmin] = useState({
    user: "",
    pass: "",
  });
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Admin/list", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        // Authorization: localStorage.getItem("token"),
      }),
      // body: JSON.stringify(adminList),
    })
      .then((res) => res.json())
      .then((res) => {
        setAdminList(res)
      });
  }, []);

console.log(adminList)

  const updateField = (e) => {
    setNewAdmin(() => ({ ...newAdmin, [e.target.name]: e.target.value }));
  };

  const updatePassConfirmationField = (e) => {
    setpassConfirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passConfirmation !== newAdmin.pass) {
      setMessage("vérifier votre mot de passe");
    } else {
      fetch("http://localhost:5000/Admin/new", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        }),
        body: JSON.stringify(newAdmin),
      })
        .then((res) => res.json())
        .then((res) => {
          setpassConfirmation("");
          setNewAdmin({ user: "", pass: "" });
          setMessage(res.message);
          setTimeout(() => {
            setMessage();
          }, 2000);
        });
    }
  };

  return (
    <>
      <form
        action="submit"
        className="formulaireNewAdmin"
        onSubmit={handleSubmit}
      >
        <h1>Création d&apos;un nouvel administrateur</h1>
        <input
          title="rentrez un e mail valide"
          type="email"
          name="user"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}"
          placeholder="e-mail"
          value={newAdmin.user}
          autoComplete="on"
          onChange={updateField}
          required
        />
        <input
          title="Votre mot de passe doit contenir au moins 8 caractères dont une minuscule, une majuscule, un caractère spécial (-+!*$@%_) et un chiffre"
          type="password"
          name="pass"
          placeholder="mot de passe"
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$"
          value={newAdmin.pass}
          autoComplete="on"
          onChange={updateField}
          required
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="confirmez votre mot de passe"
          autoComplete="off"
          value={passConfirmation}
          onChange={updatePassConfirmationField}
          required
        />
        <button type="submit">Valider</button>
        {!message ? null : <div className="message">{message}</div>}
      </form>
    </>
  );
}

export default NewAdmin;
