import React, { useState, useEffect } from "react";

import "./Horaire.scss";

function Horaire() {
  const [message, setMessage] = useState();
  const [horaire, setHoraire] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/horaire")
      .then((data) => data.json())
      .then((data) => {
        setHoraire(data[0]);
        setMessage(data.message);
        setTimeout(() => {
          setMessage();
        }, 2000);
      });
  }, []);
  return (
    <div className="container__horaire">
      <h1>Horaires</h1>
      <div>Mis à jour le {horaire.date_modif}</div>
      {!message ? null : <div className="message">{message}</div>}
      <table>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>
              Matin : {horaire.lundi_AM_open} - {horaire.lundi_AM_close}<br />
              Aprés-midi : {horaire.lundi_PM_open} -{horaire.lundi_PM_close}
            </td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td>
              Matin : {horaire.mardi_AM_open} - {horaire.mardi_AM_close}<br />
              Aprés-midi : {horaire.mardi_PM_open} -{horaire.mardi_PM_close}
            </td>
          </tr>
          <tr>
            <td>Mercredi</td>
            <td>
              Matin : {horaire.mercredi_AM_open} - {horaire.mercredi_AM_close}<br />
              Aprés-midi : {horaire.mercredi_PM_open} -
              {horaire.mercredi_PM_close}
            </td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td>
              Matin : {horaire.jeudi_AM_open} - {horaire.jeudi_AM_close}<br />
              Aprés-midi : {horaire.jeudi_PM_open} -{horaire.jeudi_PM_close}
            </td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td>
              Matin : {horaire.vendredi_AM_open} - {horaire.vendredi_AM_close}<br />
              Aprés-midi : {horaire.vendredi_PM_open} -
              {horaire.vendredi_PM_close}
            </td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td>
              Matin : {horaire.samedi_AM_open} - {horaire.samedi_AM_close}<br />
              Aprés-midi : {horaire.samedi_PM_open} -{horaire.samedi_PM_close}
            </td>
          </tr>
          <tr>
            <td>Dimanche</td>
            <td>
              Matin : {horaire.dimanche_AM_open} - {horaire.dimanche_AM_close}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Horaire;
