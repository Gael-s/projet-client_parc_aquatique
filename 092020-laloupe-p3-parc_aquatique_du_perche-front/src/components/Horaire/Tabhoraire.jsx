import React from "react";
import "./Tabhoraire.css";

const Horaires = () => {
  return (
    <div className="mytab">
      <table>
        <tr>
          <th></th>
          <th>Période scolaire</th>
          <th>Vacances scolaires zone B</th>
          <th>Vacances estivales</th>
        </tr>
        <tr>
          <td>Lundi</td>
          <td>12h - 13h30</td>
          <td>
            10h - 12h <p>14h - 19h</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Mardi</td>
          <td>17h - 19h</td>
          <td>
            10h - 12h <p>14h - 19h</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Mercredi</td>
          <td>15h30 - 19h</td>
          <td>
            10h - 12h <p>14h - 19h</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Jeudi</td>
          <td>
            12h - 13h30 <p>17h - 19h</p>
          </td>
          <td>
            10h - 12h <p>14h - 19h</p>
          </td>
          <td>
            10h - 12h <p>14h - 19h</p>
          </td>
        </tr>
        <tr>
          <td>Vendredi</td>
          <td>17h - 21h</td>
          <td>
            10h - 12h <p>14h - 19h</p>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Samedi</td>
          <td>14h - 18h</td>
          <td>14h - 18h</td>
          <td></td>
        </tr>
        <tr>
          <td>Dimanche</td>
          <td>
            9h - 12h30 <p>14h - 18h</p>
          </td>
          <td>
            9h - 12h30 <p>14h30 - 18h30</p>{" "}
          </td>
          <td></td>
        </tr>
      </table>
    </div>

    // <div className="containertable">
    //   <div className="mytable">
    //     <tr>
    //       <th>Période scolaire</th>
    //       <th>Vacances Scolaires zone B</th>
    //       <th>Période estivale</th>
    //     </tr>

    //     <tr>
    //       <td></td>
    //       <td></td>
    //     </tr>

    //     <tr>
    //       <td>Lundi</td>
    //       <td>cellule B1</td>
    //     </tr>

    //     <tr>
    //       <td>Mardi</td>
    //       <td>cellule B2</td>
    //     </tr>

    //     <tr>
    //       <td>Mercredi</td>
    //       <td>cellule B1</td>
    //     </tr>

    //     <tr>
    //       <td>Jeudi</td>
    //       <td>cellule B1</td>
    //     </tr>

    //     <tr>
    //       <td>Vendredi</td>
    //       <td>cellule B1</td>
    //     </tr>

    //     <tr>
    //       <td>Samedi</td>
    //       <td>cellule B1</td>
    //     </tr>

    //     <tr>
    //       <td>Di</td>
    //       <td>cellule B1</td>
    //     </tr>
    //   </div>
    // </div>
  );
};

export default Horaires;
