import Button from "@mui/material/Button";
import styles from "./LeftSide.module.scss";

import PeopleIcon from "@mui/icons-material/People";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CakeIcon from "@mui/icons-material/Cake";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../../../components/Dropdown";

const LeftSide = () => {
  const [isActive, setIsActive] = useState(false);

  const activeHandler = () => {
    setIsActive((prevState) => !prevState);
    console.log("test");
  };
  console.log(isActive);

  return (
    <div className={styles.mainContainer}>
      <Link className={styles.buttons} to='/my-profile'>
        <Button className={styles.button}>Profil</Button>
      </Link>

      <Link className={styles.buttons} to='/friends'>
        <Button className={styles.button}>
          <PeopleIcon />
          Prieteni
        </Button>
      </Link>

      <Link className={styles.buttons} to='/close-friends'>
        <Button className={styles.button}>
          <Diversity1Icon />
          Prieteni Apropiati
        </Button>
      </Link>

      <Link className={styles.buttons} to='/friend-request'>
        <Button className={styles.button}>
          <GroupAddIcon />
          Cererei de prietenie
        </Button>
      </Link>

      <Link className={styles.buttons} to='/groups'>
        <Button className={styles.button}>
          <GroupsIcon />
          Grupuri
        </Button>
      </Link>

      <Link className={styles.buttons} to='/memories'>
        <Button className={styles.button}>
          <CalendarMonthIcon />
          Amintiri
        </Button>
      </Link>

      <Link className={styles.buttons} to='birthdays'>
        <Button className={styles.button}>
          <CakeIcon />
          Zile de nastere
        </Button>
      </Link>

      <Button
        className={styles.button}
        onClick={() => {
          activeHandler();
        }}
      >
        <ExpandMoreIcon />
        Mai multe
      </Button>

      {isActive && <Dropdown elements={["Test", "Acasa", "Setari"]} />}
    </div>
  );
};

export default LeftSide;
