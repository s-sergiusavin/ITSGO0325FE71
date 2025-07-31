import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './Navigation.module.scss'
import { useState } from 'react';
import logoNoText from '../assets/images/logo-notext.png';



const Navigation = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const toggleAuth = () => {
        isLoggedIn ? navigate('/auth') : navigate('/');
        setIsLoggedIn(prevState => !prevState)
    }

    return (


        <header>

            <nav className={styles.mainNavigation}>
                <ul className={styles.navigation}>
                    <li><a href="feed.html" title="Home"><img
                        src="https://cdn-icons-png.flaticon.com/128/845/845022.png" /></a></li>
                    <li><a href="profile.html" title="My Profile"><img
                        src="https://cdn-icons-png.flaticon.com/128/848/848043.png" /></a></li>
                    <li><a href="#" title="Messages"><img
                        src="https://cdn-icons-png.flaticon.com/128/17435/17435015.png" /></a></li>
                    <li><a href="#" title="Watch videos"><img
                        src="https://cdn-icons-png.flaticon.com/128/482/482059.png" /></a></li>
                </ul>
            </nav>

            <div className={styles.mainSearch}>
                <a href=""><img src={logoNoText} alt="Page Logo" className={styles.logo} /></a>

                <input type="search" className={styles.searchInput} placeholder="Search on AttentionSeeker" />
                <a href="#" className={styles.smallScreenSearch}><img src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
                    alt="" /></a>
            </div>

            <ul className={styles.links}>
                <li><a href="landingPage.html" title="Add new content"><img
                    src="https://cdn-icons-png.flaticon.com/128/8191/8191573.png" /></a></li>
                <li><a href="#" title="View notifications" className={styles.bellIcon}><img
                    src="https://cdn-icons-png.flaticon.com/128/3239/3239958.png" />
                    <span>12</span></a></li>
                <li>
                    <div className={styles.accountSettings}>
                        <button title="Settings" id="accountSettingsBtn" onblur="hideSettingsMenu()"><img
                            src="https://cdn-icons-png.flaticon.com/128/2805/2805373.png" /></button>
                        <div className={styles.accountSettingsMenu}>
                            <button>Settings & privacy</button>
                            <button>Help & support</button>
                            <button>Accesibility</button>
                            <button>Give Feedback</button>
                            <button>Become a developer</button>
                        </div>
                    </div>

                </li>


            </ul>

        </header>
    )
}

export default Navigation;