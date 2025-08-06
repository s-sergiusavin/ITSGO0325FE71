import React, { useState } from "react";
import "../styles/Navbar.scss";
import logo from "../assets/logo.png";
import myAvatar from "../assets/profil.png";

const Navbar = ({ onNavigate }) => {
  const [showRequests, setShowRequests] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const friendRequests = ["Andreea", "Robert"];
  const messages = ["Ioana: Hey! Do you want ...", "Radu: Check this out!", "Ana: Good morning!"];
  const notifications = ["You have 59 likes and 13 comments to your post", "New comment on your post from one of your friend"];

  return (
    <nav className="navbar">
      {/* Stânga: Logo + Search */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <input
          type="text"
          className="navbar-search"
          placeholder="Search on SayHi..."
        />
      </div>

      {/* Home */}
      <div className="navbar-center">
        <button onClick={() => onNavigate("home")}>🏠</button>

        {/* 👤 Cereri */}
        <div className="nav-icon-badge">
          <button onClick={() => {
            setShowRequests(!showRequests);
            setShowMessages(false);
            setShowNotifications(false);
          }}>
            👤
          </button>
          {friendRequests.length > 0 && (
            <span className="badge">{friendRequests.length}</span>
          )}
          {showRequests && (
            <div className="dropdown">
              <p><strong>Friend Requests</strong></p>
              {friendRequests.map((name, idx) => (
                <div key={idx} className="dropdown-item">
                  <div className="dropdown-avatar"></div>
                  <span>{name} sent a request</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button onClick={() => onNavigate("home")}>✨</button>
      </div>

      {/* Dreapta */}
      <div className="navbar-right">
        {/* Mesaje */}
        <div className="nav-icon-badge">
          <button onClick={() => {
            setShowMessages(!showMessages);
            setShowRequests(false);
            setShowNotifications(false);
          }}>
            💬
          </button>
          {messages.length > 0 && (
            <span className="badge">{messages.length}</span>
          )}
          {showMessages && (
            <div className="dropdown">
              <p>Messages</p>
                {messages.map((msg, idx) => (
                  <div key={idx} className="dropdown-item">
                  <div className="dropdown-avatar"></div>
                  <span>{msg}</span>
                </div>
                ))}
              </div>
          )}
        </div>

        {/* Notificări */}
        <div className="nav-icon-badge">
          <button onClick={() => {
            setShowNotifications(!showNotifications);
            setShowRequests(false);
            setShowMessages(false);
          }}>
            🔔
          </button>
          {notifications.length > 0 && (
            <span className="badge">{notifications.length}</span>
          )}
          {showNotifications && (
            <div className="dropdown">
             <p>Notifications</p>
             {notifications.map((note, idx) => (
               <div key={idx} className="dropdown-item">
                  <div className="dropdown-avatar"></div>
                  <span>{note}</span>
               </div>
             ))}
           </div>
          )}

        </div>

        <img
          src={myAvatar}
          alt="Profil"
          className="navbar-avatar"
          onClick={() => onNavigate("profile")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
