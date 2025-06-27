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
