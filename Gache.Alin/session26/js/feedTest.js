const POSTINFO = [
  {
    profilePicInfo: "../assets/city.jpeg",
    userNameInfo: "Test user name unu",
    postDateInfo: "24 apr ",
    imgContentNewPost: "../assets/paris1.webp",
    postTitleInfo: "Test post title unu",
    postDescriptionInfo: "Test post description unu",
    friendUserNameInfo: "Friend unu",
    commentMessageInfo: "Test prim",
  },
  {
    profilePicInfo: "../assets/city.jpeg",
    userNameInfo: "Test user name doi",
    postDateInfo: "24 apr ",

    imgContentNewPost: "../assets/paris3.jfif",

    postTitleInfo: "Test post title doi",
    postDescriptionInfo: "Test post description doi",
    friendUserNameInfo: "Friend doi",
    commentMessageInfo: "Test doi",
  },
  {
    profilePicInfo: "../assets/profile.jpg",
    userNameInfo: "Test user name trei",
    postDateInfo: "24 apr ",

    imgContentNewPost: "../assets/paris5.webp",

    postTitleInfo: "Test post title trei",
    postDescriptionInfo: "Test post description trei",
    friendUserNameInfo: "Friend trei",
    commentMessageInfo: "Test trei",
  },
  {
    profilePicInfo: "../assets/profile.jpg",
    userNameInfo: "Test user name patru",
    postDateInfo: "24 apr ",
    imgContentNewPost: "../assets/paris2.avif",
    postTitleInfo: "Test post title patru",
    postDescriptionInfo: "Test post description patru",
    friendUserNameInfo: "Friend patru",
    commentMessageInfo: "Test patru",
  },

    {
    profilePicInfo: "../assets/profile.jpg",
    userNameInfo: "Test user name cinci",
    postDateInfo: "24 apr ",
    imgContentNewPost: "../assets/paris4.webp",
    postTitleInfo: "Test post title cinci",
    postDescriptionInfo: "Test post description cinci",
    friendUserNameInfo: "Friend cinci",
    commentMessageInfo: "Test cinci",
  },

      {
    profilePicInfo: "../assets/profile.jpg",
    userNameInfo: "Test user name sase",
    postDateInfo: "24 apr ",
    imgContentNewPost: "../assets/paris6.jpg",
    postTitleInfo: "Test post title sase",
    postDescriptionInfo: "Test post description sase",
    friendUserNameInfo: "Friend sase",
    commentMessageInfo: "Test sase",
  },
];

const mainContentPost = document.getElementById("mainContentPost");
// const profilePic = document.getElementById("profilePic");
// const userName = document.getElementById("userName");
// const postDate = document.getElementById("postDate");
// const postTitle = document.getElementById("postTitle");
// const postDescription = document.getElementById("postDescription");
// const friendUserName = document.getElementById("friendUserName");
// const commentMessageNewPost = document.getElementById("commentMessageNewPost");

document.addEventListener("DOMContentLoaded", () => {
  // profilePic.setAttribute("src", POSTINFO[0].profilePicInfo);
  // userName.innerText = POSTINFO[0].userNameInfo; // dacă folosești primul obiect
  // postDate.innerText = POSTINFO[0].postDateInfo; // dacă folosești primul obiect
  // postTitle.innerText = POSTINFO[0].postTitleInfo; // dacă folosești primul obiect
  // postDescription.innerText = POSTINFO[0].postDescriptionInfo; // dacă folosești primul obiect
  // friendUserName.innerText = POSTINFO[0].friendUserNameInfo; // dacă folosești primul obiect
  // commentMessageNewPost.innerText = POSTINFO[0].commentMessageInfo; // dacă folosești primul obiect
  POSTINFO.map((info) => {
    const post = document.createElement("div");
    post.className = "post";

    post.innerHTML = `
      <div class="postHeader">
        <div class="profileUserInfo">
          <a href="#">
            <img src="${info.profilePicInfo}" alt="profile picture" class="profileImage" id="profilePic" />
          </a>
          <div class="profileName">
            <span id="userName">${info.userNameInfo}</span>
            <span id="postDate">${info.postDateInfo}</span>
          </div>
        </div>
        <div class="profileOptionsWrapper">
          <button class="profileOptions"><i class="bi bi-three-dots"></i></button>
          <div class="profileOptionsDropdown">
            <button>Edit this post</button>
            <button id="removePost">Remove this post</button>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="imgWrapper">
          <img src="${info.imgContentNewPost}" alt="post content picture" class="imgContent" id="imgContentNewPost" />
          <div class="infoIconWrapper">
            <i class="bi bi-info-circle infoIcon" tabindex="1"></i>
            <p class="infoMessage">${info.infoMessageInfo} <a href="landingPage.html">Read more...</a></p>
          </div>
        </div>

        <strong class="postTitle" id="postTitle">${info.postTitleInfo}</strong>
        <p class="postDescription" id="postDescription">${info.postDescriptionInfo}</p>
        <a href="landingPage.html"><strong>Read more...</strong></a>
      </div>

      <div class="reacts">
        <div class="likesInfo">
          <i class="bi bi-hand-thumbs-up reactsIcons"></i>
          <span id="likesNumber"> </span> <span> likes</span>
        </div>
        <div class="commentsinfo">
          <span id="shersNumber"></span> <span> shares</span>
          <i class="bi bi-send reactsIcons"></i>
        </div>
      </div>

      <hr />

      <div class="reactsActions">
        <ul class="actions">
          <li class="reaction" id="likeButton">
            <i class="bi bi-hand-thumbs-up"></i>
            <span>Like</span>
          </li>
          <li class="reaction" id="commentButton">
            <i class="bi bi-chat-text"></i>
            <span>Comments</span>
          </li>
          <li class="reaction" id="shareButton">
            <i class="bi bi-send"></i>
            <span>Share</span>
          </li>
        </ul>
      </div>

      <hr />

      <div class="commentSection">
        <a href="">
          <img src="${info.profilePicInfo}" alt="profile picture" class="profileImage" />
        </a>
        <div class="postCommentSection">
          <input type="text" placeholder="Adauga un comentariu" class="newCommentField" id="commentInput" />
          <p id="fieldErrorMessage" class="fieldError"></p>
        </div>
        <button class="insertCommentButton" id="commentInputButton">
          <i class="bi bi-send-plus"></i>
        </button>
      </div>

      <div class="userComments">
        <div class="userCommentsContent">
          <div class="profileUserComment">
            <a href="">
              <img src="${info.profilePicInfo}" alt="profile picture" class="profileImage" />
            </a>
            <span id="friendUserName">${info.friendUserNameInfo}</span>
          </div>
          <div class="userCommentText">
            <span id="commentMessageNewPost">${info.commentMessageInfo}</span>
            <div class="emojiReaction">&#128526;</div>
            <span id="removeCommentButton">Remove this comment</span>
          </div>
          <div class="commentReaction">
            <strong class="commentReactionButton">Like</strong>
            <strong class="commentReactionButton">Comment</strong>
          </div>
        </div>
      </div>
    `;

    mainContentPost.appendChild(post);
  });
});
