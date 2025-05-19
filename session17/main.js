logSomething();
<<<<<<< HEAD
=======

>>>>>>> main
/**
 * Numbers
 */

const myNumber = 5;
const secondNumber = 2;
let result;

result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber % secondNumber;

/**
 * Stringuri
<<<<<<< HEAD
 * Șiruri de caractere
=======
 * siruri de caractere
>>>>>>> main
 */

let myString = "Acesta este un mesaj";
myString = "O'heary";
<<<<<<< HEAD
//Template litterals
//in template literals cu sintaxa ${} executam in interiorul parantezelor cod JavaScript

myString = `Rezultatul este ${result}`;
myString = `Rezultatul este ${2 + 2}`;
=======
// Template literals
// in template literals cu sintaxa ${} executam in interiorul parantezelor cod javscript
myString = `Rezultatul este ${result}`;
myString = `Rezultatul 2 + 2 este ${2 + 2}`;
>>>>>>> main

console.log(myString);

/**
<<<<<<< HEAD
 * Boolnean
=======
 * Boolean
>>>>>>> main
 */

let lightsOn = false;

/**
 * Array
 * (liste)
 * (vectori)
 */

<<<<<<< HEAD
const myArray = [5, '4', true, null, [5, 3, 1,], { name: 'Sergiu' }]
console.log(myArray[5].name);


/**
 * Onjects
=======
const myArray = [5, '4', true, null, [5, 3, 1], { name: 'Sergiu' }];
console.log(myArray[0]);
console.log(myArray[4][1]);
console.log(myArray[5].name);

/**
 * Objects
>>>>>>> main
 */

const myObj = {
    burger: 'Big Tasty',
    juice: 'Cola zero',
    'french-fries': 'Big Size',
    address: {
        street: 'Street',
        number: 1
    },
    sauce: ['Ketchup', 'Mayo']
}

<<<<<<< HEAD
console.log(myObj.juice)


/**
 * Loops (bucle)
 * Structuri interactive
 */

let marksOf10Lei = 0;
// marksOf10Lei = marksOf10Lei + 1;
// marksOf10Lei += 1;
// marksOf10Lei++;
// marksOf10Lei +=3;
=======
console.log(myObj.juice);
console.log(myObj["french-fries"]);

/**
 * Loops (bucle)
 * Structuri iterative
 */

let marksOf10Lei = 0;
// Expresiile de mai jos fac acelasi lucru
// marksOf10Lei = marksOf10Lei + 1; 
// marksOf10Lei += 1;
// marksOf10Lei++;
// marksOf10Lei += 3;
>>>>>>> main

// console.log(marksOf10Lei);

let total = 10;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei = marksOf10Lei + 1;
// ...
<<<<<<< HEAD
marksOf10Lei = marksOf10Lei + 1; // de 10 ori ca să ajungă la total

// WHILE LOOP
=======
marksOf10Lei = marksOf10Lei + 1;  // de 10 ori ca sa ajunga la total

// While loop
>>>>>>> main

while (marksOf10Lei < total) {
    marksOf10Lei += 1;
}

<<<<<<< HEAD
console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`)

=======
console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`);
>>>>>>> main

let roomTemperature = 21;
let desiredTemperature = 23;

while (roomTemperature < desiredTemperature) {
    roomTemperature += 1;
}

<<<<<<< HEAD

=======
>>>>>>> main
let isAcOn = true;

while (roomTemperature > desiredTemperature) {
    roomTemperature--;
}

isAcOn = false;

<<<<<<< HEAD

// For loop

let markof5Lei = 0;
let total5lei = 5;

// for (initiliazare ; conditie ; operatiune la finalul procesului) 
// codul din interiorul parantezelor acolade se numeste bloc de executie

for (index = 0; index < total5lei; index++) {
    console.log(index);
    markof5Lei += 1;
}


const counstries = ['Romania', 'Brazilia', 'Germania', 'Franta'];
// console.log(counstries)
// console.log(counstries[0])
// console.log(counstries[1])
// console.log(counstries[2])
// console.log(counstries[3])

for (let index = 0; index < counstries.length; index++) {
    console.log(counstries[index])
}

for (let index = counstries.length - 1; index >= 0; index--) {
    console.log(counstries[index])
}

// If/else conditional structures - blocks
// == verifica egalitatea interpretată a două valori
// === verifica egalitatea si tipul a doua valori

let val1 = 5;
let val2 = '3';

if (val1 === val2) {
    console.log('variabilele sunt egale')
} else {
    console.log('variabilele nu sunt egale')
}

// Thurty sau Falsy values
// Falsy: 0; ' ', false, undifiend, null

if ('') {
=======
// do {
//     // action
// } while()

// For loop

let marksOf5Lei = 0;
let total5Lei = 5;

// for (initializare ; conditie ; operatiune la finalul procesului)
// codul din interiorul parantezelor acolade se numeste bloc de executie

for (index = 0; index < total5Lei; index++) {
    console.log(index);
    marksOf5Lei += 1;
}

const countries = ['Romania', 'Brazilia', 'Germania', 'Franta'];
// console.log(countries)
// console.log(countries[0])
// console.log(countries[1])
// console.log(countries[2])
// console.log(countries[3])

for (let index = 0; index < countries.length; index++) {
    console.log(countries[index])
}

for (let index = countries.length - 1; index >= 0; index--) {
    console.log(countries[index])
}

// If/else conditional structures - blocks
// == verifica egalitatea interpretata a 2 valori
// === verifica egalitatea si tipul a doua valori

let val1 = 5;
let val2 = '5';

if (val1 === val2) {
    console.log('Variabile sunt egale')
} else {
    console.log('Variabilele nu sunt egale')
}

// Truthy sau Falsy values
// Falsy: 0, '', false, undefined, null

if (' ') {
>>>>>>> main
    console.log('Conditia este adevarata')
} else {
    console.log('Conditia este falsa')
}

if (val1 !== val2) {
    console.log('Variabilele sunt diferite');
} else {
    console.log('Variabilele sunt egale');
}

<<<<<<< HEAD

let temperature = 10;
=======
let temperature = 53;
>>>>>>> main
let optimalTemperature = 24;
let maxTemperature = 35;

if (temperature >= optimalTemperature) {
    if (temperature < maxTemperature) {
        console.log('Afara este superb');
    } else {
<<<<<<< HEAD
        console.log('Afara este frig si urat');
=======
        console.log('Afara este mult prea cald');
>>>>>>> main
    }
} else {
    console.log('Afara este frig si urat');
}

<<<<<<< HEAD

// Logical operators
// && - and (si) - daca cel putin o conditie este falsa

// 
=======
// Logical operators
// && - and (si) - daca cel putin o conditie este falsa, 
// totul este fals aka trebuie sa fie toate conditiile adevarate pt ca rezultatul sa fie adevarat

// || - or (sau) - daca cel putin o conditie este adevarata, totul este adevarat
>>>>>>> main

if (temperature >= optimalTemperature && temperature < maxTemperature) {
    console.log('Afara este superb')
} else {
    console.log('Afara este urat')
}

<<<<<<< HEAD


let pizzaPrice = 35;
=======
let pizzaPrice = 46;
>>>>>>> main
let hasGorgonzola = true;

if (pizzaPrice <= 35 || (hasGorgonzola && pizzaPrice <= 40)) {
    console.log('Pizza isi merita banii');
} else {
    console.log('Pizza nu isi merita banii');
}

<<<<<<< HEAD

//hasGorgonzola este tot una cu hasGorgonzola === true


// Trenary operator - sunt 3 parti
=======
// hasGorgonzola este totuna cu hasGorgonzola === true 

// Trenary operator - sunt 3 party
>>>>>>> main
// conditie ? valoare de adevar : valoare in caz de fals

val1 = 5;
val2 = '5';

val1 === val2 ? console.log('egale') : console.log('diferite');

<<<<<<< HEAD
// Expresie identică cu cea din operatorul ternar
=======
// Expresie identica cu cea din operatorul ternar
>>>>>>> main

if (val1 === val2) {
    console.log('egale')
} else {
    console.log('diferite')
}

<<<<<<< HEAD

=======
>>>>>>> main
/**
 * Functions
 */

<<<<<<< HEAD
//Function declaration: function keyword urmat de numele functiei, paranteze rotunde, paranteze rotunde acolade

function logSomething() {
    console.log('Functia logSomething() a fost invocato/apelata (called)');
=======
// Function declaration: function keyword urmat de numele functiei, paranteze rotunde, paranteze acolade

function logSomething() {
    console.log('Functia logSomething() a fost invocata/apelata (called)');
>>>>>>> main
}

logSomething();
logSomething();

<<<<<<< HEAD
// Function expression: const denumirea functiei = function keyword, paranteze rotunde, paranteze acolade
//RAR FOLOSITĂ

const doSomething = function () {
=======
// Function expression : const denumirea functiei = function keyword, paranteze rotunde, paranteze acolade

const doSomething = function() {
>>>>>>> main
    console.log('Do something');
}

doSomething();

<<<<<<< HEAD
// Arrow function - Cea mai folosită
=======
// Arrow function
>>>>>>> main

const doSomethingArrowFunction = () => {
    console.log('Arrow function has been called');
}

doSomethingArrowFunction();

<<<<<<< HEAD

// Functions with params
let number = 800; // variabila number nu se va confunda/amesteca cu parametrul functiei de mai jos
=======
// Functions with params
// trimitem argumente in momentul in care apelam functia
// primim parametrii
let number = 800; // variabila number nu se va confunda cu parametrul functiei de mai jos
>>>>>>> main

function addToFive(number) {
    let result = 5 + number;
    console.log(`Rezultatul este ${result}`)
}

addToFive(3);
addToFive(10);

<<<<<<< HEAD

const substractFrom100 = (number) => {
    console.log(`Rezultatul este ${100 - number}`)
}

substractFrom100(20);
substractFrom100('Marcel'); // NaN - Not a Number, modul de js-ului de a ne spune ca am facut o operatie
//matematica intre un number si ceva care nu este numar

substractFrom100('5'); //EXPECTIE - Scadere cu string
=======
const substractFrom100 = (number) => {
    console.log(`Rezultatul este ${100 - number}`);
}

substractFrom100(20);
substractFrom100('Marcel'); // NaN - not a number, modul js-ului de a ne spune ca am facut o operatie
// matematica intre un numar si ceva care nu este un numar
substractFrom100('5');

console.log(100 + 'marcel');
console.log(100 + '5');
console.log(100 + '' + 3);
console.log(100 - '5a');

logSomething();
>>>>>>> main
