import React from "react";

import "./Aquagym.scss";
import Tuile from "./tuiles reservation/tuile";

function Aquagym() {
  return (
    <div className="container__aquagym">
      <h1>Réservation aquagym</h1>
      <table className="tableau">
        <thead>
          <tr>
            <th scope="col" className="opacite0">
              a
            </th>
            <th scope="col">Lundi</th>
            <th scope="col">Mardi</th>
            <th scope="col">Mercredi</th>
            <th scope="col">Jeudi</th>
            <th scope="col">Vendredi</th>
            <th scope="col">Samedi</th>
            <th scope="col">Dimanche</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">9h30</th>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
          </tr>
          <tr>
            <th scope="row">10h30</th>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
          </tr>
          <tr>
            <th scope="row">14h30</th>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
          </tr>
          <tr>
            <th scope="row">17h30</th>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
            <td>
              <Tuile />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Aquagym;
