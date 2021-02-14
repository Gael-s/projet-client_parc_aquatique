
const db = require('../db_connection');

const getAllCour = async () => {
    const res = await db.query("SELECT * FROM aquagym_cours", []);
    return res;
}

const addReservation = async (cours_id, dateOfCour) => {
    const res = await db.query("INSERT INTO reservation_aquagym (cours_id, date_cours) VALUES (?, ?)",
    [cours_id, dateOfCour]);
    return res.insertId;
}

const AddUserReservation = async (email, nom, prenom, insertId) => {
    const res = await db.query("INSERT INTO users_aquagym (email, nom, prenom, id_reservation_aquagym) VALUES (?, ?, ?, ?)", 
    [email, nom, prenom, insertId]);
    return res.insertId;
}

const getNbUserInscrit = async (courId, day) => {
    // const res = await db.query('SELECT COUNT(id) AS count FROM reservation_aquagym WHERE id = ? AND DATEDIFF(DATE(date_cours), CURRENT_DATE()) >= 0', [courId]);
    const res = await db.query('SELECT date_cours FROM reservation_aquagym WHERE cours_id = ? AND DATEDIFF(DATE(date_cours), CURRENT_DATE()) >= 0', [courId]);
    const output = [];
    day.map((el, id) => {
        output[id] = 0;
        return el;
    });
    res.map((item) => {
        const id = day.indexOf(item.date_cours.getDay());
        output[id] += 1;
        return item;
    })
    return output;
};

module.exports = {
    getNbUserInscrit,
    getAllCour,
    addReservation,
    AddUserReservation,
}



