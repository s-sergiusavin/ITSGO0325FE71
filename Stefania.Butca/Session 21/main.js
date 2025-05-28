/**
 * test object
 */

const example = {
    title: 'Example Object',
    sayHi() {
        console.log('Hi!');
    },
}

console.log(example.title); // Example Object
example.sayHi(); // Hi!
console.log(example); // { title: 'Example Object', sayHi: [Function: sayHi] }
console.dir(example); // Displays the object structure in a tree format

console.log(document); // Displays the document object in the console
console.dir(document); // Displays the document object structure in a tree format

/**
 * methods to get html elements by any selector
 * querySelector() - returns the first element that matches the selector
 * querySelectorAll() - returns all elements that match the selector
 */

//querySelector retureneaza primul element care se potriveste cu selectorul
const redSquare = document.querySelector(`.redSquare`);
console.log(redSquare); // poate fi folosita cu id, clase si tag-uri
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

// CSS background-color => js backgroundColor
// CSS text-align => js textAlign

const blueSquares = document.querySelectorAll(`.blueSquare`); // cauta dupa clasa
// const blueSquares = document.querySelectorAll(`div`); // cauta dupa tag
// const blueSquares = document.querySelectorAll(`#blueSquare`); // cauta dupa id

console.dir(blueSquares); // returns a NodeList of all elements that match the selector
console.log([1, 2, 3]);

blueSquares[0].style.backgroundColor = 'yellow'; // modifica primul element din NodeList
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

blueSquares.forEach(element => {
    element.style.backgroundColor = 'orange'; // modifica toate elementele din NodeList
});

/**
 * method to get element by id
 * getElementById() - returns the element with the specified id
 */

const changedListElem = document.getElementById('changedList');

console.dir(changedListElem); // returns the element with the specified id
changedListElem.style.border = '1px solid black'; // modifica elementul cu id-ul specificat
changedListElem.style.backgroundColor = 'lightblue'; // modifica elementul cu id-ul specificat

/**
 * method to get element by tag name
 * getElementsByTagName() - returns a live HTMLCollection of elements with the specified tag name
 */

const paragraphElems = document.getElementsByTagName('p'); // cauta dupa tag
console.dir(paragraphElems); // returns a live HTMLCollection of elements with the specified tag name
paragraphElems[0].innerText = 'This text was edited later with js'; // modifica primul element din HTMLCollection
paragraphElems[1].style.textTransform = 'uppercase'; // modifica al doilea element din HTMLCollection

/**
 * method to get element by class name
 * getElementsByClassName() - returns a live HTMLCollection of elements with the specified class name
 */

const styledMessages = document.getElementsByClassName('styledMessage'); // cauta dupa clasa
console.dir(styledMessages); // returns a live HTMLCollection of elements with the specified class name

const styledMessagesArray = Array.from(styledMessages); // convertim HTMLCollection in array pentru a putea folosi forEach

styledMessagesArray.forEach(element => {
    element.innerText = 'Schimbat';
})

for (let i = 0; i < styledMessagesArray.length; i++) {
    const tagName = styledMessages[i].tagName; // obtinem numele tag-ului
    styledMessages[i].innerText = `This message was a ${tagName} and was styled by js`; // modificam textul elementului
}

const greenSquare = document.querySelector('.greenSquare');

function changeGreenSquare() {
    greenSquare.style.backgroundColor = 'lightgreen'; // modifica culoarea fundalului
}

function mouseEnter() {
    greenSquare.style.backgroundColor = 'purple'; // modifica culoarea fundalului la hover
    greenSquare.style.border = '';
    greenSquare.innerText = ''; // nu mai afiseaza textul la hover
}

const mouseLeave = () => {
    greenSquare.style.backgroundColor = 'white'; // modifica culoarea fundalului la hover
    greenSquare.style.border = '3px solid black'; // modifica latimea la hover
    greenSquare.innerText = 'black'; // modifica textul la hover
}

const focusInput = () => {
    greenSquare.style.backgroundColor = 'red'; // modifica culoarea fundalului la focus
    document.getElementsByTagName('label')[0].innerText = 'Changed after focus event'; // modifica textul label-ului la focus
}

const blurInput = () => {
    greenSquare.style.backgroundColor = 'black'; // modifica culoarea fundalului la blur
}

const onKeyDown = () => {
    greenSquare.style.backgroundColor = 'teal'; // modifica culoarea fundalului la keydown
}

const demoKeyTextElem = document.getElementById('demoKeyText');
const onKeyUp = () => {
    greenSquare.style.backgroundColor = 'pink'; // modifica culoarea fundalului la keyup
    demoKeyTextElem.innerText = document.getElementById('demoKey').value; // afiseaza valoarea input-ului in elementul cu id-ul demoKeyTest
}

const doSomething = () => {
    greenSquare.style.backgroundColor = 'green';
    greenSquare.style.border = '';
    greenSquare.innerText = '';
}

const readInput = () => {
    const readInputValue = document.getElementById('readInputValue');
    document.getElementById('textFromReadInput').innerText = document.getElementById.value;
}

const innerHtmlMessageElem = document.getElementById('innerHtmlMessage');

const styleThisText = () => {
    innerHtmlMessageElem.innerHTML = 'this text was <strong> styled </strong> by <u> js </u>'
}