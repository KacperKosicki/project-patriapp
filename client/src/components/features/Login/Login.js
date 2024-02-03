// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import workersData from '../../../workers.json';
import styles from './Login.module.scss';

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '', pin: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = () => {
    const { username, password, pin } = loginData;
    const user = workersData.find(worker => worker.login === username && worker.password === password && worker.pin === pin);
    if (user) {
      onLogin(user); // Przekazanie informacji o zalogowanym użytkowniku do App.js
      navigate(`/worker/${user.login}`);
    } else {
      alert('Niepoprawne dane logowania');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Logowanie</h2>
      <form>
        <div>
          <label>Użytkownik:</label>
          <input type="text" name="username" value={loginData.username} onChange={handleInputChange} />
        </div>
        <div>
          <label>Hasło:</label>
          <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
        </div>
        <div>
          <label>PIN:</label>
          <input type="password" name="pin" value={loginData.pin} onChange={handleInputChange} />
        </div>
        <button type="button" onClick={handleLogin}>Zaloguj</button>
      </form>
    </div>
  );
};

export default Login;