import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import workersData from '../../../workers.json';

const WorkerPanel = () => {
  const { login } = useParams();
  const worker = workersData.find(worker => worker.login === login);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Logika autoryzacji - wywoływana tylko raz po załadowaniu komponentu
    const checkCredentials = () => {
      // Tutaj umieść logikę autoryzacji, która ustawia isAuthenticated na true lub false
      // Na przykład: Sprawdź dane logowania, tokeny, ciasteczka itp.
      setIsAuthenticated(true); // Przykładowa ustawienie autoryzacji na true
    };

    checkCredentials(); // Wywołanie funkcji sprawdzającej autoryzację
  }, []); // Pusta zależność, żeby useEffect wywołał się tylko raz po załadowaniu komponentu

  return (
    <div>
      <h2>Panel Pracownika</h2>
      {isAuthenticated && worker && (
        <div>
          <p><strong>Imię:</strong> {worker.imie}</p>
          <p><strong>Nazwisko:</strong> {worker.nazwisko}</p>
          <p><strong>Wiek:</strong> {worker.wiek}</p>
          <p><strong>Płaca na godzinę:</strong> {worker.placa_na_godzine}</p>
          <p><strong>Stanowisko:</strong> {worker.stanowisko}</p>
        </div>
      )}
    </div>
  );
};

export default WorkerPanel;