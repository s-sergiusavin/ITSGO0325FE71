/**
 * Test object demo
 */

const example = {
    title: `Example object`,
    sayHi() {
        console.log(`Hi!`)
    }
}

console.log(example.title);
example.sayHi();
console.log(example);
console.dir(example);

console.log(document);
console.dir(document);

/**
 * Methods to get html elements by any selector
 * querySelector / querrySelectorAll
 */

//querySelector returneaza PRIMUL element pe care il gaseste

const redSquare = document.querySelector(`.redSquare`);
console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor=`green`;

// css background-color => js backgroundColor
// css padding-left => js paddingLeft

const blueSquares = document.querySelectorAll(`.blueSquare`); //cauta dupa clasa
// const blueSquares = document.querySelectorAll(`div`); //cauta dupa tag
// const blueSquares = document.querySelectorAll(`#blueSquare`); //cauta dupa id
console.dir(blueSquares);

console.log([1,2,3]);

blueSquares[0].style.backgroundColor = `yellow`;
blueSquares[1].style.backgroundColor = `yellow`;
blueSquares[2].style.backgroundColor = `yellow`;

blueSquares.forEach(element => {
    element.style.backgroundColor = `orange`
});



/**
 * Method to get element by id #
 * getElementById
 */

const changedListElem = document.getElementById(`changedList`);

console.dir(changedListElem);

changedListElem.style.border =`1px solid black`
changedListElem.style.backgroundColor =`lightblue`


/**
 * Method to get element by tag name
 * getElementsByTagName
 */

const paragraphElems = document.getElementsByTagName(`p`);
console.dir(paragraphElems);

paragraphElems[0].innerText=`This text was added later with JS`;
paragraphElems[1].style.textTransform = `uppercase`;

/**
 * Method to get elements by class name
 * .getElementsByClassName
 */

const styledMessages = document.getElementsByClassName(`styledMessages`);
console.dir(styledMessages);

const styledMessagesArray = Array.from(styledMessages)

styledMessagesArray.forEach(element => {
    element.innerText=`Schimbat`
})

for (let i=0;i<styledMessages.length;i++){
    const tagName=styledMessages[i].tagName;
    styledMessages[i].innerText=`This messages was a ${tagName} and was styled by JS`;
}

// console.log(window);


const greenSquare = document.querySelector(`.greenSquare`);

function changeGreenSquare() {
    greenSquare.style.backgroundColor = `lightgreen`
}

function mouseEnter(){
    greenSquare.style.backgroundColor = `purple`;
    greenSquare.style.border=`none`;
    greenSquare.innerText=``;
}

const mouseLeave = () => {
    greenSquare.style.backgroundColor =`white`;
    greenSquare.style.border=`3px solid black`;
    greenSquare.innerText=`black`;
}


const focusInput = () => {
    greenSquare.style.backgroundColor=`red`;
    document.getElementsByTagName(`label`)[0].innerText = `Changed after focus event`
}

const blurInput = () => {
    greenSquare.style.backgroundColor=`black`

}


const onKeyDown = () => {
    greenSquare.style.backgroundColor=`teal`;
}



const demoKeyTextElem = document.getElementById(`demoKeyText`);
const onKeyUp = () => {
    greenSquare.style.backgroundColor = `pink`;
    demoKeyTextElem.innerText=document.getElementById(`demoKey`).value;
}

const doSomething = () => {
    greenSquare.style.backgroundColor =`green`;
    greenSquare.style.border=`none`;
    greenSquare.innerText=``;
}

const readInput = () => {
    const readInputValueElem = document.getElementById(`readInputValue`);
    document.getElementById(`textFromReadInput`).innerText= readInputValueElem.value;
}

const innerHtmlMessageElem = document.getElementById("innerHtmlMessage");

const styleThisText = () => {
    innerHtmlMessageElem.innerHTML="This text was a <strong> styled </strong> by <u>JS</u>"
}