import React, { useState } from "react";
import "../styles/Login.scss";
import logo from "../assets/logo.png"; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username); 
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome back 👋</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Click here to remember me</label>
          </div>

          <button type="submit" className="login-button">Login</button>

          <div className="login-links">
             <a href="/" className="forgot-link">Forgot password?</a>
             <p className="no-account">
               I don’t have an account yet —{" "}
               <a href="/" className="create-link">Create an account</a>
             </p>
           </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
