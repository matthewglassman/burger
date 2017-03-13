CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
burger_id INTEGER (3) auto_increment not null,
burger_name VARCHAR (100) not null,
devoured BOOLEAN not null,
date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
primary key (burger_id)
);