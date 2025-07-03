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
  window.open("../login.html", "_self");
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

const commentButton = document.getElementById("commentButton");
const commentInputButton = document.getElementById("commentInputButton");
const commentInput = document.getElementById("commentInput");

const commentMessage = document.getElementById("commentMessage");
const removeCommentButton = document.getElementById("removeCommentButton");

const fieldErrorMessage = document.getElementById("fieldErrorMessage");

const initialComment = commentMessage.innerText;
commentMessage.innerText =
  localStorage.getItem("comment") || commentMessage.innerText;

commentButton.addEventListener("click", function () {
  commentInput.focus();
});

function setComment() {
  if (commentInput.value.trim() !== "") {
    commentMessage.innerText = commentInput.value;
    localStorage.setItem("comment", JSON.stringify(commentInput.value));
    commentInput.value = "";
    fieldErrorMessage.style.display = "none";
    fieldErrorMessage.innerText = "";
  } else {
    fieldErrorMessage.style.display = "block";
    fieldErrorMessage.innerText = "This field cannot be empty";
  }
}

removeCommentButton.addEventListener("click", () => {
  // localStorage.clear(); //Sterge tot local storage
  localStorage.removeItem("comment"); //Sterge din local storage doar elementul cu cheia mentionata
  commentMessage.innerText = initialComment;
});

commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setComment();
    this.blur();
  }
});

commentInputButton.addEventListener("click", setComment);

const commentText = document.getElementsByClassName("userCommentText")[0];

commentText.addEventListener("mouseover", function () {
  removeCommentButton.style.display = "inline";
});
commentText.addEventListener("mouseout", function () {
  removeCommentButton.style.display = "none";
});

const infoIcon = document.getElementsByClassName("infoIcon")[0];
const infoMessage = document.getElementsByClassName("infoMessage")[0];

// let timeoutID;

// infoIcon.addEventListener("mouseover", function () {
//  timeoutID = setTimeout(() => {
//     infoMessage.style.display = "block";
//   }, 500);
// });

// infoIcon.addEventListener("mouseout", function () {
//   clearTimeout(timeoutID)
//   infoMessage.style.display = "none";
// });
infoIcon.addEventListener("click", function () {
  if (infoMessage.style.display === "block") {
    infoMessage.style.display = "none";
  } else {
    infoMessage.style.display = "block";
  }
});

infoIcon.addEventListener("blur", function () {
  infoMessage.style.display = "none";
});

const profileOptionsButton =
  document.getElementsByClassName("profileOptions")[0];
const profileOptionsDropdown = document.getElementsByClassName(
  "profileOptionsDropdown"
)[0];

profileOptionsButton.addEventListener("click", function () {
  if (
    profileOptionsDropdown.style.display === "none" ||
    profileOptionsDropdown.style.display === ""
  ) {
    profileOptionsDropdown.style.display = "flex";
  } else {
    profileOptionsDropdown.style.display = "none";
  }
});
// profileOptionsButton.addEventListener("blur", function () {
//   profileOptionsDropdown.style.display = "none";
// });

const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("keydown", function (event) {
  // Filtrare pe FE

  const data = [
    {
      username: "Username 1",
      likes: 21,
      shares: 15,
      comments: [],
      title: "Ceva",
      description: "Altceva",
    },
    {
      username: "Username 2",
      likes: 21,
      shares: 14,
      comments: [],
      title: "Titlu 2",
      description: "Description 2",
    },
    {
      username: "Username 3",
      likes: 14,
      shares: 16,
      comments: [],
      title: "Titlu 3",
      description: "Description ",
    },
  ];
  // Returneaza numai rezultatele in care termenul cautat este 100% identic cu valoarea proprietatii
  // const filtredResults = data.filter( post => post.username === event.target.value)
  // console.log(filtredResults)

  // Returneaza numai rezultatele in care termenul cautat este 100% identic cu valoarea proprietatii, exceptand case-ul
  // const filtredResults = data.filter( post => post.username.toLowerCase() === event.target.value.toLowerCase())
  // console.log(filtredResults)

  // Returneaza orice rezultat care contine sirul de caractere folosit la cautare
  const filtredResults = data.filter((post) =>
    post.username.toLowerCase().includes(event.target.value)
  );
  console.log(filtredResults);

  // Filtrarea pe BE
  filterData(event.target.value).then((data) => {
    // manipularea datelor si afisarea lor
  });
});

async function filterData(searchTerm) {
  const filteredPostUrl = "url";
  const filteredDataBody = {
    searchTerm: searchTerm,
  };

  const response = await fetch(`${filteredPostUrl}?searchTerm=${serachterm}`);

  return response.json();
}

const acceptButton = document.getElementById("acceptButton");
const declinedButton = document.getElementById("declinedButton");
const requestNotification = document.getElementsByClassName(
  "requestNotification"
)[0];

const request = document.getElementsByClassName("request")[0];

acceptButton.addEventListener("click", function () {
  requestNotification.innerText = "Cererea a fost acceptata";
  requestNotification.style.display = "flex";
  // requestNotification.classList.add = "animatie";

  setTimeout(function () {
    request.style.display = "none";
    requestNotification.style.display = "none";
  }, 1000);
});

declinedButton.addEventListener("click", function () {
  requestNotification.innerText = "Cererea a fost respinsa";
  requestNotification.style.display = "flex";

  setTimeout(function () {
    request.style.display = "none";
    requestNotification.style.display = "none";
  }, 1000);
});

const removePost = document.getElementById("removePost");
const post = document.querySelector(".post");

removePost.addEventListener("click", function () {
  // debugger
  // console.log("test");
  post.style.display = "none";
});

const themeButton = document.getElementById("themeButton");
// const header = document.getElementsByTagName("header")[0];
const content = document.querySelectorAll(
  "header, .leftContent, .rightContent, .post, .contentBtn, .birthday a ,a, .postCommentSection, .bi-send-plus"
);
const contentComments = document.querySelectorAll(
  "header .mainSearch .searchInput, .mainContent .post .commentSection .newCommentField  ,.reaction, .mainContent .post .userComments .userCommentText  "
);

let toggleDark = false;
themeButton.addEventListener("click", function () {
  toggleDark = !toggleDark;
  if (toggleDark) {
    requestNotification.classList.add("black");
    content.forEach((elements) => {
      elements.classList.add("black");
    });
    contentComments.forEach((elements) => {
      elements.classList.add("contentComments");
    });
  } else {
    requestNotification.classList.remove("black");
    content.forEach((elements) => {
      elements.classList.remove("black");
    });

    contentComments.forEach((elements) => {
      elements.classList.remove("contentComments");
    });
  }
});
