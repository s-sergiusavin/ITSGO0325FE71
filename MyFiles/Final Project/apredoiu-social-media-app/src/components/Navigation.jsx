import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';
import { toggleLogin } from '../redux/slices/authSlice';
import logo from '../assets/images/logo.png';

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.isAuthenticated;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleAuth = () => {
    dispatch(toggleLogin());
    isLoggedIn ? navigate('/auth') : navigate('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/landingpage" className={styles.logo}>
           <img src={logo} alt="Logo" className={styles.logo}/>
        </Link>
      </div>

      {isLoggedIn && (
        <div className={styles.searchBar}>
          <input type="text" placeholder="What do you want to discover?" />
        </div>
      )}

      <nav>
        <ul className={styles.menu}>
          {isLoggedIn && (
            <>
              <li className={styles.menuItem}>
                <NavLink to="/profile">My Profile</NavLink>
              </li>
              <li className={styles.menuItem}>
                <NavLink to="/">Feed</NavLink>
              </li>
              <li className={styles.menuItem}>
                <NavLink to="/landingpage">Events</NavLink>
              </li>
            </>
          )}
          <li className={styles.menuItem} onClick={toggleAuth}>
            <NavLink to="/auth">{isLoggedIn ? 'Logout' : 'Login'}</NavLink>
          </li>
          {isLoggedIn && <li className={styles.userEmail}>{user.email}</li>}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
