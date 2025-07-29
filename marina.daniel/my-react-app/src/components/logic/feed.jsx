import "./feed.scss";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import PositionedMenu from "../ui/PositionedMenu";
import BasicTextFields from "../ui/BasicTextFields";
import NotificationBell from "../ui/NotificationBell";
import pozaJpg from "../../assets/pictures/poza.jpg";
import BasicMenu from "../ui/BasicMenu";
import contentPic from "../../assets/pictures/asdasd.jpeg";
import AccordionExpandDefault from "../ui/InfoIconWrapper";
import GetNumberOfLikes from "../ui/likesAndShares";
import Comment from "../ui/commentSection";
import Weather from "../weatherinfo/weatherInfo";

function Feed() {
  return (
    <div>
      <>
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
      </>
      <aside className="leftContent" id="leftContent">
        
      </aside>
      <section className="mainContent" id="main">
        <div className="post" id="postOne">
          <div className="postHeader" id="postHeader">
            <div className="profileUserInfo" id="profileUserInfo">
              <img src={pozaJpg} alt="profilePicture" id="profilePicture" />
              <div className="profileName" id="profileName">
                <span>Marina Daniel</span>
                <span>16 Apr 2025</span>
              </div>
            </div>
            <BasicMenu />
          </div>
          <div className="content" id="content">
            <div className="imageWrapper" id="imageWrapper">
              <img src={contentPic} alt="postContent" id="postContent" />
              <AccordionExpandDefault />
            </div>
            <strong className="postTitle" id="postTitle">
              Titlul Postarii
            </strong>
            <p className="postDescription">
              Aceasta este prima postare facuta pe reteaua de socializare creata
              de mine in timpul cursului de Front End Development.
            </p>
            <NavLink to={"/LandingPage"} className={"navLink"}>
              Read More...
            </NavLink>
          </div>
          <div className="reacts">
            <div className="likesInfo">
              {/* <span>😁</span> */}
              <i className="bi bi-hand-thumbs-up reactsIcons" />
              <span id="likesNumber" />
              <GetNumberOfLikes />
              <span />
            </div>
            <div className="commentsInfo">
              <span id="sharesNumber" />
              <span />
              <i className="bi bi-send reactsIcons" />
            </div>
          </div>
          <hr />

          <div className="commentSection">
            
            <Comment />
          </div>
          
        </div>
      </section>
      <aside className="rightContent" id="rightContent">
       <Weather/>
      </aside>
    </div>
  );
}

export default Feed;
