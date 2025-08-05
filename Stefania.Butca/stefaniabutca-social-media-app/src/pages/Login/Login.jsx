import React, { useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../assets/logo.svg";

const LoginPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const regexEmailPattern = /\D{4,}@\D{4,}\.\D{2,}/g;

  const showError = (message) => {
    setErrorMessage(message);
  };

  const validateEmail = (emailValue) => !!emailValue.match(regexEmailPattern);

  const validatePassword = (passwordValue) => passwordValue.length > 3;

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSwitch = () => {
    setIsLoginPage(!isLoginPage);
    setErrorMessage("");
    clearInputs();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (email === "" || password === "") {
      showError("All fields are required and must contain a value!");
      return;
    }

    if (validateEmail(email) && validatePassword(password)) {
      try {
        if (isLoginPage) {
          // LOGIN request
          await login(password);
          clearInputs();
          window.open("feed.html", "_self");
        } else {
          // SIGN UP request
          await createAccount(email, password);
          clearInputs();
          window.open("login.html", "_self");
        }
      } catch {
        showError("Server error. Try again later.");
      }
    } else {
      alert("Try again");
      showError("Incorrect email or password");
      clearInputs();
    }
  };

  const login = async () => {
    const loginUrl = "https://reqres.in/api/login";

    // For test purposes
    const loginData = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify(loginData),
    });

    return response.json();
  };

  const createAccount = async (emailValue, passwordValue) => {
    const registerUrl = "https://reqres.in/api/register";

    // Use provided values for registration
    const registerData = {
      email: emailValue,
      password: passwordValue,
    };

    const response = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify(registerData),
    });

    return response.json();
  };

  return (
    <div className={styles.loginPage}>
      {/* ----- MAIN CONTENT ----- */}
      <div className={styles.pageContainer}>
        {/* LEFT SECTION */}
        <section className={styles.leftContent}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.leftContentText}>
            <h1>Connect over what you love with the ones who understand you.</h1>
          </div>
        </section>

        {/* RIGHT SECTION - FORM */}
        <section className={styles.formContainer}>
          <h1 id="headerTitle">{isLoginPage ? "Login" : "Create new account"}</h1>

          <form className={styles.loginInfo} onSubmit={handleSubmit}>
            <div className={styles.formField}>
              <input
                type="text"
                id="username"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="username">Phone number, email or username</label>
            </div>

            <div className={styles.formField}>
              <input
                type="password"
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            {errorMessage && (
              <p id="error" style={{ color: "red", fontSize: "14px" }}>
                {errorMessage}
              </p>
            )}

            <input
              type="submit"
              id="loginButton"
              value={isLoginPage ? "Login" : "Sign up"}
              className={styles.loginButton}
            />

            <a
              href="#"
              id="forgotPassword"
              style={{ visibility: isLoginPage ? "visible" : "hidden" }}
            >
              <strong>Forgot password?</strong>
            </a>
          </form>

          <hr />
          <button
            id="switchButton"
            className={styles.registerButton}
            onClick={handleSwitch}
          >
            {isLoginPage
              ? "Switch to create new account"
              : "Switch to login page"}
          </button>
        </section>
      </div>

      {/* ----- FOOTER ----- */}
      <footer className={styles.footerContent}>
        <p>© 2023 Bloom. All rights reserved.</p>
        <p>Privacy Policy</p>
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
        <p>Help</p>
        <p>Terms</p>
        <p>Contact</p>
        <p>Location</p>
        <p>Cookie Settings</p>
      </footer>
    </div>
  );
};

export default LoginPage;
