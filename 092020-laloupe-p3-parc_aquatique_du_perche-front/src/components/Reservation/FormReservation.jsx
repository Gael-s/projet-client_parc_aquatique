import PropTypes from "prop-types";
import React, { useState } from "react";

export default function FormReservation(props) {
  const { daysLabel, el, day, formatHour } = props;

  const [message, setMessage] = useState();

  const [nom, setNom] = useState("");

  const [prenom, setPrenom] = useState("");

  const [mail, setMail] = useState("");

  const reserver = () => {
    if (prenom === "" || mail === "") {
      return;
    }
    const information = {
      nom,
      prenom,
      horaire: el.horaire,
      email: mail,
      jour: day,
      id: el.id,
    };
    console.log(information);
    fetch("http://localhost:5000/aquagym", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(information),
    });
    setMessage("Votre réservation a été prise en compte.");
  };

  const updateNom = (e) => {
    setNom(e.target.value);
  };

  const updatePrenom = (e) => {
    setPrenom(e.target.value);
  };

  const updateMail = (e) => {
    setMail(e.target.value);
  };

  return (
    <div className="reservation-form">
      {!message ? (
        <>
          <h3>Réservation</h3>
          <div className="form-inputs">
            <div className="form-inputs-sides margin-right">
              <div>
                <p>Nom :</p>
                <input onChange={updateNom} value={nom} />
              </div>
              <div>
                <p>Prénom :</p>
                <input onChange={updatePrenom} value={prenom} required />
              </div>
              <div>
                <p>E-mail :</p>
                <input onChange={updateMail} value={mail} required />
              </div>
            </div>
            <div className="form-inputs-sides">
              <div>
                <p>Jour :</p>
                <p>{`${daysLabel[day]}`}</p>
              </div>
              <div>
                <p>Heure :</p>
                <p>{`${formatHour(el.horaire)}`}</p>
              </div>
            </div>
          </div>
          <div className="form-bottom">
            <h4>Places restantes :</h4>
            <p>
              {`plus que ${el.maximum - el.current[el.jour.indexOf(day)]}
                disponibles sur ${el.maximum}`}
            </p>
            <button type="button" onClick={reserver}>
              Réserver
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="message-reserv">{message}</div>
          <h4>Vous pouvez me fermer en cliquant en dehors du cadre.</h4>
        </>
      )}
    </div>
  );
}

FormReservation.propTypes = {
  el: PropTypes.shape.isRequired,
  day: PropTypes.arrayOf.isRequired,
  daysLabel: PropTypes.arrayOf.isRequired,
  formatHour: PropTypes.func.isRequired,
};
