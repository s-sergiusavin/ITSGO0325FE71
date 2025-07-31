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

        <section className={styles.mainContent}>

            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />

            <div className={styles.post} id="feedPost">

                <div className={styles.postHeader}>

                    <div className={styles.profileUserInfo}>

                        <a href="">
                            <img src="data:image/jpeg;base64,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"
                                alt="profile picture" className={styles.profileImage} />
                        </a>

                        <div className={styles.profileName}>
                            <span><strong>Justin Timberlake</strong></span>
                            <span>July 19 <i className="bi bi-dot"></i> <i className="bi bi-globe-americas"></i> </span>
                        </div>
                        {/* necesar adaugare iconita  */}

                    </div>

                    <div className={styles.profileOptions}>
                        <a href="#" title="Options"><img src="https://cdn-icons-png.flaticon.com/128/2311/2311524.png"
                            alt="" /></a>
                        <a href="#" title="Hide Post" id="hideBtn"><img
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" alt="" /></a>
                    </div>

                </div>

                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        <img src="https://visitabudhabi.ae/-/media/project/vad/where-to-go/about-abu-dhabi/uae-capital-and-surrounds/new-rebrand-images/header/uae-capital-and-surrounds-header.jpg"
                            alt="post content picture" className={styles.imgContent} />


                    </div>



                    <div className={styles.postDescription}>
                        <p>Only one more show to go… and I wanted to take a minute to shout out this incredible tour
                            family.
                            These are the people who keep this whole thing running. You guys don`t get to see everyone
                            on
                            stage, but without every single person in this picture - none of this would be possible. So
                            much
                            love. Let`s do it ONE MORE TIME tomorrow night in Abu Dhabi!</p>


                    </div>



                </div>

                <div className={styles.reacts}>

                    <div className={styles.likesInfo}>
                        <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                            title="Pitbull and 17K other liked this" />
                        <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                            title="Steve Irvin and 7K other loved this" />

                        <span id="reactionsNumber"></span>
                    </div>

                    <div className={styles.commentsInfo}>
                        <span>2.5K comments</span>
                        <span>427 shares</span>
                    </div>

                </div>

                <hr />

                <div className={styles.reactsActions}>

                    <ul className={styles.actions}>

                        <li className={styles.reaction} id="likeBtn">
                            <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt="" className="likeImg"
                                id="likeImg" />
                            <span id="likeText">Like</span>
                        </li>

                        <li className={styles.reaction} id="commBtn">
                            <img src="https://cdn-icons-png.flaticon.com/128/4249/4249907.png" alt="" />
                            <span>Comment</span>
                        </li>

                        <li className={styles.reaction}>
                            <img src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png" alt="" />
                            <span>Send</span>
                        </li>

                        <li className={styles.reaction} id="saveBtn">
                            <img src="https://cdn-icons-png.flaticon.com/128/14610/14610792.png" alt="" id="saveImg" />
                            <span id="saveText">Save</span>
                        </li>

                    </ul>

                </div>

                <hr />

                <form action="" id="addNewComment">

                    <div className={styles.commentSection}>

                        <a href="">
                            <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg"
                                alt="profile picture" className={styles.profileImage} />
                        </a>

                        <input type="text" placeholder="Type a comment" className={styles.newCommentField} id="newCommentText" />
                        <button type="submit" id="insertComm" className={styles.insertComm}><img
                            src="https://cdn-icons-png.flaticon.com/128/60/60539.png" alt=""
                            className={styles.insertCommentButton} title="Send Comment" /></button>



                    </div>

                </form>


                <div id="myComment"></div>

                <div className={styles.userComments}>

                    <div className={styles.userCommentsContent}>

                        <div className={styles.profileUserComment}>

                            <a href="">
                                <img src="https://cdn-icons-png.flaticon.com/128/2102/2102633.png" alt="profile picture"
                                    className={styles.profileImage} />
                            </a>

                        </div>

                        <div className={styles.userCommentText}>

                            <span className={styles.commentUserName}>John User</span> <br />

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet tempora, architecto
                                quas
                                accusamus est ab a suscipit obcaecati asperiores excepturi rem et! Veniam, incidunt?
                                Culpa,
                                facilis? Aliquid, amet doloremque?</p>


                            <div className={styles.emojiReaction}>


                                <span title="352 reactions">352</span>
                                <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                    title="Reactions" />
                                <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                    title="Reactions" />
                                <img src="https://cdn-icons-png.flaticon.com/128/6637/6637195.png" alt=""
                                    className={styles.laughEmoji} title="Reactions" />

                            </div>

                        </div>

                    </div>

                    <div className={styles.commentReaction}>

                        <strong title="Posted 3 hours ago">3h</strong>
                        <strong className={styles.commentReactionButton}>Like</strong>
                        <strong className={styles.commentReactionButton}>Reply</strong>




                    </div>

                </div>


                <div className={styles.userComments}>

                    <div className={styles.userCommentsContent}>

                        <div className={styles.profileUserComment}>

                            <a href="">
                                <img src="https://cdn-icons-png.flaticon.com/128/2102/2102633.png" alt="profile picture"
                                    className={styles.profileImage} />
                            </a>

                        </div>

                        <div className={styles.userCommentText}>

                            <span className={styles.commentUserName}>User Nathalie</span> <br />

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure doloribus debitis molestias
                            dolor soluta quia?

                            <div className={styles.emojiReaction}>


                                <span title="214 reactions">214</span>
                                <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                    title="Reactions" />
                                <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                    title="Reactions" />


                            </div>

                        </div>

                    </div>

                    <div className={styles.commentReaction}>

                        <strong title="Posted 7 hours ago">7h</strong>
                        <strong className={styles.commentReactionButton}>Like</strong>
                        <strong className={styles.commentReactionButton}>Reply</strong>

                    </div>

                </div>

            </div>





        </section>

    )
}

export default NewsFeed;