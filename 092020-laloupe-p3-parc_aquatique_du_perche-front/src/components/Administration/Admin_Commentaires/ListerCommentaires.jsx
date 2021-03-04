import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const ListerCommentaires = ({ prenom, comment, notation }) => {
  const [data, setData] = useState({
    prenom: "",
  });
  const [message, setMessage] = useState();

  useEffect(() => {
    setData({ prenom });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/usercomments/deletecomment", {
      method: "DELETE",
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
        }, 2000);
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      });
  };

  return (
    <>
      <tr>
        <td>{prenom}</td>
        <td>{comment}</td>
        <td>
          <div className="etoile">
            <ReactStars
              count={5}
              value={notation}
              size={32}
              activeColor="#ff9d00"
              edit={false}
            />
          </div>
        </td>
        <td>
          <button type="submit" onClick={handleSubmit}>
            Supprimer
          </button>
          {!message ? null : <div className="message">{message}</div>}
        </td>
      </tr>
    </>
  );
};

ListerCommentaires.propTypes = {
  prenom: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  notation: PropTypes.string.isRequired,
};

export default ListerCommentaires;
