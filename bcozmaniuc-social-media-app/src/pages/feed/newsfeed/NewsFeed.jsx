import styles from './NewsFeed.module.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';


import profile from '../../../assets/images/profile.jpg';
import BogdanCozmaniuc from '../../../assets/BogdanCozmaniuc.jpeg';
import post1 from '../../../assets/images/post1.jpeg';
import post2 from '../../../assets/images/post2.jpg';

import main1 from '../../../assets/main1.jpg'
import main2 from '../../../assets/main2.jpg'
import main3 from '../../../assets/main3.jpg'
import main4 from '../../../assets/main4.jpeg'

import CommentsSection from './comments/CommentsSection';
import { useState } from 'react';
import AccountMenu from '../../../components/OptionForImage.jsx'

const NewsFeed = ({ postData }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100)); // Math.round();
    const [isShared, setIsShared] = useState(false);
    const [shares, setShares] = useState(Math.ceil(Math.random() * 100));

    const postImages = [main1, main2, main3, main4];

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
            <div className={styles.PicPlusDescr}>
                <div className={styles.postHeader}>
                    <div className={styles.profileUserInfo}>
                        <a href="">
                            <img
                                src={BogdanCozmaniuc}
                                alt="profile picture"
                                className={styles.profileImage}
                            />
                        </a>
                        <div className={styles.profileName}>
                            <span style={{ fontWeight: 'bold' }}>Bogdan Cozmaniuc</span>
                            <span>16 Apr 2025</span>
                        </div>
                    </div>

                    <div className={styles.profileOptionsWrapper}>
                        <button className={styles.profileOptions}>
                            <AccountMenu />
                        </button>
                        <div className={styles.profileOptionsDropdown}>
                            <button>Edit this post</button>
                            <button>Remove this post</button>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>

                    <strong className={styles.postTitle}>{postData.title?.charAt(0).toUpperCase() + postData.title?.slice(1)}</strong>


                    <p className={styles.postDescription}>
                        {/* Decomentati si comentati liniile urmatoare pt a oscila intre date */}

                        {postData.body?.charAt(0).toUpperCase() + postData.body?.slice(1)}

                        {/* {postData.description?.charAt(0).toUpperCase() + postData.description?.slice(1)} */}
                    </p>

                    <div className={styles.imgWrapper}>
                        <img
                            src={postData.image || postImages[postData.id % 4]}
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
                                temporibus omnis voluptatem. Accusamus, sed!
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <section className={styles.commentsContainer}>
                <CommentsSection />
            </section> */}



            <div className={styles.reactsActions}>
                <ul className={styles.actions}>
                    <li className={`${styles.reaction} ${isLiked ? styles.touched : ''}`}
                        onClick={handleLike}>
                        <div className={isLiked ? styles.likedIconBackground : ''}>
                            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </div>
                        <span>Like</span>
                        <div className={styles.reactsIcons}>
                            <span id="likesNumber" className={styles.reactIconsText}>{likes}</span>
                        </div>
                    </li>

                    <li className={styles.reaction} id="commentButton">
                        <ChatIcon />
                        <span>Comments</span>
                    </li>

                    <li className={`${styles.reaction} ${isShared ? styles.touched : ''}`}
                        onClick={handleShare}>
                        <div className={isShared ? styles.sharedIconBackground : ''}>
                            {isShared ? <SendAndArchiveIcon /> : <SendIcon />}
                        </div>
                        <span>Share</span>
                        <div className={styles.reactsIcons}>


                            <span id="sharesNumber" className={styles.reactIconsText}>{shares}</span>
                        </div>
                    </li>
                </ul>
            </div>

            <hr />

            <div className={styles.commentSection}>
                <a href="">
                    <img
                        src={BogdanCozmaniuc}
                        alt="profile picture"
                        className={styles.profileImage}
                    />
                </a>
                <input
                    type="text"
                    placeholder="Adaugă un comentariu"
                    className={styles.newCommentField}
                    id="commentInput"
                />
                <button className={styles.insertCommentButton} id="commentInputButton">
                    <SendIcon />
                </button>
            </div>

        </div>
    </div >
}

export default NewsFeed;