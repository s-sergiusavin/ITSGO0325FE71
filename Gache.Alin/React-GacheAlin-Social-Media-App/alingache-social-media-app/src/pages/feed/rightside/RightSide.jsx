import styles from "./Rightside.module.scss";
import Button from "@mui/material/Button";

const Rightside = () => {
  const friendsRequests = [
    "Alex Maru",
    "Cristina Matei",
    "Daniel Floarea",
    "Ursu Cosmin",
  ];

  return (
    <div className={styles.mainContainer}>
      <div>
        <span>Cererei Prietenie</span>
        {friendsRequests.slice(0, 2).map((request) => (
          <div className="CERERE">
            <span>{request}</span>
            <div>
              <Button>Accept</Button>
              <Button>Refuza</Button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div>
        <span>Zile de nastere</span>
      </div>
      <hr />
      <div>
        <span>Contacte</span>
      </div>
      <hr />
      <div>
        <span>Grupuri</span>
      </div>
    </div>
  );
};

export default Rightside;
