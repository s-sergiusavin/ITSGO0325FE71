import { useState } from "react";
import styles from "./AuthForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { loginUser, registerUser } from "../../redux/slices/authSlice";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


const user = useSelector(selectUser)

  const navigate = useNavigate();

const dispatch = useDispatch()

  const toggleAuthState = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler =async (event) => {
    // console.log(event);
    event.preventDefault();
if(isLogin){
  try {
    const payload = {
      email:username,
      password
    }
await dispatch(loginUser(payload))
if(user.isAuthenticated){
  navigate('/')
}
  } catch(err){
    console.log(err)
  }
} else{
  try{
    await dispatch(registerUser(payload))
  } catch(err){
    console.log(err)
  }
}

  };

  const actoinIsNotLoading = (
    <button>{isLogin ? "Login" : "Create a new acc"}</button>
  );

  return (
    <div className={styles.auth}>
      <h2>{isLogin ? "Login" : "Logout"}</h2>
      <form onSubmit={submitHandler} autoComplete="off" noValidate>
        <div className={styles.control}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>

        <div className={styles.actions}>
          {user.error && <p>Please try again</p>}
          {user.loading && <p>Sending Request...</p>}
          {!user.loading && actoinIsNotLoading}
          <button className={styles.toggle} onClick={toggleAuthState}>
            {isLogin ? "Create new account" : "Login with an existing"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
