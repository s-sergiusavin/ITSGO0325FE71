import styles from "./AboutSection.module.scss";
import Button from "@mui/material/Button";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { useEffect } from "react";
import feedService from "../../../../services/feedService";

const AboutSection = () => {
  const aboutInfo = {
    work: "Junior Frontend Dev",
    studys: "UTCB",
    location: "Bucuresti",
    from: "Vulcan HD",
  };

  const [postList, setPostList] = useState([]);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    async function post() {
      const response = await feedService.getPost();
      setPostList(response);
      return response;
    }
    post().catch((error) => {
      console.log(error);
    });

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
      <div className={styles.about}>
        <span> Prezentare</span>
        <Button>Adauta</Button>
        <div className={styles.aboutInfo}>
          <div>
            <BusinessCenterIcon /> Munca: {aboutInfo.work}
          </div>
          <div>
            <SchoolIcon /> Studii: {aboutInfo.studys}
          </div>
          <div>
            <LocationOnIcon /> Locatie: {aboutInfo.location}
          </div>
          <div>
            <HomeIcon /> Din: {aboutInfo.from}
          </div>
        </div>
        <Button>Editeaza</Button>
        <Button>Adauga evenimente</Button>
      </div>
      <div className={styles.photos}>
        <span>Poze</span>
        <div className={styles.photosWrapper}>
          {postList.slice(0, 9).map((photos) => (
            <img className={styles.photo} key={photos.id} src={photos.image} />
          ))}
        </div>
      </div>

      <div className={styles.friends}>
        <span>Prieteni</span>
        <div className={styles.friendsWrapper}>
          {friendsList.slice(0, 9).map((friend) => (
            <div className={styles.friendItem} key={friend.id}>
              <img className={styles.friend} src={friend.profilePic} />
              <span>{friend.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
