const demoBoxElement = document.getElementById("testBox");
console.dir(demoBoxElement);

demoBoxElement.className = "red";
demoBoxElement.className = "";

demoBoxElement.classList.add("red");
demoBoxElement.classList.add("blue");
demoBoxElement.classList.remove("blue");
demoBoxElement.classList.toggle("blue");
demoBoxElement.classList.toggle("blue");
demoBoxElement.classList.toggle("blue");

/**
 * get or set attributes
 */

const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imgSrc = demoImageElement.getAttribute("src");
console.log(imgSrc);
newImageElement.setAttribute("src", imgSrc);
newImageElement.setAttribute(
  "src",
  "https://publish.purewow.net/wp-content/uploads/sites/2/2021/03/fluffy-dog-breeds-american-eskimo-dog.jpg?fit=680%2C489"
);

// const ulElem = document.getElementsByTagName('ul')[0]
// ulElem.addEventListener("click",function(){
//     this.classList.toggle('blue')
// })

let listItemsElements = document.querySelectorAll("li");
console.dir(listItemsElements);
listItemsElements.forEach((listItem) => {
  //   listItem.addEventListener("mouseover", function () {
  //     this.classList.add("red");
  //   });
  //   listItem.addEventListener('mouseout', function () {
  //     this.classList.remove("red");
  //   });

  listItem.addEventListener("click", toggleListItems);
});

function toggleListItems() {
  const toggleValue = this.classList.toggle("red");
  console.log(toggleValue);

  if (toggleValue) {
    const span = document.createElement("span");
    span.innerText = " x";
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
    console.dir(this);
    console.dir(document);
  }
}

const clickMeElemenet = document.getElementById("clickMe");
clickMeElemenet.style.cursor = "pointer";

const demoInputElement = document.getElementById("demoInput");

demoInputElement.addEventListener("keypress", function (event) {
  console.log(event);
  if (event.key === "Enter" && demoInputElement.value.length >= 3) {
    demoInputElement.style.backgroundColor = "lightgreen";
  }
});

const ulElem = document.getElementsByTagName("ul")[0];

clickMeElemenet.addEventListener("click", function () {
  const newLiElement = document.createElement("li");
  ulElem.appendChild(newLiElement);
  listItemsElements = document.querySelectorAll("li");
  if (demoInputElement.value) {
    newLiElement.innerText = demoInputElement.value;
    demoInputElement.value = "";
  } else {
    newLiElement.innerText = "Elem " + listItemsElements.length;
  }
});

const toDoInputElement = document.getElementById("toDoInput");
const addButtonElement = document.getElementsByClassName("addButton")[0];
const toDoListItems = document.getElementsByClassName("toDoListItems")[0];

function addItemsInTheList() {
  const canAdd = checkPlan();
  if (canAdd) {
    if (toDoInputElement.value != "") {
      const newListItemElement = document.createElement("li");
      newListItemElement.className = "newListItems";

      toDoListItems.appendChild(newListItemElement);
      newListItemElement.innerHTML = toDoInputElement.value;

      toDoInputElement.value = "";
    } else {
      // alert('Te rugam sa introduci o valoarea')
      // console.log('Mesaj dupa alerta');
      // prompt('Adauga o valoare')
      // confirm('Adauga o valoare')
      toDoInputElement.classList.toggle("red");
    }
  } else {
    alert("Te rugam sa treci la un plan superior");
    toDoInputElement.value = "";
  }
}

addButtonElement.addEventListener("click", addItemsInTheList);
toDoInputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItemsInTheList();
  }
});

function checkPlan() {
  // returneaza o valoarea booleana
  const newListItemsNumber =
    document.getElementsByClassName("newListItems").length;
  return newListItemsNumber < 3;
  // Conditia de mai jos reprezinta acelasi lucru cu return-ul de mai jos
  //   if (newListItemsNumber < 3) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

/**
 * RegExp  - Regular Expression
 * tipare care cauta anumite combinatii de caractere
 * https://regexr.com/
 * https://regex101.com/
 */

let string = "abcdef";
let pattern = /abc/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

