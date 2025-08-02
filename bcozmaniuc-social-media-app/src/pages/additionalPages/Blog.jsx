import styles from './Blog.module.scss';

import logoWebsite from '../../assets/purplelogo.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';

const Blog = () => {

    return (

        <div classname={styles.mainContentPage}>
            <aside className={styles.leftSide}>
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
            </aside>



            <section className={styles.mainContent}>


                <div className={styles.cardContainer}>

                    <div className={styles.card}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/060/204/016/small_2x/a-man-sitting-at-a-desk-with-a-computer-free-photo.jpeg"
                            alt="Persoană la birou" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>24 Jan, 2020</p>
                            <h3>Using Social Network Properly for Businesses</h3>
                            <p className={styles.description}>
                                Benefits of social media for brand building At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/060/204/016/small_2x/a-man-sitting-at-a-desk-with-a-computer-free-photo.jpeg"
                            alt="Persoană la birou" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>24 Jan, 2020</p>
                            <h3>Using Social Network Properly for Businesses</h3>
                            <p className={styles.description}>
                                Benefits of social media for brand building At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/060/204/016/small_2x/a-man-sitting-at-a-desk-with-a-computer-free-photo.jpeg"
                            alt="Persoană la birou" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>24 Jan, 2020</p>
                            <h3>Using Social Network Properly for Businesses</h3>
                            <p className={styles.description}>
                                Benefits of social media for brand building At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/060/204/016/small_2x/a-man-sitting-at-a-desk-with-a-computer-free-photo.jpeg"
                            alt="Persoană la birou" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>24 Jan, 2020</p>
                            <h3>Using Social Network Properly for Businesses</h3>
                            <p className={styles.description}>
                                Benefits of social media for brand building At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/060/204/016/small_2x/a-man-sitting-at-a-desk-with-a-computer-free-photo.jpeg"
                            alt="Persoană la birou" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>24 Jan, 2020</p>
                            <h3>Using Social Network Properly for Businesses</h3>
                            <p className={styles.description}>
                                Benefits of social media for brand building At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/060/204/016/small_2x/a-man-sitting-at-a-desk-with-a-computer-free-photo.jpeg"
                            alt="Persoană la birou" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>24 Jan, 2020</p>
                            <h3>Using Social Network Properly for Businesses</h3>
                            <p className={styles.description}>
                                Benefits of social media for brand building At vero eos et accusamus et iusto odio
                                dignissimos ducimus qui...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>
                </div>
            </section>



            <aside className={styles.rightSide}>
                <div className={styles.recentPosts}>
                    <div className={styles.searchBox}>
                        <input type="text" placeholder="Caută..." />
                        <button><span className={styles.icon}>🔍</span></button>
                    </div>

                    <div className={styles.recentPosts}>
                        <h3>Recent Posts</h3>
                        <ul>
                            <li><span className={styles.docIcon}>📄</span> Using Social Network Properly for Businesses</li>
                            <li><span className={styles.docIcon}>📄</span> Few Challenges Farmers Face In Agriculture</li>
                            <li><span className={styles.docIcon}>📄</span> Traveling Is Way Cheaper than You Think</li>
                            <li><span className={styles.docIcon}>📄</span> 10 Recipes You Can Try At Home Anytime</li>
                            <li><span className={styles.docIcon}>📄</span> New Space Discovery Will Surely Shock You</li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div >

    );
};

export default Blog;

