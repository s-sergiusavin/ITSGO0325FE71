import { useParams } from "react-router-dom";
import ProfileHeader from "./profileComponents/ProfileHeader";
import AboutSection from "./profileComponents/AboutSection";
import styles from "./ProfilePage.module.scss";
import PostSection from "./profileComponents/PostSection";
import NewsFeed from "../../feed/newsfeed/NewsFeed";
import { useEffect, useState } from "react";
import feedService from "../../../services/feedService";

const ProfilePage = () => {
  const [postList, setPostList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getPosts() {
      const response = await feedService.getPost();
      setPostList(response);
      return response;
    }

    getPosts().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className={styles.profileWrapper}>
      <ProfileHeader />
      <div className={styles.profileSections}>
        <AboutSection />
        <div className={styles.postsWrappwer}>
          {postList?.map((post) => (
            <NewsFeed postData={post} key={post.id} className={styles.posts} />
          ))}
        </div>
      </div>
      Profile Page {id}
    </div>
  );
};

export default ProfilePage;
