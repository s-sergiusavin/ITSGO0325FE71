import styles from "./Rightside.module.scss";
import Button from "@mui/material/Button";
import RedeemIcon from "@mui/icons-material/Redeem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import feedService from "../../../services/feedService";
import pic from "/src/assets/images/profile.jpg";
import Message from "../../../components/Message";

const Rightside = ({  setActive }) => {
  const GROUPS = [
    {
      name: "Grup Unu",
      img: pic,
    },
    {
      name: "Grup Doi",
      img: pic,
    },
    {
      name: "Grup Trei",
      img: pic,
    },
    {
      name: "Grup Patru",
      img: pic,
    },
    {
      name: "Grup Cinci",
      img: pic,
    },
    {
      name: "Grup Sase",
      img: pic,
    },
    {
      name: "Grup Sapte",
      img: pic,
    },
    {
      name: "Grup Opt",
      img: pic,
    },
    {
      name: "Grup Noua",
      img: pic,
    },
    {
      name: "Grup Zece",
      img: pic,
    },
    {
      name: "Grup Unusprezece",
      img: pic,
    },
  ];

  const [friendsList, setFriendsList] = useState([]);

  const activeHandler = () => {
    setActive((prevState) => !prevState);
  };

  useEffect(() => {
    async function friends() {
      const response = await feedService.getFriends();
      setFriendsList(response);
      return response;
    }
    friends().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.friendsWrapper}>
          <span>Cererei Prietenie</span>

          {friendsList.slice(0, 2).map((request, id) => (
            <div key={Math.random() * 10} className={styles.request}>
              <Link to={`./profile/${id + 52120}`}>
                <span className={styles.personName}>{request.name}</span>
              </Link>
              <div className={styles.buttonsWrapper}>
                <Button className={styles.accept}>Accept</Button>
                <Button className={styles.refuse}>Refuza</Button>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className={styles.birthdayWrapper}>
          <span>Zile de nastere</span>
          {friendsList.slice(4, Math.random() * 9).map((bday, id) => (
            <div key={Math.random() * 10} className={styles.birthday}>
              <RedeemIcon />
              <div className={styles.personBirthday}>
                Astazi este ziua lui:
                <Link to={`./profile/${id + 52120}`}>
                  <div className={styles.personName}>{bday.name}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className={styles.contactsWrapper}>
          <div className={styles.contactsNav}>
            <span>Contacte</span>
          </div>
          <div className={styles.contacts}>
            {friendsList.map((friend, id) => (
              <div key={id} className={styles.friend}>
                <Link to={`/profile/${id}`}>
                  <img
                    className={styles.profilePic}
                    src={friend.profilePic}
                    alt="Profile Pic"
                  />
                </Link>
                <div
                  className={styles.cursorStyle}
                  onClick={activeHandler}
                >
                  {friend.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.groupsWrapper}>
          <div className={styles.groupsNav}>
            <span>Grupuri</span>
          </div>
          <div className={styles.groups}>
            {GROUPS.map((group, id) => (
              <div key={id} className={styles.group}>
                <Link>
                  <img
                    className={styles.profilePic}
                    src={group.img}
                    alt="Profile Pic"
                  />
                </Link>
                <div>{group.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightside;
