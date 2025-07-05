const monthNameElement = document.getElementById("monthName");
const dayNameElement = document.getElementById("dayName");
const dayNumberElement = document.getElementById("dayNumber");
const yearElement = document.getElementById("year");


const date = new Date();
const month = date.getMonth();
monthNameElement.innerText = date.toLocaleDateString("en", {
    month: "long",
});

dayNameElement.innerText = date.toLocaleDateString("en", {
    weekday: "long",
});

dayNumberElement.innerText = date.getDate();

yearElement.innerText = date.getFullYear();

/**
 * 
 */

const weatherIcon = document.getElementById('weatherIcon');
const calendarContainer = document.getElementById('calendarContainer');

weatherIcon.addEventListener('click', () => {
  if (calendarContainer.style.display === 'block') {
    calendarContainer.style.display = 'none';
    weatherIcon.classList.remove('iconToChangeColor')
  } else {
    calendarContainer.style.display = 'block';
    weatherIcon.classList.add('iconToChangeColor');
  }
});

