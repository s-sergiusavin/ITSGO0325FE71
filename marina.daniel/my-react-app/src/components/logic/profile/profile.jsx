import "./profile.scss";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import PositionedMenu from "../../ui/PositionedMenu";
import BasicTextFields from "../../ui/BasicTextFields";
import NotificationBell from "../../ui/NotificationBell";
import coverPhoto from "../../../assets/pictures/infinit.jpg";
import profilePhoto from "../../../assets/pictures/poza.jpg";
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import FlagIcon from '@mui/icons-material/Flag';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

function Profile() {
  return (
    <div>
      <div className="header">
        <div className="mainSearch">
          <Link to={"/"} className="logo">
            <CloudCircleIcon id="headerIcon" />
          </Link>
          <BasicTextFields />
        </div>
        <ul className="mainNavigation">
          <ul className="navigation">
            <li>
              <Link to={"/"}>
                <OtherHousesIcon id="headerIcon" />
              </Link>
            </li>
            <li>
              <NavLink to={"/profile"}>
                <PersonIcon id="headerIcon" />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/messages"}>
                <MessageIcon id="headerIcon" />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/getNews"}>
                <VideoCameraFrontIcon id="headerIcon" />
              </NavLink>
            </li>
          </ul>

          <ul className="links">
            <li className="controlPoint">
              <ControlPointIcon id="headerIcon" />
            </li>

            <li>
              <NotificationBell id="headerIcon" />
            </li>

            <li>
              <div className="accountSettings">
                <PositionedMenu id="settingsIcon" />
              </div>
            </li>
          </ul>
        </ul>
      </div>
      <main>
        <div className="profileCovers">
          <img
            src={coverPhoto}
            alt="Cover"
            className="profileCoverPhotos"
            id="profileCoverPhotos"
          />
          <div className="editCoverPhoto" id="editCoverPhoto">
            <CameraAltIcon className="icon"/>
            <span>Edit cover photo</span>
          </div>
          <div className="profilePictures">
            <img
              src={profilePhoto}
              alt="profile picture"
              className="profileImages"
            />
          </div>
          <div>
            <strong className="profileName">Marina Daniel</strong>
            <p className="profileFriends">352 friends</p>
          </div>
          <div className="editProfileStuff">
            <div className="editStory">
                <AddIcon />
              <span>Add to story</span>
            </div>
            <div className="editProfile">
                <CreateIcon />
              <span>Edit profile</span>
            </div>
          </div>
        </div>
        <hr />
      </main>
      <nav class="profileNavigation">
        <ul>
          <li>
            <a href="#">Posts</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Friends</a>
          </li>
          <li>
            <a href="#">Photos</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Check-ins</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>

        <a href="#" class="profileOptions">
          <i class="bi bi-three-dots"></i>
        </a>
      </nav>
      <section className="feed">
        <div className="rightFeed">
          <div className="introFeed">
            <h2>Intro</h2>
            <span className="addBio">Add Bio</span>
            <div className="editBio">
              <HomeIcon />
              <span>
                Lives in <strong>Timisoara</strong>
              </span>
            </div>
            <div className="editBio">
              <LocationOnIcon />
              <span>
                From <strong>Slatina.Olt</strong>
              </span>
            </div>
            <div className="editBio">
              <AccessTimeIcon/>
              <span>Joined on November 2010</span>
            </div>
            <span className="addBio">Edit details</span>
            <span className="addBio">Add Featured</span>
          </div>
          <div className="photosSection">
            <div className="seePhotos">
              <h2>Photos</h2>
              <a href="#" className="seePhotosOne">
                See All Phots
              </a>
            </div>
            <div className="photoSection">
              <img src={profilePhoto} alt="Photo 1" />
              <img src={coverPhoto} alt="Photo 2" />
              <img src={coverPhoto} alt="Photo 3" />
              <img src={coverPhoto} alt="Photo 4" />
            </div>
          </div>
          <div className="photosSection">
            <div className="seePhotos">
              <h2>Friends</h2>
              <a href="#" className="seePhotosOne">
                See All Friends
              </a>
            </div>
            <div className="photoSection">
              <div className="friendPage">
                <img src={profilePhoto} alt="Photo 1" />
                <p>
                  Vasile Ion
                </p>
              </div>
              <div className="friendPage">
                <img src={coverPhoto} alt="Photo 2" />
                <p>
                  Maria Ioana
                </p>
              </div>
              <div className="friendPage">
                <img src={coverPhoto} alt="Photo 3" />
                <p>
                  Sabrina Petre
                </p>
              </div>
              <div className="friendPage">
                <img src={coverPhoto} alt="Photo 4" />
                <p>
                  Lavinia Patri
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="leftFeed">
          <div className="firstPost">
            <div className="firstRowPost">
              <a href="">
                <img
                  src={profilePhoto}
                  alt="profile picture"
                  className="profileImage"
                />
              </a>
              <input
                type="text"
                placeholder="What's on your mind?"
                className="newCommentField"
              />
            </div>
            <div className="mediaStuff">
              <div className="editMedia">
                <VideoCameraBackIcon/>
                {/* <i className="bi bi-camera-reels cameraColor" /> */}
                <span>Live Video</span>
              </div>
              <div className="editMedia">
                <PhotoLibraryIcon/>
                <span>Photo/video</span>
              </div>
              <div className="editMedia">
                <FlagIcon/>
                <span>Life event</span>
              </div>
            </div>
          </div>
          <div className="mainPosts">
            <div className="subMainPosts">
              <h2>Posts</h2>
              <div className="editMainPosts">
                <div className="editMainPostsFirst">
                  <TuneIcon/>
                  <span>Filters</span>
                </div>
                <div className="editMainPostsSecond">
                  <SettingsApplicationsIcon/>
                  <span>Manage Posts</span>
                </div>
              </div>
            </div>
            <div className="postView">
              <div className="listView">
                <FormatListBulletedIcon/>
                <span>List view</span>
              </div>
              <div className="gridView">
                <GridViewIcon/>
                <span>Grid view</span>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postHeader">
              <div className="profileUserInfo">
                <a href="">
                  <img
                    src={profilePhoto}
                    alt="profile picture"
                    className="profileImage"
                  />
                </a>
                <div className="profileName">
                  <span>Marina Daniel</span>
                  <span>16 Apr 2025</span>
                </div>
              </div>
              <a href="#" className="profileOptions">
                <i className="bi bi-three-dots" />
              </a>
            </div>
            <div className="content">
              <div className="imageWrapper">
                <img
                  src={coverPhoto}
                  alt="post content picture"
                  className="imgContent"
                />
                <InfoOutlineIcon className="infoIcon"/>
                {/* <i className="bi bi-info-circle infoIcon" /> */}
              </div>
              <strong className="postTitle">Titlul Postarii</strong>
              <p className="postDescription">
                Aceasta este prima postare facuta pe reteaua de socializare
                creata de mine in timpul cursului de Front End Development.
              </p>
              <a href="landingPage.html">
                <strong>Read more...</strong>
              </a>
            </div>
            <div className="reacts">
              <div className="likesInfo">
                <span>😁</span>
                <i className="bi bi-hand-thumbs-up reactsIcons" />
                <span>10 likes</span>
              </div>
              <div className="commentsInfo">
                <span>15 comments</span>
                <i className="bi bi-chat-text reactsIcons" />
              </div>
            </div>
            <hr />
            <div className="reactsActions">
              <ul className="actions">
                <li className="reaction">
                  <i className="bi bi-hand-thumbs-up reactsIcons" />
                  <span>Like</span>
                </li>
                <li className="reaction">
                  <i className="bi bi-chat-text reactsIcons" />
                  <span>Comments</span>
                </li>
                <li className="reaction">
                  <i className="bi bi-send" />
                  <span>Share</span>
                </li>
              </ul>
            </div>
            <hr />
            <div className="commentSection">
              <a href="">
                <img
                  src={profilePhoto}
                  alt="profile picture"
                  className="profileImage"
                />
              </a>
              <input
                type="text"
                placeholder="Adauga un comentariu"
                className="newCommentField"
              />
              <button className="insertCommentButton">
                <i className="bi bi-send-plus" />
              </button>
            </div>
            <div className="userComments">
              <div className="userCommentsContent">
                <div className="profileUserComment">
                  <a href="">
                    <img
                      src={profilePhoto}
                      alt="profile picture"
                      className="profileImage"
                    />
                  </a>
                  <span>User Name</span>
                </div>
                <div className="userCommentText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur aspernatur vitae minima atque excepturi, veritatis
                  obcaecati pariatur doloremque maiores voluptas repellat animi
                  facere, non quibusdam reprehenderit illo dolore ut eaque.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
