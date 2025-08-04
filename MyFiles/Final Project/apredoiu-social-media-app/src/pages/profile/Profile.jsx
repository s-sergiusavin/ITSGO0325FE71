import styles from './Profile.module.scss';
import { FaInstagram, FaTiktok, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';

import profile from './../../assets/images/profile.jpg';
import newsletterImage from './../../assets/images/newsletter join.png';
import videoEyesee from './../../assets/videos/video-eyesee.mp4';
import spiral from './../../assets/images/spiral.jpg';

const Profile = () => {
  const [editingBio, setEditingBio] = useState(false);
  const [bio, setBio] = useState("console.log(''Hello 👁️'')");
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [shares, setShares] = useState({});
  const [commentInput, setCommentInput] = useState({});

  const posts = [
    {
      id: 1,
      username: "Alexandra Predoiu",
      avatar: profile,
      time: "2 hours ago",
      text: "Don’t miss a thing - join our newsletter and get the latest updates first! 🌟",
      image: newsletterImage
    },
    {
      id: 2,
      username: "Alexandra Predoiu",
      avatar: profile,
      time: "5 days ago",
      text: "This isn't just a magnet.. it's eyeSEE. Where vision pulls people together. 💫👁️ #eyeseeapp",
      video: videoEyesee
    }
  ];

  return (
    <main className={styles.profileMain}>
      <section className={styles.profileCard}>
        <div className={styles.bannerWrapper}>
          <div className={styles.bannerGradient}></div>
          <img src={spiral} alt="Spiral" className={styles.spiralBackground} />
        </div>
        <div className={styles.profileAvatarBox}>
          <img src={profile} alt="Profile" className={styles.profileAvatar} />
        </div>
        <div className={styles.profileInfo}>
          <h1>Alexandra Predoiu</h1>
          <div className={styles.actions}>
            <button className={styles.mainBtn}>See Friend</button>
            <button className={`${styles.mainBtn} ${styles.outline}`}>Message</button>
          </div>
          <span className={styles.onlineStatus}> Online now</span>
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

      <section className={styles.profileContent}>
        <aside className={`${styles.profileSide} ${styles.profileAbout}`}>
          <h2>About</h2>
          <ul>
            <li>💡 Building cool things at EyeSEE</li>
            <li>🌱 Loves traveling, skincare, and my cat</li>
            <li>✨ Building eyeSEE</li>
          </ul>
          <hr />
          <h2>Photos</h2>
          <div className={styles.photosGrid}>
            <img src="https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?w=200&h=200&fit=crop" alt="WebDev picture" />
            <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=200&h=200&fit=crop" alt="Skincare picture" />
            <img src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=200&h=200&fit=crop" alt="Travel picture" />
            <img src="https://images.unsplash.com/photo-1607623488989-d22660f2cc17?w=200&h=200&fit=crop" alt="Cat picture" />
          </div>
        </aside>

        <section className={styles.profileFeed}>
          {posts.map(post => (
            <div className={styles.profileFeedCard} key={post.id}>
              <div className={styles.feedHeader}>
                <img src={post.avatar} className={styles.feedAvatar} alt={post.username} />
                <div>
                  <span className={styles.feedUser}>{post.username}</span>
                  <span className={styles.feedTime}>{post.time}</span>
                </div>
              </div>
              <div className={styles.feedContent}>
                <p>{post.text}</p>
                {post.image && (
                  <img src={post.image} alt="Post" className={styles.feedImg} />
                )}
                {post.video && !post.image && (
                  <video width="100%" controls className={styles.feedVideo}>
                    <source src={post.video} type="video/mp4" />
                  </video>
                )}
              </div>
              <div className={styles.feedActions}>
                <button onClick={() => setLikes((prev) => ({
                  ...prev,
                  [post.id]: (prev[post.id] || 0) + 1
                }))}>👍 Like ({likes[post.id] || 0})</button>

                <button onClick={() => setShares((prev) => ({
                  ...prev,
                  [post.id]: (prev[post.id] || 0) + 1
                }))}>📤 Share ({shares[post.id] || 0})</button>

                <button disabled>💬 Comment ({(comments[post.id] || []).length})</button>
              </div>

              <div className={styles.commentInputWrapper}>
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentInput[post.id] || ''}
                  onChange={(e) => setCommentInput((prev) => ({ ...prev, [post.id]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const text = commentInput[post.id]?.trim();
                      if (!text) return;
                      const newComment = { id: Date.now(), text, user: "Alexandra Predoiu", date: "Now" };
                      setComments((prev) => ({
                        ...prev,
                        [post.id]: [...(prev[post.id] || []), newComment]
                      }));
                      setCommentInput((prev) => ({ ...prev, [post.id]: '' }));
                    }
                  }}
                />
              </div>

              <div className={styles.commentList}>
                {(comments[post.id] || []).map((c) => (
                  <div key={c.id} className={styles.comment}>
                    <strong>{c.user}</strong>: {c.text}
                    <span className={styles.commentDate}>{c.date}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <aside className={`${styles.profileSide} ${styles.profileFriends}`}>
          <h2>Friends</h2>
          <div className={styles.friendsGrid}>
            <div className={styles.friendItem}>
              <img src="https://i.pravatar.cc/40?img=7" alt="Friend" />
              <span>Andrei Dumitru</span>
            </div>
            <div className={styles.friendItem}>
              <img src="https://i.pravatar.cc/40?img=16" alt="Friend" />
              <span>Catalina Angel</span>
            </div>
          </div>
          <a href="#" className={styles.seeAllFriends}>See all friends</a>
          <hr />
          <h2>Quick Actions</h2>
          <div className={styles.quickActions}>
            <ul className={styles.quickActionslist}>
              <li>My Photos</li>
              <li>Create Post</li>
              <li>Settings</li>
              <li>Privacy Center</li>
            </ul>
          </div>
          <hr />
          <h2>Links</h2>
          <div className={styles.socialIcons}>
            <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaTiktok /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="#" target="_blank" rel="noreferrer"><FaGlobe /></a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Profile;
