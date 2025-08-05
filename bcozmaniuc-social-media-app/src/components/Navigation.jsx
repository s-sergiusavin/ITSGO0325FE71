import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';
import { toggleLogin } from '../redux/slices/authSlice';


import LogoutIcon from '@mui/icons-material/Logout';
import BogdanCozmaniuc from '../assets/BogdanCozmaniuc.jpeg';

import IconLabelTabs from './IconLabelTabs';

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
      <div className={styles.logo}>Social Media App</div>
    </Link>

    <nav>
      <ul className={styles.menu}>
        {isLoggedIn &&
          <>
            <li><IconLabelTabs /></li>
          </>}
      </ul>
    </nav>

    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItemMyProfile}>
          <NavLink to='/Profile'><img className={styles.BogdanCozmaniucImageNavBar} src={BogdanCozmaniuc} alt="" /></NavLink>
        </li>
        <li className={styles.menuItem} onClick={toggleAuth}>
          <NavLink to='/auth'> <LogoutIcon />{isLoggedIn ? 'Logout' : 'Login'}</NavLink>
        </li>
        <li>{user.email}</li>

      </ul>
    </nav>
  </header>
}

export default Navigation;