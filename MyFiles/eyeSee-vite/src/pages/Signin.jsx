import React, { useState } from 'react';
import '../styles/login.scss';
import logo from '../assets/logo.png';
import mood from '../assets/loginpic.png';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage('');
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const user = JSON.parse(localStorage.getItem('signupUser'));

      if (user && user.email === email && user.password === password) {
        setMessage('Login successful!');
        localStorage.setItem('user', JSON.stringify(user)); 
        setTimeout(() => {
          navigate('/home'); 
        }, 1000);
      } else {
        setMessage('Invalid credentials');
      }

      setTimeout(() => setMessage(''), 3000);
    }, 1500);
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
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <button type="submit">{loading ? 'Logging in...' : 'Log In'}</button>
        </form>

        <div className="link">
          <p>Don’t have an account? <a href="/signup">Sign up</a></p>
        </div>

        {message && <div className="toast">{message}</div>}
      </div>

      <div className="right">
        <img src={mood} alt="eyeSEE mood" />
      </div>
    </div>
  );
};

export default Signin;
