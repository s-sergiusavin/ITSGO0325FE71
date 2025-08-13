// În componenta Sidebar.jsx

import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {/* Exemplu de navigare pentru "Feed" */}
          <Link to="/" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
          </Link>
          {/* Continuă cu celelalte elemente */}
          <Link to="/chat" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chat</span>
            </li>
          </Link>
          <Link to="/video" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Video</span>
            </li>
          </Link>
          <Link to="/grupuri" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Grupuri</span>
            </li>
          </Link>
          <Link to="/salvate" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Salvate</span>
            </li>
          </Link>
          <Link to="/intrebari" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Întrebări</span>
            </li>
          </Link>
          <Link to="/servicii" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Servicii</span>
            </li>
          </Link>
          <Link to="/evenimente" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Evenimente</span>
            </li>
          </Link>
          <Link to="/scoala" className="sidebarListItemLink">
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Școală</span>
            </li>
          </Link>
        </ul>
        <button className="sidebarButton">Arată mai mult</button>
      </div>
    </div>
  );
}