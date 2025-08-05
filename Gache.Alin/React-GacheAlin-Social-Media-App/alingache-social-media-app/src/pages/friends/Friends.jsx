import { useEffect, useState } from "react";
import ProfileHeader from "../auth/profile/profileComponents/ProfileHeader";
import styles from "./Friends.module.scss";
import feedService from "../../services/feedService";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Friends = () => {
  const activeHandler = () => {
    console.log("test");
  };

  const [friendsList, setFriendsList] = useState([]);
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
    <div className={styles.mainContainer}>
      <ProfileHeader />

      <div className={styles.frendsContainer}>
        <div className={styles.friends}>
          <span>Prieteni</span>

          <div className={styles.friendsWrapper}>
            {friendsList.map((friend) => (
              <div className={styles.friendItem} key={friend.id}>
                <Link to={`/profile/42${friend.id}42109`}>
                  <img className={styles.friend} src={friend.profilePic} />
                </Link>
                <span>
                  {friend.name}
                  <MoreHorizIcon
                    className={styles.menu}
                    onClick={() => {
                      activeHandler();
                    }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
