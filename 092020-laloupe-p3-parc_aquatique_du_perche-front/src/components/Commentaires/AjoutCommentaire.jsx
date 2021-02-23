/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./AjoutCommentaire.css";

function Commentaire() {
  const [data, setData] = useState({
    prenom : "",
    Comment: "",
    // notation : ""
  })
  const [message, setMessage] = useState();


  const updateData = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    fetch("http://localhost:5000/usercomments/newcomment", {
      method: "POST",
      headers: new Headers({
        'Accept': 'application/json',
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((res) => {
      setMessage(res.message);
      
    });
  };



  return (
    <div className="bloc-commentaire">
      <form className="commentaire-form" onSubmit={handleSubmit}>
        <div>
          <div>
            <div>Prénom</div>
            <input name="prenom" type="text" className="form-inputs" value={data.prenom} onChange={updateData} required />
          </div>
          <div>
            <div>Notations</div>
            <div className="etoile" onChange={updateData}>⭐ ⭐ ⭐ ⭐ ⭐</div>
          </div>
          <div>
            <div>
              <div>Commentaire</div>
              <input name="comment" type="text" className="form-inputs_commentaire" value={data.comment} onChange={updateData} required />
            </div>
          </div>
        </div>
        {!message ? null : <div className="messageB">{message}</div>}
        <button className="button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Commentaire;
