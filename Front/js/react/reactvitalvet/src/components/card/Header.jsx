import React from 'react';
import styles from 'styles/header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <div className={styles.headerBorder}>
          <div id={styles.logo}>
            Vital<strong id={styles.verde}>Vet</strong>
          </div>
          <nav className={styles.menu}>
            <div className={styles.backdrop}></div>
            <ul className={styles.ul}>
              <li id={styles.cadastroBtn}><button>Cadastre-se</button></li>
              <li id={styles.sobreBtn}><button>Sobre</button></li>
              <li id={styles.emergenciaBtn}><button>Emergência</button></li>
            </ul>
          </nav>
        </div>
        <form action="" id={styles.register}>
          <p>Faça seu login</p>
          <div className={styles.field}>
            <input id={styles.email} type="email" placeholder="Email" required />
          </div>
          <br />
          <div className={styles.field}>
            <input id={styles.senha} type="password" placeholder="Senha" required />
          </div>
          <br />
          <button id={styles.registerBtn}>Login</button>
          <a href="cadastro.html" id={styles.Case}>
            Não tem login? Se cadastre
          </a>
        </form>
      </header>
    </div>
  );
};

export default Header;
