CREATE DATABASE 'green_db'

CREATE TABLE 'users' (
  'userId' smallint(6) NOT NULL,
  'mail' varchar(95) NOT NULL,
  'password' varchar(95) NOT NULL,
  'foto' VARBINARY(MAX) DEFAULT NULL,
  'createAt' timestamp NOT NULL,
  'updateAt' timestamp DEFAULT NULL,
  PRIMARY KEY ('id')
);

CREATE TABLE 'carrito' (
  'carritoId' smallint(6) NOT NULL,
  'userId' int(6) NOT NULL,
  'vacio' varchar(3) NOT NULL,
  PRIMARY KEY ('id')
);

CREATE TABLE 'productos' (
  'productoId' smallint(6) NOT NULL,
  'categoria' varchar(85) NOT NULL,
  'nombre' varchar(85) NOT NULL,
  'descripcion' varchar(255) DEFAULT NULL,
  'foto' VARBINARY(MAX) DEFAULT NULL,
  'precioUnitario' decimal(3,2) NOT NULL,
  'fechaUpdate' timestamp NOT NULL,
  'cantidadStock' smallint(6) NOT NULL,
  PRIMARY KEY ('id')
);

CREATE TABLE 'ordenes' (
  'ordenId' smallint(6) NOT NULL,
  'carritoId' smallint(6) NOT NULL,
  'precioTotal' decimal(5,2) NOT NULL,
  'status' varchar(10) NOT NULL,
  'dateOrden' timestamp NOT NULL,
  PRIMARY KEY ('ordenId')
);

CREATE TABLE 'producto_orden' (
  'id' smallint(6) NOT NULL,
  'ordenId' smallint(6) NOT NULL,
  'productoId' smallint(6) NOT NULL,
  'cantidad' smallint(6) NOT NULL,
  'precioUnitario' decimal(3,2) DEFAULT NULL,
  PRIMARY KEY ('id')
);
