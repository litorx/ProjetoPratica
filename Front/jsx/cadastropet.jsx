import React from 'react';
import '../css/cadastropet.css';

function cadastropet() {
  return (
    <div className="container">
      <h1>Vital<strong>Vet</strong></h1>
      <h2>Registre seu Pet</h2>
      <form action="processar_registro.php" method="POST">
        <label htmlFor="nome_pet">Nome do Pet:</label>
        <input type="text" id="nome_pet" name="nome_pet" required />

        <label htmlFor="sexo_pet">Sexo do pet:</label>
        <input type="text" id="sexo_pet" name="sexo_pet" required />

        <label htmlFor="especie_pet">Espécie do Pet:</label>
        <input type="text" id="especie_pet" name="especie_pet" required />

        <label htmlFor="raca_pet">Raça do Pet:</label>
        <input type="text" id="raca_pet" name="raca_pet" required />

        <label htmlFor="idade_pet">Idade do Pet:</label>
        <input type="number" id="idade_pet" name="idade_pet" required />

        <label htmlFor="dono_pet">Nome do Dono:</label>
        <input type="text" id="dono_pet" name="dono_pet" required />

        <button type="submit">Registrar</button>
        <br />
        <a href="Main.html">Voltar</a>
      </form>
    </div>
  );
}

export default cadastropet;
