import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.scss";
import { Button, TextField } from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      navigate("/home", { state: { username } });
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <h2>Autentificare</h2>
        <TextField label="Nume utilizator" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "10px" }}>Intră</Button>
      </form>
    </div>
  );
};

export default LoginPage;
