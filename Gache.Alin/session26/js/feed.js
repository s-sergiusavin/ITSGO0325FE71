const accountSettingsButton = document.getElementById("accountSettingsButton");
const accountSettingsMenu = document.getElementsByClassName(
  "accountSettingsMenu"
)[0];
const logoutButton = document.getElementById("logoutButton");

accountSettingsButton.addEventListener("click", function () {
  if (accountSettingsMenu.style.display === "flex") {
    accountSettingsMenu.style.display = "none";
  } else {
    accountSettingsMenu.style.display = "flex";
  }
});

logoutButton.addEventListener("click", function () {
  window.open("../login.html", "_selft");
});

const noOfLikesElem = document.getElementById("likesNumber");
const noOfShersElem = document.getElementById("shersNumber");

function getNumberOfLikes() {
  noOfLikesElem.innerText = noOfLikesElem.innerText || 21;
}
function getNumberOfShers() {
  noOfShersElem.innerText = noOfShersElem.innerText || 14;
}
function getData() {
  getNumberOfLikes();
  getNumberOfShers();
}
getData();

const likeButton = document.getElementById("likeButton");
const shareButton = document.getElementById("shareButton");
let isLiked = false;
let isShared = false;

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;

  //   if (isLiked) {
  //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1;
  //   } else {
  //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1;
  //   }

  noOfLikesElem.innerText = isLiked
    ? Number(noOfLikesElem.innerText) + 1
    : Number(noOfLikesElem.innerText) - 1;

  this.classList.toggle("toutched");
});
shareButton.addEventListener("click", function () {
  isShared = !isShared;

//   if (isShared) {
//     noOfShersElem.innerText = Number(noOfShersElem.innerText) + 1;
//   } else {
//     noOfShersElem.innerText = Number(noOfShersElem.innerText) - 1;
//   }
noOfShersElem.innerText = isShared
    ? Number(noOfShersElem.innerText) + 1
    : Number(noOfShersElem.innerText) - 1;


  this.classList.toggle("toutched");
});
