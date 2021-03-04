/* eslint-disable func-names */
/* eslint-disable no-else-return */
const router = require("express").Router();
const nodemailer = require("nodemailer");

require("dotenv").config();

const db = require("../db_connection");

// Nodemailer
const transporter = nodemailer.createTransport({
  service: "Hotmail",
  auth: {
      user: 'gael.souchet@hotmail.fr',
      pass: 'SOUchet27091979'
  }
});

// verifier la connexion a la boite mail
transporter.verify(function (error, success) {
  if (error) {
    console.log("error");
  } else {
    console.log("Server  mail ok");
  }
});

// Récuperer les commentaires
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
      if (error) {
        res.status(500).json({ message: "error 500" });
      } else {
        res.status(201).json({ message: "commentaire ajouté" });

        // préparation de l'envoie de l'email
        const mail = {
          from: "no-reply@hotmail.fr",
          to: "gael.souchet@gmail.com",
          subject: "Nouveau commentaire",
          html:
            '<p>Clickez <a href="http://localhost:3000/Admin">ici</a> pour acceder a votre compte administrateur</p>',
        };

        // envoie de l'email pour prévenir d'un nouveau commentaire
        transporter.sendMail(mail, (err, data) => {
          if (err) {
            console.log("email envoyé");
          } else {
            console.log("probleme envoi email");
          }
        });
      }
    }
  );
});

// Suppression d'un commentaire
router.delete("/deletecomment", (req, res) => {
  const comments = {
    prenom: req.body.prenom,
  };
  db.query(
    "DELETE FROM usercomments WHERE prenom= ?",
    [comments.prenom],
    (error, response) => {
      if (error) {
        res
          .status(500)
          .json({ message: "erreur pour supprimer le commentaires" });
      } else if (response) {
        return res.status(200).json({ message: "Commentaire supprimé" });
      }
    }
  );
});

module.exports = router;
