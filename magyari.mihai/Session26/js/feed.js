const accountSettingsButton = document.getElementById('accountSettingsButton');
const accountSettingsMenu = document.getElementsByClassName('accountSettingsMenu')[0];
const logoutButton = document.getElementById('logoutButton');

accountSettingsButton.addEventListener('click',function() {
    if (accountSettingsMenu.style.display === 'flex') {
        accountSettingsMenu.style.display = 'none';
    } else {
        accountSettingsMenu.style.display = 'flex'
    }
});

logoutButton.addEventListener('click', function () {
    window.open('../login.html', '_self')
})

const noOfLikesElem = document.getElementById('likesNumber');
const noOfSharesElem = document.getElementById