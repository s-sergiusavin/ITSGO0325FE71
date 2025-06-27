const reactionsNumber = document.getElementById('reactionsNumber');

function showReactionsNumber() {
    reactionsNumber.innerText = reactionsNumber.innerText || '24K';
}

showReactionsNumber();

let isLiked = false;

const likeBtn = document.getElementById('likeBtn');

likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;

    likeImg = document.getElementById('likeImg');
    likeText = document.getElementById('likeText');

    if (isLiked) {
        reactionsNumber.innerText = 'You and other ' + reactionsNumber.innerText;
        likeText.style.color = '#5FA8D3'
    } else {
        reactionsNumber.innerText = '24K';
        likeText.style.color = 'black'

    }

    likeImg.classList.toggle('liked');

})

const accountSettingsBtn = document.getElementById('accountSettingsBtn');
const accountSettingsMenu = document.getElementsByClassName('accountSettingsMenu')[0];

accountSettingsBtn.addEventListener('click', () => {
    if (accountSettingsMenu.style.display === 'none') {
        accountSettingsMenu.style.display = 'flex';
    } else {
        accountSettingsMenu.style.display = 'none';
    }
})


hideSettingsMenu = () => {
    accountSettingsMenu.style.display = 'none';
}


const toggleColorMode = document.getElementById('colorBtn');
const modeMenu = document.getElementsByClassName('modeMenu')[0];

toggleColorMode.addEventListener('click', () => {

    if (modeMenu.style.display === 'none') {
        modeMenu.style.display = 'flex';
    } else {
        modeMenu.style.display = 'none';
    }
})

hideColorMenu = () => {
    modeMenu.style.display = 'none';
}


const switchAcc = document.getElementsByClassName('switchAcc')[0];
const switchBtn = document.getElementById('switchBtn');

switchBtn.addEventListener('click', function () {
    if (switchAcc.style.display === 'none') {
        switchAcc.style.display = 'flex';
    } else {
        switchAcc.style.display = 'none'
    }
})

hideSwitchMenu = () => {
    switchAcc.style.display = 'none';
}

const hideBtn = document.getElementById('hideBtn');
const post = document.getElementById('feedPost');
hideBtn.addEventListener('click', () => {
    post.style.display = 'none';
})


const newCommentForm = document.getElementById('addNewComment');

newCommentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const commentText = document.getElementById('newCommentText').value;
    console.log(commentText);

    if (commentText !== "") {
        const newComment = document.createElement('div');
        newComment.innerHTML = `
        <div class="userComments">

                    <div class="userCommentsContent">

                        <div class="profileUserComment">

                            <a href="">
                                <img src="https://i.pinimg.com/736x/24/84/70/248470199d7901dd9f5adbed7a6a3932.jpg" alt="profile picture"
                                    class="profileImage">
                            </a>

                        </div>

                        <div class="userCommentText">

                            <span class="commentUserName">Tony Stark</span> <br>

                            <p>${commentText}</p>


                            <div class="emojiReaction">

                                <!-- &#128514; -->
                                <span title="352 reactions">0</span>
                                <img src="https://cdn-icons-png.flaticon.com/128/11820/11820106.png" alt=""
                                    title="Reactions">
                                <img src="https://cdn-icons-png.flaticon.com/128/3128/3128313.png" alt=""
                                    title="Reactions">
                                <img src="https://cdn-icons-png.flaticon.com/128/6637/6637195.png" alt=""
                                    class="laughEmoji" title="Reactions">

                            </div>

                        </div>

                    </div>

                    <div class="commentReaction">

                        <strong title="Posted 3 hours ago">Just now</strong>
                        <strong class="commentReactionButton">Like</strong>
                        <strong class="commentReactionButton">Reply</strong>




                    </div>

                </div>

        `


        document.getElementById('myComment').appendChild(newComment);
    }

    document.getElementById('newCommentText').value = ''

})