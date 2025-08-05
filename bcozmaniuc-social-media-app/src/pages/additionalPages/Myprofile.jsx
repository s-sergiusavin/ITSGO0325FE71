import React from "react";

function ProfilePage() {
  return (
    <div className="mainProfile">
      <div className="principalHeader">
        <div className="image">
          <img src="../assets/mountain.jpg" alt="mountain" className="imgHeader" />
        </div>

        <div className="headerOptions">
          <div className="headerOptionsLeft">
            <span>Timeline</span>
            <span>About</span>
            <span>Friends</span>
          </div>

          <div className="profilePic">
            <img src="../assets/BogdanCozmaniuc.jpeg" alt="profile" className="profilePicResize" />
            <div className="profilePicName">
              <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>Bogdan Cozmaniuc</span>
              <span>Junior Web Developer</span>
            </div>
          </div>

          <div className="headerOptionsRight">
            <span>Photos</span>
            <span>Videos</span>
            <span><i className="bi bi-three-dots" style={{ fontSize: "1.2rem" }}></i></span>
          </div>
        </div>
      </div>

      <div className="imageSettings" title="Change Image">
        <i className="bi bi-image"></i>
      </div>

      <main>
        {/* Left Content */}
        <aside className="leftContentProfile">
          <div className="profileIntro">
            <div className="profileIntroTitle">
              <span>Profile Intro</span>
            </div>
            <hr />
            <div className="aboutMe">
              <span style={{ fontWeight: "bold" }}>About Me</span>
              <span>
                Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier
              </span>
            </div>
            <div className="favouriteTvShows">
              <span style={{ fontWeight: "bold" }}>Favourite TV Shows:</span>
              <span>
                Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.
              </span>
            </div>
            <div className="FavouriteMusic">
              <span style={{ fontWeight: "bold" }}>Favourite Music Bands / Artists</span>
              <span>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
            </div>
            <div className="otherSocials">
              <span style={{ fontWeight: "bold" }}>Other Socials Network</span>
            </div>

            <div className="otherSocialsIcons">
              <div className="facebook">
                <i className="bi bi-facebook"></i>
                <span>Facebook</span>
              </div>
              <div className="twitter">
                <i className="bi bi-twitter"></i>
                <span>Twitter</span>
              </div>
              <div className="linkedIn">
                <i className="bi bi-linkedin"></i>
                <span>LinkedIN</span>
              </div>
            </div>
          </div>

          {/* My Playlist */}
          <div className="myPlaylist">
            <div className="myPlaylistTitle">
              <span>My Playlist Title</span>
            </div>
            <hr />

            {/* Repeatable song item */}
            {[
              { id: 1, title: "The Past Starts", artist: "System of a Revenge", img: "1.jpg", time: "3:22" },
              { id: 2, title: "The Pretender", artist: "Kung Figthers", img: "2.jpg", time: "5:48" },
              { id: 3, title: "Blood Brothers", artist: "Blood brothers", img: "3.jpg", time: "3:06" },
              { id: 4, title: "Seven Nations Army", artist: "The Black Stripes", img: "4.jpg", time: "6:17" },
              { id: 5, title: "Killer Queen", artist: "Archiduke", img: "5.jpg", time: "5:40" },
            ].map((song) => (
              <div key={song.id} className={song.title.replaceAll(" ", "").toLowerCase()}>
                <div className="imageSong">
                  <p>{song.id}</p>
                  <img src={`../assets/music/${song.img}`} className="imageResized" alt="" />
                </div>
                <div className="artistAndSong">
                  <span style={{ fontWeight: "bold" }}>{song.title}</span>
                  <span>{song.artist}</span>
                </div>
                <p>{song.time}</p>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="mainContentProfile">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`postProfile${index === 1 ? " first" : index === 2 ? "Second" : "Third"}`}
            >
              <div className="profileUser">
                <img src="../assets/BogdanCozmaniuc.jpeg" className="miniProfilePic" alt="" />
                <div className="nameAndHour">
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    Bogdan Cozmaniuc
                    {index === 3 && (
                      <>
                        <span style={{ color: "#888" }}> shared</span>
                        <span style={{ color: "orange" }}> Diana Dobrescu's photo</span>
                      </>
                    )}
                  </span>
                  <span>{index === 1 ? "19" : index === 2 ? "20" : "23"} hours ago</span>
                </div>
              </div>
              {index === 1 && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores possimus...
                </p>
              )}
              {index === 2 && (
                <>
                  <p>
                    If someone missed it, check out the new song by Shatta! I thinks they are going back to their
                    roots...
                  </p>
                  <div className="youtube">
                    <iframe
                      width="250px"
                      height="200px"
                      className="videoYoutube"
                      src="https://www.youtube.com/embed/sWK2WiiDPUA?si=96hsH5hOclSNeG3I"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    ></iframe>

                    <div className="youtubeText">
                      <h3>SHATTA x Dancehall 90’s -instrumental</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit...</p>
                      <a href="http://youtube.com" style={{ textDecoration: "none", color: "#888" }}>
                        YOUTUBE.COM
                      </a>
                    </div>
                  </div>
                </>
              )}
              {index === 3 && (
                <>
                  <p>
                    Hi! Everyone should check out these amazing photographs that my friend shot the past week...
                  </p>
                  <img src="../assets/sharedPhoto.jpg" className="sharedPhoto" alt="" />
                  <div className="profileUserShared">
                    <img src="../assets/friends/2.jpeg" className="miniProfilePicShared" alt="" />
                    <div className="nameAndHour">
                      <span style={{ color: "black", fontWeight: "bold" }}>Diana Dobrescu</span>
                      <span>24 hours ago</span>
                      <p>Here’s the first photo of our incredible photoshoot...</p>
                    </div>
                  </div>
                </>
              )}
              <hr />
              <div className="reactions">
                <div className="reactionsImagesAndNames">
                  <div className="reactionsLove">
                    <i className="bi bi-heart-fill"></i>
                    <span>15</span>
                  </div>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      src={`../assets/friends/${i}.jpeg`}
                      alt=""
                      className={`reactionImagesPeople${i}`}
                    />
                  ))}
                  <div className="reactionNames">
                    <span style={{ fontWeight: "bold" }}>Jenny, Robert</span> and 13 more liked this
                  </div>
                </div>
                <div className="reactionsCommnetAndShare">
                  <i className="bi bi-chat-left-text"></i>
                  <span>17</span>
                  <i className="bi bi-send-arrow-down"></i>
                  <span>24</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <aside className="rightContentProfile">
          {/* Last Photos */}
          <div className="lastPhotos">
            <div className="lastPhotosTitle">
              <span>Last Photos</span>
            </div>
            <hr />
            <div className="gallery">
              {[...Array(9)].map((_, i) => (
                <img
                  key={i}
                  src={`../assets/Last Photos/${i + 1}.jpg`}
                  className="galleryImage"
                  alt=""
                />
              ))}
            </div>
          </div>

          {/* Friends */}
          <div className="friends">
            <div className="friendsTitle">
              <span>Friends (86)</span>
            </div>
            <hr />
            <div className="galleryFriends">
              {[...Array(12)].map((_, i) => (
                <img
                  key={i}
                  src={`../assets/friends/${i + 1}.jpeg`}
                  className="galleryImageFriends"
                  alt=""
                />
              ))}
              <span className="moreFriends">+74</span>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="blogPosts">
            <div className="blogTitleProfile">
              <span>Blog Posts</span>
            </div>
            <hr />
            <div className="firstBlog">
              <span style={{ fontWeight: "bold" }}>
                My Perfect Vacations in South America and Europe
              </span>
              <span>Lorem ipsum dolor sit amet...</span>
              <p>7 hours ago</p>
              <hr />
            </div>

            <div className="secondBlog">
              <span style={{ fontWeight: "bold" }}>The Big Experience of Travelling Alone</span>
              <span>Lorem ipsum dolor sit amet...</span>
              <p>March 18th, at 6:52pm</p>
            </div>
          </div>

          {/* Favourite Pages */}
          <div className="FavouritePages">
            <div className="FavouritePagesTitle">
              <span>Favourite Pages</span>
            </div>
            <hr />
            {[
              ["marinaBar.jpg", "The Marina Bar", "Restaurant / Bar"],
              ["TapronusRock.jpg", "Tapronus Rock", "Rock Band"],
              ["PixelDigital.jpg", "Pixel Digital Design", "Company"],
              ["Thompson.jpg", "Thompson’s Custom", "Clothing Store"],
              ["Crimson Agnecy.jpg", "Crimson Agency", "Company"],
            ].map(([img, name, type]) => (
              <div key={name} className={name.toLowerCase().replace(/\s/g, "")}>
                <div className="nameAndTypeAndImage">
                  <img src={`../assets/FavouritePages/${img}`} className="favouritePagesImages" alt="" />
                  <div className="nameAndType">
                    <span style={{ fontWeight: "bold" }}>{name}</span>
                    <span style={{ color: "#888" }}>{type}</span>
                  </div>
                </div>
                <i className="bi bi-plus-circle iconsFavouritePages"></i>
                <hr />
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}

export default ProfilePage;
