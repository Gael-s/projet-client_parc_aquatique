import React, { useState } from "react";

import "./NewAdmin.scss";

function NewAdmin() {
  const [passConfirmation, setpassConfirmation] = useState("");
  const [newAdmin, setNewAdmin] = useState({
    user: "",
    pass: "",
  });

  const updateField = (e) => {
    setNewAdmin(() => ({ ...newAdmin, [e.target.name]: e.target.value }));
  };

  const updatePassConfirmationField = (e) => {
    setpassConfirmation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passConfirmation !== newAdmin.pass) {
      alert("vérifier votre mot de passe");
    }
    else {
      fetch("http://localhost:5000/Admin/new", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          'Authorization': localStorage.getItem('token'),
        }),
        body: JSON.stringify(newAdmin),
      })
        .then((res) => res.json())
        .then((res) => {
          setpassConfirmation("");
          setNewAdmin({user:"", pass:""});
          alert(res.message);
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
          type="text"
          name="user"
          placeholder="nom d'utilisateur"
          value={newAdmin.user}
          autoComplete="on"
          onChange={updateField}
        />
        <input
          type="password"
          name="pass"
          placeholder="mot de passe"
          value={newAdmin.pass}
          autoComplete="on"
          onChange={updateField}
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="confirmez votre mot de passe"
          autoComplete="off"
          value={passConfirmation}
          onChange={updatePassConfirmationField}
        />
        <button type="submit">Valider</button>
      </form>
    </>
  );
}

export default NewAdmin;
