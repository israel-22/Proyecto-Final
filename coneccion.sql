mysql -u root -p
GRANT ALL PRIVILEGES ON proyectoFinal.* TO 'root'@'127.0.0.1' IDENTIFIED BY '';
FLUSH PRIVILEGES;
SHOW TABLES;
INSERT INTO tu_tabla (nombre, apellido, cedula, correo, contrasenia)
VALUES ('lucho', 'dias', '123456789', 'lucho@correo.com', '');