import styles from './VideosPage.module.scss'

const VideosPage = () => {
    return <div>

    <div className={styles.topBar}>

        <div className={styles.menuAndLogo}>

            <a className={styles.menu} href="" onclick="alert('Hello')"><img
                    src="https://cdn-icons-png.flaticon.com/128/10613/10613684.png" width="30rem"/></a>
            <a className={styles.logo} href="" onclick="alert('Hello')"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" width="90rem"/></a>

        </div>

        <div className={styles.search}>
            <form action="search">
                <input type="text" placeholder="Search"/>
                <button type="submit"><img src="https://cdn-icons-png.flaticon.com/128/639/639375.png"
                        width="20rem"/></button>
            </form>
            <a className={styles.voiceSearch} href="" onclick="alert('Hello')"><img
                    src="https://cdn-icons-png.flaticon.com/128/3128/3128290.png" width="30rem"/></a>

        </div>


        <div className={styles.channel}>

            <a className={styles.create} href="" onclick="alert('Hello')"><img
                    src="https://cdn-icons-png.flaticon.com/128/8191/8191558.png" width="30rem"/></a>
            <a className={styles.notifications} href="" onclick="alert('Hello')"><img
                    src="https://cdn-icons-png.flaticon.com/128/9187/9187534.png" width="30rem"/></a>
            <a className={styles.profilePic} href="" onclick="alert('Hello')"><img src="profilePic.png" width="30rem"/></a>

        </div>





    </div>


    <div className={styles.sideBar}>
        <div className={styles.sideBarElement}>
            <ul>
                <li><a href=""><img src="home.png" alt="" width="20rem"/> Home </a></li>
                <li><a href=""><img src="short.png" alt="" width="20rem"/>/ Shorts </a></li>
                <li><a href=""><img src="subscriptions.png" alt="" width="20rem"/> Subscriptions </a></li>
                <li><a href=""><img src="ytmusic.png" alt="" width="20rem"/> YouTube Music </a></li>

            </ul>


        </div>
        <div className={styles.sideBarElement}>
            <p><strong>You</strong></p>
            <ul>
                <li><a href=""><img src="history.png" alt="" width="20rem"/> History </a></li>
                <li><a href=""><img src="playlist.png" alt="" width="20rem"/> Playlists </a></li>
                <li><a href=""><img src="yourVideos.png" alt="" width="20rem"/> Your videos </a></li>
                <li><a href=""><img src="clock.png" alt="" width="20rem"/> Watch later </a></li>
                <li><a href=""><img src="like.png" alt="" width="20rem"/> Liked videos </a></li>
                <li><a href=""><img src="download.png" alt="" width="20rem"/> Downloads </a></li>


            </ul>
        </div>
        <div className={styles.sideBarElement}>
            <p><strong>Subscriptions</strong></p>
            <ul>
                <li><a href=""><img src="profileGeneric.png" alt="" width="20rem"/> Generic YTChannel1 </a></li>
                <li><a href=""><img src="profileGeneric.png" alt="" width="20rem"/> Generic YTChannel2 </a></li>
                <li><a href=""><img src="profileGeneric.png" alt="" width="20rem"/> Generic YTChannel3 </a></li>
                <li><a href=""><img src="profileGeneric.png" alt="" width="20rem"/> Generic YTChannel4 </a></li>
                <li><a href=""><img src="profileGeneric.png" alt="" width="20rem"/> Generic YTChannel5 </a></li>
                <li><a href=""><img src="profileGeneric.png" alt="" width="20rem"/> Generic YTChannel6 </a></li>

            </ul>
        </div>
        <div className={styles.sideBarElement}>
            <p><strong>Explore</strong></p>
            <ul>
                <li><a href=""><img src="fire.png" alt="" width="20rem"/> Trending </a></li>
                <li><a href=""><img src="music.png" alt="" width="20rem"></img> Music </a></li>
                <li><a href=""><img src="gaming.png" alt="" width="20rem"/> Gaming </a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/128/419/419952.png" alt="" width="20rem"/>
                        Sports </a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/128/2368/2368447.png" alt="" width="20rem"/>
                        Podcasts </a></li>

            </ul>
        </div>
        <div className={styles.sideBarElement}>
            <p><strong>More from YouTube</strong></p>
            <ul>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/128/15647/15647797.png" alt=""
                            width="20rem"/> YouTube Studio </a></li>
                <li><a href=""><img src="ytmusic.png" alt="" width="20rem"/> YouTube Music </a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/128/720/720320.png" alt="" width="20rem"/>
                        YouTube Kids </a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/128/2698/2698011.png" alt="" width="20rem"/>
                        Settings </a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/128/2107/2107961.png" alt="" width="20rem"/>
                        Report history </a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/128/10309/10309127.png" alt=""
                            width="20rem"/> Help </a></li>
                <li><a href=""><img src="https://cdn-icons-png.flaticon.com/128/6785/6785371.png" alt="" width="20rem"/>
                        Send feedback </a></li>
            </ul>
        </div>
        <div className={styles.sideBarElement}>
            <p>About Press Copyright Contact us Creators Advertise Developers
                Terms Privacy Policy & Safety How YouTube works Test new features</p>
        </div>

        <div className={styles.copyRight}>&copy; Magyari Mihai 2025</div>

    </div>



    <div className={styles.categorySection}>
        
            <div className={styles.category}><h4>Category</h4></div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
            <div className={styles.category}>Category</div>
          
       
    </div>


    <div className={styles.mainPage}>



        <div className={styles.videosSection}>
            <div className={styles.video}><video controls src="Video1.mp4"></video></div>
            <div className={styles.video}><video controls src="video2.mp4"></video></div>
            <div className={styles.video}><video controls src="video3.mp4"></video></div>
            <div className={styles.video}><video controls src="video4.mp4"></video></div>

        </div>

        <div className={styles.videoDescription}>

            <div className={styles.underVideo}>

                <div className={styles.channelPic}><img src="profileGeneric.png" width="38rem"/></div>
                <div className={styles.videoText}>
                    <h4>500videos : Create your 10-second Video Ad.</h4>
                    <p>500videos</p>
                    <p>9k views &dot; 11 years ago</p>
                </div>

            </div>

            <div className={styles.underVideo}>

                <div className={styles.channelPic}><img src="profileGeneric.png" width="38rem"/></div>
                <div className={styles.videoText}>
                    <h4>Best No Text Intro Template Free Download #002 Any video editing software</h4>
                    <p>Science Thought</p>
                    <p>1.9M views &dot; 6 years ago</p>
                </div>

            </div>

            <div className={styles.underVideo}>

                <div className={styles.channelPic}><img src="profileGeneric.png" width="38rem"/></div>
                <div className={styles.videoText}>
                    <h4>10 sec 2D Test animation</h4>
                    <p>Yanmotion</p>
                    <p>43k views &dot; 13 years ago</p>
                </div>

            </div>
            <div className={styles.underVideo}>

                <div className={styles.channelPic}><img src="profileGeneric.png" width="38rem"/></div>
                <div className={styles.videoText}>
                    <h4>Stunning Sunset Seen From The Sea | Time lapse | 10 Seconds Video | Nature Blogs</h4>
                    <p>Nature Blogs</p>
                    <p>86k views &dot; 4 years ago</p>
                </div>
            </div>

        </div>


        <div className={styles.title}>
            <h3>Shorts</h3>
        </div>

        <div className={styles.shortsSection}>

            <div className={styles.short}><video controls src="Short1.mp4" autoplay muted></video></div>
            <div className={styles.short}><video controls src="Short2.mp4" autoplay muted></video></div>
            <div className={styles.short}><video controls src="Short3.mp4" autoplay muted></video></div>
            <div className={styles.short}><video controls src="Short4.mp4" autoplay muted></video></div>
            <div className={styles.short}><video controls src="Short5.mp4" autoplay muted></video></div>
            <div className={styles.short}><video controls src="Short6.mp4" autoplay muted></video></div>
        </div>

        <div className={styles.shortDescription}>
            <div className={styles.underShort}>
                <h4>would you eat this? #shorts</h4>
                <p>34M views</p>
            </div>
            <div className={styles.underShort}>
                <h4>Hellcat smoking BMW M4&#128514;</h4>
                <p>36M views</p>
            </div>
            <div className={styles.underShort}>
                <h4>The Most Genius Jump Start in Racing</h4>
                <p>25M views</p>
            </div>
            <div className={styles.underShort}>
                <h4>Why your next car should be used!</h4>
                <p>1.3M views</p>
            </div>
            <div className={styles.underShort}>
                <h4>I can feel the pain in that "gg" &#128514 #cs2 #shorts </h4>
                <p>4M views</p>
            </div>
            <div className={styles.underShort}>
                <h4>Cum te bagă lăcomia în groapă #luzarii #ungurubulan #cimitir</h4>
                <p>24K views</p>
            </div>
        </div>


    </div>


    </div>
}

export default VideosPage;