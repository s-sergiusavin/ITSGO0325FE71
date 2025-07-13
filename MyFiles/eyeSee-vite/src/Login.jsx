import { useState } from "react";
import styles from "./styles/Login.module.scss";
import logo from "./assets/LOGO.png";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login attempt for ${loginEmail}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registering ${registerName}`);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.formContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />

        <div className={styles.buttonContainer}>
          <button
            className={isLogin ? styles.active : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? styles.active : ""}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <form onSubmit={handleLogin} className={styles.form}>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className={styles.form}>
            <input
              type="text"
              placeholder="Name"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitBtn}>
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
