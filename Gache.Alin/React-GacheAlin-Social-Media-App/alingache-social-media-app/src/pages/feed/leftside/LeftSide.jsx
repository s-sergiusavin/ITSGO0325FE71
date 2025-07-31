import Button from "@mui/material/Button";
import styles from "./LeftSode.module.scss";

import PeopleIcon from "@mui/icons-material/People";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CakeIcon from "@mui/icons-material/Cake";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <div className={styles.mainContainer}>
      <Button className={styles.buttons}>
        <Link to="/my-profile">PROFIL</Link>
      </Button>
      <Button className={styles.buttons}>
        <PeopleIcon />
        Prieteni
      </Button>
      <Button className={styles.buttons}>
        <Diversity1Icon />
        Prieteni Apropiati
      </Button>
      <Button className={styles.buttons}>
        <GroupAddIcon />
        Cererei de prietenie
      </Button>
      <Button className={styles.buttons}>
        <GroupsIcon />
        Grupuri
      </Button>
      <Button className={styles.buttons}>
        <CalendarMonthIcon />
        Amintiri
      </Button>
      <Button className={styles.buttons}>
        <CakeIcon />
        Zile de nastere
      </Button>
      <Button className={styles.buttons}>
        <ExpandMoreIcon />
        Mai multe
      </Button>
    </div>
  );
};

export default LeftSide;
