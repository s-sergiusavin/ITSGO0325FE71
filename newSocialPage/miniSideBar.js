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


// Functie pentru a inchide sidebar-ul dacă deschid o functionalitate
function closeSidebarIfOpen() {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
   
    closeBtn.classList.replace("iconLeftBar", "bi-list");
  }
}