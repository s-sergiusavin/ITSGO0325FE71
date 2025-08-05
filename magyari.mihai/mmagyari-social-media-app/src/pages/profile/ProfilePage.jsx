import styles from './ProfilePage.module.scss'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import PublicIcon from '@mui/icons-material/Public';


const ProfilePage = () => {
    return (

       
        <div className={styles.profileContainer}>

            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>

            <div className={styles.wrapper}>

                <section className={styles.profileCover}>

                    <div className={styles.coverPic}>
                        <img src="https://marketplace.canva.com/EAE89qUYCic/1/0/1600w/canva-blue-ocean-tide-beach-motivational-quote-facebook-cover-UlayDxq20Mo.jpg"
                            alt="" />
                    </div>

                    <a href="#" className={styles.profilePic}><img
                        src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg" alt="" /></a>

                    <a href="#" className={styles.editCover}>&#128247; Edit cover photo</a>

                </section>

                <section className={styles.profileInfo}>

                    <div className={styles.profileName}>
                        <span className={styles.name}>Tony Stark</span>
                        <span>870 friends</span>
                    </div>

                    <div className={styles.profileOptions}>
                        <a href="" className={styles.addContent}>&#128240; Add content</a>
                        <a href="" className={styles.editProfile}>&#128393; Edit profile</a>
                    </div>


                </section>

                <hr className={styles.divider} />

                <section className={styles.chooseContent}>
                    <ul className={styles.category}>
                        <li><a href="" className={styles.categoryBtn}>Posts</a></li>
                        <li><a href="" className={styles.categoryBtn}>About</a></li>
                        <li><a href="" className={styles.categoryBtn}>Friends</a></li>
                        <li><a href="" className={styles.categoryBtn}>Photos</a></li>
                        <li><a href="" className={styles.categoryBtn}>Videos</a></li>
                        <li><a href="" className={styles.categoryBtn}>Reels</a></li>
                        <li><a href="" className={styles.categoryBtn}>More &#8681;</a></li>
                    </ul>

                    <div><a className={styles.menuDots}><MoreHorizIcon/></a></div>
                </section>

            </div>

            <div className={styles.profileContent}>
                <section className={styles.leftContent}>

                    <ul className={styles.info}>

                        <li><span className={styles.introTitle}>Info</span></li>
                        <li><span>&#128188; Dead member of <strong>The Avangers</strong></span></li>
                        <li><span>&#128188; Founder of <strong>Stark Enterprises</strong></span></li>
                        <li><span>&#127891; Studied at <strong>MIT</strong></span></li>
                        <li><span>&#127969; Lives in <strong>New York</strong></span></li>
                        <li><span>&#128205; From <strong>New York, USA</strong> </span></li>
                        <li><a href="https://www.instagram.com" target="_blank">&#128187;
                            <strong>theironman</strong></a></li>
                        <li><a href="#" className={styles.editInfo}>Edit info</a></li>

                    </ul>

                    <div className={styles.photos}>
                        <div className={styles.photosTitle}>
                            <a href="#" className={styles.title}>Photos</a>
                            <a href="#" className={styles.allPhotos}>See all photos</a>
                        </div>

                        <div className={styles.photosPreview}>
                            <img src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/tony_stark.png"
                                alt="" />
                            <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg" alt="" />
                            <img src="https://images.immediate.co.uk/production/volatile/sites/3/2018/05/IRON-2008-d7a2706.jpg?quality=90&resize=800,534"
                                alt="" />
                        </div>
                    </div>

                    <div className={styles.friends}>

                        <div className={styles.friendsTitle}>

                            <div className={styles.count}>
                                <span className={styles.title}>Friends</span>
                                <span>870 friends</span>
                            </div>

                            <div className={styles.seeAll}>
                                <span>See all friends</span>
                            </div>

                        </div>

                        <div className={styles.friendsPreview}>

                            <div className={styles.friendDisplay}>
                                <img src="https://i.pinimg.com/736x/df/b7/e8/dfb7e8a809023238868ac237f5906898.jpg" alt="" />
                                <span className={styles.friendName}><strong>James Rhodes</strong></span>
                            </div>

                            <div className={styles.friendDisplay}>
                                <img src="https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/9b9970a2_0a28_4fcf_a24b_1498faaaa0c0.jpeg"
                                    alt="" />
                                <span className={styles.friendName}><strong>Steve Rogers</strong></span>
                            </div>

                            <div className={styles.friendDisplay}>
                                <img src="https://people.com/thmb/dYwua89qjY-cp_rpmuoamdolIDk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/black-widow-6b66ccb442834cc983ac008367d4cc4c.jpg"
                                    alt="" />
                                <span className={styles.friendName}><strong>Natasha Romanoff</strong></span>
                            </div>

                            <div className={styles.friendDisplay}>
                                <img src="https://wallpaper.forfun.com/fetch/95/95a1ad8a667a73127d917bde55dcf439.jpeg" alt="" />
                                <span className={styles.friendName}><strong>Peter Parker</strong></span>
                            </div>

                            <div className={styles.friendDisplay}>
                                <img src="https://pm1.aminoapps.com/6917/619ad187632c1733c38acf9f6352bb9a20667ad9r1-1536-1441v2_uhq.jpg"
                                    alt="" />
                                <span className={styles.friendName}><strong>May Parker</strong></span>
                            </div>

                            <div className={styles.friendDisplay}>
                                <img src="https://preview.redd.it/happy-hogan-is-my-headcannon-mcu-achor-being-v0-x3alo9ie5kgd1.png?width=640&crop=smart&auto=webp&s=53ca776c7fd00394f771767edf5bec0f01017d82"
                                    alt="" />
                                <span className={styles.friendName}><strong>Happy Hogan</strong></span>
                            </div>

                            <div className={styles.friendDisplay}>
                                <img src="https://www.denverpost.com/wp-content/uploads/2017/01/thor-the-dark-world.jpg?w=1800&resize=1800,1800"
                                    alt="" />
                                <span className={styles.friendName}><strong>Thor Odinson</strong></span>
                            </div>

                            <div className={styles.friendDisplay}>
                                <img src="https://i.pinimg.com/736x/38/44/e3/3844e3f021dfa859ce7b9f64b04f1ed6.jpg" alt="" />
                                <span className={styles.friendName}><strong>Bruce Banner</strong></span>
                            </div>

                            <div className={styles.friendDisplay}>
                                <img src="https://parade.com/.image/t_share/MTkwNTgwODM0MjgzNjI3NjQ1/hawkeye-disney-plus.png"
                                    alt="" />
                                <span className={styles.friendName}><strong>Clint Barton</strong></span>
                            </div>

                        </div>

                    </div>

                    <footer><span>Privacy</span> <span>Terms</span> <span>Advertising</span> <span>Ad Choices</span>
                        <span>Cookie</span> Magyari Mihai &copy; 2025</footer>

                </section>


                <section className={styles.rightContent}>

                    <div className={styles.status}>
                        <div className={styles.writeStatus}>
                            <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg" alt=""
                                className={styles.smallProfilePic} />
                            <input type="text" placeholder="Any useless thoughts?" />
                        </div>

                        <hr />

                        <div className={styles.addContent}>
                            <a href="">&#127909;Livestream</a>
                            <a href="">&#128228;Photo/Video</a>
                            <a href="">&#127891;Life Event</a>
                        </div>

                    </div>

                    <div className={styles.postsStart}>
                        <strong>Posts</strong>
                        <div className={styles.managePosts}><span><SettingsOutlinedIcon sx={{fontSize: 'normal'}}/> Manage posts</span></div>
                    </div>

                    <div className={styles.post}>

                        <div className={styles.postHeader}>

                            <div className={styles.profileUserInfo}>

                                <a href="">
                                    <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg"
                                        alt="profile picture" className={styles.profileImage} />
                                </a>

                                <div className={styles.profileName}>
                                    <span><strong>Tony Stark</strong></span>
                                    <span>July 19 <CircleIcon sx={{fontSize:'0.2rem'}}/> <PublicIcon sx={{fontSize:'1.2rem'}}/>  </span>
                                </div>

                            </div>

                            <div className={styles.profileOptions}>
                                <a href="#" title="Options"><img src="https://cdn-icons-png.flaticon.com/128/2311/2311524.png"
                                    alt="" /></a>
                                <a href="#" title="Hide Post"><img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                                    alt="" /></a>
                            </div>

                        </div>

                        <div className={styles.content}>
                            <div className={styles.imageWrapper}>
                                <img src="https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.684xw:0.577xh;0.0321xw,0.281xh&resize=2048:*"
                                    alt="post content picture" className={styles.imgContent} />

                            </div>



                            <div className={styles.postDescription}>
                                <p>New toy</p>
                            </div>



                        </div>

                        <div className={styles.reacts}>

                            <div className={styles.likesInfo}>
                                <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                    title="Pitbull and 17K other liked this" />
                                <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                    title="Steve Irvin and 7K other loved this" />
                                {/* <!-- <span>&#128525;</span>
                    <i className="bi bi-hand-thumbs-up-fill"></i> --> */}
                                <span>24K</span>
                            </div>

                            <div className={styles.commentsInfo}>
                                <span>2.5K comments</span>
                                <span>427 shares</span>
                            </div>

                        </div>

                        <hr />

                        <div className={styles.reactsActions}>

                            <ul className={styles.actions}>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt="" className={styles.likeImg} />
                                    <span>Like</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/4249/4249907.png" alt="" />
                                    <span>Comment</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png" alt="" />
                                    <span>Send</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/14610/14610792.png" alt="" />
                                    <span>Save</span>
                                </li>

                            </ul>

                        </div>

                        <hr />

                        <div className={styles.commentSection}>

                            <a href="">
                                <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg"
                                    alt="profile picture" className={styles.profileImage} />
                            </a>

                            <input type="text" placeholder="Type a comment" className={styles.newCommentField} />

                            <img src="https://cdn-icons-png.flaticon.com/128/60/60539.png" alt="" className={styles.insertCommentButton}
                                title="Send Comment" />
                            {/* <!-- <button className="insertCommentButton"><i className="bi bi-send-x"></i></button> --> */}

                        </div>

                        <div className={styles.userComments}>

                            <div className={styles.userCommentsContent}>

                                <div className={styles.profileUserComment}>

                                    <a href="">
                                        <img src="https://cdn-icons-png.flaticon.com/128/2102/2102633.png" alt="profile picture"
                                            className={styles.profileImage} />
                                    </a>

                                </div>

                                <div className={styles.userCommentText}>

                                    <span className={styles.commentUserName}>John User</span> <br />

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat amet tempora, architecto
                                        quas
                                        accusamus est ab a suscipit obcaecati asperiores excepturi rem et! Veniam, incidunt?
                                        Culpa,
                                        facilis? Aliquid, amet doloremque?</p>


                                    <div className={styles.emojiReaction}>

                                        {/* <!-- &#128514; --> */}
                                        <span title="352 reactions">352</span>
                                        <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                            title="Reactions" />
                                        <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                            title="Reactions" />
                                        <img src="https://cdn-icons-png.flaticon.com/128/6637/6637195.png" alt=""
                                            className={styles.laughEmoji} title="Reactions" />

                                    </div>

                                </div>

                            </div>

                            <div className={styles.commentReaction}>

                                <strong title="Posted 3 hours ago">3h</strong>
                                <strong className={styles.commentReactionButton}>Like</strong>
                                <strong className={styles.commentReactionButton}>Reply</strong>




                            </div>

                        </div>



                    </div>

                    <div className={styles.post}>

                        <div className={styles.postHeader}>

                            <div className={styles.profileUserInfo}>

                                <a href="">
                                    <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg"
                                        alt="profile picture" className={styles.profileImage} />
                                </a>

                                <div className={styles.profileName}>
                                    <span><strong>Tony Stark</strong></span>
                                    <span>May 24  <CircleIcon sx={{fontSize:'0.2rem'}}/> <PublicIcon sx={{fontSize:'1.2rem'}}/> </span>
                                </div>

                            </div>

                            <div className={styles.profileOptions}>
                                <a href="#" title="Options"><img src="https://cdn-icons-png.flaticon.com/128/2311/2311524.png"
                                    alt="" /></a>
                                <a href="#" title="Hide Post"><img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                                    alt="" /></a>
                            </div>

                        </div>

                        <div className={styles.content}>
                            <div className={styles.imageWrapper}>
                                <img src="https://theculturednerd.org/wp-content/uploads/2020/04/Iron-man-1.jpg"
                                    alt="post content picture" className={styles.imgContent} />

                                {/* <!-- <i className="bi bi-info-circle infoIcon"></i> --> */}
                            </div>


                            {/* <!-- <strong className="postTitle">Titlul postarii</strong> --> */}
                            <div className={styles.postDescription}>
                                <p>Didn`t catch my flight.
                                    Had to improvise!
                                </p>

                                {/* <!-- <a href="landingPage.html"><strong>Read more...</strong></a> --> */}
                            </div>



                        </div>

                        <div className={styles.reacts}>

                            <div className={styles.likesInfo}>
                                <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                    title="Pitbull and 22K other liked this" />
                                <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                    title="Steve Irvin and 20K other loved this" />
                                {/* <!-- <span>&#128525;</span>
                    <i className="bi bi-hand-thumbs-up-fill"></i> --> */}
                                <span>42K</span>
                            </div>

                            <div className={styles.commentsInfo}>
                                <span>3.7K comments</span>
                                <span>501 shares</span>
                            </div>

                        </div>

                        <hr />

                        <div className={styles.reactsActions}>

                            <ul className={styles.actions}>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt="" className="likeImg" />
                                    <span>Like</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/4249/4249907.png" alt="" />
                                    <span>Comment</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png" alt="" />
                                    <span>Send</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/14610/14610792.png" alt="" />
                                    <span>Save</span>
                                </li>

                            </ul>

                        </div>

                        <hr />

                        <div className={styles.commentSection}>

                            <a href="">
                                <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg"
                                    alt="profile picture" className={styles.profileImage} />
                            </a>

                            <input type="text" placeholder="Type a comment" className={styles.newCommentField} />

                            <img src="https://cdn-icons-png.flaticon.com/128/60/60539.png" alt="" className={styles.insertCommentButton}
                                title="Send Comment" />
                            {/* <!-- <button className="insertCommentButton"><i className="bi bi-send-x"></i></button> --> */}

                        </div>

                        <div className={styles.userComments}>

                            <div className={styles.userCommentsContent}>

                                <div className={styles.profileUserComment}>

                                    <a href="">
                                        <img src="https://cdn-icons-png.flaticon.com/128/2102/2102633.png" alt="profile picture"
                                            className={styles.profileImage} />
                                    </a>

                                </div>

                                <div className={styles.userCommentText}>

                                    <span className={styles.commentUserName}>Michael User</span> <br />

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum, iusto nisi
                                        facilis saepe neque distinctio sapiente porro repellendus quasi!</p>


                                    <div className={styles.emojiReaction}>

                                        {/* <!-- &#128514; --> */}
                                        <span title="470 reactions">470</span>
                                        <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                            title="Reactions" />
                                        <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                            title="Reactions" />
                                        <img src="https://cdn-icons-png.flaticon.com/128/6637/6637195.png" alt=""
                                            className={styles.laughEmoji} title="Reactions" />

                                    </div>

                                </div>

                            </div>

                            <div className={styles.commentReaction}>

                                <strong title="Posted 4 hours ago">4h</strong>
                                <strong className={styles.commentReactionButton}>Like</strong>
                                <strong className={styles.commentReactionButton}>Reply</strong>




                            </div>

                        </div>



                    </div>


                    <div className={styles.post}>

                        <div className={styles.postHeader}>

                            <div className={styles.profileUserInfo}>

                                <a href="">
                                    <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg"
                                        alt="profile picture" className={styles.profileImage} />
                                </a>

                                <div className={styles.profileName}>
                                    <span><strong>Tony Stark</strong></span>
                                    <span>May 8<CircleIcon sx={{fontSize:'0.2rem'}}/> <PublicIcon sx={{fontSize:'1.2rem'}}/> </span>
                                </div>

                            </div>

                            <div className={styles.profileOptions}>
                                <a href="#" title="Options"><img src="https://cdn-icons-png.flaticon.com/128/2311/2311524.png"
                                    alt="" /></a>
                                <a href="#" title="Hide Post"><img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                                    alt="" /></a>
                            </div>

                        </div>

                        <div className={styles.content}>
                            <div className={styles.imageWrapper}>
                                <img src="https://media.wired.com/photos/595d0942279ed26c805db120/master/pass/SpiderManIronManHP2.jpg"
                                    alt="post content picture" className={styles.imgContent} />

                                {/* <!-- <i className="bi bi-info-circle infoIcon"></i> --> */}
                            </div>


                            {/* <!-- <strong className="postTitle">Titlul postarii</strong> --> */}
                            <div className={styles.postDescription}>
                                <p>Babysitter for today...#yourFriendlyNeighbours</p>


                                {/* <!-- <a href="landingPage.html"><strong>Read more...</strong></a> --> */}
                            </div>



                        </div>

                        <div className={styles.reacts}>

                            <div className={styles.likesInfo}>
                                <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                    title="Pitbull and 22K other liked this" />
                                <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                    title="Steve Irvin and 20K other loved this" />
                                {/* <!-- <span>&#128525;</span>
                    <i className="bi bi-hand-thumbs-up-fill"></i> --> */}
                                <span>103K</span>
                            </div>

                            <div className={styles.commentsInfo}>
                                <span>8.7K comments</span>
                                <span>701 shares</span>
                            </div>

                        </div>

                        <hr />

                        <div className={styles.reactsActions}>

                            <ul className={styles.actions}>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt="" className="likeImg" />
                                    <span>Like</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/4249/4249907.png" alt="" />
                                    <span>Comment</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png" alt="" />
                                    <span>Send</span>
                                </li>

                                <li className={styles.reaction}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/14610/14610792.png" alt="" />
                                    <span>Save</span>
                                </li>

                            </ul>

                        </div>

                        <hr />

                        <div className={styles.commentSection}>

                            <a href="">
                                <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg"
                                    alt="profile picture" className={styles.profileImage} />
                            </a>

                            <input type="text" placeholder="Type a comment" className={styles.newCommentField} />

                            <img src="https://cdn-icons-png.flaticon.com/128/60/60539.png" alt="" className={styles.insertCommentButton}
                                title="Send Comment" />
                            {/* <!-- <button className="insertCommentButton"><i className="bi bi-send-x"></i></button> --> */}

                        </div>

                        <div className={styles.userComments}>

                            <div className={styles.userCommentsContent}>

                                <div className={styles.profileUserComment}>

                                    <a href="">
                                        <img src="https://cdn-icons-png.flaticon.com/128/2102/2102633.png" alt="profile picture"
                                            className={styles.profileImage} />
                                    </a>

                                </div>

                                <div className={styles.userCommentText}>

                                    <span className={styles.commentUserName}>Michael User</span> <br />

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum, iusto nisi
                                        facilis saepe neque distinctio sapiente porro repellendus quasi!</p>


                                    <div className={styles.emojiReaction}>

                                        {/* <!-- &#128514; --> */}
                                        <span title="470 reactions">470</span>
                                        <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                            title="Reactions" />
                                        <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                            title="Reactions" />
                                        <img src="https://cdn-icons-png.flaticon.com/128/6637/6637195.png" alt=""
                                            className={styles.laughEmoji} title="Reactions" />

                                    </div>

                                </div>

                            </div>

                            <div className={styles.commentReaction}>

                                <strong title="Posted 4 hours ago">4h</strong>
                                <strong className={styles.commentReactionButton}>Like</strong>
                                <strong className={styles.commentReactionButton}>Reply</strong>




                            </div>

                        </div>



                    </div>




                </section>

            </div>

        </div>);

};

export default ProfilePage;