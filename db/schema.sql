CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
    ate BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


