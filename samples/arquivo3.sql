CREATE OR REPLACE FUNCTION test_function()
RETURNS TEXT AS $$
DECLARE
    inserted_id INT;
    retrieved_value TEXT;
BEGIN
    -- Criar uma tabela temporária apenas para testes
    CREATE TEMP TABLE IF NOT EXISTS test_table (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
    );

    -- Inserir um valor de teste
    INSERT INTO test_table (name) VALUES ('Teste PSQL') RETURNING id INTO inserted_id;

    -- Recuperar o valor inserido
    SELECT name INTO retrieved_value FROM test_table WHERE id = inserted_id;

    -- Retornar o resultado
    RETURN 'Inserido: ' || retrieved_value;
END;
$$ LANGUAGE plpgsql;

-- Testando a função
SELECT test_function();
