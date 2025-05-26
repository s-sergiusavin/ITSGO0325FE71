/**
 * Test object demo
 */

const example = {
    title: 'Example object' ,
    sayHi() {
        console.log('Hi')
    }
}

console.log(example.title)
example.sayHi();
console.log(example)
console.dir(example)

console.log(document)
console.dir(document)

const redSquare = document.querySelector('.redSquare')
console.log(redSquare)
console.dir(redSquare)

redSquare.style.backgroundColor = 'green';

const blueSquares = document.querySelectorAll('.blueSquare');

console.dir(blueSquares);
console.log([1, 2, 3]);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

blueSquares.forEach( element =>{
    element.style.backgroundColor = 'orange';
});

const changedListElem = document.getElementById('changedList');

console.dir(changedListElem)

changedListElem.style.border = '1px solid black';
changedListElem.style.backgroundColor = 'lightblue';


const paragraphElems = document.getElementsByTagName('p');
console.dir(paragraphElems);
paragraphElems[0].innerText = 'This text was added later with JS';
paragraphElems[1].style.textTransform = 'uppercase';


const styledMessages = document.getElementsByClassName('styledMessages');
console.dir(styledMessages)

styledMessages.forEach( element =>{
    element.innerText = 'Schimbat';
})

for (let i = 0; i <styledMessages.length; i++) {
    const tagName = styledMessages [i].tagName;
    styledMessages[i].innerText = 'This message was a ${tagName} and was styled by JS';
}

const greenSquare = document.querySelector('.greenSquare');

const changeGreenSquare() {
    greenSquare.style.backgroundColor = 'lightgreen';
}

function mouseEnter() {
    greenSquare.style.backgroundColor = 'purple';
    greenSquare.style.border = '';
    greenSquare.innerText = '';
}
