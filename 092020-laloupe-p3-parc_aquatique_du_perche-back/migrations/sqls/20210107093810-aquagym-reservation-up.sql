/* Replace with your SQL commands */
CREATE TABLE aquagym_cours (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    jour TEXT NOT NULL,
    horaire FLOAT NULL,
    maximum INT NOT NULL
);

CREATE TABLE reservation_aquagym (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cours_id INT NOT NULL,
    date_cours TIMESTAMP NOT NULL,
    FOREIGN KEY (cours_id) REFERENCES aquagym_cours(id)
);

CREATE TABLE users_aquagym (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    nom VARCHAR(50),
    prenom VARCHAR(50) NOT NULL,
    id_reservation_aquagym INT,
    FOREIGN KEY (id_reservation_aquagym) REFERENCES reservation_aquagym(id)
);
