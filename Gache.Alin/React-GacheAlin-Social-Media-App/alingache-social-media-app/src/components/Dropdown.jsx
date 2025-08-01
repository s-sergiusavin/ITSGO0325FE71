import styles from "./Dropdown.module.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Dropdown = ({ elements  }) => {
  return (
    <div className={styles.dropdown}>
      {elements.map((elem, index) => (
        <Link key={index+Math.random()} to={elem.toLowerCase()}>
          <Button>{elem}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;
