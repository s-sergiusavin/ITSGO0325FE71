// Calendar /////

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

const calendarIcon = document.getElementById('calendarIcon');
const calendarContainer = document.getElementById('calendarContainer');

calendarIcon.addEventListener('click', () => {
  if (calendarContainer.style.display === 'block') {
    calendarContainer.style.display = 'none';
    calendarIcon.classList.remove('iconToChangeColor')
  } else {
    closeAll();
    closeSidebarIfOpen();
    calendarContainer.style.display = 'block';
    calendarIcon.classList.add('iconToChangeColor');
  }
});



// ------------------ Exchanger //

const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;
function updateResults() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl.value = "";
    }, 2000);
  } else {
    resultEl.innerText = (+inputEl.value * 5).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputEl.value = "";
    }, 10000);
  }
}

inputEl.addEventListener("input", updateResults);


/**** */

/**
 * 
 */

const exchangerIcon = document.getElementById('exchangerIcon');
const exchanger = document.getElementById('exchanger');

exchangerIcon.addEventListener('click', () => {
  if (exchanger.style.display === 'block') {
    exchanger.style.display = 'none';
    exchangerIcon.classList.remove('iconToChangeColor')
  } else {
    closeSidebarIfOpen();
    closeAll();
    exchanger.style.display = 'block';
    exchangerIcon.classList.add('iconToChangeColor');
  }
});


// ---------------------------- Joke generator ---------------//

const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeElement.innerHTML = data.joke
}

/**** */

/**
 * 
 */

const jokeGeneratorIcon = document.getElementById('jokesGeneratorId');
const jokeGeneratorContainer = document.getElementById('jokeGeneratorContainer');

jokeGeneratorIcon.addEventListener('click', () => {
  if (jokeGeneratorContainer.style.display === 'block') {
    jokeGeneratorContainer.style.display = 'none';
    jokeGeneratorIcon.classList.remove('iconToChangeColor');
  } else {
    closeSidebarIfOpen();
    closeAll();
    jokeGeneratorContainer.style.display = 'block';
    jokeGeneratorIcon.classList.add('iconToChangeColor');
  }
});


// Mini left menu
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
})

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
})

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bi-list", "iconLeftBar");
    closeAll();
  } else {
    closeBtn.classList.replace("iconLeftBar", "bi-list");
    closeAll();
  }
}

menuBtnChange();


//  Funcție de închis celelalte funcționalități când se apasă pe alta

function closeAll() {
  // Închide toate containerele
  calendarContainer.style.display = 'none';
  exchanger.style.display = 'none';
  jokeGeneratorContainer.style.display = 'none';

  // Scoate clasa de culoare de pe toate iconițe
  calendarIcon.classList.remove('iconToChangeColor');
  exchangerIcon.classList.remove('iconToChangeColor');
  jokeGeneratorIcon.classList.remove('iconToChangeColor');
}


// Functie pentru a inchide sidebar-ul dacă deschid o functionalitate
function closeSidebarIfOpen() {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
   
    closeBtn.classList.replace("iconLeftBar", "bi-list");
  }
}

