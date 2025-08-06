// src/pages/login/Login.jsx


export default function Login() {

  const handleLogin = (e) => {
    e.preventDefault(); // Previne reîncărcarea paginii
    console.log("Butonul de login a fost apăsat!");
    alert("Te-ai logat cu succes!");
  };

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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Parolă" className="loginInput" />
            <button className="loginButton" onClick={handleLogin}>Log In</button>
            <span className="loginForgot">Ai uitat parola?</span>
            <button className="loginRegisterButton">
              Creează un cont nou
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}