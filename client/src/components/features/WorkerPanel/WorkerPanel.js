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
        <h2 className={styles.workerPanelHeader}>Panel Pracownika</h2>
        {isAuthenticated && worker && (
          <div className={styles.workerPanelContent}>
            <p><strong>Imię:</strong> {worker.imie}</p>
            <p><strong>Nazwisko:</strong> {worker.nazwisko}</p>
            <p><strong>Wiek:</strong> {worker.wiek}</p>
            <p><strong>Płaca na godzinę:</strong> {worker.placa_na_godzine}</p>
            <p><strong>Stanowisko:</strong> {worker.stanowisko}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WorkerPanel;