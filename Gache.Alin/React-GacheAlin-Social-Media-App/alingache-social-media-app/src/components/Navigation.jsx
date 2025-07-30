import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useState } from "react";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const toggleAuth = () => {
    isLoggedIn ? navigate("/auth") : navigate("/");
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>SocialMediaApp</div>
      </Link>

      <nav>
        <ul className={styles.menu}>
          {/* {isLoggedIn && (
                 )} */}
            <li className={styles.menuItem}>
              <NavLink to="/my-profile">My profile</NavLink>
            </li>
     
          {/* {isLoggedIn && (

             )} */}
            <li className={styles.menuItem}>
              <NavLink to="/friends">Friends</NavLink>
            </li>
         
          <li className={styles.menuItem} onClick={toggleAuth}>
            <NavLink to="/auth">{isLoggedIn ? "Logout" : "Login"}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
