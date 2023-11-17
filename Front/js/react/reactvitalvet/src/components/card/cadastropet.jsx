import React from 'react';
import styles from 'styles/CadastroPet.module.css'; // Certifique-se de que o caminho está correto

function CadastroPet() {
  return (
    <div className={styles.cadastroPetBody}>
      <div className={styles.cadastroPetContainer}>
        <h1 className={styles.cadastroPetTitle}>Vital<span className={styles.cadastroPetStrong}>Vet</span></h1>
        <h2 className={styles.cadastroPetTitle}>Registre seu Pet</h2>
        <form action="processar_registro.php" method="POST" className={styles.cadastroPetForm}>
          <label htmlFor="nome_pet" className={styles.cadastroPetLabel}>Nome do Pet:</label>
          <input type="text" id="nome_pet" name="nome_pet" required className={styles.cadastroPetInput} />

          <label htmlFor="sexo_pet" className={styles.cadastroPetLabel}>Sexo do pet:</label>
          <input type="text" id="sexo_pet" name="sexo_pet" required className={styles.cadastroPetInput} />

          <label htmlFor="especie_pet" className={styles.cadastroPetLabel}>Espécie do Pet:</label>
          <input type="text" id="especie_pet" name="especie_pet" required className={styles.cadastroPetInput} />

          <label htmlFor="raca_pet" className={styles.cadastroPetLabel}>Raça do Pet:</label>
          <input type="text" id="raca_pet" name="raca_pet" required className={styles.cadastroPetInput} />

          <label htmlFor="idade_pet" className={styles.cadastroPetLabel}>Idade do Pet:</label>
          <input type="number" id="idade_pet" name="idade_pet" required className={styles.cadastroPetInput} />

          <label htmlFor="dono_pet" className={styles.cadastroPetLabel}>Nome do Dono:</label>
          <input type="text" id="dono_pet" name="dono_pet" required className={styles.cadastroPetInput} />

          <button type="submit" className={styles.cadastroPetButton}>Registrar</button>
          <br />
          <a href="Main.html" className={styles.cadastroPetLink}>Voltar</a>
        </form>
      </div>
    </div>
  );
}

export default CadastroPet;
