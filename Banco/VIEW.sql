CREATE VIEW ClientePetView AS
SELECT c.IdCliente, c.Nome AS NomeCliente, c.Sobrenome AS SobrenomeCliente,
       p.IdPet, p.Nome AS NomePet, p.Raça, p.Especie, p.Sexo
FROM projeto.Cliente c
LEFT JOIN projeto.Pet p ON c.IdCliente = p.IdCliente;

SELECT * FROM ClientePetView;


CREATE VIEW ConsultaPorCliente AS
SELECT c.IdCliente, c.Nome AS NomeCliente, c.Sobrenome AS SobrenomeCliente,
       co.IdConsulta, co.Valor, co.Assunto, co.Consultorio, co.Data, co.EhEmergencia
FROM projeto.Cliente c
LEFT JOIN projeto.Pet p ON c.IdCliente = p.IdCliente
LEFT JOIN projeto.Consulta co ON p.IdPet = co.IdPet;

SELECT * FROM ConsultaPorCliente;



CREATE VIEW PetsSemConsultas AS
SELECT p.IdPet, p.Nome, p.Raça, p.Especie, p.Sexo
FROM projeto.Pet p
LEFT JOIN projeto.Consulta co ON p.IdPet = co.IdPet
WHERE co.IdConsulta IS NULL;

SELECT * FROM PetsSemConsultas;



CREATE VIEW ConsultasEmergencia AS
SELECT IdConsulta, IdPet, Valor, Assunto, Consultorio, Data, EhEmergencia
FROM projeto.Consulta
WHERE EhEmergencia = 'Sim';

SELECT * FROM ConsultasEmergencia;


INSERT INTO projeto.Consulta (IdConsulta, IdPet, Valor, Assunto, Consultorio, Data, EhEmergencia)
VALUES (9, 1, '100.00', 'Emergência Cardíaca', 'Hospital XYZ', GETDATE(), 'Sim');



INSERT INTO projeto.Pet (IdPet, Nome, DataNascimento, Raça, Especie, Sexo, IdCliente)
VALUES (1, 'NomePet', '2000-01-01', 'RaçaPet', 'EspeciePet', 'SexoPet', 1);


INSERT INTO projeto.Consulta (IdPet, Valor, Assunto, Consultorio, Data, EhEmergencia)
VALUES (1, '100.00', 'Emergência Cardíaca', 'Hospital XYZ', GETDATE(), 'Sim');
