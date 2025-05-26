/**
 * Test object demo
 */

const example = {
    title: 'Example Object',
    sayHi() {
        console.log('Hi');
    }
}

console.log(example.title); // Example Object
example.sayHi(); // Hi
console.log(example); // { title: 'Example Object', sayHi: [Function: sayHi] }
console.dir(example); // Displays the object structure in the console


console.log(document);
console.dir(document);


/**
 * Methods to get html elements  by any selector
 * 1 querySelector /2 querrySelectorAll (metoda universala)
 */

// querySelector returneaza primul element pe care il gaseste

const redSquare = document.querySelector('.redSquare');
console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

// css background-color => js backgroundColor
// css padding-left => js paddingLeft
// si toate proprietatile functioneaza la fel

const blueSquares = document.querySelectorAll('.blueSquare'); // cauta dupa clasa
// const blueSquares = document.querySelectorAll('div'); // cauta dupa tag
// const blueSquares = document.querySelectorAll('#blueSquare'); // cauta dupa id

console.dir(blueSquares);
console.log([1, 2, 3]);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';


blueSquares.forEach( element => {
    element.style.backgroundColor = 'orange';
});


/**
 * 3. methods to get element  by id
 * getElementById
 */


const changedListElem = document.getElementById('changedList'); // nu punem selector pt cauta doar printre id-uri

console.dir(changedListElem);

changedListElem.style.border = '1px solid black';
changedListElem.style.backgroundColor = 'lightblue';

//4. method to get elements by tag name
// .getElementsByTagName


const paragraphElems = document.getElementsByTagName('p'); // cauta dupa tag
console.dir(paragraphElems);
paragraphElems[0].innerText = 'This text was added later with js';
paragraphElems[1].style.textTransform = 'uppercase';

// 5. method to get elements by class name
// .getElementsByClassName



const styledMessage = document.getElementsByClassName('styledMessage');
const styledMessageArray = Array.from(styledMessage);


styledMessageArray.forEach(element => {
    element.innerText = 'Schimbat';
});

for (let i = 0; i < styledMessageArray.length; i++) {
    const tagName = styledMessageArray[i].tagName;
    styledMessageArray[i].innerText = `This messages was a ${tagName} and was styled with js`;
}

// console.log(window); // obiectul global al browserului

const greenSquare = document.querySelector('.greenSquare');

function changeGreenSquare() {
    greenSquare.style.backgroundColor = 'lightgreen';

}

function mouseEnter(){
    greenSquare.style.backgroundColor = 'purple';
    greenSquare.style.border = ' ';
    greenSquare.innerText = ' ';
}

function mouseLeave() {
    greenSquare.style.backgroundColor = 'white';
    greenSquare.style.border = '1px solid black';
    greenSquare.innerText = 'black';
}

const focusInput = () => {
greenSquare.style.backgroundColor = 'red';
document.getElementsByTagName('label')
}

const blurInput = () => {
greenSquare.style.backgroundColor = 'black';
}

const onKeyDown = () => {
greenSquare.style.backgroundColor = 'teal';
}

const demoKeyTextElem = document.getElementById('demoKeyText');
const onKeyUp = () => {
    greenSquare.style.backgroundColor = 'pink';
    demoKeyTextElem.innerText = document.getElementById('demoKey').value;
}

const doSomething = () => {
greenSquare.style.backgroundColor = 'green';
 greenSquare.style.border = ' ';
    greenSquare.innerText = ' ';
}

const readInput = () => {
    const readInputValueElem = document.getElementById('readInputValue');
    document.getElementById('textFromReadInput').innerText = readInputValueElem.value;
}

const innerHtmlMessageElem = document.getElementById('innerHtmlMessage')

const styleThisText = () => {
    innerHtmlMessageElem.innerHTML = 'This text was <strong> styled </strong> by <u> JS </u>';
}