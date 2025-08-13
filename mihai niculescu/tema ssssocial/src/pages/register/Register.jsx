// src/pages/register/Register.jsx
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Pickme</h3>
          <span className="loginDesc">
            Conectează-te cu prietenii și lumea din jur pe Pickme.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Nume utilizator" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Parolă" className="loginInput" />
            <input placeholder="Parolă, din nou" className="loginInput" />
            <button className="loginRegisterButton">
              Înregistrare
            </button>
            <button className="loginButton">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}