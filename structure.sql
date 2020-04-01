CREATE DATABASE IF NOT EXISTS green_db;

CREATE TABLE users (
  id smallint(6) NOT NULL,
  mail varchar(95) NOT NULL,
  password varchar(95) NOT NULL,
  foto varchar(255) DEFAULT NULL,
  createAt timestamp NOT NULL,
  updateAt timestamp DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE DATABASE IF NOT EXISTS green_db;

CREATE TABLE users (
  id smallint(6) NOT NULL,
  mail varchar(95) NOT NULL,
  password varchar(95) NOT NULL,
  foto varchar(255) DEFAULT NULL,
  createAt timestamp NOT NULL,
  updateAt timestamp null,
  PRIMARY KEY (id)
);

CREATE TABLE carrito (
  id smallint(6) NOT NULL,
  userId int(6) NOT NULL,
  precioTotal decimal(5,2) NOT NULL,
  status varchar(10) NOT NULL,
  date timestamp NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE productos (
  id smallint(6) NOT NULL,
  categoria varchar(85) NOT NULL,
  nombre varchar(85) NOT NULL,
  descripcion varchar(255) DEFAULT NULL,
  foto varchar(255) DEFAULT NULL,
  precioUnitario decimal(3,2) NOT NULL,
  fechaUpdate timestamp NOT NULL,
  cantidadStock smallint(6) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE producto_carrito (
  id smallint(6) NOT NULL,
  carritoId smallint(6) NOT NULL,
  productoId smallint(6) NOT NULL,
  cantidad smallint(6) NOT NULL,
  precioUnitario decimal(3,2) DEFAULT NULL,
  PRIMARY KEY (id)
);