import styles from "./CommentsSection.module.scss"
import profile from "../../../../assets/images/profile.jpg";

const CommentsSection = () => {
  return (
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
          <span id="commentMessage">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            consequatur nemo nisi quasi dignissimos quisquam explicabo suscipit
            possimus modi similique mollitia voluptatem molestias ipsam,
            excepturi illum? Adipisci aperiam qui voluptatem.
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
  );
};

export default CommentsSection;
