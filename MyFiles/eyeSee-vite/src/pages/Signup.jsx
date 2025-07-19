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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log('Creating account for:', { name, email, password });
    // Future: API request
  };

  return (
    <div className="login-page">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="eyeSEE logo" />
        </div>

        <div className="login-box">
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>

          <div className="link">
            <p>
              Already have an account? <a href="./signin">Sign in</a>
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <img src={mood} alt="eyeSEE vibe" />
      </div>
    </div>
  );
};

export default Signup;
