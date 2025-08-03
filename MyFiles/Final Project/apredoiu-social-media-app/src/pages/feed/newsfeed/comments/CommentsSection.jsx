import styles from './CommentsSection.module.scss';
import profile from '../../../../assets/images/profile.jpg';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';

const CommentsSection = ({
  comments = [],
  commentText,
  setCommentText,
  handleAddComment
}) => {
  return (
    <div className={styles.userComments}>
      <div className={styles.commentSection}>
        <a href="#">
          <img src={profile} alt="Avatar" className={styles.profileImage} />
        </a>
        <input className={styles.commentInput}
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
        />
        <button className={styles.commentButton} onClick={handleAddComment}>
          <SendAndArchiveIcon />
        </button>
      </div>

      {comments.length === 0 ? (
        <p className={styles.emptyMessage}>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <div className={styles.userCommentsContent} key={comment.id}>
            <div className={styles.profileUserComment}>
              <a href="#">
                <img
                  src={comment.user.avatar || profile}
                  alt="User avatar"
                  className={styles.profileImage}
                />
              </a>
              <span>{comment.user.name}</span>
            </div>
            <div className={styles.userCommentText}>
              <p>{comment.text}</p>
              <span className={styles.commentDate}>{comment.date}</span>
            </div>
            <div className={styles.commentReaction}>
              <strong className={styles.commentReactionButton}>Like</strong>
              <strong className={styles.commentReactionButton}>Reply</strong>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentsSection;
