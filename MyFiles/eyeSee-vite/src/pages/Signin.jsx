import React, { useState } from 'react';
import '../styles/login.scss';
import logo from '../assets/logo.png';
import mood from '../assets/loginpic.png';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Logging in with:', { email, password });
    // Future: redirect or auth logic
  };

  return (
    <div className="login-page">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="eyeSEE logo" />
        </div>

        <h2>Log in to your account</h2>
        <p>See the world through your feed.</p>

        <form onSubmit={handleLogin}>
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
          <button type="submit">Log In</button>
        </form>

        <div className="link">
          <p>
            Don’t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>

      <div className="right">
        <img src={mood} alt="eyeSEE mood" />
      </div>
    </div>
  );
};

export default Signin;
