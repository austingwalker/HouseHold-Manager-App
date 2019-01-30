DROP DATABASE IF EXISTS HouseManager;
CREATE DATABASE HouseManager;
USE HouseManager;

SELECT * FROM Managers;

SELECT * FROM Tenants;

INSERT INTO Managers (email, password, role) VALUES ("test@test.com", "1234", 1);
INSERT INTO Tenants (email, password, role) VALUES ("email@email.com", "abcd", 2);