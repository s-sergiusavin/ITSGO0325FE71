import styles from './NewsFeed.module.scss'
import profile from '../../../assets/images/profile.jpg'
import post1 from '../../../assets/images/post1.jpeg'
import post2 from '../../../assets/images/post2.webp'
import { useState } from 'react'

const NewsFeed = ({ postData }) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(Math.random() * 100);
    const [isShared, setIsShared] = useState(false);
    const [shares, setShares] = useState(Math.random() * 100);

    const postImages = [post1, post2]



    const handleLike = () => {
        if (!isLiked) {
            setLikes(prevState => prevState + 1)
        } else {
            setLikes(prevState => prevState - 1)
        }
    }



    return (

        <div className={styles.mainPost}>
            <div className={styles.post}>
                <div className={styles.postHeader}>
                    <div className={styles.profileUserinfo}>
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
                            <i className="bi bi-three-dots"></i>
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
                            <i className="bi bi-info-circle infoIcon" tabIndex="1"></i>
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
                        <i className="bi bi-hand-thumbs-up reactsIcons"></i>
                        <span id="likesNumber"></span> <span> likes</span>
                    </div>

                    <div className={styles.commentsInfo}>
                        <span id="sharesNumber"></span> <span> shares</span>
                        <i className="bi bi-send reactsIcons"></i>
                    </div>
                </div>

                <hr />

                <div className={styles.reactsActions}>
                    <ul className={styles.actions}>
                        <li className={styles.reaction} id="likeButton">
                            <i className="bi bi-hand-thumbs-up"></i>
                            <span>Like</span>
                        </li>
                        <li className={styles.reaction} id="commentButton">
                            <i className="bi bi-chat-text"></i>
                            <span>Comments</span>
                        </li>
                        <li className={styles.reaction} id="shareButton">
                            <i className="bi bi-send"></i>
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
                        className={styles.newCommentField}
                        id="commentInput"
                    />
                    <button className={styles.insertCommentButton} id="commentInputButton">
                        <i className="bi bi-send-plus"></i>
                    </button>
                </div>

                <div className={styles.userComments}>
                    <div className={styles.userCommentsContent}>
                        <div className={styles.profileUserComment}>
                            <a href="">
                                <img
                                    src={postImages[postData.id % 2]}
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

    )
}

export default NewsFeed;