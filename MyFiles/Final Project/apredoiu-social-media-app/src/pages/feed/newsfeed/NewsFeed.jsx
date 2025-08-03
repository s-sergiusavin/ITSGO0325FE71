import { useState } from 'react';
import styles from './NewsFeed.module.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';

import profile from '../../../assets/images/profile.jpg';
import post1 from '../../../assets/images/add.png';
import post2 from '../../../assets/images/add.png';

import CommentsSection from './comments/CommentsSection';

const Reaction = ({ emoji, icon, count, label }) => (
  <div className={styles.reactionBox}>
    {emoji && <span>{emoji}</span>}
    <div className={styles.reactsIcons}>{icon}</div>
    <span>{count} {label}</span>
  </div>
);

const NewsFeed = ({ postData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [isShared, setIsShared] = useState(false);
  const [shares, setShares] = useState(Math.ceil(Math.random() * 100));
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const postImages = [post1, post2];

  const handleLike = () => {
    setLikes(prev => prev + (isLiked ? -1 : 1));
    setIsLiked(prev => !prev);
  };

  const handleShare = () => {
    setShares(prev => prev + (isShared ? -1 : 1));
    setIsShared(prev => !prev);
  };

  const handleAddComment = () => {
    if (commentText.trim() === '') return;

    const newComment = {
      id: Date.now(),
      user: { name: 'Alexandra Predoiu', avatar: profile },
      text: commentText,
      date: 'Now'
    };

    setComments(prev => [...prev, newComment]);
    setCommentText('');
  };

  return (
    <div className={styles.mainPost}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <div className={styles.profileUserInfo}>
            <a href="#">
              <img src={profile} alt="profile" className={styles.profileImage} />
            </a>
            <div className={styles.profileName}>
              <span>Alexandra Predoiu</span>
              <span>16 July 2025</span>
            </div>
          </div>

          <div className={styles.profileOptionsWrapper}>
            <button
              className={styles.profileOptions}
              onClick={() => setShowOptions(prev => !prev)}
            >
              <MoreHorizIcon />
            </button>

            {showOptions && (
              <div className={styles.profileOptionsDropdown}>
                <button>Edit this post</button>
                <button>Remove this post</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <img
              src={postData.image || postImages[postData.id % 2]}
              alt="post"
              className={styles.imgContent}
            />
            <div className={styles.infoIconWrapper}>
              <div className={styles.infoIcon}>
                <InfoIcon fontSize="large" />
              </div>
            </div>
          </div>

          <strong className={styles.postTitle}>
            {postData.title?.charAt(0).toUpperCase() + postData.title?.slice(1)}
          </strong>

          <p className={styles.postDescription}>
            {postData.description?.charAt(0).toUpperCase() + postData.description?.slice(1)}
          </p>
        </div>

        <div className={styles.reacts}>
          <Reaction emoji="👁️" count={likes} label="likes" />
          <Reaction icon={<SendIcon />} count={shares} label="shares" />
        </div>

        <hr />

        <div className={styles.reactsActions}>
          <ul className={styles.actions}>
            <li className={`${styles.reaction} ${isLiked ? styles.touched : ''}`} onClick={handleLike}>
              <ThumbUpIcon />
              <span>Like</span>
            </li>
            <li className={styles.reaction}>
              <ChatIcon />
              <span>Comments</span>
            </li>
            <li className={`${styles.reaction} ${isShared ? styles.touched : ''}`} onClick={handleShare}>
              <SendIcon />
              <span>Share</span>
            </li>
          </ul>
        </div>

        <hr />

        <section className={styles.commentsContainer}>
          <CommentsSection
            comments={comments}
            commentText={commentText}
            setCommentText={setCommentText}
            handleAddComment={handleAddComment}
          />
        </section>
      </div>
    </div>
  );
};

export default NewsFeed;
