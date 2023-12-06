
CREATE TABLE contenedor(
	id_contenedor INT AUTO_INCREMENT PRIMARY KEY,
	nombre_contenedor VARCHAR(50) NOT NULL,
	direccion_contenedor VARCHAR(250) NOT NULL,
	id_punto INT AUTO_INCREMENT NOT NULL,
	create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	recoger boolean not NULL;
	fecha_hora datetime not null
);

CREATE TABLE punto(
	id_punto INT AUTO_INCREMENT PRIMARY KEY,
	nombre_punto VARCHAR(50) NOT NULL,
	barrio VARCHAR(200) NOT NULL,
	direccion VARCHAR(200) NOT NULL,
	correo VARCHAR(50) NOT NULL,
	telefono VARCHAR(30) NOT NULL,
	create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_hora datetime not null
);

CREATE TABLE recoleccion(
	id_recoleccion INT AUTO_INCREMENT PRIMARY KEY,
	id_contenedor INT NOT NULL,
	id_empresa INT NOT NULL,
	done BOOLEAN NOT NULL DEFAULT 0,
	create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE empresa(
	id_empresa INT AUTO_INCREMENT PRIMARY KEY,
	nit VARCHAR(50) NOT NULL,
	nombre_empresa VARCHAR(150) NOT NULL,
	contrasenia VARCHAR(260) NOT NULL,
	salt VARCHAR(260) NOT NULL,
    fecha_hora datetime not null
);

ALTER TABLE contenedor
ADD CONSTRAINT fk_contenedor_punto
FOREIGN KEY (id_punto) REFERENCES punto(id_punto);

ALTER TABLE recoleccion
ADD CONSTRAINT fk_recoleccion_contenedor
FOREIGN KEY (id_contenedor) REFERENCES contenedor(id_contenedor);

ALTER TABLE recoleccion
ADD CONSTRAINT fk_recoleccion_empresa
FOREIGN KEY (id_empresa) REFERENCES empresa(id_empresa);
