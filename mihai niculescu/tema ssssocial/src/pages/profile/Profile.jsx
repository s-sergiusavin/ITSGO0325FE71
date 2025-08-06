// src/pages/profile/Profile.jsx

import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://images.ctfassets.net/hrltx12pl8hq/2RwJp3f9UiCnfWBEunwxOQ/f11257994853124d7b1a6a935e678c13/0_hero.webp" // Aici este o imagine de copertă.
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" // Aici este o imagine de profil.
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Mihai Niculescu</h4>
              <span className="profileInfoDesc">🌴🌊</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}