CREATE DATABASE IF NOT EXISTS green_db;

CREATE TABLE users (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  mail varchar(95) NOT NULL,
  password varchar(95) NOT NULL,
  foto varchar(255) DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE carrito (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  user_id int(6) NOT NULL,
  precio_total decimal(5,2) NOT NULL,
  status varchar(10) NOT NULL,
  date timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE productos (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  categoria varchar(85) NOT NULL,
  nombre varchar(85) NOT NULL,
  descripcion varchar(255) DEFAULT NULL,
  foto varchar(255) DEFAULT NULL,
  precio_unitario decimal(8,2) NOT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE producto_carrito (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  carrito_id smallint(6) NOT NULL,
  producto_id smallint(6) NOT NULL,
  cantidad smallint(6) NOT NULL,
  precio_unitario decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (id)
);
