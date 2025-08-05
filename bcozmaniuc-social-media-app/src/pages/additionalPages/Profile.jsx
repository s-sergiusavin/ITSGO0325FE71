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
import ImageIcon from '@mui/icons-material/Image';

import Mountain from '../../assets/Mountain.jpg';
import BogdanCozmaniuc from '../../assets/BogdanCozmaniuc.jpeg';

import Music1 from '../../assets/music/1.jpg'
import Music2 from '../../assets/music/2.jpg'
import Music3 from '../../assets/music/3.jpg'
import Music4 from '../../assets/music/4.jpg'
import Music5 from '../../assets/music/5.jpg'

import Friend1 from '../../assets/friends/1.jpeg'
import Friend2 from '../../assets/friends/2.jpeg'
import Friend3 from '../../assets/friends/3.jpeg'
import Friend4 from '../../assets/friends/4.jpeg'
import Friend5 from '../../assets/friends/5.jpeg'
import Friend6 from '../../assets/friends/6.jpeg'
import Friend7 from '../../assets/friends/7.jpeg'
import Friend8 from '../../assets/friends/8.jpeg'
import Friend9 from '../../assets/friends/9.jpeg'
import Friend10 from '../../assets/friends/10.jpeg'
import Friend11 from '../../assets/friends/11.jpeg'
import Friend12 from '../../assets/friends/12.jpeg'
import Friend13 from '../../assets/friends/13.jpg'
import Friend14 from '../../assets/friends/14.jpg'
import Friend15 from '../../assets/friends/15.jpg'

import Sharedphoto from '../../assets/sharedPhoto.jpg'

import Lastphoto1 from '../../assets/LastPhotos/1.jpg'
import Lastphoto2 from '../../assets/LastPhotos/2.jpg'
import Lastphoto3 from '../../assets/LastPhotos/3.jpg'
import Lastphoto4 from '../../assets/LastPhotos/4.jpg'
import Lastphoto5 from '../../assets/LastPhotos/5.jpg'
import Lastphoto6 from '../../assets/LastPhotos/6.jpg'
import Lastphoto7 from '../../assets/LastPhotos/7.jpg'
import Lastphoto8 from '../../assets/LastPhotos/8.jpg'
import Lastphoto9 from '../../assets/LastPhotos/9.jpg'

import Marinabar from '../../assets/FavouritePages/marinaBar.jpg'
import Crimsonagnecy from '../../assets/FavouritePages/CrimsonAgnecy.jpg'
import Pixeldigital from '../../assets/FavouritePages/PixelDigital.jpg'
import Tapronusrock from '../../assets/FavouritePages/TapronusRock.jpg'
import Thompson from '../../assets/FavouritePages/Thompson.jpg'


const Profile = () => {
  return (
    <className>
      <div className={styles.mainProfile}>
        <div className={styles.principalHeader}>
          <div className={styles.image}>
            <img src={Mountain} alt="mountain" className={styles.imgHeader} />
          </div>

          <div className={styles.headerOptions}>
            <div className={styles.headerOptionsLeft}>
              <span>Timeline</span>
              <span>About</span>
              <span>Friends</span>
            </div>

            <div className={styles.profilePic}>
              <img
                src={BogdanCozmaniuc}
                alt="profile"
                className={styles.profilePicResize}/>
              
              <div className={styles.profilePicName}>
                <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
                  Bogdan Cozmaniuc
                </span>
                <span>Junior Web Developer</span>
              </div>
            </div>

            <div className={styles.headerOptionsRight}>
              <span>Photos</span>
              <span>Videos</span>
              <span>
                <i style={{ fontSize: '1.2rem' }}><MoreHorizIcon /></i>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.imageSettings} title="Change Image">
          <ImageIcon />
        </div>
      </div>

      <main>
        <aside className={styles.leftContentProfile}>
          <div className={styles.profileIntro}>
            <div className={styles.profileIntroTitle}>
              <span>Profile Intro</span>
            </div>
            <hr />
            <div className={styles.aboutMe}>
              <span style={{ fontWeight: 'bold' }}>About Me</span>
              <span>
                Hi, I’m James, I’m 36 and I work as a Digital Designer for the
                “Daydreams” Agency in Pier
              </span>
            </div>
            <div className={styles.favouriteTvShows}>
              <span style={{ fontWeight: 'bold' }}>Favourite TV Shows:</span>
              <span>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</span>
            </div>
            <div className={styles.favouriteTvShows}>
              <span style={{ fontWeight: 'bold' }}>Favourite Music Bands / Artists</span>
              <span>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
            </div>
            <div className={styles.otherSocials}>
              <span style={{ fontWeight: 'bold' }}>Other Socials Network</span>
            </div>

            <div className={styles.otherSocialsIcons}>
              <div className={styles.facebook}>
                <FacebookIcon />
                <span>Facebook</span>
              </div>
              <div className={styles.twitter}>
                <XIcon />
                <span>Twitter</span>
              </div>
              <div className={styles.linkedIn}>
                <LinkedInIcon />
                <span>LinkedIN</span>
              </div>
            </div>
          </div>

          <div className={styles.myPlaylist}>
            <div className={styles.myPlaylistTitle}>
              <span>My Playlist Title</span>
            </div>
            <hr />

            <div className={styles.thePastStarts}>
              <div className={styles.imageSong}>
                <p>1</p>
                <img src={Music1} alt="" className={styles.imageResized} />
              </div>
              <div className={styles.artistAndSong}>
                <span style={{ fontWeight: 'bold' }}>The Past Starts</span>
                <span>System of a Revenge</span>
              </div>
              <p>3:22</p>
            </div>

            <div className={styles.thePretender}>
              <div className={styles.imageSong}>
                <p>2</p>
                <img src={Music2} alt="" className={styles.imageResized} />
              </div>
              <div className={styles.artistAndSong}>
                <span style={{ fontWeight: 'bold' }}>The Pretender</span>
                <span>Kung Figthers</span>
              </div>
              <p>5:48</p>
            </div>

            <div className={styles.bloodBrothers}>
              <div className={styles.imageSong}>
                <p>3</p>
                <img src={Music3} alt="" className={styles.imageResized} />
              </div>
              <div className={styles.artistAndSong}>
                <span style={{ fontWeight: 'bold' }}>Blood Brothers</span>
                <span>Blood brothers</span>
              </div>
              <p>3:06</p>
            </div>

            <div className={styles.sevenNationsArmy}>
              <div className={styles.imageSong}>
                <p>4</p>
                <img src={Music4} alt="" className={styles.imageResized} />
              </div>
              <div className={styles.artistAndSong}>
                <span style={{ fontWeight: 'bold' }}>Seven Nations Army</span>
                <span>The Black Stripes</span>
              </div>
              <p>6:17</p>
            </div>

            <div className={styles.killerQueen}>
              <div className={styles.imageSong}>
                <p>5</p>
                <img src={Music5} alt="" className={styles.imageResized} />
              </div>
              <div className={styles.artistAndSong}>
                <span style={{ fontWeight: 'bold' }}>Killer Queen</span>
                <span>Archiduke</span>
              </div>
              <p>5:40</p>
            </div>
          </div>
        </aside>

        <div className={styles.mainContentProfile}>
          {/* first post */}
          <div className={styles.postProfile}>
            <div className={styles.profileUser}>
              <img
                src={BogdanCozmaniuc}
                alt=""
                className={styles.miniProfilePic}
              />
              <div className={styles.nameAndHour}>
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  Bogdan Cozmaniuc
                </span>
                <span>19 hours ago</span>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              asperiores possimus a qui non voluptas beatae eaque exercitationem
              sequi cumque aspernatur dignissimos iste quam provident libero
              impedit debitis, cum veniam inventore molestiae deleniti illo
              corporis! Non, porro ipsam quaerat iste in ex dolore eaque ad
              quibusdam, voluptatum rem labore nesciunt!
            </p>
            <hr />
            <div className={styles.reactions}>
              <div className={styles.reactionsImagesAndNames}>
                <div className={styles.reactionsLove}>
                  <FavoriteIcon />
                  <span>15</span>
                </div>

                <img
                  src={Friend1}
                  alt=""
                  className={styles.reactionImagesPeople1}
                />
                <img
                  src={Friend2}
                  alt=""
                  className={styles.reactionImagesPeople2}
                />
                <img
                  src={Friend3}
                  alt=""
                  className={styles.reactionImagesPeople3}
                />
                <img
                  src={Friend4}
                  alt=""
                  className={styles.reactionImagesPeople4}
                />
                <img
                  src={Friend5}
                  alt=""
                  className={styles.reactionImagesPeople5}
                />

                <div className={styles.reactionNames}>
                  <span style={{ fontWeight: 'bold' }}>
                    Jenny, Robert
                  </span>{' '}
                  and 13 more liked this
                </div>
              </div>

              <div className={styles.reactionsCommnetAndShare}>
                <TextsmsIcon />
                <span>17</span>
                <ShareIcon />
                <span>24</span>
              </div>
            </div>
          </div>

          {/* second post */}
          <div className={styles.postProfileSecond}>
            <div className={styles.profileUser}>
              <img
                src={BogdanCozmaniuc}
                alt=""
                className={styles.miniProfilePic}
              />
              <div className={styles.nameAndHour}>
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  Bogdan Cozmaniuc
                </span>
                <span>20 hours ago</span>
              </div>
            </div>
            <p>
              If someone missed it, check out the new song by Shatta! I thinks
              they are going back to their roots...
            </p>
            <div className={styles.youtube}>
              <iframe
                width="250px"
                height="200px"
                className={styles.videoYoutube}
                src="https://www.youtube.com/embed/sWK2WiiDPUA?si=96hsH5hOclSNeG3I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>

              <div className={styles.youtubeText}>
                <h3>SHATTA x Dancehall 90’s -instrumental</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do
                  eiusmod tempo incididunt ut labore.
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

            <div className={styles.reactions}>
              <div className={styles.reactionsImagesAndNames}>
                <div className={styles.reactionsLove}>
                  <FavoriteIcon />
                  <span>15</span>
                </div>

                <img
                  src={Friend1}
                  alt=""
                  className={styles.reactionImagesPeople1}
                />
                <img
                  src={Friend2}
                  alt=""
                  className={styles.reactionImagesPeople2}
                />
                <img
                  src={Friend3}
                  alt=""
                  className={styles.reactionImagesPeople3}
                />
                <img
                  src={Friend4}
                  alt=""
                  className={styles.reactionImagesPeople4}
                />
                <img
                  src={Friend5}
                  alt=""
                  className={styles.reactionImagesPeople5}
                />

                <div className={styles.reactionNames}>
                  <span style={{ fontWeight: 'bold' }}>
                    Jenny, Robert
                  </span>{' '}
                  and 13 more liked this
                </div>
              </div>

              <div className={styles.reactionsCommnetAndShare}>
                <TextsmsIcon />
                <span>17</span>
                <ShareIcon />
                <span>24</span>
              </div>
            </div>
          </div>

          {/* third post */}
          <div className={styles.postProfileThird}>
            <div className={styles.profileUser}>
              <img
                src={BogdanCozmaniuc}
                alt=""
                className={styles.miniProfilePic}
              />
              <div className={styles.nameAndHour}>
                <span style={{ color: 'black', fontWeight: 'bold' }}>
                  Bogdan Cozmaniuc{' '}
                  <span style={{ color: '#888' }}>shared</span>
                  <span style={{ color: 'orange' }}>
                    {' '}
                    Diana Dobrescu&apos;s photo
                  </span>
                </span>
                <span>23 hours ago</span>
              </div>
            </div>
            <p>
              Hi! Everyone should check out these amazing photographs that my
              friend shot the past week. Here’s one of them...leave a kind
              comment!
            </p>
            <img
              src={Sharedphoto}
              alt=""
              className={styles.sharedPhoto}
            />

            <div className={styles.profileUserShared}>
              <img
                src={Friend2}
                alt=""
                className={styles.miniProfilePicShared}
              />
              <div className={styles.nameAndHour}>
                <span style={{ fontWeight: 'bold', color: 'black' }}>
                  Diana Dobrescu
                </span>
                <span>24 hours ago</span>
                <p>
                  Here’s the first photo of our incredible photoshoot from
                  yesterday. If you like it please say so and tel me what you
                  wanna see next!
                </p>
              </div>
            </div>

            <hr />

            <div className={styles.reactions}>
              <div className={styles.reactionsImagesAndNames}>
                <div className={styles.reactionsLove}>
                  <FavoriteIcon />
                  <span>15</span>
                </div>

                <img
                  src={Friend1}
                  alt=""
                  className={styles.reactionImagesPeople1}
                />
                <img
                  src={Friend2}
                  alt=""
                  className={styles.reactionImagesPeople2}
                />
                <img
                  src={Friend3}
                  alt=""
                  className={styles.reactionImagesPeople3}
                />
                <img
                  src={Friend4}
                  alt=""
                  className={styles.reactionImagesPeople4}
                />
                <img
                  src={Friend5}
                  alt=""
                  className={styles.reactionImagesPeople5}
                />

                <div className={styles.reactionNames}>
                  <span style={{ fontWeight: 'bold' }}>
                    Jenny, Robert
                  </span>{' '}
                  and 13 more liked this
                </div>
              </div>

              <div className={styles.reactionsCommnetAndShare}>
                <TextsmsIcon />
                <span>17</span>
                <ShareIcon />
                <span>24</span>
              </div>
            </div>
          </div>
        </div>

        <aside className={styles.rightContentProfile}>
          <div className={styles.lastPhotos}>
            <div className={styles.lastPhotosTitle}>
              <span>Last Photos</span>
            </div>
            <hr />
            <div className={styles.gallery}>
              <img
                src={Lastphoto1}
                alt=""
                className={styles.galleryImage}
              />
              <img
                src={Lastphoto2}
                alt=""
                className={styles.galleryImage}
              />
              <img
                src={Lastphoto3}
                alt=""
                className={styles.galleryImage}
              />
              <img
                src={Lastphoto4}
                alt=""
                className={styles.galleryImage}
              />
              <img
                src={Lastphoto5}
                alt=""
                className={styles.galleryImage}
              />
              <img
                src={Lastphoto6}
                alt=""
                className={styles.galleryImage}
              />
              <img
                src={Lastphoto7}
                alt=""
                className={styles.galleryImage}
              />
              <img
                src={Lastphoto8}
                alt=""
                className={styles.galleryImage}
              />
              <img
                src={Lastphoto9}
                alt=""
                className={styles.galleryImage}
              />
            </div>
          </div>

          <div className={styles.friends}>
            <div className={styles.friendsTitle}>
              <span>Friends (86)</span>
            </div>
            <hr />
            <div className={styles.galleryFriends}>
              <img
                src={Friend1}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend2}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend3}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend4}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend5}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend6}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend7}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend8}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend9}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend10}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend11}
                alt=""
                className={styles.galleryImageFriends}
              />
              <img
                src={Friend12}
                alt=""
                className={styles.galleryImageFriends}
              />
              <span className={styles.moreFriends}>+74</span>
            </div>
          </div>

          <div className={styles.blogPosts}>
            <div className={styles.blogTitleProfile}>
              <span>Blog Posts</span>
            </div>
            <hr />
            <div className={styles.firstBlog}>
              <span style={{ fontWeight: 'bold' }}>
                My Perfect Vacations in South America and Europe
              </span>
              <span>
                Lorem ipsum dolor sit amet, consect adipisicing elit, sed do
                eiusmod por incidid ut labore et.
              </span>
              <p>7 hours ago</p>
              <hr />
            </div>

            <div className={styles.secondBlog}>
              <span style={{ fontWeight: 'bold' }}>
                The Big Experience of Travelling Alone
              </span>
              <span>
                Lorem ipsum dolor sit amet, consect adipisicing elit, sed do
                eiusmod por incidid ut labore et.
              </span>
              <p>March 18th, at 6:52pm</p>
            </div>
          </div>

          <div className={styles.favouritePages}>
            <div className={styles.favouritePagesTitle}>
              <span>Favourite Pages</span>
            </div>
            <hr />

            <div className={styles.theMarinaBar}>
              <div className={styles.nameAndTypeAndImage}>
                <img
                  src={Marinabar}
                  alt=""
                  className={styles.favouritePagesImages}
                />
                <div className={styles.nameAndType}>
                  <span style={{ fontWeight: 'bold' }}>The Marina Bar</span>
                  <span style={{ color: '#888' }}>Restaurant / Bar</span>
                </div>
              </div>
              <i className={`bi bi-plus-circle ${styles.iconsFavouritePages}`}></i>
            </div>

            <hr />

            <div className={styles.tapronusRock}>
              <div className={styles.nameAndTypeAndImage}>
                <img
                  src={Tapronusrock}
                  alt=""
                  className={styles.favouritePagesImages}
                />
                <div className={styles.nameAndType}>
                  <span style={{ fontWeight: 'bold' }}>Tapronus Rock</span>
                  <span style={{ color: '#888' }}>Rock Band</span>
                </div>
              </div>
              <i className={`bi bi-plus-circle ${styles.iconsFavouritePages}`}></i>
            </div>

            <hr />

            <div className={styles.pixelDigitalDesign}>
              <div className={styles.nameAndTypeAndImage}>
                <img
                  src={Pixeldigital}
                  alt=""
                  className={styles.favouritePagesImages}
                />
                <div className={styles.nameAndType}>
                  <span style={{ fontWeight: 'bold' }}>Pixel Digital Design</span>
                  <span style={{ color: '#888' }}>Company</span>
                </div>
              </div>
              <i className={`bi bi-plus-circle ${styles.iconsFavouritePages}`}></i>
            </div>

            <hr />

            <div className={styles.thompson}>
              <div className={styles.nameAndTypeAndImage}>
                <img
                  src={Thompson}
                  alt=""
                  className={styles.favouritePagesImages}
                />
                <div className={styles.nameAndType}>
                  <span style={{ fontWeight: 'bold' }}>Thompson’s Custom</span>
                  <span style={{ color: '#888' }}>Clothing Store</span>
                </div>
              </div>
              <i className={`bi bi-plus-circle ${styles.iconsFavouritePages}`}></i>
            </div>

            <hr />

            <div className={styles.crimsonAgency}>
              <div className={styles.nameAndTypeAndImage}>
                <img
                  src={Crimsonagnecy}
                  alt=""
                  className={styles.favouritePagesImages}
                />
                <div className={styles.nameAndType}>
                  <span style={{ fontWeight: 'bold' }}>Crimson Agency</span>
                  <span style={{ color: '#888' }}>Company</span>
                </div>
              </div>
              <i className={`bi bi-plus-circle ${styles.iconsFavouritePages}`}></i>
            </div>
          </div>
        </aside>

      </main >


      <a href="#top">
        <i className={`bi bi-arrow-up-square-fill ${styles.upArrow}`}></i>
      </a>
    </className>
  );
};

export default Profile;
