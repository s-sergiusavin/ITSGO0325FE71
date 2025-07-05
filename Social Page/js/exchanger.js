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
    exchanger.style.display = 'block';
    exchangerIcon.classList.add('iconToChangeColor');
  }
});