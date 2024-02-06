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
            <div className={styles.column}>
              <h3>---- GŁÓWNE DANE ----</h3>
              <p><strong>Imię:</strong> {worker.imie}</p>
              <p><strong>Nazwisko:</strong> {worker.nazwisko}</p>
              <p><strong>Wiek:</strong> {worker.wiek}</p>
              <p><strong>Płaca na godzinę:</strong> {worker.placa_na_godzine}</p>
              <p><strong>Stanowisko:</strong> {worker.stanowisko}</p>
            </div>
            <div className={styles.column}>
              <h3>---- URLOPY ----</h3>
              {/* Tutaj wstaw logikę związana z urlopami pracownika */}
              <p><strong>Pozostało dni urlopu:</strong> {worker.dni_urlopu}</p>
            </div>
            <div className={styles.column}>
              <h3>---- INNE ----</h3>
              {/* Tutaj wstaw inne informacje na temat pracownika */}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WorkerPanel;
