import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <>
      <header>
        <div className="mainSearch">
          <a href="">
            <i className="bi bi-database logo" />
          </a>
          <input
            type="search"
            className="searchInput"
            placeholder="Search on social media"
          />
        </div>
        <nav className="mainNavigation">
          <ul className="navigation">
            <li>
              <a href="feed.html" title="Home">
                <i className="bi bi-house navIcons" />
              </a>
            </li>
            <li>
              <a href="profile.html" title="My Profile">
                <i className="bi bi-person navIcons" />
              </a>
            </li>
            <li>
              <a href="#" title="Messenger Chat">
                <i className="bi bi-chat-dots navIcons" />
              </a>
            </li>
            <li>
              <a href="#" title="Watch Videos">
                <i className="bi bi-camera-reels navIcons" />
              </a>
            </li>
          </ul>
        </nav>
        <ul className="links">
          <li>
            <a href="landingPage.html" title="To Landing Page">
              <i className="bi bi-plus-circle navIcons" />
            </a>
          </li>
          <li>
            <a href="#" title="View Notifications" className="bellIcon">
              <i className="bi bi-bell navIcons" />
              <span>12</span>
            </a>
          </li>
          <li>
            <div className="accountSettings">
              <button id="accountSettingsButton" title="Settings">
                <i className="bi bi-gear navIcons" />
              </button>
              <div className="accountSettingsMenu">
                <button>Profile Settings</button>
                <button id="logoutButton">Logout</button>
              </div>
            </div>
          </li>
        </ul>
      </header>

      <main>
        <aside className="leftContent">
          <div>
            <div className="profileUserInfo">
              <a href="profile.html">
                <img
                  src="./css/assets/3135715.png"
                  alt="profile picture"
                  className="profileImage"
                />
              </a>
              <div className="profileName">
                <span>Marina Daniel</span>
              </div>
            </div>
            <div className="profileFriends">
              <a href="friends.html">
                <i className="bi bi-people friends" />
              </a>
              <span className="fri">Friends</span>
            </div>
            <div className="profileMemories">
              <a href="">
                <i className="bi bi-clock-history Memories" />
              </a>
              <span className="memo">Memories</span>
            </div>
            <div className="profileSaved">
              <a href="">
                <i className="bi bi-bookmark Savey" />
              </a>
              <span className="save">Saved</span>
            </div>
            <div className="profileGroups">
              <a href="">
                <i className="bi bi-collection Group" />
              </a>
              <span className="grou">Groups</span>
            </div>
            <div className="profileVideo">
              <a href="">
                <i className="bi bi-play-btn Videos" />
              </a>
              <span className="vide">Video</span>
            </div>
            <div className="profileMarket">
              <a href="">
                <i className="bi bi-shop-window Market" />
              </a>
              <span className="mark">Market</span>
            </div>
          </div>
        </aside>
        <section className="mainContent">
          <div className="post">
            <div className="postHeader">
              <div className="profileUserInfo">
                <a href="">
                  <img
                    src="./css/assets/3135715.png"
                    alt="profile picture"
                    className="profileImage"
                  />
                </a>
                <div className="profileName">
                  <span>Marina Daniel</span>
                  <span>16 Apr 2025</span>
                </div>
              </div>
              <div className="profileOptionsWrapper">
                <button className="profileOptions">
                  <i className="bi bi-three-dots" />
                </button>
                <div className="profileOptionsDropdown">
                  <button>Edit this post</button>
                  <button>Remove this post</button>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="imageWrapper">
                <img
                  src="./css/assets/infinit.jpg"
                  alt="post content picture"
                  className="imgContent"
                />
                <div className="infoIconWrapper">
                  <i className="bi bi-info-circle infoIcon" tabIndex={1} />
                  <p className="infoMessage">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Modi deleniti optio maiores ab libero, pariatur corporis
                    sapiente provident est iste, excepturi quidem amet quibusdam
                    impedit temporibus omnis voluptatem. Accusamus, sed!{" "}
                    <a href="landingPage.html">Read more...</a>
                  </p>
                </div>
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
                {/* <span>😁</span> */}
                <i className="bi bi-hand-thumbs-up reactsIcons" />
                <span id="likesNumber" />
                <span /> likes
              </div>
              <div className="commentsInfo">
                <span id="sharesNumber" />
                <span /> shares
                <i className="bi bi-send reactsIcons" />
              </div>
            </div>
            <hr />
            <div className="reactsActions">
              <ul className="actions">
                <li className="reaction" id="likeButton">
                  <i className="bi bi-hand-thumbs-up reactsIcons" />
                  <span>Like</span>
                </li>
                <li className="reaction" id="commentButton">
                  <i className="bi bi-chat-text reactsIcons" />
                  <span>Comments</span>
                </li>
                <li className="reaction" id="shareButton">
                  <i className="bi bi-send" />
                  <span>Share</span>
                </li>
              </ul>
            </div>
            <hr />
            <div className="commentSection">
              <a href="">
                <img
                  src="./css/assets/3135715.png"
                  alt="profile picture"
                  className="profileImage"
                />
              </a>
              <input
                type="text"
                placeholder="Adauga un comentariu"
                className="newCommentField"
                id="commentInput"
              />
              {/* <button class="insertCommentButton"><i class="bi bi-send-plus"></i></button> */}
              <div className="insertCommentButton" id="commentInputButton">
                <div className="center">
                  <button className="btn">
                    <svg
                      width="5rem"
                      height="1.5rem"
                      viewBox="0 0 180 60"
                      className="border"
                    >
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        className="bg-line"
                      />
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        className="hl-line"
                      />
                    </svg>
                    <span>
                      <i className="bi bi-send-plus" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="userComments">
              <div className="userCommentsContent">
                <div className="profileUserComment">
                  <a href="">
                    <img
                      src="./css/assets/3135715.png"
                      alt="profile picture"
                      className="profileImage"
                    />
                  </a>
                  <span>User Name</span>
                </div>
                <div className="userCommentText">
                  <div id="commentMessage">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Porro consequatur nemo nisi quasi dignissimos quisquam
                    explicabo suscipit possimus modi similique mollitia
                    voluptatem molestias ipsam, excepturi illum? Adipisci
                    aperiam qui voluptatem.
                  </div>
                  <div className="emojiReaction">😎</div>
                  <span id="removeCommentButton">Remove this comment</span>
                </div>
              </div>
              <div className="profileUserComment">
                <a href="">
                  <img
                    src="./css/assets/3135715.png"
                    alt="profile picture"
                    className="profileImage"
                  />
                </a>
                <span>User Name</span>
              </div>
              <div className="userCommentText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
                soluta! Similique placeat blanditiis perferendis fugiat.
                <div className="emojiReaction">😡</div>
              </div>
              <div className="commentReaction">
                <strong className="commentReactionButton">Like</strong>
                <strong className="commentReactionButton">Comment</strong>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="postHeader">
              <div className="profileUserInfo">
                <a href="">
                  <img
                    src="./css/assets/3135715.png"
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
                  src="./css/assets/infinit.jpg"
                  alt="post content picture"
                  className="imgContent"
                />
                <i className="bi bi-info-circle infoIcon" />
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
                  src="./css/assets/3135715.png"
                  alt="profile picture"
                  className="profileImage"
                />
              </a>
              <input
                type="text"
                placeholder="Adauga un comentariu"
                className="newCommentField"
              />
              {/* <button class="insertCommentButton"><i class="bi bi-send-plus"></i></button> */}
              <div className="insertCommentButton">
                <div className="center">
                  <button className="btn">
                    <svg
                      width="5rem"
                      height="1.5rem"
                      viewBox="0 0 180 60"
                      className="border"
                    >
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        className="bg-line"
                      />
                      <polyline
                        points="179,1 179,59 1,59 1,1 179,1"
                        className="hl-line"
                      />
                    </svg>
                    <span>
                      <i className="bi bi-send-plus" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="userComments">
              <div className="userCommentsContent">
                <div className="profileUserComment">
                  <a href="">
                    <img
                      src="./css/assets/3135715.png"
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
                  <div className="emojiReaction">😡</div>
                </div>
              </div>
              <div className="profileUserComment">
                <a href="">
                  <img
                    src="./css/assets/3135715.png"
                    alt="profile picture"
                    className="profileImage"
                  />
                </a>
                <span>User Name</span>
              </div>
              <div className="userCommentText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
                soluta! Similique placeat blanditiis perferendis fugiat.
                <div className="emojiReaction">😡</div>
              </div>
              <div className="commentReaction">
                <strong className="commentReactionButton">Like</strong>
                <strong className="commentReactionButton">Comment</strong>
              </div>
            </div>
            <div className="userComments">
              <div className="userCommentsContent">
                <div className="profileUserComment">
                  <a href="">
                    <img
                      src="./css/assets/3135715.png"
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
                  <div className="emojiReaction">😡</div>
                </div>
              </div>
              <div className="profileUserComment">
                <a href="">
                  <img
                    src="./css/assets/3135715.png"
                    alt="profile picture"
                    className="profileImage"
                  />
                </a>
                <span>Other Comments</span>
              </div>
              <div className="userCommentText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
                soluta! Similique placeat blanditiis perferendis fugiat.
                <div className="emojiReaction">😡</div>
              </div>
              <div className="commentReaction">
                <strong className="commentReactionButton">Like</strong>
                <strong className="commentReactionButton">Comment</strong>
              </div>
            </div>
          </div>
        </section>
        <aside className="rightContent">
          <div className="newsFeed">
            <h1 className="newsTitle">News Center App</h1>
            <img src="./css/assets/news.jpg" alt="news" />
            <button
              type="button"
              target="_blank"
              onclick="locationURL();"
              id="newsBtn"
            >
              More News
            </button>
          </div>
          <div className="weatherInfo">
            <div className="container">
              <h1>Weather App</h1>
              <button
                type="button"
                target="_blank"
                onclick="locationsURL();"
                id="getWeatherBtn"
              >
                Get Weather
              </button>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
