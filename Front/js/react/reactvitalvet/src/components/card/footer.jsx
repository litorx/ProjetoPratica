// Footer.jsx

import React from 'react';
import styles from 'styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={`${styles.container} ${styles.footer}`}>
      <div>
        <h6 className={styles.dues}>&copy; 2023 Clínica Veterinária VitalVet</h6>
        <nav className={styles.menu}>
          <ul>
            <li className={styles.ComecoBtnFooter}>
              <button>Começo</button>
            </li>
            <li className={styles.SobreBtnFooter}>
              <button>Sobre</button>
            </li>
            <li className={styles.EmergenciaBtnFooter}>
              <button>Emergência</button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
