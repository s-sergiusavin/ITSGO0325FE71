import styles from './Groups.module.scss';

import logoWebsite from '../../assets/purplelogo.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';
import BogdanPic from '../../assets/BogdanCozmaniuc.jpeg';

import BasicTabs from '../../components/NavigationBar.jsx'


const Groups = () => {

    return (

        <div className={styles.mainContentPage}>

            <aside className={styles.sidebarLeft}>
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
            </aside>



            <section className={styles.mainContent}>

                <div className={styles.gridGroups}>
                    <div className={styles.groupContainer}>
                        <div className={styles.groupCover}>
                            <img className={styles.backgroundImageCover} src="https://t4.ftcdn.net/jpg/02/66/38/15/360_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg" alt="" />
                            <img
                                className={styles.groupAvatar}
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                                alt="Group Avatar"
                            />
                        </div>
                        <div className={styles.groupTitle}>Climate Change</div>
                        <div className={styles.groupActive}>Active a day ago</div>
                        <div className={styles.groupMembersAvatars}>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" />
                            <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="user3" />
                            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="user4" />
                            <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="user5" />
                        </div>
                        <div className={styles.groupInfo}>Public Group / 1.757 members</div>
                        <button className={styles.groupViewBtn} disabled>View Group</button>
                    </div>

                    <div className={styles.groupContainer}>
                        <div className={styles.groupCover}>
                            <img className={styles.backgroundImageCover} src="https://i0.wp.com/mageenews.com/wp-content/uploads/2021/09/hunting_fishing_.png?fit=600%2C262&ssl=1" alt="" />
                            <img className={styles.groupAvatar}
                                src="https://fishingandhuntingtv.com/ro/wp-content/uploads/2014/04/FH.jpg"
                                alt="Group Avatar" />
                        </div>
                        <div className={styles.groupTitle}>Fishing & Hunting</div>
                        <div className={styles.groupActive}>Active 2 hours ago</div>
                        <div className={styles.groupMembersAvatars}>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" />
                            <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="user3" />
                            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="user4" />
                            <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="user5" />
                        </div>
                        <div className={styles.groupInfo}>Private Group / 19.852 members</div>
                        <button className={styles.groupViewBtn} disabled>View Group</button>
                    </div>

                    <div className={styles.groupContainer}>
                        <div className={styles.groupCover}>
                            <img className={styles.backgroundImageCover} src="https://cdn.adh.reperio.news/image-9/97c4bdee-4ff4-49e2-a480-60a2184494bd/index.jpeg?p=f%3Dpng%26w%3D1400%26r%3Dcontain" alt="" />
                            <img className={styles.groupAvatar}
                                src="https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTAxdHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjAl/MkYwMyUyRjE5JTJGMTE3MTE5NF8xMTcx/MTk0X0dldHR5SW1hZ2VzLTExOTA0Mzc0/OTcuanBnJnc9MTA2MCZoPTYzNiZ6Yz0x/Jmhhc2g9ZDQxMDJlNjZjMTdmYzY3N2UzNTdhM2Y3M2JlMjQwYjA=.thumb.jpg"
                                alt="Group Avatar" />
                        </div>
                        <div className={styles.groupTitle}>Footbal News</div>
                        <div className={styles.groupActive}>Active few minutes ago</div>
                        <div className={styles.groupMembersAvatars}>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" />
                            <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="user3" />
                            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="user4" />
                            <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="user5" />
                        </div>
                        <div className={styles.groupInfo}>Public Group / 121.764 members</div>
                        <button className={styles.groupViewBtn} disabled>View Group</button>
                    </div>

                    <div className={styles.groupContainer}>
                        <div className={styles.groupCover}>
                            <img className={styles.backgroundImageCover} src="https://www.osano.com/hubfs/Policies%20Concept.%20Word%20on%20Folder%20Register%20of%20Card%20Index.%20Selective%20Focus..jpeg" alt="" />
                            <img className={styles.groupAvatar}
                                src="https://studentlife.uonbi.ac.ke/sites/studentlife.uonbi.ac.ke/files/2020-04/policy_41.jpg"
                                alt="Group Avatar" />
                        </div>
                        <div className={styles.groupTitle}>Policy</div>
                        <div className={styles.groupActive}>Active 5 hours ago</div>
                        <div className={styles.groupMembersAvatars}>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" />
                            <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="user3" />
                            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="user4" />
                            <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="user5" />
                        </div>
                        <div className={styles.groupInfo}>Public Group / 7.237 members</div>
                        <button className={styles.groupViewBtn} disabled>View Group</button>
                    </div>

                    <div className={styles.groupContainer}>
                        <div className={styles.groupCover}>
                            <img className={styles.backgroundImageCover} src="https://kennedymarketinggroup.com/wp-content/uploads/AdobeStock_48128194.jpg" alt="" />
                            <img className={styles.groupAvatar}
                                src="https://imgix-prod.sgs.com/-/media/sgscorp/images/corporate/event-body-images/digital-automotive-diagnostics-interface.cdn.en-RO.1.jpg?fit=crop&auto=format&crop=focalpoint&fp-x=0.5&fp-y=0.59&fp-z=1&w=645&h=403"
                                alt="Group Avatar" />
                        </div>
                        <div className={styles.groupTitle}>Automotive</div>
                        <div className={styles.groupActive}>Active yesterday</div>
                        <div className={styles.groupMembersAvatars}>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" />
                            <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="user3" />
                            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="user4" />
                            <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="user5" />
                        </div>
                        <div className={styles.groupInfo}>Public Group / 237 members</div>
                        <button className={styles.groupViewBtn} disabled>View Group</button>
                    </div>

                    <div className={styles.groupContainer}>
                        <div className={styles.groupCover}>
                            <img className={styles.backgroundImageCover} src="https://ichef.bbci.co.uk/ace/branded_newsround/1200/cpsprodpb/2F2C/production/_113167021_photo30-06-2020170422.jpg" alt="" />
                            <img className={styles.groupAvatar}
                                src="https://media.istockphoto.com/id/1055184890/vector/laughing-mouth-april-fools-day-loud-laugh-and-lol-vector-yellow-background.jpg?s=612x612&w=0&k=20&c=pCVUGqvyZ0st1RXDfwaiemeaqXkouVg4rPNpxJT_SfY="
                                alt="Group Avatar" />
                        </div>
                        <div className={styles.groupTitle}>Jokes & Entertainment</div>
                        <div className={styles.groupActive}>Active 1 hour ago</div>
                        <div className={styles.groupMembersAvatars}>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" />
                            <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="user3" />
                            <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="user4" />
                            <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="user5" />
                        </div>
                        <div className={styles.groupInfo}>Public Group / 723 members</div>
                        <button className={styles.groupViewBtn} disabled>View Group</button>
                    </div>
                </div>

            </section>


            <aside className={styles.rightSide}>
                <div className={styles.membersContainer}>

                    <h3>Members</h3>
                    <div className={styles.tabs}>
                        <BasicTabs />
                    </div>

                </div>


                <div className={styles.hashtagsCard}>
                    <h3>Hashtags</h3>
                    <div className={styles.hashtagsList}>
                        <div className={styles.hashtag}>#social<span className={styles.hashtaCount}>5</span></div>
                        <div className={styles.hashtag}>#beehive<span className={styles.hashtagCount}>4</span></div>
                        <div className={styles.hashtag}>#kaliningradlive<span className={styles.hashtagCount}>1</span></div>
                        <div className={styles.hashtag}>#awesome<span className={styles.hashtagCount}>1</span></div>
                        <div className={styles.hashtag}>#photos<span className={styles.hashtagCount}>1</span></div>
                        <div className={styles.hashtag}>#network<span className={styles.hashtagCount}>1</span></div>
                        <div className={styles.hashtag}>#shop<span className={styles.hashtagCount}>1</span></div>
                        <div className={styles.hashtag}>#videos<span className={styles.hashtagCount}>1</span></div>
                        <div className={styles.hashtag}>#community<span className={styles.hashtagCount}>1</span></div>
                        <div className={styles.hashtag}>#theme<span className={styles.hashtagCount}>1</span></div>
                    </div>
                </div>


            </aside >

        </div >


    );
};

export default Groups;

