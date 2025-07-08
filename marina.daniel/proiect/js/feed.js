// function locationURL() {
//   location.href = "./newsletter/news.html";
// }

// function locationsURL() {
//   location.href = "./weather app/index.html";
// }

const newsBtn = document.getElementById("newsBtn");
const getWeatherBtn = document.getElementById("getWeatherBtn");

newsBtn.addEventListener("click", function () {
  window.open("./newsletter/news.html", "_blank");
});

getWeatherBtn.addEventListener("click", function () {
  window.open("./weather app/index.html", "_blank");
});

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
  window.open("./login.html", "_self");
});

const noOfLikesElem = document.getElementById("likesNumber");
const noOfSharesElem = document.getElementById("sharesNumber");

function getNumberOfLikes() {
  noOfLikesElem.innerText = noOfLikesElem.innerText || 21;
}

function getNumberOfShares() {
  noOfSharesElem.innerText = noOfSharesElem.innerText || 17;
}

function getData() {
  getNumberOfLikes();
  getNumberOfShares();
}

getData();

const likeButton = document.getElementById("likeButton");
const shareButton = document.getElementById("shareButton");

let isLiked = false;
let isShared = false;

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;

  console.dir(noOfLikesElem);

  // if (isLiked) {
  //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1
  // } else {
  //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1
  // }

  noOfLikesElem.innerText = isLiked
    ? Number(noOfLikesElem.innerText) + 1
    : Number(noOfLikesElem.innerText) - 1;

  this.classList.toggle("touched");
});

shareButton.addEventListener("click", function () {
  isShared = !isShared;

  noOfSharesElem.innerText = isShared
    ? Number(noOfSharesElem.innerText) + 1
    : Number(noOfSharesElem.innerText) - 1;

  this.classList.toggle("touched");
});

const commentButton = document.getElementById("commentButton");
const commentInput = document.getElementById("commentInput");
const commentInputButton = document.getElementById("commentInputButton");

const commentMessage = document.getElementById("commentMessage");
const removeCommentButton = document.getElementById("removeCommentButton");

const initialComment = commentMessage.innerText;
commentMessage.innerText =
  localStorage.getItem("comment") || commentMessage.innerText;

commentButton.addEventListener("click", function () {
  commentInput.focus();
  // commentInput.blur(); // reversul functiei focus
});

function setComment() {
  commentMessage.innerText = commentInput.value;
  localStorage.setItem("comment", JSON.stringify(commentInput.value));
  commentInput.value = "";
}

removeCommentButton.addEventListener("click", () => {
  // localStorage.clear(); // sterge tot din local storage
  localStorage.removeItem("comment"); // sterge din local storage numai elementul cu cheia mentionata
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
  removeCommentButton.style.display = "inline-block";
});
commentText.addEventListener("mouseout", function () {
  removeCommentButton.style.display = "none";
});

const infoIcon = document.getElementsByClassName("infoIcon")[0];
const infoMessage = document.getElementsByClassName("infoMessage")[0];

// let timeoutId;
// infoIcon.addEventListener('mouseover', function() {
//     timeoutId = setTimeout( () => {
//         infoMessage.style.display = 'block';
//     }, 500)
// });

// infoIcon.addEventListener('mouseout', function() {
//     clearTimeout(timeoutId);
//     infoMessage.style.display = 'none';
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

profileOptionsButton.addEventListener("blur", function () {
  profileOptionsDropdown.style.display = "none";
});

const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("keydown", function (event) {
  // Filtrare pe FE

  const data = [
    {
      username: "Username 1",
      likes: 10,
      shares: 15,
      comments: [],
      title: "Ceva",
      description: "Altceva",
    },
    {
      username: "Username 2",
      likes: 20,
      shares: 25,
      comments: [],
      title: "Titlu 2",
      description: "Description 2",
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

  const response = await fetch(`${filteredPostUrl}?searchTerm=${searchterm}`);

  return response.json();
}
