import React from 'react';
import '../css/emergencia.css';


function Emergencia() {
    return (
      <div>
        <header>
          <h1>Clínica Veterinária VitalVet</h1>
          <p>Registro de Emergência</p>
        </header>
  
        <div className="container">
          <h2>Registro de Emergência</h2>
          <p>Preencha o formulário abaixo para registrar informações de emergência para o seu animal de estimação:</p>
  
          <form>
            <label htmlFor="nome">Nome do Dono:</label>
            <input type="text" id="nome" name="nome" required /><br /><br />
  
            <label htmlFor="telefone">Telefone de Contato:</label>
            <input type="tel" id="telefone" name="telefone" required /><br /><br />
  
            <label htmlFor="pet_nome">Nome do Animal de Estimação:</label>
            <input type="text" id="pet_nome" name="pet_nome" required /><br /><br />
  
            <label htmlFor="especie">Espécie do Animal:</label>
            <input type="text" id="especie" name="especie" required /><br /><br />
  
            <label htmlFor="descricao">Descrição da Emergência:</label><br />
            <textarea id="descricao" name="descricao" rows="4" required></textarea><br /><br />
  
            <input type="submit" value="Registrar Emergência" />
            <a href="Main.html">Voltar</a>
          </form>
        </div>
  
        <footer>
          <p>&copy; 2023 Clínica Veterinária VitalVet</p>
        </footer>
      </div>
    );
  }
  
  export default Emergencia;