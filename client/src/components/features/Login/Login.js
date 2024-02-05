import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import workersData from '../../../workers.json';
import styles from './Login.module.scss';
import Banner from '../../pages/Banner/Banner';
import Footer from '../../layouts/Footer/Footer';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '', pin: '' });
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');
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
  
    // Rozdzielenie pola login na część login i numer
    const [login, number] = username.split('#');
  
    // Sprawdzenie, czy użytkownik istnieje w bazie danych
    const user = workersData.find(worker => worker.login === login && worker.number.toString() === number && worker.password === password && worker.pin === pin);
    if (user) {
      onLogin(user);
      setError(''); // Usunięcie komunikatu błędu po poprawnym zalogowaniu
      setNotification('W celu bezpieczeństwa, jeśli w swoim panelu odświeżysz stronę, zostaniesz przeniesiony do systemu logowania. Trwa łączenie z Twoim panelem...');
      setTimeout(() => {
        setNotification('');
        navigate(`/worker/${user.login}`); // Tu jest użycie user.login, które połączy login z numerem
      }, 7000); // 7000 milisekund = 7 sekund
    } else {
      setError('Niepoprawne dane logowania');
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <Banner imagePath="/images/patria-logo.png" link="https://patria-top.com.pl/" />
      <div className={styles.loginContainer}>
        <h2>Logowanie do systemu <span>PatriAPP</span></h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="username">
              Użytkownik: <span className={styles.tooltip} title="Wpisz login połączony z numerem, które zostały przypisane do Twojego konta. Przykład: jan.nowak#001">*</span>
            </label>
            <input type="text" id="username" name="username" value={loginData.username} onChange={handleInputChange} placeholder="Podaj login użytkownika" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">
              Hasło: <span className={styles.tooltip} title="Wpisz hasło, które zostało przypisane do Twojego konta.">*</span>
            </label>
            <input type="password" id="password" name="password" value={loginData.password} onChange={handleInputChange} placeholder="Podaj hasło" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="pin">
              PIN: <span className={styles.tooltip} title="Wpisz PIN, który został przypisany do Twojego konta.">*</span>
            </label>
            <input type="password" id="pin" name="pin" value={loginData.pin} onChange={handleInputChange} placeholder="Podaj PIN" />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          {notification && (
            <div className={styles.notification}>
              <h3>Uwaga</h3>
              <p>{notification}</p>
            </div>
          )} {/* Wyświetlenie komunikatu o powiadomieniu */}
          <button type="button" onClick={handleLogin}>Zaloguj się do panelu</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;