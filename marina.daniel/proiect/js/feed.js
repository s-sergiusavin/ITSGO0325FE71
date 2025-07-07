

// function locationURL() {
//   location.href = "./newsletter/news.html";
// }

// function locationsURL() {
//   location.href = "./weather app/index.html";
// }

const newsBtn = document.getElementById('newsBtn');
const getWeatherBtn = document.getElementById('getWeatherBtn');

newsBtn.addEventListener('click', function() {
  window.open('./newsletter/news.html', '_blank');
});

getWeatherBtn.addEventListener('click', function() {
  window.open('./weather app/index.html', '_blank');
});

const accountSettingsButton = document.getElementById('accountSettingsButton')
const accountSettingsMenu = document.getElementsByClassName('accountSettingsMenu')[0];
const logoutButton = document.getElementById('logoutButton');

accountSettingsButton.addEventListener('click', function() {
  if(accountSettingsMenu.style.display === 'flex') {
    accountSettingsMenu.style.display = 'none';
  } else {
    accountSettingsMenu.style.display = 'flex'
  }
})