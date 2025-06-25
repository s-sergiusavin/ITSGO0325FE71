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

const commentButton = document.getElementById('commentButton');
const commentInput = document.getElementById('commentInput');
const commentInputButton = document.getElementById('commentInputButton');

const commentMessage = document.getElementById('commentMessage');
const removeCommentButton = document.getElementById('removeCommentButton');


const initialComment = commentMessage.innerText;
commentMessage.innerText = localStorage.getItem('comment') || commentMessage.innerText;

commentButton.addEventListener('click', function() {
    commentInput.focus();
});

function setComment() {
    commentMessage.innerText = commentInput.value;
    localStorage.setItem('comment', JSON.stringify(commentInput.value));
    commentInput.value = '';
}


removeCommentButton.addEventListener('click', ()=> {
    localStorage.clear();//sterge tot din local storage
    localStorage.removeItem('comment'); //sterge din local storage numai elementul cu cheia mentionata
    const initialComment = commentMessage.innerText;
});

commentInput.addEventListener('keydown',function (event) {
    if (event.key === 'Enter'){
        setComment();
        this.blur();
    }
});

commentInputButton.addEventListener('click', setComment);

const commentText = document.getElementsByClassName('userCommentText')[0];

commentText.addEventListener('mouseover', function(){
    removeCommentButton.style.display='inline'
})