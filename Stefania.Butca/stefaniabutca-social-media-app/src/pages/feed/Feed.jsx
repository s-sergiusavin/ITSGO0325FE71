import React from 'react';

const Feed = () => {
  const toggleMenu = () => {
    // logica ta pentru meniu
  };

  const toggleChat = () => {
    // logica ta pentru chat popup
  };

  const sendMessage = () => {
    // logica ta pentru trimiterea mesajului
  };

  const startChatWith = () => {
    // logica ta pentru inceperea chatului cu un user
  };

  return (
    <>
      <header>
        <nav className="mainNavigation">
          <a href="#" className="active">For you</a>
          <a href="#">Following</a>
        </nav>
      </header>

      <main>
        <div className="hamburger" onClick={toggleMenu}>☰</div>

        <aside className="leftContent">
          <div className="mainSearch">
            <img src="./assets/logo.svg" alt="logo" className="logo" width={100} height={100} />
          </div>

          <nav className="leftNav">
            <a href="#"><i className="bi bi-house-door"></i> Home</a>
            <a href="#"><i className="bi bi-search"></i> Search</a>
            <a href="#"><i className="bi bi-plus-circle"></i> Create</a>
            <a href="#"><i className="bi bi-bell"></i> Notifications</a>
            <a href="#"><i className="bi bi-compass"></i> Explore</a>
            <a href="#"><i className="bi bi-camera-reels"></i> Reels</a>
            <a href="#"><i className="bi bi-person"></i> Profile</a>
            <a href="#"><i className="bi bi-list"></i> More</a>
          </nav>
        </aside>

        <section className="mainContent">
          {/* Post 1 */}
          <div className="post">
            <div className="postHeader" style={{ position: 'relative' }}>
              <div className="profileUserInfo">
                <a href="">
                  <img src="./assets/post2.jpg" alt="profile picture" className="profileImage" />
                </a>
                <div className="profileName">
                  <span>andelxx </span>
                  <span>1d</span>
                </div>
              </div>

              <div
                className="postOptions"
                style={{ cursor: 'pointer', fontSize: 24, userSelect: 'none' }}
              >
                <i className="bi bi-three-dots"></i>
              </div>
            </div>

            <div className="content">
              <div className="imgWrapper">
                <img src="./assets/post1.jpg" alt="post content picture" className="imgContent" />
              </div>

              <hr />
              <div className="reactsActions">
                <ul className="actions">
                  <li className="reaction">
                    <i className="bi bi-heart"></i>
                  </li>
                  <li className="reaction">
                    <i className="bi bi-chat"></i>
                  </li>
                  <li className="reaction">
                    <i className="bi bi-send"></i>
                  </li>
                </ul>
              </div>

              <div className="postDescription">
                <p>249 likes</p>
                <p className="userPost">
                  <strong>andelxx</strong> Chasing views and big cities 🌆✨
                </p>
              </div>
            </div>

            <hr />
            <div className="commentSection">
              <p className="viewComm">View all 25 comments</p>
              <p className="addComm">Add a comment...</p>
            </div>
          </div>

          {/* Post 2 */}
          <div className="post">
            <div className="postHeader">
              <div className="profileUserInfo">
                <a href="">
                  <img src="./assets/post3.jpg" alt="profile picture" className="profileImage" />
                </a>
                <div className="profileName">
                  <span>herryhlein </span>
                  <span>3h</span>
                </div>
              </div>

              <div
                className="postOptions"
                style={{ cursor: 'pointer', fontSize: 24, userSelect: 'none' }}
              >
                <i className="bi bi-three-dots"></i>
              </div>
            </div>

            <div className="content">
              <div className="imgWrapper">
                <img src="./assets/profile2.jpg" alt="post content picture" className="imgContent" />
              </div>

              <hr />
              <div className="reactsActions">
                <ul className="actions">
                  <li className="reaction">
                    <i className="bi bi-heart"></i>
                  </li>
                  <li className="reaction">
                    <i className="bi bi-chat"></i>
                  </li>
                  <li className="reaction">
                    <i className="bi bi-send"></i>
                  </li>
                </ul>
              </div>

              <div className="postDescription">
                <p>13,589 likes</p>
                <p className="userPost">
                  <strong>herryhlein</strong> New hair, who dis? 💇‍♀️✨
                </p>
              </div>
            </div>

            <hr />
            <div className="commentSection">
              <p className="viewComm">View all 1,089 comments</p>
              <p className="addComm">Add a comment...</p>
            </div>
          </div>

          {/* Post 3 */}
          <div className="post">
            <div className="postHeader">
              <div className="profileUserInfo">
                <a href="">
                  <img src="./assets/profile3.jpg" alt="profile picture" className="profileImage" />
                </a>
                <div className="profileName">
                  <span>daily.art </span>
                  <span>25m</span>
                </div>
              </div>

              <div
                className="postOptions"
                style={{ cursor: 'pointer', fontSize: 24, userSelect: 'none' }}
              >
                <i className="bi bi-three-dots"></i>
              </div>
            </div>

            <div className="content">
              <div className="imgWrapper">
                <img src="./assets/post4.jpg" alt="post content picture" className="imgContent" />
              </div>

              <hr />
              <div className="reactsActions">
                <ul className="actions">
                  <li className="reaction">
                    <i className="bi bi-heart"></i>
                  </li>
                  <li className="reaction">
                    <i className="bi bi-chat"></i>
                  </li>
                  <li className="reaction">
                    <i className="bi bi-send"></i>
                  </li>
                </ul>
              </div>

              <div className="postDescription">
                <p>250,979 likes</p>
                <p className="userPost">
                  <strong>daily.art</strong> Summer art vibes, loving the bright colors 🌞🎨
                </p>
              </div>
            </div>

            <hr />
            <div className="commentSection">
              <p className="viewComm">View all 536 comments</p>
              <p className="addComm">Add a comment...</p>
            </div>
          </div>
        </section>

        <aside className="rightContent">
          <div className="userInfo">
            <img
              src="./assets/profile1.jpg"
              alt="Profile Picture"
              className="profileImage"
              width={40}
              height={40}
            />
            <div className="username">
              <strong>ralucaastefania</strong>
              <div className="name">Ștefania 🦄</div>
            </div>
            <a href="#" className="switchLink">
              Switch
            </a>
          </div>

          <div className="suggestedSection">
            <div className="suggestedHeader">
              <span>Suggested for you</span>
              <a href="#">See All</a>
            </div>
          </div>

          <div className="footerLinks">
            <a href="#">About</a> ·
            <a href="#">Help</a> ·
            <a href="#">Press</a> ·
            <a href="#">API</a> ·
            <a href="#">Jobs</a> ·
            <a href="#">Privacy</a> ·
            <a href="#">Terms</a> ·
            <a href="#">Locations</a> ·
            <a href="#">Language</a> ·
            <a href="#">Meta Verified</a>
          </div>

          <div className="copyright">© 2025 BLOOM FROM META</div>
        </aside>

        <div className="messagesBox" onClick={toggleChat}>
          <span>
            <i className="bi bi-chat-dots"></i> Messages
          </span>
        </div>

        <div className="chatPopup" id="chatPopup">
          <div className="chatHeader">
            <span>Messages</span>
            <button onClick={toggleChat}>×</button>
          </div>

          <div className="chatBody" id="chatBody">
            <div className="userList">
              <div className="userAvatar" onClick={() => startChatWith('Alex')}>
                <img src="https://i.pravatar.cc/40?img=1" alt="Alex" />
                <span>Alex</span>
              </div>
              <div className="userAvatar" onClick={() => startChatWith('Mia')}>
                <img src="https://i.pravatar.cc/40?img=5" alt="Mia" />
                <span>Mia</span>
              </div>
              <div className="userAvatar" onClick={() => startChatWith('Leo')}>
                <img src="https://i.pravatar.cc/40?img=3" alt="Leo" />
                <span>Leo</span>
              </div>
              <div className="userAvatar" onClick={() => startChatWith('Sara')}>
                <img src="https://i.pravatar.cc/40?img=7" alt="Sara" />
                <span>Sara</span>
              </div>
            </div>
          </div>

          <div className="chatInput">
            <input type="text" id="chatMessage" placeholder="Type a message..." />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </main>

      <footer></footer>

      <div id="switchPopup" className="popupOverlay hidden">
        <div className="popupContent">
          <p>You need to log out first. Do you want to log out?</p>
          <div className="popupButtons">
            <button id="cancelSwitch">Cancel</button>
            <button id="confirmLogout">Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
