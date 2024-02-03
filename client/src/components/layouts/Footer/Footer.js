// Footer.js

import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <div>
          <h3>Siedziba główna</h3>
          <p>ul. Spółdzielcza 1</p>
          <p>64-730 Wieleń</p>
          <p>tel. +48 (67) 256 26 24</p>
        </div>
        <div>
          <h3>Centrum logistyczne</h3>
          <p>ul. Portowa 4</p>
          <p>64-761 Krzyż Wlkp</p>
          <p>tel. +48 (67) 256 26 24</p>
        </div>
        <div>
          <h3>Księgowość</h3>
          <p>ul. Portowa 4</p>
          <p>64-761 Krzyż Wlkp</p>
          <p>tel. +48 (67) 256 26 24</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2024 Nazwa Twojej Firmy. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;