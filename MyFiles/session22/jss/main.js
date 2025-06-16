const demoBoxElement = document.getElementById('testBox');
console.dir(demoBoxElement)

demoBoxElement.className = 'red';
demoBoxElement.className = '';

demoBoxElement.classList.add('blue');
demoBoxElement.classList.add('red');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue');
demoBoxElement.classList.toggle('blue');
demoBoxElement.classList.toggle('blue');

/**
 * get or set attributes
 */

const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');
console.log(imgSrc)
newImageElement.setAttribute('src', imgSrc);
newImageElement.setAttribute('src', 'https://i.pinimg.com/736x/3c/42/71/3c4271601a272a9eba212c21b4aad831.jpg');

// const ulElem = document.getElementsByTagName('ul')[0];
// ulElem.addEventListener('click', function() {
//     this.classList.toggle('blue');
// });

let listItemsElements = document.querySelectorAll('li');
console.dir(listItemsElements)
listItemsElements.forEach( listItem => {
    // listItem.addEventListener('mouseover', function() {
    //     this.classList.add('red');
    // });
    // listItem.addEventListener('mouseout', function() {
    //     this.classList.remove('red');
    // });

    listItem.addEventListener('click', toggleListItems)
})

function toggleListItems() {
   const toggleValue = this.classList.toggle('red');
   console.log(toggleValue)

   if (toggleValue) {
        const span = document.createElement('span');
        span.innerText = 'x';
        this.appendChild(span);
   } else {
    this.getElementsByTagName('span')[0].remove();
    console.dir(this)
    console.log(document);
   }
}

const clickMeElement = document.getElementById('clickMe');
clickMeElement.style.cursor = 'pointer';

const demoInputElement = document.getElementById('demoInput');
demoInputElement.addEventListener('keypress', function(event) {
    console.log(event);
    if (event.key === 'Enter' && demoInputElement.value.length > 3) {
        demoInputElement.style.background = 'lightgreen';
    }
});

const ulElem = document.getElementsByTagName('ul')[0];

clickMeElement.addEventListener('click', function() {
    const newLiElement = document.createElement('li');
    ulElem.appendChild(newLiElement);
    listItemsElements = document.querySelectorAll('li');
    if (demoInputElement.value) {
        newLiElement.innerText = demoInputElement.value;
        demoInputElement.value = '';
    } else {
        newLiElement.innerText = 'Elem ' + listItemsElements.length;
    }
});

const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListItems = document.getElementsByClassName('toDoListItems')[0];

function addItemsInTheList() {
    const canAdd = checkPlan();
    if (canAdd) {
        if (toDoInputElement.value !== '') {
            const newListItemElement = document.createElement('li');
            newListItemElement.className = 'newListItems';
    
            toDoListItems.appendChild(newListItemElement);
            newListItemElement.innerHTML = toDoInputElement.value;
            toDoInputElement.value = '';
        } else {
            // alert('Te rugam sa introduci o valoare mai intai');
            // console.log('Mesaj dupa alerta');
            // prompt('Te rugam sa introduci o valoare mai intai');
            // confirm('Te rugam sa introduci o valoare mai intai');
            toDoInputElement.classList.toggle('blue');
        }
    } else {
        alert('te rugam sa treci la un plan superior');
        toDoInputElement.value = '';
    }
}

addButtonElement.addEventListener('click', addItemsInTheList);
toDoInputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItemsInTheList()
    }
})

function checkPlan() {
    // returneaza o valoare booleana
    const newListItemsNumber = document.getElementsByClassName('newListItems').length;
    return newListItemsNumber < 3;
    // conditia de mai jos reprezinta acelasi lucru cu returnul de mai sus
    // if (newListItemsNumber < 3) {
    //     return true;
    // } else {
    //     return false;
    // }
}

/**
 * RegExp - Regular Expressions
 * tipare care cauta anumite combinatii de caractere
 * https://regexr.com/
 * https://regex101.com/
 */

let string = 'abcdef';
let pattern = /abc/;

console.log(pattern.exec(string))
console.log(pattern.test(string))
console.log(string.match(pattern))

const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

const myFormElement = document.getElementById('myForm');

myFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);

    const emailAddressValue = event.target[0].value;

    if (regexEmailPattern.test(emailAddressValue)) {
        alert('este email')
    } else {
        alert('nu este email')
    }
})