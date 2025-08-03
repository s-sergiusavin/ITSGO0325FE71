import styles from './CommentsSection.module.scss';
import profile from '../../../../assets/images/profile.jpg';

const CommentsSection = () => {
    return <div className={styles.userComments}>
        <div className={styles.userCommentsContent}>


            <div className={styles.userCommentText}>
                <div className={styles.profileUserComment}>

                <a href=""> <img src={profile} alt="profile picture" className={styles.profileImage} /></a>
                </div>
                {/* <span className={styles.nameInCommnet}>Cristi Ivănescu</span> */}
                <div id="commentMessage">
                    <p style={{ fontWeight: 'bold' }}>Cristi Ivănescu</p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro consequatur nemo nisi quasi dignissimos quisquam
                    explicabo suscipit possimus modi similique mollitia voluptatem
                    molestias ipsam, excepturi illum? Adipisci aperiam qui
                    voluptatem.
                </div>
            </div>

            <div className={styles.commentReaction}>
                <span className={styles.commentReactionButton}>Like</span>
                <span className={styles.commentReactionButton}>Reply</span>
                <span className={styles.removeCommentButton}>Remove this comment</span>
            </div>

             <div className={styles.userCommentText}>
                <div className={styles.profileUserComment}>

                <a href=""> <img src={profile} alt="profile picture" className={styles.profileImage} /></a>
                </div>
                {/* <span className={styles.nameInCommnet}>Cristi Ivănescu</span> */}
                <div id="commentMessage">
                    <p style={{ fontWeight: 'bold' }}>Cristi Ivănescu</p>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro consequatur nemo nisi quasi dignissimos quisquam
                    explicabo suscipit possimus modi similique mollitia voluptatem
                    molestias ipsam, excepturi illum? Adipisci aperiam qui
                    voluptatem.
                </div>
            </div>

            <div className={styles.commentReaction}>
                <span className={styles.commentReactionButton}>Like</span>
                <span className={styles.commentReactionButton}>Reply</span>
                <span className={styles.removeCommentButton}>Remove this comment</span>
            </div>
        </div>
    </div>
}

export default CommentsSection;