/* eslint-disable no-else-return */
const router = require("express").Router();

const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const isAdmin = require("../middlewares/adminAcces");

const { connection } = require("../db_connection");
const { PRIVATEKEY } = require("../env");

const getToken = () => {
  const token = jwt.sign({ admin: true }, PRIVATEKEY, { expiresIn: 120 * 60 });
  return token;
};

// const isAdmin = (req, res, next) => {
//   let bearerHeader = req.headers.authorization;
//   console.log(bearerHeader.substring(0, 7));
//   if (bearerHeader.substring(0, 7) === "Bearer ") {
//     bearerHeader = bearerHeader.substring(7);
//   }
//   console.log(bearerHeader)
//   const decoded = jwt.verify(bearerHeader, PRIVATEKEY);
//   if (decoded.admin) {
//     return next();
//   }
//   return res.status(403).json({message:"Non authorizé"})
// }

// Ajout d'un adminisrateur sur la route /Admin/new
router.post("/new", isAdmin, (req, res) => {
  const users = {
    user: req.body.user,
    pass: req.body.pass,
  };

  return bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(req.body.pass, salt).then((hash) => {
      connection.query(
        "INSERT INTO user_admin ( user, pass ) VALUES (?, ?)",
        [users.user, hash],
        (error) => {
          if (error) return res.status(500).json({ message: "error 500" });
          return res.status(201).json({ message: "Utilisateur enregistré" });
        }
      );
    });
  });
});

// Connection administrateur sur la route /Admin
router.post("/", bodyParser.json(), (req, res) => {
  const users = {
    user: req.body.user,
    pass: req.body.pass,
  };
  if (!users) {
    return res.status(404).json({
      type: "Not Found",
      message: "Erreur de login ou de mot de passe",
    });
  }
  connection.query(
    "SELECT pass FROM user_admin WHERE user=?",
    [users.user],
    (errTwo, resTwo) => {
      if (errTwo) {
        res
          .status(444)
          .json({ message: "error 444 pas de réponse du serveur" });
      }
      if (!resTwo[0]) {
        return res.status(404).json({
          status: "Not Found",
          message: "Erreur de login ou de mot de passe",
        });
      }
      const encodedHash = resTwo[0].pass;
      const isCorrect = bcrypt.compare(users.pass, encodedHash);
      if (isCorrect) {
        const token = getToken();
        return res.status(200).json({
          status: "Success",
          message: "Vous êtes connecté",
          data: users.user,
          token,
        });
      } else {
        return res.status(403).json({
          message:
            "Erreur de connexion, vérifier votre mot de passe ou votre login",
        });
      }
    }
  );
});

// router.get("/", isAdmin, (_, res) => {
//   res.status(200).json({
//     message: "get admin acces",
//   })
// })

// Lister tous les admin
router.get("/", (req, res) => {
  connection.query("SELECT user FROM user_admin", [req.query.type])
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(500).json({ messageError: `Sql error return ${err.message}` })
    );
});

// supprimer un admin
router.delete("/delete", (req, res) => {
  res.send("hello delete admin");
});

module.exports = router;
