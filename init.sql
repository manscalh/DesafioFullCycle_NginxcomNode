CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE TABLE IF NOT EXISTS people (
    id integer auto_increment primary key,
    name varchar(250)
);