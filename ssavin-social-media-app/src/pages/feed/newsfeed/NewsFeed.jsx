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

const NewsFeed = ({postData}) => {
    const postImages = [post1, post2];

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
                            <InfoIcon />
                        </div>
                        <p className={styles.infoMessage}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                            deleniti optio maiores ab libero, pariatur corporis sapiente
                            provident est iste, excepturi quidem amet quibusdam impedit
                            temporibus omnis voluptatem. Accusamus, sed! <a href="landingPage.html">Read more...</a>
                        </p>
                    </div>
                </div>

                <strong className={styles.postTitle}>Titlul postarii</strong>

                <p className={styles.postDescription}>
                    Aceasta este prima postare facuta pe reteaua de socializare create
                    de mine in timpul cursului de Front End Development
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
                    <span id="likesNumber"></span> <span> likes</span>
                </div>

                <div className={styles.commentsinfo}>
                    {/* refactor this */}
                    <span id="sharesNumber"></span> <span> shares</span>
                    <div className={styles.reactsIcons}>
                        <SendIcon/>
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.reactsActions}>
                <ul className={styles.actions}>
                    <li className={styles.reaction} id="likeButton">
                        <ThumbUpIcon />
                        <span>Like</span>
                    </li>
                    <li className={styles.reaction} id="commentButton">
                        <ChatIcon/>
                        <span>Comments</span>
                    </li>
                    <li className={styles.reaction} id="shareButton">
                        <SendIcon/>
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
                    <SendAndArchiveIcon/>
                </button>
            </div>

            <div className={styles.userComments}>
                <div className={styles.userCommentsContent}>
                    <div className={styles.profileUserComment}>
                        <a href="">
                            <img
                                src={profile}
                                alt="profile picture"
                                className={styles.profileImage}
                            />
                        </a>
                        <span>User Name</span>
                    </div>

                    <div className={styles.userCommentText}>
                        <div id="commentMessage">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Porro consequatur nemo nisi quasi dignissimos quisquam
                            explicabo suscipit possimus modi similique mollitia voluptatem
                            molestias ipsam, excepturi illum? Adipisci aperiam qui
                            voluptatem.
                        </div>
                        <div className={styles.emojiReaction}>&#128526;</div>
                        <span id="removeCommentButton">Remove this comment</span>
                    </div>

                    <div className={styles.commentReaction}>
                        <strong className={styles.commentReactionButton}>Like</strong>
                        <strong className={styles.commentReactionButton}>Comment</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default NewsFeed;