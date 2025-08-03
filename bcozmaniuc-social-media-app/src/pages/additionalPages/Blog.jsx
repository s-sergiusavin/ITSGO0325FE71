import styles from './Blog.module.scss';

import logoWebsite from '../../assets/purplelogo.png'
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkIcon from '@mui/icons-material/Work';
import BogdanPic from '../../assets/BogdanCozmaniuc.jpeg';

const Blog = () => {

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


                <div className={styles.cardContainer}>

                    <div className={styles.card}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/060/204/016/small_2x/a-man-sitting-at-a-desk-with-a-computer-free-photo.jpeg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>1 Aug, 2025</p>
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
                        <img src="https://images.squarespace-cdn.com/content/636bc2158ffe4f08c5a20ba9/1668548793082-A9LQ7OHDDSKUB7N92CCC/Sebastians-Picture539.jpg?content-type=image%2Fjpeg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>31 Jul, 2025</p>
                            <h3>Four Hour Work Week? Try 100.</h3>
                            <p className={styles.description}>
                                Some of you know I read the Four Hour Work Week and basically started my business the very next day. I still believe the book is pure genius...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://markmanson.net/wp-content/uploads/2016/04/cubicle-farm-780x574.jpg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>30 Jul, 2025</p>
                            <h3>How to Quit Your Day Job and Travel the World</h3>
                            <p className={styles.description}>
                                Many years ago on a sunny April morning, I slinked into my new office building, suit slightly too big, 24-years-old and clueless...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://cdn.britannica.com/34/145834-050-69204A09/Sailing.jpg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>29 Jul, 2025</p>
                            <h3>7 Ways to Start Living the Life You Really Want</h3>
                            <p className={styles.description}>
                                The biggest problem most people who are unhappy have is that they don’t actually know what they want...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://chrisguillebeau.com/_next/image?url=https%3A%2F%2Fcontent.chrisguillebeau.com%2Fwp-content%2Fuploads%2F2021%2F11%2Ffort-awesome.jpg&w=1920&q=75"
                            aalt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>28 Jul, 2025</p>
                            <h3>How to Be Awesome</h3>
                            <p className={styles.description}>
                                The other day I was talking with my friend Phil, a doctoral student in philosophy. Phil is much smarter than me – of that there is no doubt..
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://markmanson.net/wp-content/uploads/2015/09/hand-holding-suitcase-780x596.jpg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>27 Jul, 2025</p>
                            <h3>Minimalism</h3>
                            <p className={styles.description}>
                                For seven years, this was everything I owned: A MacBook Pro, an iPad, an unlocked iPhone, seven shirts, two pairs of jeans...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://i0.wp.com/startgainingmomentum.com/wp-content/uploads/2014/04/maxims.jpg?resize=300%2C213&ssl=1"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>26 Jul, 2025</p>
                            <h3>The 11 Maxims You Should Live By</h3>
                            <p className={styles.description}>
                                What is a maxim, you ask? Simple. It’s a rule for you to live by. Why do you need maxims?
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/woman-meditation-on-an-ocean-side-rock-royalty-free-image-1616630391.?crop=0.88897xw:1xh;center,top&resize=1200:*"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>25 Jul, 2025</p>
                            <h3>Finding Peace with Uncertainty</h3>
                            <p className={styles.description}>
                                Fear of an uncertain future: it can stop us from doing great things, and it can keep us holding onto things that are hurting us...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://parsadi.com/wp-content/uploads/2022/03/Strategic-Objectives.jpg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>24 Jul, 2025</p>
                            <h3>How to Write Your Strategic Objective</h3>
                            <p className={styles.description}>
                                I don’t want to be a product of my environment...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://jamesclear.com/wp-content/uploads/2013/10/systems-vs-goals-700x467.jpg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>23 Jul, 2025</p>
                            <h3>Achieving Without Goals</h3>
                            <p className={styles.description}>
                                Have you ever had a long amazing conversation with a friend, that took all kinds of turns neither of...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*ZoFh7uYsr2CNPeRJxn8_Aw.jpeg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>22 Jul, 2025</p>
                            <h3>The Script</h3>
                            <p className={styles.description}>
                                If I quit my job, will I be able to make enough money from my internet business? If I go to a good law school, will I make a lot of money?
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="https://markmanson.net/wp-content/uploads/2015/09/hand-holding-suitcase-780x596.jpg"
                            alt="" />
                        <div className={styles.cardContent}>
                            <p className={styles.date}>21 Jul, 2025</p>
                            <h3>12 Lessons of Waking Up at 4:30 a.m.</h3>
                            <p className={styles.description}>
                                On April 2, I put myself to a new challenge. It was one of the biggest life hacks I’ve ever done...
                            </p>
                            <hr className={styles.hr} />
                            <a href="#" className={styles.readMore}>Continue reading...</a>
                        </div>
                    </div>
                </div>
            </section>



            <aside className={styles.rightSide}>
                <div className={styles.recentPostsContainer}>
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

