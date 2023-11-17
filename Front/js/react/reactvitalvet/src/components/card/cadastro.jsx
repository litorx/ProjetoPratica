import React from 'react';
import styles from 'styles/Cadastro.module.css';

function redirecionarParaPagina2(caminho) {
  window.location.href = caminho;
}

function Cadastro() {
  return (
    <div className={styles.cadastroBody}>
      <div className={styles.cadastroContainer}>
        <h1 className={styles.cadastroTitle}>
          Vital<span className={styles.cadastroStrong}>Vet</span>
        </h1>
        <h2 className={styles.cadastroTitle}>Cadastro</h2>
        <form action="processar_registro.php" method="POST" className={styles.cadastroForm}>
          <label htmlFor="nome" className={styles.cadastroLabel}>
            Nome:
          </label>
          <input type="text" id="nome" name="nome" required className={styles.cadastroInput} />

          <label htmlFor="CPF" className={styles.cadastroLabel}>
            CPF:
          </label>
          <input type="number" id="CPF" name="CPF" required className={styles.cadastroInput} />

          <label htmlFor="email" className={styles.cadastroLabel}>
            E-mail:
          </label>
          <input type="email" id="email" name="email" required className={styles.cadastroInput} />

          <label htmlFor="telefone" className={styles.cadastroLabel}>
            Telefone:
          </label>
          <input type="tel" id="telefone" name="telefone" required className={styles.cadastroInput} />

          <label htmlFor="senha" className={styles.cadastroLabel}>
            Senha:
          </label>
          <input type="password" id="senha" name="senha" required className={styles.cadastroInput} />

          <button type="submit" id="CadastroBtn" className={styles.cadastroCadastroBtn}>
            Cadastrar
          </button>
          <br />
          <a href="Main.html" className={styles.cadastroLink}>
            Voltar
          </a>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
