import styles from './RightSide.module.scss';

import rihanna from '../../../assets/personsToFollow/rihanna.jpeg';
import tomHardy from '../../../assets/personsToFollow/tom-hardy.jpg';
import tomCruise from '../../../assets/personsToFollow/tom-cruise.jpg';
import djKhaled from '../../../assets/personsToFollow/dj-khaled.jpg';
import pepGuardiola from '../../../assets/personsToFollow/pep-guardiola.jpg';

const RightSide = () => {
    return (
        <aside className={styles.rightContent}>
            <div className={styles.whoToFollow}>
                <p className={styles.titleWhoToFollow}>Who To Follow</p>

                <div className={styles.celebrity}>
                    <div className={styles.profileInfo}>
                        <a href="#">
                            <img
                                src={rihanna}
                                alt="profile picture"
                                className={styles.profileImageToFollow}
                            />
                        </a>
                        <div className={styles.profileNameToFollow}>
                            <span style={{ fontWeight: 'bold' }}>Rihanna</span>
                            <span>Singer</span>
                        </div>
                    </div>
                    <i className={`bi bi-plus-circle ${styles.addCelebrity}`}></i>
                </div>

                <div className={styles.celebrity}>
                    <div className={styles.profileInfo}>
                        <a href="#">
                            <img
                                src={tomHardy}
                                alt="profile picture"
                                className={styles.profileImageToFollow}
                            />
                        </a>
                        <div className={styles.profileNameToFollow}>
                            <span style={{ fontWeight: 'bold' }}>Tom Hardy</span>
                            <span>Actor</span>
                        </div>
                    </div>
                    <i className={`bi bi-plus-circle ${styles.addCelebrity}`}></i>
                </div>

                <div className={styles.celebrity}>
                    <div className={styles.profileInfo}>
                        <a href="#">
                            <img
                                src={tomCruise}
                                alt="profile picture"
                                className={styles.profileImageToFollow}
                            />
                        </a>
                        <div className={styles.profileNameToFollow}>
                            <span style={{ fontWeight: 'bold' }}>Tom Cruise</span>
                            <span>Actor</span>
                        </div>
                    </div>
                    <i className={`bi bi-plus-circle ${styles.addCelebrity}`}></i>
                </div>

                <div className={styles.celebrity}>
                    <div className={styles.profileInfo}>
                        <a href="#">
                            <img
                                src={djKhaled}
                                alt="profile picture"
                                className={styles.profileImageToFollow}
                            />
                        </a>
                        <div className={styles.profileNameToFollow}>
                            <span style={{ fontWeight: 'bold' }}>DJ Khaled</span>
                            <span>Record Producer</span>
                        </div>
                    </div>
                    <i className={`bi bi-person-check-fill ${styles.addCelebrity}`}></i>
                </div>

                <div className={styles.celebrity}>
                    <div className={styles.profileInfo}>
                        <a href="#">
                            <img
                                src={pepGuardiola}
                                alt="profile picture"
                                className={styles.profileImageToFollow}
                            />
                        </a>
                        <div className={styles.profileNameToFollow}>
                            <span style={{ fontWeight: 'bold' }}>Pep Guardiola</span>
                            <span>Football Coach</span>
                        </div>
                    </div>
                    <i className={`bi bi-plus-circle ${styles.addCelebrity}`}></i>
                </div>

                <span className={styles.viewMore}>View More</span>
            </div>

            <div className={styles.todaysNews}>
                <span className={styles.spanTodaysNews}>Today's News</span>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Ten questions you should answer truthfully</span>
                    <span>2hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Five unbelievable facts about money</span>
                    <span>3hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Best Pinterest Boards for learning about business</span>
                    <span>4hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Skills that you can learn from business</span>
                    <span>6hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>
                        Quickly design and customize responsive mobile-first sites with Bootstrap.
                    </span>
                    <span>7hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Ten questions you should answer truthfully</span>
                    <span>9hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Ten questions you should answer truthfully</span>
                    <span>11hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Ten questions you should answer truthfully</span>
                    <span>15hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Ten questions you should answer truthfully</span>
                    <span>16hr</span>
                </div>

                <div className={styles.news}>
                    <span style={{ fontWeight: 'bold' }}>Ten questions you should answer truthfully</span>
                    <span>17hr</span>
                </div>
            </div>
        </aside>
    );
};

export default RightSide;
