import styles from './Profile.module.scss';
import { FaInstagram, FaTiktok, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';

const Profile = () => {
  const [editingBio, setEditingBio] = useState(false);
  const [bio, setBio] = useState("👁️ Building eyeSEE - where your vision meets connection.");

  return (
    <main className={styles.profileMain}>
      {/* PROFILE CARD */}
      <section className={styles.profileCard}>
        <div className={styles.bannerWrapper}>
          <div className={styles.bannerGradient}></div>
            <img src="./src//assets/spiral.jpg" alt="Spiral" className={styles.spiralBackground} />
        </div>
        <div className={styles.profileAvatarBox}>
          <img src="./src/assets/profile.jpg" alt="Profile" className={styles.profileAvatar} />
        </div>
        <div className={styles.profileInfo}>
          <h1>Alexandra Predoiu <button className={styles.editButton}><i className="fas fa-pen"></i> Edit</button></h1>
          <div className={styles.actions}>
            <button className={styles.mainBtn}><i className="fas fa-user-plus"></i> Add Friend</button>
            <button className={`${styles.mainBtn} ${styles.outline}`}><i className="far fa-message"></i> Message</button>
          </div>
          <span className={styles.onlineStatus}><i className="fas fa-circle"></i> Online now </span>
          <span className={styles.statusDot}></span>
          <div className={styles.bioSection}>
            {editingBio ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                onBlur={() => setEditingBio(false)}
                className={styles.bioTextarea}
              />
            ) : (
              <p className={styles.vibeTag} onClick={() => setEditingBio(true)}>{bio}</p>
            )}
          </div>
        </div>
      </section>

      {/* PROFILE CONTENT */}
      <section className={styles.profileContent}>

        {/* LEFT SIDEBAR */}
        <aside className={`${styles.profileSide} ${styles.profileAbout}`}>
          <h2>About</h2>
          <ul>
            <li>💡 Building cool things at EyeSEE</li>
            <li>🌱 Loves traveling, skincare, and my cat</li>
            <li>✨ Always learning!</li>
          </ul>
          <hr />
          <h2>Photos</h2>
          <div className={styles.photosGrid}>
            <img src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=200&h=200&fit=crop" alt="WebDev picture" />
            <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop" alt="Skincare picture" />
            <img src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=200&h=200&fit=crop" alt="Travel picture" />
            <img src="https://images.unsplash.com/photo-1607623488989-d22660f2cc17?w=200&h=200&fit=crop" alt="Cat picture" />
          </div>
          <hr />
          <h2>Links</h2>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://alexandra.com" target="_blank" rel="noreferrer"><FaGlobe /></a>
          </div>
        </aside>

        {/* CENTER FEED */}
        <section className={styles.profileFeed}>
          <div className={styles.profileFeedCard}>
            <div className={styles.feedHeader}>
              <img src="./src/assets/profile.jpg" className={styles.feedAvatar} alt="Alexandra" />
              <div>
                <span className={styles.feedUser}>Alexandra Predoiu</span>
                <span className={styles.feedTime}>2 hours ago</span>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className={styles.feedContent}>
              <p>Had a great day working on eyeSEE! 🌟</p>
              <img src="https://source.unsplash.com/random/600x400?workspace" alt="Post" className={styles.feedImg} />
              <video width="100%" controls className={styles.feedVideo}>
                <source src="/assets/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={styles.feedActions}>
              <button><i className="far fa-thumbs-up"></i> Like</button>
              <button><i className="far fa-comment"></i> Comment</button>
              <button><i className="fas fa-share"></i> Share</button>
            </div>
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className={`${styles.profileSide} ${styles.profileFriends}`}>
          <h2>Friends</h2>
          <div className={styles.friendsGrid}>
            <div className={styles.friendItem}>
              <img src="https://source.unsplash.com/random/100x100?man" alt="Friend" />
              <span>Andrei Dumitru</span>
            </div>
            <div className={styles.friendItem}>
              <img src="https://source.unsplash.com/random/100x100?woman" alt="Friend" />
              <span>Catalina Angel</span>
            </div>
          </div>
          <a href="#" className={styles.seeAllFriends}>See all friends</a>
          <hr />
          <h2>Quick Actions</h2>
          <ul className={styles.quickActions}>
            <li><a href="#"><i className="far fa-image"></i> My Photos</a></li>
            <li><a href="#"><i className="fas fa-pencil"></i> Create Post</a></li>
            <li><a href="#"><i className="fas fa-user-gear"></i> Settings</a></li>
            <li><a href="#"><i className="fas fa-shield-halved"></i> Privacy Center</a></li>
          </ul>
        </aside>

      </section>
    </main>
  );
};

export default Profile;