import styles from './Groups.module.scss';

import logoWebsite from '../../assets/purplelogo.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';

const Groups = () => {

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
                <div className={styles.avatar}></div>
                <h3>Bogdan Cozmaniuc</h3>
                <hr className={styles.firstHr} />
                <div className={styles.friendsAndGroup}>
                    <p><b>130</b> Friends</p>
                    <p><b>4</b> Groups</p>
                </div>
            </div>

            <div className={styles.profileCard2}></div>
        </div>

        <div className={styles.bigMenu}>
            <nav className={styles.menu}>
                <a href="/blog"> <Diversity2Icon></Diversity2Icon></a>
                <p>Groups</p>
                <a href=""> <Diversity2Icon></Diversity2Icon></a>
                <p>Blog</p>
            </nav>
            <nav className={styles.menu}>
                <a href=""> <StorefrontIcon></StorefrontIcon></a>
                <p>Marketplace</p>
                <a href=""> <WorkIcon></WorkIcon></a>
                <p>Jobs</p>
            </nav>
        </div>

    </aside >
}

export default Groups;

