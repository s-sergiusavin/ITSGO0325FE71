import "./feed.scss";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import PositionedMenu from "../ui/PositionedMenu";
import BasicTextFields from "../ui/BasicTextFields";
import NotificationBell from "../ui/NotificationBell";


function Feed() {
  return (
    <div>
      <>
      <div className="header">
        <div className="mainSearch">
          <Link to={"/"} className="logo">
            <CloudCircleIcon id="headerIcon"/>
          </Link>
          <BasicTextFields/>
          
        </div>
        <ul className="mainNavigation">
          <ul className="navigation">
            <li>
              <Link to={"/"}>
                <OtherHousesIcon id="headerIcon"/>
              </Link>
            </li>
            <li>
              <NavLink to={"/profile"}>
                <PersonIcon id="headerIcon"/>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/messages"}>
                <MessageIcon id="headerIcon"/>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>
                <VideoCameraFrontIcon id="headerIcon"/>
              </NavLink>
            </li>
          </ul>

          <ul className="links">
            <li className="controlPoint">
                <ControlPointIcon id="headerIcon"/>
            </li>

            <li>
              
              <NotificationBell id="headerIcon"/>
            </li>

            <li>
              <div className="accountSettings">
                <PositionedMenu id="headerIcon"/>
                
              </div>
            </li>
          </ul>
        </ul>
        </div>
      </>
    </div>
  );
}

export default Feed;
