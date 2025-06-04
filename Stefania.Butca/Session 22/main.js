const demoBoxElement = document.getElementById("testBox");
console.dir(demoBoxElement);

demoBoxElement.className = 'red';
demoBoxElement.className = '';

demoBoxElement.classList.add('red');
demoBoxElement.classList.add('blue');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue'); // oscileaza intre adaugare si stergere
demoBoxElement.classList.toggle('blue'); // acum va fi sters

/**
 * get or set atrubutes
 * ex width, height, src, href, id, class
 */

const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imageSrc = demoImageElement.getAttribute("src");
console.log(imageSrc); // va afisa src-ul imaginii
newImageElement.setAttribute("src", imageSrc); // seteaza src-ul imaginii noi
newImageElement.setAttribute("src", 'https://cdn.britannica.com/39/226539-050-D21D7721/Portrait-of-a-cat-with-whiskers-visible.jpg');

// const ulElem = document.getElementsByTagName("ul")[0]; // returneaza o lisa
// ulElem.addEventListener('click', function(){
//     this.classList.toggle('blue'); // poti schimba ulElem cu this
// });

let listItemsElements = document.querySelectorAll("li"); // returneaza o lista de elemente
console.dir(listItemsElements);
listItemsElements.forEach(listItem => {
    // listItem.addEventListener('mouseover', function() {
    //     this.classList.add('red'); 
    // });
    // listItem.addEventListener('mouseout', function() {
    //     this.classList.remove('red'); 
    // });

    listItem.addEventListener('click', toggleListItems)
});

function toggleListItems() {
    const toggleValue = this.classList.toggle('red'); // toggleValue va fi true daca clasa a fost adaugata, false daca a fost stearsa
    console.log(toggleValue); // afiseaza true sau false in functie de starea clasei

    if (toggleValue) {
        const span = document.createElement('span'); // creeaza un element span
        span.innerText = 'x'; // seteaza textul span-ului
        this.appendChild(span); // adauga span-ul la elementul listItem

    } else {
        this.getElementsByTagName('span')[0].remove(); // sterge primul span din listItem
        console.dir(this)
        console.log(document);
    }
}

const clickMeElement = document.getElementById("clickMe");
clickMeElement.style.cursor = 'pointer'; // schimba cursorul la pointer

const demoInputElement = document.getElementById("demoInput");
demoInputElement.addEventListener('keypress', function (event) {
    console.log(event); // afiseaza evenimentul in consola
    // console.log(event.key); // afiseaza tasta apasata
    // console.log(event.code); // afiseaza codul tastei apasate
    // console.log(event.target.value); // afiseaza valoarea input-ului

    if (event.key === 'Enter' && demoInputElement.value.length > 3) { // daca tasta apasata este Enter
        demoInputElement.style.backgroundColor = 'lightgreen'; // schimba culoarea de fundal a input-ului
    }
});

const ulElem = document.getElementsByTagName("ul")[0];

clickMeElement.addEventListener('click', function () {
    const newLiElement = document.createElement('li'); // creeaza un element li
    ulElem.appendChild(newLiElement); // adauga elementul li la lista
    listItemsElements = document.querySelectorAll("li"); // actualizeaza lista de elemente li
    if (demoInputElement.value) {
        newLiElement.innerText = demoInputElement.value; // seteaza textul elementului li
        demoInputElement.value = ''; // sterge valoarea input-ului
    }
    else {
        newLiElement.innerText = 'Elem' + listItemsElements.length; // seteaza textul elementului li la Elem + numarul de elemente din lista
    }
});

const toDoInputElement = document.getElementById("toDoInput");
const addButtonElement = document.getElementsByClassName("addButton")[0];
const toDoListElement = document.getElementsByClassName("toDoListItems")[0];

function addItemsInTheList() {
    const canAdd = checkPlan(); // verifica daca planul este complet
    if (canAdd) {
        if (toDoInputElement.value !== '') {
            const newListItemElement = document.createElement('li'); // creeaza un element li
            newListItemElement.className = 'newListItem'; // seteaza clasa elementului li

            toDoListItems.appendChild(newListItemElement); // adauga elementul li la lista
            newListItemElement.innerHTML = toDoInputElement.value; // seteaza textul elementului li
            toDoInputElement.value = ''; // sterge valoarea input-ului
        } else {
            // alert('te rugam sa introduci o valoare')
            // console.log('mesaj dupa alerta');
            // prompt('Te rugam sa introduci o valoare'); // afiseaza un prompt pentru a introduce o valoare
            // confirm('Te rugam sa introduci o valoare'); // afiseaza un confirm pentru a introduce o valoare
            toDoInputElement.classList.toggle('blue')
        }
    } else {
        alert('te rugam sa treci la un plan superior')
    }
}

addButtonElement.addEventListener('click', addItemsInTheList);
toDoInputElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { // daca tasta apasata este Enter
        addItemsInTheList();
    }
})

function checkPlan() {
    // returneaza o valoare boolean care indica daca planul este complet
    const newListItemNumber = document.getElementsByClassName("newListItem").length; // numara elementele cu clasa newListItem
    return newListItemNumber < 3; // daca numarul de elemente este mai mic decat 3, planul este complet
    // if (newListItemNumber < 3) {
    //     return true; // planul este complet
    // } else {
    //     return false; // planul nu este complet
    // }
}

/**
 * RegExp - expresii regulate
 * sunt folosite pentru a cauta si inlocui text in string-uri   
 * tipare care cauta anumite combinatii de caractere
 */

let string = 'abcdef';
let pattern = /abc/; // cauta secventa de caractere abc in string

console.log(pattern.exec(string)); // returneaza un array cu rezultatul cautarii
console.log(pattern.test(string)); // returneaza true daca secventa de caractere este gasita, false in caz contrar
console.log(string.match(pattern)); // returneaza un array cu rezultatul cautarii

const regexEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // cauta un email valid

const myFormElement = document.getElementById("myForm");
myFormElement.addEventListener('submit', function (event) {
    event.preventDefault(); // previne trimiterea formularului
    console.log(event); // afiseaza evenimentul in consola

    const emailAdressValue = event.target[0].value; // obtine valoarea input-ului de email

    if (regexEmailPattern.test(emailAdressValue)) { // verifica daca email-ul este valid
        alert('este email');
    } else {
        alert('nu este email valid');
    }
});
