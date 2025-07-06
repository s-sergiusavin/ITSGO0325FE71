const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function () {
 
  document.body.classList.toggle('dark-mode');

  // Toggle icon între lună și soare
  this.classList.toggle('bi-moon-fill');
  this.classList.toggle('bi-sun-fill');

  if (document.body.classList.contains('dark-mode')) {
    LightText.textContent = 'Light Mode';
  } else {
    LightText.textContent = 'Dark Mode';
  }
});