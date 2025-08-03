import styles from './Profile.module.scss';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilterIcon from '@mui/icons-material/Filter';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import TextsmsIcon from '@mui/icons-material/Textsms';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import Mountain from '../../assets/Mountain.jpg'

const Profile = () => {
  return (
    <>
      <div className="mainProfile">
        <div className="principalHeader">
          <div className="image">
            <img src={Mountain} alt="mountain" className="imgHeader" />
          </div>

          <div className="headerOptions">
            <div className="headerOptionsLeft">
              <span>Timeline</span>
              <span>About</span>
              <span>Friends</span>
            </div>

            <div className="profilePic">
              <img
                src="../assets/BogdanCozmaniuc.jpeg"
                alt="profile"
                className="profilePicResize"
              />
              <div className="profilePicName">
                <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Bogdan Cozmaniuc</span>
                <span>Junior Web Developer</span>
              </div>
            </div>

            <div className="headerOptionsRight">
              <span>Photos</span>
              <span>Videos</span>
              <span>
                <i className="bi bi-three-dots" style={{ fontSize: '1.2rem' }}></i>
              </span>
            </div>
          </div>
        </div>

        <div className="imageSettings" title="Change Image">
          <i><MoreHorizIcon/></i>
        </div>
      </div>

      {/* Main */}
      <main>
        {/* left content */}
        <aside className="leftContentProfile">
          {/* profile intro */}
          <div className="profileIntro">
            <div className="profileIntroTitle">
              <span>Profile Intro</span>
            </div>
            <hr />
            <div className="aboutMe">
              <span style={{ fontWeight: 'bold' }}>About Me</span>
              <span>
                Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier
              </span>
            </div>
            <div className="favouriteTvShows">
              <span style={{ fontWeight: 'bold' }}>Favourite TV Shows:</span>
              <span>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</span>
            </div>
            <div className="FavouriteMusic">
              <span style={{ fontWeight: 'bold' }}>Favourite Music Bands / Artists</span>
              <span>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
            </div>
            <div className="otherSocials">
              <span style={{ fontWeight: 'bold' }}>Other Socials Network</span>
            </div>

            <div className="otherSocialsIcons">
              <div className="facebook">
                <i><FacebookIcon/></i>
                <span>Facebook</span>
              </div>
              <div className="twitter">
                <i><XIcon/></i>
                <span>Twitter</span>
              </div>
              <div className="linkedIn">
                <i><LinkedInIcon/></i>
                <span>LinkedIN</span>
              </div>
            </div>
          </div>

          {/* my playlist */}
          <div className="myPlaylist">
            <div className="myPlaylistTitle">
              <span>My Playlist Title</span>
            </div>
            <hr />

            <div className="thePastStarts">
              <div className="imageSong">
                <p>1</p>
                <img src="../assets/music/1.jpg" className="imageResized" alt="" />
              </div>
              <div className="artistAndSong">
                <span style={{ fontWeight: 'bold' }}>The Past Starts</span>
                <span>System of a Revenge</span>
              </div>
              <p>3:22</p>
            </div>
            <div className="thePretender">
              <div className="imageSong">
                <p>2</p>
                <img src="../assets/music/2.jpg" className="imageResized" alt="" />
              </div>
              <div className="artistAndSong">
                <span style={{ fontWeight: 'bold' }}>The Pretender</span>
                <span>Kung Figthers</span>
              </div>
              <p>5:48</p>
            </div>
            <div className="bloodBrothers">
              <div className="imageSong">
                <p>3</p>
                <img src="../assets/music/3.jpg" className="imageResized" alt="" />
              </div>
              <div className="artistAndSong">
                <span style={{ fontWeight: 'bold' }}>Blood Brothers</span>
                <span>Blood brothers</span>
              </div>
              <p>3:06</p>
            </div>
            <div className="sevenNationsArmy">
              <div className="imageSong">
                <p>4</p>
                <img src="../assets/music/4.jpg" className="imageResized" alt="" />
              </div>
              <div className="artistAndSong">
                <span style={{ fontWeight: 'bold' }}>Seven Nations Army</span>
                <span>The Black Stripes</span>
              </div>
              <p>6:17</p>
            </div>
            <div className="killerQueen">
              <div className="imageSong">
                <p>5</p>
                <img src="../assets/music/5.jpg" className="imageResized" alt="" />
              </div>
              <div className="artistAndSong">
                <span style={{ fontWeight: 'bold' }}>Killer Queen</span>
                <span>Archiduke</span>
              </div>
              <p>5:40</p>
            </div>
          </div>
        </aside>

        {/* main */}
        <div className="mainContentProfile">
          {/* first post */}
          <div className="postProfile first">
            <div className="profileUser">
              <img src="../assets/BogdanCozmaniuc.jpeg" className="miniProfilePic" alt="" />
              <div className="nameAndHour">
                <span style={{ color: 'black', fontWeight: 'bold' }}>Bogdan Cozmaniuc</span>
                <span>19 hours ago</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores possimus a qui non voluptas beatae
              eaque exercitationem sequi cumque aspernatur dignissimos iste quam provident libero impedit debitis, cum
              veniam inventore molestiae deleniti illo corporis! Non, porro ipsam quaerat iste in ex dolore eaque ad
              quibusdam, voluptatum rem labore nesciunt!
            </p>

            <hr />

            <div className="reactions">
              <div className="reactionsImagesAndNames">
                <div className="reactionsLove">
                  <i><FavoriteIcon/></i>
                  <span>15</span>
                </div>

                <img src="../assets/friends/1.jpeg" alt="" className="reactionImagesPeople1" />
                <img src="../assets/friends/2.jpeg" alt="" className="reactionImagesPeople2" />
                <img src="../assets/friends/3.jpeg" alt="" className="reactionImagesPeople3" />
                <img src="../assets/friends/4.jpeg" alt="" className="reactionImagesPeople4" />
                <img src="../assets/friends/5.jpeg" alt="" className="reactionImagesPeople5" />

                <div className="reactionNames">
                  <span style={{ fontWeight: 'bold' }}>Jenny, Robert</span> and 13 more liked this
                </div>
              </div>

              <div className="reactionsCommnetAndShare">
                <i><TextsmsIcon/></i>
                <span>17</span>
                <i><ShareIcon/></i>
                <span>24</span>
              </div>
            </div>
          </div>

          {/* second post */}
          <div className="postProfileSecond">
            <div className="profileUser">
              <img src="../assets/BogdanCozmaniuc.jpeg" className="miniProfilePic" alt="" />
              <div className="nameAndHour">
                <span style={{ color: 'black', fontWeight: 'bold' }}>Bogdan Cozmaniuc</span>
                <span>20 hours ago</span>
              </div>
            </div>
            <p>If someone missed it, check out the new song by Shatta! I thinks they are going back to their roots...</p>

            <div className="youtube">
              <iframe
                width="250px"
                height="200px"
                className="videoYoutube"
                src="https://www.youtube.com/embed/sWK2WiiDPUA?si=96hsH5hOclSNeG3I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>

              <div className="youtubeText">
                <h3>SHATTA x Dancehall 90’s -instrumental</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempo incididunt ut labore.
                </p>
                <a
                  href="http://youtube.com"
                  style={{ textDecoration: 'none', color: '#888' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YOUTUBE.COM
                </a>
              </div>
            </div>

            <hr />

            <div className="reactions">
              <div className="reactionsImagesAndNames">
                <div className="reactionsLove">
                  <i><FavoriteIcon/></i>
                  <span>15</span>
                </div>

                <img src="../assets/friends/1.jpeg" alt="" className="reactionImagesPeople1" />
                <img src="../assets/friends/2.jpeg" alt="" className="reactionImagesPeople2" />
                <img src="../assets/friends/3.jpeg" alt="" className="reactionImagesPeople3" />
                <img src="../assets/friends/4.jpeg" alt="" className="reactionImagesPeople4" />
                <img src="../assets/friends/5.jpeg" alt="" className="reactionImagesPeople5" />

                <div className="reactionNames">
                  <span style={{ fontWeight: 'bold' }}>Jenny, Robert</span> and 13 more liked this
                </div>
              </div>

              <div className="reactionsCommnetAndShare">
                <i><TextsmsIcon/></i>
                <span>17</span>
                <i><ShareIcon/></i>
                <span>24</span>
              </div>
            </div>
          </div>

          {/* third post */}
          <div className="postProfileThird">
            <div className="profileUser">
              <img src="../assets/BogdanCozmaniuc.jpeg" className="miniProfilePic" alt="" />
              <div className="nameAndHour">
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  Bogdan Cozmaniuc{' '}
                  <span style={{ color: '#888' }}>shared</span>
                  <span style={{ color: 'orange' }}> Diana Dobrescu&apos;s photo</span>
                </span>
                <span>23 hours ago</span>
              </div>
            </div>
            <p>
              Hi! Everyone should check out these amazing photographs that my friend shot the past week. Here’s one of
              them...leave a kind comment!
            </p>
            <img src="../assets/sharedPhoto.jpg" className="sharedPhoto" alt="" />

            <div className="profileUserShared">
              <img src="../assets/friends/2.jpeg" className="miniProfilePicShared" alt="" />
              <div className="nameAndHour">
                <span style={{ color: 'black', fontWeight: 'bold' }}>Diana Dobrescu</span>
                <span>24 hours ago</span>
                <p>
                  Here’s the first photo of our incredible photoshoot from yesterday. If you like it please say so and
                  tel me what you wanna see next!
                </p>
              </div>
            </div>

            <hr />

            <div className="reactions">
              <div className="reactionsImagesAndNames">
                <div className="reactionsLove">
                  <i><FavoriteIcon/></i>
                  <span>15</span>
                </div>

                <img src="../assets/friends/1.jpeg" alt="" className="reactionImagesPeople1" />
                <img src="../assets/friends/2.jpeg" alt="" className="reactionImagesPeople2" />
                <img src="../assets/friends/3.jpeg" alt="" className="reactionImagesPeople3" />
                <img src="../assets/friends/4.jpeg" alt="" className="reactionImagesPeople4" />
                <img src="../assets/friends/5.jpeg" alt="" className="reactionImagesPeople5" />

                <div className="reactionNames">
                  <span style={{ fontWeight: 'bold' }}>Jenny, Robert</span> and 13 more liked this
                </div>
              </div>

              <div className="reactionsCommnetAndShare">
                <i><TextsmsIcon/></i>
                <span>17</span>
                <i><ShareIcon/></i>
                <span>24</span>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}

        {/* Last Photos */}
        <aside className="rightContentProfile">
          <div className="lastPhotos">
            <div className="lastPhotosTitle">
              <span>Last Photos</span>
            </div>
            <hr />
            <div className="gallery">
              <img src="../assets/Last Photos/1.jpg" className="galleryImage" alt="" />
              <img src="../assets/Last Photos/2.jpg" className="galleryImage" alt="" />
              <img src="../assets/Last Photos/3.jpg" className="galleryImage" alt="" />
              <img src="../assets/Last Photos/4.jpg" className="galleryImage" alt="" />
              <img src="../assets/Last Photos/5.jpg" className="galleryImage" alt="" />
              <img src="../assets/Last Photos/6.jpg" className="galleryImage" alt="" />
              <img src="../assets/Last Photos/7.jpg" className="galleryImage" alt="" />
              <img src="../assets/Last Photos/8.jpg" className="galleryImage" alt="" />
              <img src="../assets/Last Photos/9.jpg" className="galleryImage" alt="" />
            </div>
          </div>

          {/* friends */}
          <div className="friends">
            <div className="friendsTitle">
              <span>Friends (86)</span>
            </div>
            <hr />
            <div className="galleryFriends">
              <img src="../assets/friends/1.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/2.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/3.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/4.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/5.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/6.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/7.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/8.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/9.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/10.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/11.jpeg" className="galleryImageFriends" alt="" />
              <img src="../assets/friends/12.jpeg" className="galleryImageFriends" alt="" />
              <span className="moreFriends">+74</span>
            </div>
          </div>

          {/* blog posts */}
          <div className="blogPosts">
            <div className="blogTitleProfile">
              <span>Blog Posts</span>
            </div>
            <hr />
            <div className="firstBlog">
              <span style={{ fontWeight: 'bold' }}>
                My Perfect Vacations in South America and Europe
              </span>
              <span>
                Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.
              </span>
              <p>7 hours ago</p>
              <hr />
            </div>

            <div className="secondBlog">
              <span style={{ fontWeight: 'bold' }}>The Big Experience of Travelling Alone</span>
              <span>
                Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.
              </span>
              <p>March 18th, at 6:52pm</p>
            </div>
          </div>

          {/* Favourited Pages */}
          <div className="FavouritePages">
            <div className="FavouritePagesTitle">
              <span>Favourite Pages</span>
            </div>
            <hr />

            <div className="theMarinaBar">
              <div className="nameAndTypeAndImage">
                <img src="../assets/FavouritePages/marinaBar.jpg" className="favouritePagesImages" alt="" />
                <div className="nameAndType">
                  <span style={{ fontWeight: 'bold' }}>The Marina Bar</span>
                  <span style={{ color: '#888' }}>Restaurant / Bar</span>
                </div>
              </div>
              <i className="bi bi-plus-circle iconsFavouritePages"></i>
            </div>

            <hr />

            <div className="tapronusRock">
              <div className="nameAndTypeAndImage">
                <img src="../assets/FavouritePages/TapronusRock.jpg" className="favouritePagesImages" alt="" />
                <div className="nameAndType">
                  <span style={{ fontWeight: 'bold' }}>Tapronus Rock</span>
                  <span style={{ color: '#888' }}>Rock Band</span>
                </div>
              </div>
              <i className="bi bi-plus-circle iconsFavouritePages"></i>
            </div>

            <hr />

            <div className="pixelDigitalDesign">
              <div className="nameAndTypeAndImage">
                <img src="../assets/FavouritePages/PixelDigital.jpg" className="favouritePagesImages" alt="" />
                <div className="nameAndType">
                  <span style={{ fontWeight: 'bold' }}>Pixel Digital Design</span>
                  <span style={{ color: '#888' }}>Company</span>
                </div>
              </div>
              <i className="bi bi-plus-circle iconsFavouritePages"></i>
            </div>
            <hr />

            <div className="thompson">
              <div className="nameAndTypeAndImage">
                <img src="../assets/FavouritePages/Thompson.jpg" className="favouritePagesImages" alt="" />
                <div className="nameAndType">
                  <span style={{ fontWeight: 'bold' }}>Thompson’s Custom</span>
                  <span style={{ color: '#888' }}>Clothing Store</span>
                </div>
              </div>
              <i className="bi bi-plus-circle iconsFavouritePages"></i>
            </div>
            <hr />

            <div className="crimsonAgency">
              <div className="nameAndTypeAndImage">
                <img src="../assets/FavouritePages/Crimson Agnecy.jpg" className="favouritePagesImages" alt="" />
                <div className="nameAndType">
                  <span style={{ fontWeight: 'bold' }}>Crimson Agency</span>
                  <span style={{ color: '#888' }}>Company</span>
                </div>
              </div>
              <i className="bi bi-plus-circle iconsFavouritePages"></i>
            </div>
          </div>
        </aside>
      </main>

      {/* Top button */}
      <a href="#top">
        <i className="bi bi-arrow-up-square-fill upArrow"></i>
      </a>
    </>
  );
};

export default Profile;