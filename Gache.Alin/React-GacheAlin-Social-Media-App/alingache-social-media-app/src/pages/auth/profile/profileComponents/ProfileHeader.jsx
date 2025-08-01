import styles from "./ProfileHeader.module.scss";
import bgImage from "../../../../assets/images/bgImage.jpg";
import profileImg from "../../../../assets/images/profile.jpg";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";

<img src={bgImage} alt="bgImg" />;

const ProfileHeader = () => {
  const userName = "Alin Gabriel";
  const friendsNumber = Math.floor(Math.random() * 1000);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.userPanel}>
          <div className={styles.bgFoto}>
            <img
              onClick={() => {
                console.log("test");
              }}
              src={bgImage}
              alt="bgImg"
            />
            <div className={styles.userImg}>
              <img src={profileImg} alt="Profile Pic" />
            </div>
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
            <NavLink className={styles.navLink} to={"#1"}>
              Despre
            </NavLink>
            <NavLink className={styles.navLink} to={"#2"}>
              Prieteni
            </NavLink>
            <NavLink className={styles.navLink} to={"#3"}>
              Fotografii
            </NavLink>
            <NavLink className={styles.navLink} to={"#4"}>
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
