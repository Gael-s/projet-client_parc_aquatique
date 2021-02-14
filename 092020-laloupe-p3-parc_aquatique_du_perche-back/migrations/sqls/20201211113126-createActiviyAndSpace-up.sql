/* Replace with your SQL commands */

CREATE TABLE `categories` (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(250)
);

CREATE TABLE `images` (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(250),
    descriptif VARCHAR(250)
);

INSERT INTO `categories` (nom) VALUES
    ('activite'),
    ('espace')
;

INSERT INTO `images` (id, nom, descriptif) VALUES
    (1, 'Accueil_Parc_Aquatique.jpg', 'Accueil'),
    (2, 'aprem_rigolos.jpg', 'Aprem rigolos'),
    (3, 'foot_011.jpg', 'Foot'),
    (4, 'IMG_4629.jpg', 'Porte entré'),
    (5, 'IMG_4632.jpg', 'Bassin avec jet'),
    (6, 'IMG_4646.jpg', 'Salle détente'),
    (7, 'IMG_4652.jpg', 'Bassin'),
    (8, 'IMG_4656.jpg', 'Dehors'),
    (9, 'IMG_4668.jpg', 'Rivière sauvage'),
    (10, 'IMG_4674.jpg', 'Grignoterie'),
    (11, 'IMG_4682.jpg', 'Aire de pique-nique'),
    (12, 'IMG_4734.jpg', 'Lac'),
    (13, 'terrase.jpg', 'Terrasse'),
    (14, 'wake.jpg', 'Téléski nautique')
;

CREATE TABLE `activity_and_space` (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    article TEXT,
    descriptif TEXT,
    categorie_id INT,
    image_id INT,
    FOREIGN KEY(categorie_id) REFERENCES categories(id),
    FOREIGN KEY(image_id) REFERENCES images(id)
);

INSERT INTO `activity_and_space` (article, descriptif, categorie_id, image_id) VALUES
    ('Espace détente', 'Venez profiter de cet espace dédié au bien-être. Une vue sur la campagne percheronne, des transats, un hammam et un sauna sont à votre disposition pour vous accorder un moment de relaxation.', 2, 13),
    ('Le bassin', 'Le bassin vous offre plusieurs possibilités pour vous distraire librement : - le toboggan - le jacuzzi - l’espace nage pour les plus sportifs Pour les petits -la pataugeoire', 2, 7),
    ('La rivière sauvage', 'Entrainés par un puissant courant, vous vous laissez emporter par la rivière sauvage. Cet espace ludique permet à tous de passer un bon moment de rire.', 2, 9),
    ('La Grignoterie', 'Afin de vous accorder un moment gourmand, nous mettons à votre disposition des distributeurs de boissons et de friandises que vous pouvez, selon la météo, consommer à l’intérieur ou sur les terrasses extérieures ensoleillées. Pour les têtes en l’air ou les envies de dernière minute, vous pouvez également acheter vos équipements (maillot de bain, lunettes, bouchons d’oreille, pince-nez…).', 2, 10),

    ('Aquagym', 'Au gré de vos envies puisque vous ne réglez que les séances auxquelles vous assistez, venez partager un moment de convivialité tout en pratiquant une activité physique aquatique.', 1, 1),
    ('Ecole de natation', 'L’école de natation apporte des bienfaits pour le développement physique des enfants. Bien que sport individuel, les entrainements forment un esprit de groupe important.', 1, 9),
    ('Aire de pique-nique', 'Située entre l’étang et le Parc Aquatique, à proximité de jeux extérieurs pour enfants, cette aire de pique-nique vous offre la possibilité de vous restaurez confortablement en plein air.', 1, 11),
    ('Camping du Perche', "Dans ce camping ouvert toute l'année, vous trouverez à la fois une aire pour camping-cars, des emplacements nus de passage, des hébergements et un espace résidentiel. Au plus près de la nature, pour un court ou long séjour, vous pourrez vous lancer dans des activités nature (pêche, randonnée à vélo ou à pied sur des chemins de randonnée) à proximité d’un massif forestier de qualité.", 1, 1),
    ('Terrain de sports beach', "Venez passer un moment sportif entre amis en organisant vos rencontres sportives sur le terrain de beach. Nous mettons à votre disposition des équipements adaptés pour la pratique du football, du tennis...", 1, 3),
    ('Téléski nautique', "Une pause fun et nature ! Le téléski nautique permet de découvrir les joies du ski nautique, du wakeboard, du wakeskate ou du kneeboard en étant tiré par une corde attachée à un câble. Ludique, convivial, fous rires garantis ! Dès 7 ans.", 1, 14)
;
