/**
 * Test object demo
 */

const example = {
  title: "Example obj",
  sayHi() {
    console.log(`Hi`);
  },
};
console.log(example.title);
example.sayHi();
console.log(example);
console.dir(example);

console.log(document);
console.dir(document);

/**
 * Methods to get html elements by any selector
 * querySelector/querySelectorAll
 */

// quarySelector returneaza PRIMUL element pe care il gaseste

const redSquare = document.querySelector(`.redSquare`);
console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor = "green";
// css background-color devine in js backgroundColor
// css padding-left devine in js paddingLeft

const blueSquers = document.querySelectorAll(`.blueSquare`); //cauta dupa clasa
// const blueSquers = document.querySelectorAll(`div`); //cauta dupa tag name
// const blueSquers = document.querySelectorAll(`#blueSquare`); // cauta dupa ID
console.dir(blueSquers);

blueSquers[0].style.backgroundColor = "yellow";
blueSquers[1].style.backgroundColor = "yellow";
blueSquers[2].style.backgroundColor = "yellow";

blueSquers.forEach((element) => {
  element.style.backgroundColor = "orange";
  //   element.style.borderRadius = `50%`;
});

/**
 * Method to get element by id
 * getElementById
 */

const changedListElem = document.getElementById("changedList");

console.dir(changedListElem);
changedListElem.style.border = "1px solid black";
changedListElem.style.backgroundColor = "lightblue";

/**
 * Mothod to get element by tag name
 * getElementsByTagName
 */

const paragraphElems = document.getElementsByTagName("p");
console.dir(paragraphElems);

paragraphElems[0].innerText = "This text was added later with js";
paragraphElems[1].style.textTransform = "uppercase";

/**
 * Method get elements by class name
 * getElementsByClassName
 */

const styledMessages = document.getElementsByClassName("styledMessaged");
console.dir(styledMessages);

const styledMessagedArray = Array.from(styledMessages);

styledMessagedArray.forEach((element) => {
  element.innerText = "Schimbat";
});

for (let i = 0; i < styledMessages.length; i++) {
  const tagName = styledMessages[i].tagName;
  styledMessages[
    i
  ].innerText = `This messaeg was a ${tagName} and was styled by js`;
}

const greenSquare = document.querySelector(`.greenSquare`);

function changeGreenSquare() {
  greenSquare.style.backgroundColor = "yellowgreen";
  greenSquare.style.border = "";
  greenSquare.innerText = "";
}

function mouseEnter() {
  greenSquare.style.backgroundColor = "purple";
  greenSquare.style.border = "";
  greenSquare.innerText = "";
}

const mouseLeave = () => {
  greenSquare.style.backgroundColor = "white";
  greenSquare.style.border = "3px solid black";
  greenSquare.innerText = "black";
};

const focusInput = () => {
  greenSquare.style.backgroundColor = "red";
  document.getElementsByTagName(`label`)[0].innerText =
    "Changed after focus event";
};
const blurInput = () => {
  greenSquare.style.backgroundColor = "black";
  document.getElementsByTagName(`label`)[0].innerText = "Restar after blur";
};

const demoKeyTextElem = document.getElementById(`demoKeyText`);
const onKeyDown = () => {
  greenSquare.style.backgroundColor = "teal";
};
const onKeyUp = () => {
  greenSquare.style.backgroundColor = "pink";
  demoKeyTextElem.innerText = document.getElementById(`demoKey`).value;
};

const doSomething = () => {
  greenSquare.style.backgroundColor = "green";
  greenSquare.style.border = "";
  greenSquare.innerText = "";
};
const readInput = () => {
  const readInputValueElem = document.getElementById("readInputValue");
  // const readInputValueElem =  document.getElementById("readInputValue").value; //merge si asa
  document.getElementById("textFromReadInput").innerText =
    readInputValueElem.value;
};


const innerHtmlMessageElem = document.getElementById('innerHtmlMessage')

const styleThisText =() =>{
    innerHtmlMessageElem.innerHTML=  'This text was  <strong> styled </strong> by <u> JS </u>'
}