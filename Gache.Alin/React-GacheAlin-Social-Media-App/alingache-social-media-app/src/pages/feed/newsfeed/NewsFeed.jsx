import styles from "./NewsFeed.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoIcon from "@mui/icons-material/Info";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import profile from "../../../assets/images/profile.jpg";
// import post1 from "../../../assets/images/post1.jpeg";
// import post2 from "../../../assets/images/post2.jfif";
import CommentsSection from "./comments/CommentsSection";
import { useState } from "react";

const NewsFeed = ({ postData, className }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100)); //Math.round()
  const [isShared, setIsShared] = useState(false);
  const [shares, setShares] = useState(Math.ceil(Math.random() * 100));

  // const postImages = [post1, post2];

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prevState) => prevState + 1);
    } else {
      setLikes((prevState) => prevState - 1);
    }
    setIsLiked((prevState) => !prevState);
  };

  const handleShare = () => {
    if (!isShared) {
      setShares((prevState) => prevState + 1);
    } else {
      setShares((prevState) => prevState - 1);
    }
    setIsShared((prevState) => !prevState);
  };

  return (
    <div className={styles.mainPost}>
      <div className={`${styles.post} ${className}`}>
        <div className={styles.postHeader}>
          <div className={styles.profileUserInfo}>
            <a href="#">
              <img
                src={profile}
                alt="profile picture"
                className={styles.profileImage}
              />
            </a>
            <div className={styles.profileName}>
              <span>Alin Gabriel</span>
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
              src={postData?.image}
              alt="post content picture"
              className={styles.imgContent}
            />

            <div className={styles.infoIconWrapper}>
              <div className={styles.infoIcon}>
                <InfoIcon fontSize="large" />
              </div>
              <p className={styles.infoMessage}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellendus et deleniti commodi nisi nobis accusantium sed
                reprehenderit voluptate, optio aspernatur quisquam eveniet dicta
                ipsum quos doloremque quibusdam possimus? Officia, harum.
                <a href="landingPage.html">Read more...</a>
              </p>
            </div>
          </div>

          <strong className={styles.postTitle}>
            {postData?.title.charAt(0).toUpperCase() +
              postData?.title?.slice(1)}
          </strong>

          <p className={styles.postDescription}>
            {postData?.description?.charAt(0).toUpperCase() +
              postData?.description?.slice(1)}
          </p>

          <a href="landingPage.html">
            <strong>Read more...</strong>
          </a>
        </div>

        <div className={styles.reacts}>
          <div className={styles.likesInfo}>
            <div className={styles.reactsIcons}>
              <ThumbUpIcon />
              <span id="likedNumber"> {likes} likes</span>
            </div>
            {/* Refactor this */}
          </div>

          <div className={styles.commentsinfo}>
            <div className={styles.reactsIcons}>
              <SendIcon />
              <span>{shares} shares</span>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.reactsActions}>
          <ul className={styles.actions}>
            <li
              className={`${styles.reaction}  ${isLiked ? styles.touched : ""}`}
              onClick={handleLike}
            >
              <ThumbUpIcon />
              <span>Like</span>
            </li>
            <li className={styles.reaction} id="commentButton">
              <ChatIcon />
              <span>Comments</span>
            </li>
            <li
              className={`${styles.reaction}  ${
                isShared ? styles.touched : ""
              }`}
              onClick={handleShare}
            >
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

          <div className={styles.postCommentSection}>
            <input
              type="text"
              placeholder="Adauga un comentariu"
              className={styles.newCommentField}
              id="commentInput"
            />
            <p id="fieldErrorMessage" className={styles.fieldError}></p>
          </div>

          <button
            className={styles.insertCommentButton}
            id="commentInputButton"
          >
            <SendAndArchiveIcon />
          </button>
        </div>

        <section className={styles.commentsContainer}>
          <CommentsSection />
        </section>
      </div>

      {/* <div className={styles.post}>
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
                <span>Alin Gabriel</span>
                <span>16 Apr 2025</span>
              </div>
            </div>

            <a href="#" className={styles.profileOptions}
              ><i className="bi bi-three-dots"></i
            ></a>
          </div>

          <div className={styles.content}>
            <div className={styles.imgWrapper}>
              <img
                src="../assets/city.jpeg"
                alt="post content picture"
                className={styles.imgContent}
              />

              <a href="landingPage.html"
                ><i className="bi bi-info-circle infoIcon"></i
              ></a>
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
              <i className="bi bi-hand-thumbs-up reactsIcons"></i>
              <span>10 likes</span>
            </div>

            <div className={styles.commentsinfo}>
              <span>15 comments</span>
              <i className="bi bi-chat-text reactsIcons"></i>
            </div>
          </div>

          <hr />

          <div className={styles.reactsActions}>
            <ul className={styles.actions}>
              <li className={styles.reaction}>
                <i className="bi bi-hand-thumbs-up"></i>
                <span>Like</span>
              </li>
              <li className={styles.reaction}>
                <i className="bi bi-chat-text"></i>
                <span>Comments</span>
              </li>
              <li className={styles.reaction}>
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
            />
            <button className={styles.insertCommentButton}>
              <i className="bi bi-send-plus"></i>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                consequatur nemo nisi quasi dignissimos quisquam explicabo
                suscipit possimus modi similique mollitia voluptatem molestias
                ipsam, excepturi illum? Adipisci aperiam qui voluptatem.
                <div className={styles.emojiReaction}>&#128526;</div>
              </div>

              <div className={styles.commentReaction}>
                <strong className={styles.commentReactionButton}>Like</strong>
                <strong className={styles.commentReactionButton}>Comment</strong>
              </div>
            </div>
          </div>
        </div> */}
      {/* 
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
                <span>Alin Gabriel</span>
                <span>16 Apr 2025</span>
              </div>
            </div>

            <a href="#" className={styles.profileOptions}
              ><i className="bi bi-three-dots"></i
            ></a>
          </div>

          <div className={styles.content}>
            <div className={styles.imgWrapper}>
              <div className="w3-content w3-display-container">
                <img className="mySlides" src="../assets/paris1.webp" />
                <img className="mySlides" src="../assets/paris3.jfif" />
                <img className="mySlides" src="../assets/paris5.webp" />
                <img className="mySlides" src="../assets/paris2.avif" />
                <img className="mySlides" src="../assets/paris4.webp" />
                <img className="mySlides" src="../assets/paris6.jpg" />
                <div
                  className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle"
                  style="width: 100%"
                >
                  <div
                    className="w3-left w3-hover-text-khaki"
                    onclick="plusDivs(-1)"
                  >
                    &#10094;
                  </div>
                  <div
                    className="w3-right w3-hover-text-khaki"
                    onclick="plusDivs(1)"
                  >
                    &#10095;
                  </div>
                  <span
                    className="w3-badge demo w3-border w3-transparent w3-hover-white"
                    onclick="currentDiv(1)"
                  ></span>
                  <span
                    className="w3-badge demo w3-border w3-transparent w3-hover-white"
                    onclick="currentDiv(2)"
                  ></span>
                  <span
                    className="w3-badge demo w3-border w3-transparent w3-hover-white"
                    onclick="currentDiv(3)"
                  ></span>
                  <span
                    className="w3-badge demo w3-border w3-transparent w3-hover-white"
                    onclick="currentDiv(4)"
                  ></span>
                  <span
                    className="w3-badge demo w3-border w3-transparent w3-hover-white"
                    onclick="currentDiv(5)"
                  ></span>
                  <span
                    className="w3-badge demo w3-border w3-transparent w3-hover-white"
                    onclick="currentDiv(6)"
                  ></span>
                </div>
              </div>
            </div>

            <strong className={styles.postTitle}>Paris, Franta</strong>

            <p className={styles.postDescription}>
              Aceasta este prima postare facuta pe reteaua de socializare create
              de mine in timpul cursului de Front End Development
            </p>

            <a href="landingPage.html"><strong>Read more...</strong></a>
          </div>

          <div className={styles.reacts}>
            <div className={styles.likesInfo}>
             
              <span>&#128525;</span>
              <i className="bi bi-hand-thumbs-up reactsIcons"></i>
              <span>14 likes</span>
            </div>

            <div className={styles.commentsinfo}>
              <span>16 comments</span>
              <i className="bi bi-chat-text reactsIcons"></i>
            </div>
          </div>

          <hr />

          <div className={styles.reactsActions}>
            <ul className={styles.actions}>
              <li className={styles.reaction}>
                <i className="bi bi-hand-thumbs-up"></i>
                <span>Like</span>
              </li>
              <li className={styles.reaction}>
                <i className="bi bi-chat-text"></i>
                <span>Comments</span>
              </li>
              <li className={styles.reaction}>
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
            />
            <button className={styles.insertCommentButton}>
              <i className="bi bi-send-plus"></i>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                consequatur nemo nisi quasi dignissimos quisquam explicabo
                suscipit possimus modi similique mollitia voluptatem molestias
                ipsam, excepturi illum? Adipisci aperiam qui voluptatem.
                <div className={styles.emojiReaction}>&#128526;</div>
              </div>

              <div className={styles.commentReaction}>
                <strong className={styles.commentReactionButton}>Like</strong>
                <strong className={styles.commentReactionButton}>Comment</strong>
              </div>
            </div>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                consequatur nemo nisi quasi dignissimos quisquam explicabo
                suscipit possimus modi similique mollitia voluptatem molestias
                ipsam, excepturi illum? Adipisci aperiam qui voluptatem.
                <div className={styles.emojiReaction}>&#128526;</div>
              </div>

              <div className={styles.commentReaction}>
                <strong className={styles.commentReactionButton}>Like</strong>
                <strong className={styles.commentReactionButton}>Comment</strong>
              </div>
            </div>
          </div>
        </div> */}

      {/* <div className={styles.post}>
          <div className={styles.postHeader}>
            <div className={styles.profileUserInfo}>
              <a href="#">
                <img
              src={profile}
                  alt="profile picture"
                  className={styles.profileImage}
                  id="profilePic"
                />
              </a>
              <div className={styles.profileName}>
                <span id="userName"></span>
                <span id="postDate">16 Apr 2025</span>
              </div>
            </div>

            <div className={styles.profileOptionsWrapper}>
              <button className={styles.profileOptions}>
                <i className="bi bi-three-dots"></i>
              </button>
              <div className={styles.profileOptionsDropdown}>
                <button>Edit this post</button>
                <button id="removePost">Remove this post</button>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.imgWrapper}>
              <img
                src="../assets/city.jpeg"
                alt="post content picture"
                className={styles.imgContent}
              />

              <div className={styles.infoIconWrapper}>
                <i className="bi bi-info-circle infoIcon" tabindex="1"></i>
                <p className={styles.infoMessage} >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus et deleniti commodi nisi nobis accusantium sed
                  reprehenderit voluptate, optio aspernatur quisquam eveniet
                  dicta ipsum quos doloremque quibusdam possimus? Officia,
                  harum.
                  <a href="landingPage.html">Read more...</a>
                </p>
              </div>
            </div>

            <strong className={styles.postTitle} id={styles.postTitle}>Titlul postarii</strong>

            <p className={styles.postDescription} id={styles.postDescription}>
              Aceasta este prima postare facuta pe reteaua de socializare create
              de mine in timpul cursului de Front End Development
            </p>

            <a href="landingPage.html"><strong>Read more...</strong></a>
          </div>

          <div className={styles.reacts}>
            <div className={styles.likesInfo}>
        
              <span>&#128525;</span>
              <i className="bi bi-hand-thumbs-up reactsIcons"></i>
              <span id="likesNumber"> </span> <span> likes</span>
            </div>

            <div className={styles.commentsinfo}>
              <span id="shersNumber"></span> <span> shares</span>
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

            <div className={styles.postCommentSection}>
              <input
                type="text"
                placeholder="Adauga un comentariu"
                className={styles.newCommentField}
                id="commentInput"
              />
              <p id="fieldErrorMessage" className={styles.fieldError}></p>
            </div>

            <button className={styles.insertCommentButton} id="commentInputButton">
              <i className="bi bi-send-plus"></i>
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
                <span id="friendUserName">User Name</span>
              </div>

              <div className={styles.userCommentText}>

                <span id="commentMessageNewPost">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro consequatur nemo nisi quasi dignissimos quisquam
                  explicabo suscipit possimus modi similique mollitia voluptatem
                  molestias ipsam, excepturi illum? Adipisci aperiam qui
                  voluptatem.
                </span>

                <div className={styles.emojiReaction}>&#128526;</div>
                <span id="removeCommentButton">Remove this comment</span>
              </div>

              <div className={styles.commentReaction}>
                <strong className={styles.commentReactionButton}>Like</strong>
                <strong className={styles.commentReactionButton}>Comment</strong>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default NewsFeed;
