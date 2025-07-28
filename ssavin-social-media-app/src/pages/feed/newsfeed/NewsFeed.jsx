import styles from './NewsFeed.module.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';

import profile from '../../../assets/images/profile.jpg';
import post1 from '../../../assets/images/post1.jpeg';
import post2 from '../../../assets/images/post2.jpg';
import CommentsSection from './comments/CommentsSection';
import { useState } from 'react';

const NewsFeed = ({ postData }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100)); // Math.round();
    const [isShared, setIsShared] = useState(false);
    const [shares, setShares] = useState(Math.ceil(Math.random() * 100));

    const postImages = [post1, post2];

    const handleLike = () => {
        if (!isLiked) {
            setLikes(prevState => prevState + 1)
        } else {
            setLikes(prevState => prevState - 1)
        }

        setIsLiked(prevState => !prevState)
    }

    const handleShare = () => {
        if (!isShared) {
            setShares(prevState => prevState + 1)
        } else {
            setShares(prevState => prevState - 1)
        }

        setIsShared(prevState => !prevState)
    }

    return <div className={styles.mainPost}>
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.profileUserInfo}>
                    <a href="">
                        <img
                            src={profile}
                            alt="profile picture"
                            className={styles.profileImage}
                        />
                    </a>
                    <div className={styles.profileName}>
                        <span>Sergiu Savin</span>
                        <span>16 Apr 2025</span>
                    </div>
                </div>

                <div className={styles.profileOptionsWrapper}>
                    <button className={styles.profileOptions}>
                        <MoreHorizIcon />
                    </button>
                    <div className={styles.profileOptionsDropdown}>
                        <button>Edit this post</button>
                        <button>Remove this post</button>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.imgWrapper}>
                    <img
                        src={postImages[postData.id % 2]}
                        alt="post content picture"
                        className={styles.imgContent}
                    />

                    <div className={styles.infoIconWrapper}>
                        <div className={styles.infoIcon}>
                            <InfoIcon fontSize="large" />
                        </div>
                        <p className={styles.infoMessage}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                            deleniti optio maiores ab libero, pariatur corporis sapiente
                            provident est iste, excepturi quidem amet quibusdam impedit
                            temporibus omnis voluptatem. Accusamus, sed! <a href="landingPage.html">Read more...</a>
                        </p>
                    </div>
                </div>

                <strong className={styles.postTitle}>{postData.title.charAt(0).toUpperCase() + postData.title.slice(1)}</strong>

                <p className={styles.postDescription}>
                    {postData.body.charAt(0).toUpperCase() + postData.body.slice(1)}
                </p>

                <a href="landingPage.html"><strong>Read more...</strong></a>
            </div>

            <div className={styles.reacts}>
                <div className={styles.likesInfo}>
                    <span>&#128525;</span>
                    <div className={styles.reactsIcons}>
                        <ThumbUpIcon />
                    </div>

                    {/* Refactor this */}
                    <span id="likesNumber">{likes} likes</span>
                </div>

                <div className={styles.commentsinfo}>
                    {/* refactor this */}
                    <span id="sharesNumber">{shares} shares</span>
                    <div className={styles.reactsIcons}>
                        <SendIcon />
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.reactsActions}>
                <ul className={styles.actions}>
                    <li className={`${styles.reaction} ${isLiked ? styles.touched : ''}`} onClick={handleLike}>
                        <ThumbUpIcon />
                        <span>Like</span>
                    </li>
                    <li className={styles.reaction} id="commentButton">
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

            <div className={styles.commentSection}>
                <a href="">
                    <img
                        src={profile}
                        alt="profile picture"
                        className={styles.profileImage}
                    />
                </a>
                <input
                    type="text"
                    placeholder="Adauga un comentariu"
                    className="newCommentField"
                    id="commentInput"
                />
                <button className={styles.insertCommentButton} id="commentInputButton">
                    <SendAndArchiveIcon />
                </button>
            </div>

            <section className={styles.commentsContainer}>
                <CommentsSection />
            </section>


        </div>
    </div>
}

export default NewsFeed;