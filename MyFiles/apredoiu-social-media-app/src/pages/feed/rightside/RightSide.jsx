import styles from './RightSide.module.scss';

const RightSide = () => {
  return (
    <div className={styles.right}>
      <div className={styles.profileCard}>
        <img src="./src/assets/images/profile.jpg" alt="Alexandra Predoiu" />
        <div className={styles.profileInfo}>
          <h4>Alexandra Predoiu</h4>
          <span>Vision Creator</span>
          <button className={styles.profileButton}>Profile</button>
        </div>
      </div>

      <div className={styles.section}>
        <h3>Who to follow</h3>
        <ul className={styles.followList}>
          <li>
            <img src="https://i.pravatar.cc/40?img=1" alt="Maria Popescu" />
            <span>Maria Popescu</span>
          </li>
          <li>
            <img src="https://i.pravatar.cc/40?img=2" alt="Andrei Ionescu" />
            <span>Andrei Ionescu</span>
          </li>
          <li>
            <img src="https://i.pravatar.cc/40?img=3" alt="Dragos Radu" />
            <span>Dragos Radu</span>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Trending</h3>
        <ul className={styles.trendingList}>
          <li>#webdevelopment</li>
          <li>#eyesee</li>
          <li>#reactvite</li>
          <li>#itschool</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
