const form = document.querySelector(".subscribe-form");
const popup = document.getElementById("popupMessage");
const closePopupBtn = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();

  if (name && email) {
    form.reset();
    popup.classList.remove("hidden"); // Show the popup
  }
});

closePopupBtn.addEventListener("click", function () {
  popup.classList.add("hidden"); // Hide popup on button click
});