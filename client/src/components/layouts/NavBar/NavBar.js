import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li><a href="#konto">KONTO</a></li>
        <li><a href="#wyplaty">WYPŁATY</a></li>
        <li><a href="#o-aplikacji">O APLIKACJI</a></li>
        <li><a href="#kontakt">KONTAKT</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;