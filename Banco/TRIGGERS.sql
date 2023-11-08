CREATE TRIGGER AuditCliente
ON projeto.Cliente
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    -- Verificar o tipo de operação (inserção, atualização ou exclusão)
    DECLARE @Operacao VARCHAR(10);
    SET @Operacao = CASE
        WHEN EXISTS (SELECT * FROM inserted) AND EXISTS (SELECT * FROM deleted) THEN 'UPDATE'
        WHEN EXISTS (SELECT * FROM inserted) THEN 'INSERT'
        WHEN EXISTS (SELECT * FROM deleted) THEN 'DELETE'
        ELSE NULL
    END;

    IF @Operacao IS NOT NULL
    BEGIN
        -- Gerar um novo ID de auditoria 
        DECLARE @NovoIdAuditoria INT;
        SET @NovoIdAuditoria = (SELECT ISNULL(MAX(IdAuditoria), 0) + 1 FROM projeto.AuditoriaCliente);

        INSERT INTO projeto.AuditoriaCliente (IdAuditoria, Operacao, DataHora, IdCliente, Email, Nome, Sobrenome)
        SELECT @NovoIdAuditoria, @Operacao, GETDATE(), IdCliente, Email, Nome, Sobrenome
        FROM deleted; -- Gravar os dados antigos antes da operação
    END;
END;

DROP TRIGGER projeto.AuditCliente;

INSERT INTO projeto.Cliente (Email, Senha, Telefone, Nome, Sobrenome)
VALUES ('cliente1@email.com', 'senha1', '1234567890', 'Cliente1', 'Sobrenome1');

UPDATE projeto.Cliente
SET Nome = 'NovoNome'
WHERE IdCliente = 1;

DELETE FROM projeto.Cliente
WHERE IdCliente = 1;



select * from projeto.Pet
select * from projeto.Consulta
select * from projeto.Cliente


SET IDENTITY_INSERT projeto.Cliente ON;

