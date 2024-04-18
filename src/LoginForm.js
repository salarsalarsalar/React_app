// src/LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file for styling

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform your login logic here, such as sending the credentials to a server
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add more logic like validation, authentication, etc.
  };

  return (
    <div className="container">
      <div className="logo">
          <g>
            <img src="/logo.png" alt="Logo" style={{ display: 'inline-block' }} />
            <div className="logo-text" style={{ display: 'inline-block' }}>Consilium</div>
          </g>
      </div>
      <div className="form-container">
        <div className="form">
          <h3>Sign In to Your Account</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="link">Forgot Something?</a>
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
