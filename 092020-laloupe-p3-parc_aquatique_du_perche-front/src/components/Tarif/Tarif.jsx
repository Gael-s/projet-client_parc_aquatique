import React, { useState, useEffect } from "react";


import "./Tarif.scss";

function Tarif() {
  const [message, setMessage] = useState();
  const [tarif, setTarif] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tarif")
      .then((data) => data.json())
      .then((data) => {
        setTarif(data[0]);
        setMessage(data.message);
        setTimeout(() => {
          setMessage();
        }, 2000);
          });
  }, []);

  return (
    <div className="container__tarif">
      <h1>Tarifs</h1>
      <div>Mis à jour le {tarif.date_modif}</div>
      {!message ? null : <div className="message">{message}</div>}
      <table>
        <tbody>
          <tr>
            <td>Carte 10 entrées adulte</td>
            <td>36 €</td>
          </tr>

          <tr>
            <td>Carte 10 entrées enfant - 16 ans</td>
            <td>26 €</td>
          </tr>

          <tr>
            <td>Adulte</td>
            <td>{tarif.adulte} €</td>
          </tr>

          <tr>
            <td>Enfant - 16 ans</td>
            <td>{tarif.enfant} €</td>
          </tr>

          <tr>
            <td>Enfant de moins de 3 ans</td>
            {tarif.enfant_3_ans !== "0" ? <td>{tarif.enfant_3_ans} €</td> : <td>Gratuit</td>}
          </tr>

          <tr>
            <td>Sauna et hammam</td>
            <td>{tarif.sauna_et_hammam} €</td>
          </tr>

          <tr>
            <td>Abonnement 10 entrées sauna/hammam</td>
            <td>{tarif.abonnement_sauna} €</td>
          </tr>
        </tbody>
      </table>
      <h1>Tarifs été</h1>
      <table>
        <tbody>
          <tr>
            <td>Adulte</td>
            <td>{tarif.adultEte} €</td>
          </tr>

          <tr>
            <td>Enfant - 16 ans</td>
            <td>{tarif.enfantEte} €</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tarif;
