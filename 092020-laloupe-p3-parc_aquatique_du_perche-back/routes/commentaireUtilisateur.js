const router = require("express").Router();
require("dotenv").config();

const db = require("../db_connection");

router.get("/", (req, res) => {
  db.query("SELECT prenom, comment, notation FROM usercomments", [
    req.query.type,
  ])
    .then((data) => res.status(200).json(data))

    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// Ajout d'un commentaire en BD
router.post("/newcomment", (req, res) => {
  const data = {
    prenom: req.body.prenom,
    comment: req.body.comment,
    notation: req.body.notation,
  };
  db.query(
    "INSERT INTO usercomments ( prenom, comment, notation ) VALUES (?, ?, ?)",
    [data.prenom, data.comment, data.notation],
    (error) => {
      if (error) return res.status(500).json({ message: "error 500" });
      return res.status(201).json({ message: "commentaire ajouté" });
    }
  );
});

module.exports = router;
