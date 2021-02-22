import React from "react";

import "./Horaire.scss";

function Horaire() {
  return (
    <div className="container__horaire">
      <h1>Horaires</h1>
      <div>Mis à jour le 22 octobre 2020</div>
      <table>
        <tbody>
          <tr>
            <td>Lundi</td>
            <td>12:00 - 13:30</td>
          </tr>
          <tr>
            <td>Mardi</td>
            <td>17:00 - 19:00</td>
          </tr>
          <tr>
            <td>Mercredi</td>
            <td>15:30 - 19:00</td>
          </tr>
          <tr>
            <td>Jeudi</td>
            <td>12:30 - 13:30, 17:00 - 19:00</td>
          </tr>
          <tr>
            <td>Vendredi</td>
            <td>17:00 - 21:00</td>
          </tr>
          <tr>
            <td>Samedi</td>
            <td>14:00 - 19:00</td>
          </tr>
          <tr>
            <td>Dimanche</td>
            <td>09:30 - 12:30, 14:30 - 18:30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Horaire;
