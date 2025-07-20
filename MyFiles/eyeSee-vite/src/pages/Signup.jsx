import React, { useState } from 'react';
import '../styles/login.scss';
import logo from '../assets/logo.png';
import mood from '../assets/loginpic.png';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage('');
      return;
    }

    setErrors({});
    setMessage('Account created successfully!');

    localStorage.setItem('signupUser', JSON.stringify(form));

    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="login-page">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="eyeSEE logo" />
        </div>

        <h2>Create your account</h2>
        <p>Start sharing what you see.</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

          <button type="submit">Sign Up</button>
        </form>

        <div className="link">
          <p>Already have an account? <a href="/signin">Sign in</a></p>
        </div>

        {message && <div className="toast">{message}</div>}
      </div>

      <div className="right">
        <img src={mood} alt="eyeSEE vibe" />
      </div>
    </div>
  );
};

export default Signup;
