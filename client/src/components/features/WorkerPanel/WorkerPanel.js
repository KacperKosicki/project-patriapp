import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import workersData from '../../../workers.json';
import styles from './WorkerPanel.module.scss'; // Importuj plik ze stylami SCSS
import Banner from '../../pages/Banner/Banner';
import Footer from '../../layouts/Footer/Footer';
import NavBar from '../../layouts/NavBar/NavBar';

const WorkerPanel = () => {
  const { login } = useParams();
  const worker = workersData.find(worker => worker.login === login);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkCredentials = () => {
      setIsAuthenticated(true);
    };

    checkCredentials();
  }, []);

  return (
    <div className={styles.workerPanelWrapper}>
      <Banner imagePath="/images/patria-logo.png" link="https://patria-top.com.pl/" />
      <NavBar />
      <div className={styles.workerPanelContainer}>
        {isAuthenticated && worker && (
          <div className={styles.workerPanelContent}>
            <div className={styles.profileImage}>
              <img src={worker.zdjecie} alt="Zdjęcie pracownika" />
            </div>
            <div className={styles.infoColumn}>
              <p><strong>Imię:</strong> <span>{worker.imie}</span></p>
              <p><strong>Nazwisko:</strong> <span>{worker.nazwisko}</span></p>
              <p><strong>Wiek:</strong> <span>{worker.wiek}</span></p>
              <p><strong>Płaca na godzinę:</strong> <span>{worker.placa_na_godzine}</span></p>
              <p><strong>Stanowisko:</strong> <span>{worker.stanowisko}</span></p>
              <p><strong>Pozostało dni urlopu:</strong> <span>{worker.dni_urlopu}</span></p>
              <div className={styles.buttonContainer}>
                <button className={styles.changeProfile}>EDYTUJ PROFIL</button>
                <button className={styles.deleteAccount}>USUŃ PROFIL</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WorkerPanel;
