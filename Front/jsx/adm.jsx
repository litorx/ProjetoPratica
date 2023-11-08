import React from 'react';
import '../css/adm.css';
 

function adm() {
  return (
    <div className="container">
      <h1>Vital<strong>Vet</strong></h1>
      <h2>Marcador de consulta</h2>
      <form action="processar_registro.php" method="POST">
        <label htmlFor="id_animal">Id animal:</label>
        <input type="text" id="id_animal" name="id_animal" required />

        <label htmlFor="data">Data:</label>
        <input type="text" id="data" name="data" required />

        <label htmlFor="assunto">Assunto:</label>
        <input type="text" id="assunto" name="assunto" required />

        <button type="submit">Marcar</button>
        <br />
      </form>
    </div>
  );
}

export default adm;
