import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li><a href="/worker/:login">KONTO</a></li>
        <li><a href="#wyplaty">WYPŁATY</a></li>
        <li><a href="#urlopy">URLOPY</a></li>
        <li><a href="#ogłoszenia">OGŁOSZENIA</a></li>
        <li><a href="#zgłoszenia">ZGŁOSZENIA</a></li>
        <li><a href="#o-aplikacji">O APLIKACJI</a></li>
        <li><a href="#kontakt">KONTAKT</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;