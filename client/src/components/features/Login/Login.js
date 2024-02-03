// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import workersData from '../../../workers.json';
import styles from './Login.module.scss';
import Banner from '../../pages/Banner/Banner';
import Footer from '../../layouts/Footer/Footer';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '', pin: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    const { username, password, pin } = loginData;

    // Sprawdzenie, czy pola nie są puste
    if (!username || !password || !pin) {
      setError('Wypełnij wszystkie pola');
      return;
    }

    // Sprawdzenie, czy długość PINu wynosi 4 cyfry
    if (pin.length !== 4 || isNaN(pin)) {
      setError('PIN musi składać się z 4 cyfr');
      return;
    }

    // Sprawdzenie, czy użytkownik istnieje w bazie danych
    const user = workersData.find(worker => worker.login === username && worker.password === password && worker.pin === pin);
    if (user) {
      onLogin(user);
      navigate(`/worker/${user.login}`);
    } else {
      setError('Niepoprawne dane logowania');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <Banner imagePath="/images/patria-logo.png" />
      <div className={styles.loginContainer}>
        <h2>Logowanie do systemu <span>PatriAPP</span></h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="username" title="Podaj login użytkownika, który został do Ciebie przypisany.">Użytkownik:</label>
            <input type="text" id="username" name="username" value={loginData.username} onChange={handleInputChange} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" title="Podaj hasło.">Hasło:</label>
            <input type="password" id="password" name="password" value={loginData.password} onChange={handleInputChange} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="pin" title="Podaj PIN.">PIN:</label>
            <input type="password" id="pin" name="pin" value={loginData.pin} onChange={handleInputChange} />
          </div>
          {error && <p className={styles.error}>{error}</p>} {/* Wyświetlenie komunikatu o błędzie */}
          <button type="button" onClick={handleLogin}>Zaloguj się do panelu</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;