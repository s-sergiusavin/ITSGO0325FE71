import {NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss'
import logoNoText from '../assets/images/logo-notext.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';
import { toggleLogin } from '../redux/slices/authSlice';
import { useRef, useState } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HelpIcon from '@mui/icons-material/Help';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CampaignIcon from '@mui/icons-material/Campaign';
import TerminalIcon from '@mui/icons-material/Terminal';



const Navigation = () => {


    //Settings button
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);
    const toggleSettingsMenu = () => {
        setShowSettingsMenu(prevState => !prevState)
    }
    const hideSettingsMenu = () => {
       setTimeout(()=>setShowSettingsMenu(false),100) ;
    }


    //Add content button
    const fileInputRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    };



    const user = useSelector(selectUser);
    const isLoggedIn = user.isAuthenticated;
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const toggleAuth = () => {
        dispatch(toggleLogin());
        isLoggedIn ? navigate('/auth') : navigate('/');

    }

    const toggleProfile = () => {

        isLoggedIn ? navigate('/my-profile') : navigate('/');
    }

    return (


        <header>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />

            <nav className={styles.mainNavigation}>
                <ul className={styles.navigation}>
                    <li ><NavLink title='Home' to={'/'} ><img
                        src="https://cdn-icons-png.flaticon.com/128/845/845022.png" /></NavLink></li>
                    <li><NavLink title="My Profile" to={'/my-profile'} onClick={toggleProfile}><img
                        src="https://cdn-icons-png.flaticon.com/128/848/848043.png" /></NavLink></li>
                    <li><NavLink title="Messages" to={'/chat'}><img
                        src="https://cdn-icons-png.flaticon.com/128/17435/17435015.png" /></NavLink></li>
                    <li><NavLink title="Watch videos" to={'/videos'}><img
                        src="https://cdn-icons-png.flaticon.com/128/482/482059.png" /></NavLink></li>
                </ul>
            </nav>

            <div className={styles.mainSearch}>
                <NavLink to={'/'}><img src={logoNoText} alt="Page Logo" className={styles.logo} /></NavLink>

                <input type="search" className={styles.searchInput} placeholder="Search on AttentionSeeker" />
                <a href="#" className={styles.smallScreenSearch}><img src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
                    alt="" /></a>
            </div>

            <ul className={styles.links}>
                <li><a title="Add new content" onClick={handleClick} className={styles.contentBtn}><img
                    src="https://cdn-icons-png.flaticon.com/128/8191/8191573.png" /></a></li>
                <li><a href="#" title="View notifications" className={styles.bellIcon}><img
                    src="https://cdn-icons-png.flaticon.com/128/3239/3239958.png" />
                    <span>12</span></a></li>
                <li>
                    <div className={styles.accountSettings}>

                        <button title="Settings" id="accountSettingsBtn" onClick={toggleSettingsMenu} onBlur={hideSettingsMenu}
                        className={styles.accountSettingsBtn}><img
                            src="https://cdn-icons-png.flaticon.com/128/2805/2805373.png" /></button>

                        {showSettingsMenu && (<div className={styles.accountSettingsMenu}>
                            <button><ManageAccountsIcon sx={{ fontSize: 'xx-large' }} />Settings & privacy<ArrowForwardIosIcon /></button>
                            <button><HelpIcon sx={{ fontSize: 'xx-large' }} />Help & support<ArrowForwardIosIcon /></button>
                            <button><AccessibilityIcon sx={{ fontSize: 'xx-large' }} />Accesibility<ArrowForwardIosIcon /></button>
                            <button><CampaignIcon sx={{ fontSize: 'xx-large' }} />Give Feedback<ArrowForwardIosIcon /></button>
                            <button><TerminalIcon sx={{ fontSize: 'xx-large' }} />Become a developer<ArrowForwardIosIcon /></button>
                        </div>)}


                    </div>

                </li>


            </ul>

            <div className={styles.fileInput}>
                <input type="file" ref={fileInputRef} />
            </div>

        </header>
    )
}

export default Navigation;