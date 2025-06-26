const accountSettingsButton = document.getElementById("accountSettingsButton");
const accountSettingsMenu = document.getElementsByClassName("accountSettingsMenu")[0];
const logoutButton = document.getElementById("logoutButton");

accountSettingsButton.addEventListener("click", function () {
  if (accountSettingsMenu.style.display === "flex") {
    accountSettingsMenu.style.display = "none";
  } else {
    accountSettingsMenu.style.display = "flex";
  }
});

logoutButton.addEventListener("click", function () {
  window.open("../login.html", "_self");
});

const noOfLikesElem = document.getElementById("likesNumber");
const noOfShares = document.getElementById("shareNumber");

function getNumberOfLikes() {
  noOfLikesElem.innerText = noOfLikesElem.innerText || 21;
}

function getNumberShares() {
  noOfShares.innerText = noOfShares.innerText || 17;
}

function getData() {
  getNumberOfLikes();
  getNumberShares();
}

getData();

const likeButton = document.getElementById("likeButton");
const shareButton = document.getElementById("sharedButton");

let isLiked = false;
let isShared = false;

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;
  noOfLikesElem.innerText = isLiked
    ? Number(noOfLikesElem.innerText) + 1
    : Number(noOfLikesElem.innerText) - 1;
  this.classList.toggle("touched");
});

const commentButton = document.getElementById("commentButton");
const commentInput = document.getElementById("commentInput");
const commentInputButton = document.getElementById("commentInputButton");

const commentMessage = document.getElementById("commentMessage");
const removeCommentButton = document.getElementById("removeCommentButton");

commentMessage.innerText = localStorage.getItem("comment") || commentMessage.innerText;

commentButton.addEventListener("click", function () {
  commentInput.focus();
});

function setComment() {
  commentMessage.innerText = commentInput.value;
  localStorage.setItem("comment", JSON.stringify(commentInput.value));
  commentInput.value = "";
}

removeCommentButton.addEventListener("click", () => {
  localStorage.removeItem("comment");
});

commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setComment();
    this.blur();
  }
});

commentInputButton.addEventListener("click", function () {
  setComment();
});

const commentText = document.getElementsByClassName("userCommentText")[0];
commentText.addEventListener("mouseover", function () {
  removeCommentButton.style.display = "inline-block";
});
