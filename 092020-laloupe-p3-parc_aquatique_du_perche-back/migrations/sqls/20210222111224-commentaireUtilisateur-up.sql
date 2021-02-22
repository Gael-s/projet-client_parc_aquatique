/* Replace with your SQL commands */
CREATE TABLE `userComments` (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    prenom VARCHAR(250),
    comment VARCHAR(250),
    notation VARCHAR(250)
);

INSERT INTO `userComments` (id, prenom, comment, notation) VALUES
    (1, 'Jean-pierre', 'trés bel endroit', 4),
    (2, 'Yolande', 'Aprem rigolos', 5)
;