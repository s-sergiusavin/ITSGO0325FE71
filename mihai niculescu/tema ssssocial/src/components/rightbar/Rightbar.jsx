import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Simion Gheorghe</b> și <b>alți 3 prieteni</b> își sărbătoresc ziua de naștere.
          </span>
        </div>
        <img className="rightbarAd" src="data:image/jpeg;base64,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" alt="" />
        <h4 className="rightbarTitle">Prieteni online</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Despre</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Oraș:</span>
            <span className="rightbarInfoValue">București</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email:</span>
            <span className="rightbarInfoValue">mihainiculescu96@yahoo.com</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Serviciu:</span>
            <span className="rightbarInfoValue">Front-End Developer</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Prieteni</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Maria Simion</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Andrei Tudor</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Paula Stoian</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Teo Mircu</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ana Petru</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Alex Titu</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
