import React from 'react';
import '../css/cadastro.css';

function Cadastro() {
  const redirecionarParaPagina2 = (caminho) => {
    window.location.href = caminho;
  };

  const handleCadastroBtnClick = () => {
    redirecionarParaPagina2('cadastroPet.html');
  };

  return (
    <div className="container">
      <h1>Vital<strong>Vet</strong></h1>
      <h2>Cadastro</h2>
      <form action="processar_registro.php" method="POST">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label htmlFor="CPF">CPF:</label>
        <input type="number" id="CPF" name="CPF" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" required />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required />

        <button
          type="submit"
          id="CadastroBtn"
          onClick={handleCadastroBtnClick}
        >
          Cadastrar
        </button>
        <br />
        <a href="Main.html=">Voltar</a>
      </form>
    </div>
  );
}

export default Cadastro;
