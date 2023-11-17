import React from 'react';
import styles from 'styles/emergencia.module.css'; // Certifique-se de que o caminho está correto

function Emergencia() {
  return (
    <div className={styles.emergenciaBody}>
      <header className={styles.emergenciaHeader}>
        <h1>Clínica Veterinária VitalVet</h1>
        <p>Registro de Emergência</p>
      </header>

      <div className={styles.emergenciaContainer}>
        <h2 className={styles.emergenciaTitle}>Registro de Emergência</h2>
        <p className={styles.emergenciaParagraph}>Preencha o formulário abaixo para registrar informações de emergência para o seu animal de estimação:</p>

        <form className={styles.emergenciaForm}>
          <label htmlFor="nome" className={styles.emergenciaLabel}>Nome do Dono:</label>
          <input type="text" id="nome" name="nome" className={styles.emergenciaInput} required /><br /><br />

          <label htmlFor="telefone" className={styles.emergenciaLabel}>Telefone de Contato:</label>
          <input type="tel" id="telefone" name="telefone" className={styles.emergenciaInput} required /><br /><br />

          <label htmlFor="pet_nome" className={styles.emergenciaLabel}>Nome do Animal de Estimação:</label>
          <input type="text" id="pet_nome" name="pet_nome" className={styles.emergenciaInput} required /><br /><br />

          <label htmlFor="especie" className={styles.emergenciaLabel}>Espécie do Animal:</label>
          <input type="text" id="especie" name="especie" className={styles.emergenciaInput} required /><br /><br />

          <label htmlFor="descricao" className={styles.emergenciaLabel}>Descrição da Emergência:</label><br />
          <textarea id="descricao" name="descricao" rows="4" className={styles.emergenciaTextarea} required></textarea><br /><br />

          <input type="submit" value="Registrar Emergência" className={styles.emergenciaSubmit} />
          <a href="Main.html" className={styles.emergenciaLink}>Voltar</a>
        </form>
      </div>

      <footer className={styles.emergenciaFooter}>
        <p>&copy; 2023 Clínica Veterinária VitalVet</p>
      </footer>
    </div>
  );
}

export default Emergencia;
