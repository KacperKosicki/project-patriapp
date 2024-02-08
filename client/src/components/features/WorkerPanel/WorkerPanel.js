import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import workersData from '../../../workers.json';
import styles from './WorkerPanel.module.scss'; // Importuj plik ze stylami SCSS
import Banner from '../../pages/Banner/Banner';
import Footer from '../../layouts/Footer/Footer';
import NavBar from '../../layouts/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faChartBar, faFile } from '@fortawesome/free-solid-svg-icons';

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
              <div><FontAwesomeIcon icon={faUser} /> <strong>Imię:</strong> <span>{worker.imie}</span></div>
              <div><FontAwesomeIcon icon={faUser} /> <strong>Nazwisko:</strong> <span>{worker.nazwisko}</span></div>
              <div className={styles.barrier} />
              <div><FontAwesomeIcon icon={faCalendar} /> <strong>Wiek:</strong> <span>{worker.wiek}</span></div>
              <div className={styles.barrier} />
              <div><FontAwesomeIcon icon={faChartBar} /> <strong>Stanowisko:</strong> <span>{worker.stanowisko}</span></div>
              {worker.placa_na_godzine !== null && (
                <div><FontAwesomeIcon icon={faChartBar} /> <strong>Płaca na godzinę:</strong> <span>{worker.placa_na_godzine}zł</span></div>
              )}
              {worker.placa_nominalna !== null && (
                <div><FontAwesomeIcon icon={faChartBar} /> <strong>Płaca nominalna:</strong> <span>{worker.placa_nominalna}zł</span></div>
              )}
              <div><FontAwesomeIcon icon={faChartBar} /> <strong>Płaca zwiększona dnia:</strong> <span>{worker.zwiekszona_placa}</span></div>
              <div className={styles.barrier} />
              <div><FontAwesomeIcon icon={faFile} /> <strong>Umowa na:</strong> <span>{worker.umowa_na}</span></div>
              <div><FontAwesomeIcon icon={faFile} /> <strong>Umowa do:</strong> <span>{worker.umowa_do}</span></div>
              <div><FontAwesomeIcon icon={faFile} /> <strong>Umowa podpisana dnia:</strong> <span>{worker.umowa_podpisana}</span></div>
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