import React, { useState, useEffect } from "react";
import ListerCommentaires from "./ListerCommentaires";

import "./AdminCommentaires.scss";

function AdminCommentaires() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/usercomments")
      .then((data) => data.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div className="container__adminCommentaire">
      <h1>Gestion des commentaires</h1>
      <form action="submit">
        <table>
          <tbody>
            <tr className="lignecolore">
              <td>Prénom</td>
              <td>Commentaires</td>
              <td>Note</td>
            </tr>
            {comments.map((item) => (
              <ListerCommentaires {...item} key={item.prenom} />
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AdminCommentaires;
