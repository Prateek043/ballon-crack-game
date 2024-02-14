import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ addToAuthorizedUsers, addToUnauthorizedUsers }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      addToAuthorizedUsers(username);
      navigate('/game');
    } else {
      addToUnauthorizedUsers(username);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container"> 
      <h2>Login Page</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
