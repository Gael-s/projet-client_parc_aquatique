/* Replace with your SQL commands */
CREATE TABLE `parc_aquatique`.`tarif` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `adulte` VARCHAR(45) NULL,
  `enfant` VARCHAR(45) NULL,
  `enfant_3_ans` VARCHAR(45) NULL,
  `sauna_et_hammam` VARCHAR(45) NULL,
  `abonnement_sauna` VARCHAR(45) NULL,
  `cours` VARCHAR(45) NULL,
  `adultEte` VARCHAR(45) NULL,
  `enfantEte` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

  INSERT INTO `parc_aquatique`.`tarif` (
    `adulte`, 
    `enfant`, 
    `enfant_3_ans`, 
    `sauna_et_hammam`, 
    `abonnement_sauna`, 
    `cours`, 
    `adultEte`, 
    `enfantEte`
    ) VALUES (
      '4',
      '3.20',
      '0.00',
      '10',
      '75',
      '5',
      '4.70',
      '3.70'
      );