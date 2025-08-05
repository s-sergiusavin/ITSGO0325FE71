import { useState, useEffect } from 'react';
import { useRef } from 'react';
import styles from './AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';
import { loginUser, registerUser } from '../../redux/slices/authSlice';
import logo from '../../assets/images/logo.png'

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showFieldError, setShowFieldError] = useState(false);
    const [rememberMeChecked, setRememberMeChecked] = useState(false);


    const user = useSelector(selectUser)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const usernameField = useRef(null);
    const passwordField = useRef(null);


    const clearIdPlaceholder = () => {
        if (usernameField.current) {
            usernameField.current.placeholder = '';
            usernameField.current.style.backgroundColor = 'white';
        }
    }

    const defaultIdPlaceholder = () => {
        if (usernameField.current) {
            usernameField.current.placeholder = 'Enter your e-mail';
            usernameField.current.style.backgroundColor = '#CAE9FF';
        }

    }


    const clearPassPlaceholder = () => {
        if (passwordField.current) {
            passwordField.current.placeholder = '';
            passwordField.current.style.backgroundColor = 'white';
        }
    }

    const defaultPassPlaceholder = () => {
        if (passwordField.current) {
            passwordField.current.placeholder = 'Enter your password';
            passwordField.current.style.backgroundColor = '#CAE9FF';
        }

    }

    const clearInputs = () => {
        usernameField.current.value = '';
        passwordField.current.value = '';
    }


    const toggleAuthState = () => {
        setIsLogin(prevState => !prevState)
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        if (username === '' || password === '') {
            setShowFieldError(true);
            return;
        } //afisam eroare daca campurile sunt goale

        setShowFieldError(false); //sterge eroarea daca exista text in campuri

        const payload = {
            email: username,
            password
        }
        if (isLogin) {
            try {
                await dispatch(loginUser(payload)).unwrap(); //unwrap() forteaza prinderea erorii in catch
                //user.isAuthenticated se seteaza ca fals dar nu se afiseaza alerta
                if (user.isAuthenticated) {
                    navigate('/')
                }
            } catch (err) {
                console.error(err);
                alert('Wrong username or password!')
                clearInputs();
            }
        } else {
            try {
                await dispatch(registerUser(payload));
            } catch (err) {
                console.error(err);
            }
        }

        if (rememberMeChecked) {
            localStorage.setItem('rememberedUsername', username);
        } else {
            localStorage.removeItem('rememberedUsername');
        }
    }



    useEffect(() => {
        const savedUsername = localStorage.getItem('rememberedUsername');
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);


    //displayed content:

    return <div className={styles.authContainer}>
    
    <div className={styles.authLogo}>
        <img src={logo} alt="" />
    </div>
    
    <div className={styles.formContainer}>

        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        <form onSubmit={submitHandler} autoComplete='off' noValidate>
            <div className={styles.formField}>
                {/* <label htmlFor="username">E-mail:</label> */}
                <input type="text" id="username" value={username} placeholder="Enter your e-mail" className={styles.usernameField}
                    ref={usernameField}
                    onClick={clearIdPlaceholder} onBlur={defaultIdPlaceholder} required
                    onChange={e => setUsername(e.target.value)} />
            </div>

            <div className={styles.formField}>
                {/* <label htmlFor="password">Password:</label> */}
                <input type="password" id="password" placeholder="Enter your password" className={styles.passwordField}
                    ref={passwordField}
                    onClick={clearPassPlaceholder} onBlur={defaultPassPlaceholder} required
                    onChange={e => setPassword(e.target.value)} />
            </div>

            {isLogin && (<div className={`${styles.formField} ${styles.rememberUserField}`}>
                <input type="checkbox" id="rememberCheckbox" checked={rememberMeChecked}
                    onChange={e => setRememberMeChecked(e.target.checked)} />
                <label htmlFor="rememberCheckbox" id="rememberMeText">Remember Me</label>
            </div>)}



            <input type="submit" value={isLogin ? 'Log in' : 'Create'} className={styles.loginButton} />

            {showFieldError && (<p className={styles.loginError} >Please fill in all fields!</p>)}


            <a href="#" className={styles.forgotPassword}><strong>Forgot password?</strong></a>
        </form>

        <hr />

        <button className={styles.registerButton} onClick={toggleAuthState} >{isLogin ? 'Create an account' : 'Switch to login'}</button>


    </div>

    </div>
}

export default AuthForm;


//adauga functionalitate cu username already existent