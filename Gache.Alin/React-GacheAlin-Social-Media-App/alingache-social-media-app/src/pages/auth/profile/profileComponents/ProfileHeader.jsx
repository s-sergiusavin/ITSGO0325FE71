import styles from "./ProfileHeader.module.scss";
import bgImage from "../../../../assets/images/bgImage.jpg";
import profileImg from "../../../../assets/images/profile.jpg";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

<img src={bgImage} alt="bgImg" />;

const ProfileHeader = () => {
  const userName = "Alin Gabriel";
  const friendsNumber = Math.floor(Math.random() * 1000);
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <div className={styles.header}>
        {isActive && (
          <div className={styles.displayBgImage}>
            <img src={bgImage} />
            <CloseIcon className={styles.closeIcon}
              onClick={() => {
                console.log("test");
                setIsActive((prevState) => !prevState);
              }}
            />
          </div>
        )}
        <div className={styles.userPanel}>
          <div className={styles.bgFoto}>
            <img
              onClick={() => {
                console.log("test");
                setIsActive((prevState) => !prevState);
              }}
              src={bgImage}
              alt="bgImg"
            />
          </div>
          <div className={styles.userImg}>
            <img src={profileImg} alt="Profile Pic" />
          </div>
          <div className={styles.userMenu}>
            <div className={styles.userInfo}>
              <div className={styles.userName}>
                {userName}
                <div className={styles.friendsNumber}>
                  Prieteni: {friendsNumber}
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <Button className={styles.button}>Adauga Poveste</Button>
              <Button className={styles.button}>Editeaza Profil</Button>
              <Button className={styles.button}>
                <ExpandMoreIcon />
              </Button>
            </div>
          </div>
          <hr className={styles.divider} />
          <div className={styles.userShortcuts}>
            <NavLink className={styles.navLink} to={"/"}>
              Postari
            </NavLink>
            <NavLink className={styles.navLink} to={"/about"}>
              Despre
            </NavLink>
            <NavLink className={styles.navLink} to={"/friends"}>
              Prieteni
            </NavLink>
            <NavLink className={styles.navLink} to={"/photos"}>
              Fotografii
            </NavLink>
            <NavLink className={styles.navLink} to={"/videos"}>
              Video
            </NavLink>
            <div className={styles.navLink}>
              Mai multe <ExpandMoreIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
