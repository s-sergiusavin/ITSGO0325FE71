import styles from './RightSide.module.scss';
import IconLabelTabs from '../../../components/IconLabelTabs';


const RightSide = () => {
    return (
        <aside className={styles.rightContent}>


            <div className={styles.container}>
                <p className={styles.title}>Sponsored</p>

                <div className={styles.cards}>
                    {/* Card 1 */}
                    <div className={styles.card}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Temu_logo_icon.svg/2048px-Temu_logo_icon.svg.png"
                            alt=""
                            className={styles.image}
                        />
                        <div className={styles.text}>
                            <strong className={styles.headline}>See latest promo products</strong>
                            <span className={styles.subtext}>temu.com</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className={styles.card}>
                        <img
                            src="https://scontent.fias1-2.fna.fbcdn.net/v/t45.1600-4/408615983_120202679151160780_4906408877054263667_n.png?stp=dst-png_p285x285&_nc_cat=1&ccb=1-7&_nc_sid=11850a&_nc_ohc=YsJEhkYDFUIQ7kNvwFqO0HL&_nc_oc=Adl6bgObbyILOOdoJWASGrifEA6FqQQWrFJRkJsB9Q9L5R7RgJRDBzwQp4lSj0O45XOvlTnXl-K4lBTXsIhLuUmE&_nc_zt=1&_nc_ht=scontent.fias1-2.fna&_nc_gid=qNcRQOUqMAAsuYfDQN7C0g&oh=00_AfW--W9YlBzFOZvwez0mUknEsqE0oRkRPh6E5jX1NTef3A&oe=689631D8"
                            alt="Shopify"
                            className={styles.image}
                        />
                        <div className={styles.text}>
                            <strong className={styles.headline}>Small Businesses Love These</strong>
                            <span className={styles.subtext}>shopify.com</span>
                        </div>
                    </div>

                    {/* Card 3 */}

                    <div className={styles.card}>
                        <img
                            src="https://img.freepik.com/premium-vector/summer-sale-banner-template-with-discount_234845-868.jpg"
                            alt="Shopify"
                            className={styles.image}
                        />
                        <div className={styles.text}>
                            <strong className={styles.headline}>Check all the offers</strong>
                            <span className={styles.subtext}>emag.ro</span>
                        </div>
                    </div>

                    {/* Active users */}

                    <div className={styles.activeUsersContainer}>
                        <h4 className={styles.activeTitle}>ACTIVE NOW</h4>
                        <ul className={styles.userList}>
                            <li className={styles.userItem}>
                                <div className={styles.avatarWrapper}>
                                    <img src="https://greatseniorportraits.com/wp-content/uploads/2019/09/Stevens_DC53-4386(pp_w768_h614).jpg" alt="Thomas Sweeney" className={styles.avatar} />
                                    <span className={styles.activeDot}></span>
                                </div>
                                <span className={styles.userName}>Ana Grindeanu</span>
                            </li>
                            <li className={styles.userItem}>
                                <div className={styles.avatarWrapper}>
                                    <img src="https://i.pinimg.com/236x/e0/c2/df/e0c2dfd7ce493efa496e55392e94b9eb.jpg" alt="Thomas Sweeney" className={styles.avatar} />
                                    <span className={styles.activeDot}></span>
                                </div>
                                <span className={styles.userName}>Cristina Raluca</span>
                            </li>
                            <li className={styles.userItem}>
                                <div className={styles.avatarWrapper}>
                                    <img src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" alt="Gianna Pisano" className={styles.avatar} />
                                    <span className={styles.activeDot}></span>
                                </div>
                                <span className={styles.userName}>Marius Lazăr</span>
                            </li>
                            <li className={styles.userItem}>
                                <div className={styles.avatarWrapper}>
                                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Beth Dean" className={styles.avatar} />
                                    <span className={styles.activeDot}></span>
                                </div>
                                <span className={styles.userName}>Dan Gabriel</span>
                            </li>
                            <li className={styles.userItem}>
                                <div className={styles.avatarWrapper}>
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="Jenny Yean" className={styles.avatar} />
                                    <span className={styles.activeDot}></span>
                                </div>
                                <span className={styles.userName}>Jenny Iorga</span>
                            </li>
                            <li className={styles.userItem}>
                                <div className={styles.avatarWrapper}>
                                    <img src="https://www.sarahdeanephotography.co.uk/wp-content/uploads/2021/01/MENS-GROOMING-FOR-PHOTO-SHOOT-IN-STUDIO-FOR-ONLINE-PROFILES-AND-PORTRAITURE-IN-NEWCASTLE-7.jpg" alt="Matt Blanchard" className={styles.avatar} />
                                    <span className={styles.activeDot}></span>
                                </div>
                                <span className={styles.userName}>Iustin Breazu</span>
                            </li>
                            <li className={styles.userItem}>
                                <div className={styles.avatarWrapper}>
                                    <img src="https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260906.jpg?semt=ais_hybrid&w=740" alt="Ron Besselin" className={styles.avatar} />
                                    <span className={styles.activeDot}></span>
                                </div>
                                <span className={styles.userName}>Andrei Cătălin</span>
                            </li>
                            <li className={styles.userItem}>
                                <div className={styles.avatarWrapper}>
                                    <img src="https://d3rf6j5nx5r04a.cloudfront.net/V06-N3KUyk9ZTavWcbGO0gBLPig=/1120x0/product/e/7/394402be47394b6a876abafd7daa3853_opt.jpg" alt="Ryan McLaughli" className={styles.avatar} />
                                    <span className={styles.activeDot}></span>
                                </div>
                                <span className={styles.userName}>Anca Mihnea</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>


    );
};

export default RightSide;
