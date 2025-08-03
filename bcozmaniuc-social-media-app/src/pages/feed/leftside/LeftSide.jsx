import styles from './LeftSide.module.scss';

import logoWebsite from '../../../assets/purplelogo.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';
import BogdanPic from '../../../assets/BogdanCozmaniuc.jpeg';

const LeftSide = () => {

    return <aside className={styles.sidebarLeft}>
        <div className={styles.containerProfileCard}>
            <img className={styles.logoImage} src={logoWebsite} alt="" />
            <div className={styles.logoUp}>MeetUp App</div>
            <div className={styles.textTitle}>
                <p><b></b></p>
                <p>Social Networking</p>
                <p>Collaborations</p>
                <p>Achievements</p>
            </div>


            <div className={styles.profileCard}>
                <img className={styles.avatar} src={BogdanPic} alt="" />
                <h3>Bogdan Cozmaniuc</h3>
                <hr className={styles.firstHr} />
                <div className={styles.friendsAndGroup}>
                    <p><b>130</b> Friends</p>
                    <p><b>4</b> Groups</p>
                </div>
            </div>

            <div className={styles.profileCard2}></div>
        </div>

                        <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <a href="/Groups">
                            <span className={styles.icon}><Diversity2Icon /></span>
                            <span className={styles.label}>Groups</span>
                        </a>
                    </div>
                    <div className={styles.featureItem}>
                        <a href="/Blog">
                            <span className={styles.icon}><Diversity2Icon /></span>
                            <span className={styles.label}>Blog</span>
                        </a>
                    </div>
                    <div className={styles.featureItem}>
                        <a href="/Marketplace">
                            <span className={styles.icon}><StorefrontIcon /></span>
                            <span className={styles.label}>Marketplace</span>
                        </a>
                    </div>
                    <div className={styles.featureItem}>
                        <a href="/Jobs">
                            <span className={styles.icon}><WorkIcon /></span>
                            <span className={styles.label}>Jobs</span>
                        </a>
                    </div>
                </div>

    </aside >
}

export default LeftSide;

