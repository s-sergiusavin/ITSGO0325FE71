const accountSettingsButton = document.getElementById('accountSettingsButton')
const accountSettingsMenu = document.getElementsByClassName('accountSettingsMenu')[0];
const logoutButton = document.getElementById('logoutButton');

accountSettingsButton.addEventListener('click', function() {
    if (accountSettingsMenu.style.display === 'flex') {
        accountSettingsMenu.style.display = 'none';
    } else {
        accountSettingsMenu.style.display = 'flex'
    }
});

logoutButton.addEventListener('click', function() {
    window.open('../login.html', '_self');
})

const noOfLikesElem = document.getElementById('likesNumber');
const noOfSharesElem = document.getElementById('sharesNumber');

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

const likeButton = document.getElementById('likeButton');
const shareButton = document.getElementById('shareButton');

let isLiked = false;
let isShared = false;

likeButton.addEventListener('click', function() {
    isLiked = !isLiked;

    console.dir(noOfLikesElem)

    // if (isLiked) {
    //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1
    // } else {
    //     noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1
    // }

    noOfLikesElem.innerText = isLiked
    ? Number(noOfLikesElem.innerText) + 1
    : Number(noOfLikesElem.innerText) - 1
    
    this.classList.toggle('touched');
});

shareButton.addEventListener('click', function() {
    isShared = !isShared;

    noOfSharesElem.innerText = isShared
    ? Number(noOfSharesElem.innerText) + 1
    : Number(noOfSharesElem.innerText) - 1
    
    this.classList.toggle('touched');
}); 