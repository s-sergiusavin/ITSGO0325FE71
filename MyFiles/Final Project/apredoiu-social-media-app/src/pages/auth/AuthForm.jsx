import { useState } from 'react';
import styles from './AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { loginUser, registerUser } from '../../redux/slices/authSlice';

import logo from '../../assets/images/logo.png';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const user = useSelector(selectUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleAuthState = (e) => {
        e.preventDefault(); // prevent form submit on toggle
        setIsLogin(prevState => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const payload = {
            email: username,
            password
        };
        try {
            if (isLogin) {
                await dispatch(loginUser(payload));
                if (user.isAuthenticated) {
                    navigate('/');
                }
            } else {
                await dispatch(registerUser(payload));
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.auth}>
            <img src={logo} alt="eyeSEE Logo" className={styles.logo} />
<p className={styles.tagline}>Where your vision meets connection.</p>

            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={submitHandler} autoComplete="off" noValidate>
                <div className={styles.control}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        required
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>

                <div className={styles.control}>
                    <label htmlFor="password">Password</label>
                    
                    <input 
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Enter your password"
                        required
  onChange={(e) => setPassword(e.target.value)}
                        
                    />
                <button type="button" className={styles.togglePassword} onClick={() => setShowPassword(!showPassword)}>
  {showPassword ? "Hide password" : "Show password"}
</button>
                </div>

              {isLogin && (
  <div className={styles.extraOptions}>
    <label>
      <input type="checkbox" /> Remember me
    </label>
    <a href="#" className={styles.forgotLink}>Forgot password?</a>
  </div>
)}  

                <div className={styles.actions}>
                    {user.error && <p>Please try again...</p>}
                    {user.loading && <p>Sending request...</p>}
                    {!user.loading && (
                        <button type="submit">
                            {isLogin ? 'Login' : 'Create new account'}
                        </button>
                    )}
                    <button className={styles.toggle} onClick={toggleAuthState}>
                        {isLogin
                            ? 'Create new account'
                            : 'Login with an existing account'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthForm;
