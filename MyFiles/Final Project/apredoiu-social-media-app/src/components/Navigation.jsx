import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';
import { toggleLogin } from '../redux/slices/authSlice';

const Navigation = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = user.isAuthenticated;
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const toggleAuth = () => {
        dispatch(toggleLogin());
        isLoggedIn ? navigate('/auth') : navigate('/');
    }
    return <header>
        <Link to='/'>
            <div className={styles.logo}>eyeSEE</div>
        </Link>

        <nav>
            <ul className={styles.menu}>
                {isLoggedIn &&
                    <>
                        <li className={styles.menuItem}>
                            <NavLink to='/profile'>My Profile</NavLink>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLink to='/friends'> Friends</NavLink>
                        </li>
                        <li className={styles.menuItem}>
                            <NavLink to='/friends'> Events</NavLink>
                        </li>
                    </>}
                <li className={styles.menuItem} onClick={toggleAuth}>
                    <NavLink to='/auth'> {isLoggedIn ? 'Logout' : 'Login'}</NavLink>
                </li>
                <li>{user.email}</li>
            </ul>
        </nav>
    </header>
}

export default Navigation;