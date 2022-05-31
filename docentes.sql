CREATE TABLE asistencia(
    id bigint unsigned not null primary key auto_increment,
    idRFID varchar(15) not null,
    fecha DATE not null,
    hora TIME not null
);

CREATE TABLE maestros(
    id bigint unsigned not null primary key auto_increment,
    idRFID varchar(15) not null,
    nombre varchar(50),
    carrera varchar(30)
);