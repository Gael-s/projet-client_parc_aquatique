/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import "./AjoutCommentaire.css";

function Commentaire() {
  const [data, setData] = useState({
    prenom: "",
    Comment: "",
    notation: "",
  });
  const [message, setMessage] = useState();
  const [display, setDisplay] = useState(true);

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 2000);
  }

  const ratingChanged = (newRating) => {
    setData({ notation: newRating });
    console.log(newRating);
  };

  const updateData = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/usercomments/newcomment", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setTimeout(() => {
          setMessage();
          setDisplay(false);
        }, 2000);
      });
  };

  return (
    <>
      {display ? (
        <div className="bloc-commentaire">
          <form className="commentaire-form" onSubmit={handleSubmit}>
            <div>
              <div>
                <div>Notations</div>
                <div className="etoile">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={32}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div>
                <div>Prénom</div>
                <input
                  name="prenom"
                  type="text"
                  className="form-inputs"
                  value={data.prenom}
                  onChange={updateData}
                  required
                />
              </div>
              <div>
                <div>
                  <div>Commentaire</div>
                  <textarea
                    name="comment"
                    type="text"
                    rows="5"
                    cols="33"
                    className="form-inputs_commentaire"
                    value={data.comment}
                    onChange={updateData}
                    required
                  />
                </div>
              </div>
            </div>
            {!message ? null : <div className="messageB">{message}</div>}
            <button className="button" type="submit" onClick={refreshPage}>
              Envoyer
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default Commentaire;
