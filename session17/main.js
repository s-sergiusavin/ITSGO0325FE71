logSomething();
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
 * Șiruri de caractere
 */

let myString = "Acesta este un mesaj";
myString = "O'heary";
//Template litterals
//in template literals cu sintaxa ${} executam in interiorul parantezelor cod JavaScript

myString = `Rezultatul este ${result}`;
myString = `Rezultatul este ${2 + 2}`;

console.log(myString);

/**
 * Boolnean
 */

let lightsOn = false;

/**
 * Array
 * (liste)
 * (vectori)
 */

const myArray = [5, '4', true, null, [5, 3, 1,], { name: 'Sergiu' }]
console.log(myArray[5].name);


/**
 * Onjects
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

// console.log(marksOf10Lei);

let total = 10;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei = marksOf10Lei + 1;
// ...
marksOf10Lei = marksOf10Lei + 1; // de 10 ori ca să ajungă la total

// WHILE LOOP

while (marksOf10Lei < total) {
    marksOf10Lei += 1;
}

console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`)


let roomTemperature = 21;
let desiredTemperature = 23;

while (roomTemperature < desiredTemperature) {
    roomTemperature += 1;
}


let isAcOn = true;

while (roomTemperature > desiredTemperature) {
    roomTemperature--;
}

isAcOn = false;


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
    console.log('Conditia este adevarata')
} else {
    console.log('Conditia este falsa')
}

if (val1 !== val2) {
    console.log('Variabilele sunt diferite');
} else {
    console.log('Variabilele sunt egale');
}


let temperature = 10;
let optimalTemperature = 24;
let maxTemperature = 35;

if (temperature >= optimalTemperature) {
    if (temperature < maxTemperature) {
        console.log('Afara este superb');
    } else {
        console.log('Afara este frig si urat');
    }
} else {
    console.log('Afara este frig si urat');
}


// Logical operators
// && - and (si) - daca cel putin o conditie este falsa

// 

if (temperature >= optimalTemperature && temperature < maxTemperature) {
    console.log('Afara este superb')
} else {
    console.log('Afara este urat')
}



let pizzaPrice = 35;
let hasGorgonzola = true;

if (pizzaPrice <= 35 || (hasGorgonzola && pizzaPrice <= 40)) {
    console.log('Pizza isi merita banii');
} else {
    console.log('Pizza nu isi merita banii');
}


//hasGorgonzola este tot una cu hasGorgonzola === true


// Trenary operator - sunt 3 parti
// conditie ? valoare de adevar : valoare in caz de fals

val1 = 5;
val2 = '5';

val1 === val2 ? console.log('egale') : console.log('diferite');

// Expresie identică cu cea din operatorul ternar

if (val1 === val2) {
    console.log('egale')
} else {
    console.log('diferite')
}


/**
 * Functions
 */

//Function declaration: function keyword urmat de numele functiei, paranteze rotunde, paranteze rotunde acolade

function logSomething() {
    console.log('Functia logSomething() a fost invocato/apelata (called)');
}

logSomething();
logSomething();

// Function expression: const denumirea functiei = function keyword, paranteze rotunde, paranteze acolade
//RAR FOLOSITĂ

const doSomething = function () {
    console.log('Do something');
}

doSomething();

// Arrow function - Cea mai folosită

const doSomethingArrowFunction = () => {
    console.log('Arrow function has been called');
}

doSomethingArrowFunction();


// Functions with params
let number = 800; // variabila number nu se va confunda/amesteca cu parametrul functiei de mai jos

function addToFive(number) {
    let result = 5 + number;
    console.log(`Rezultatul este ${result}`)
}

addToFive(3);
addToFive(10);


const substractFrom100 = (number) => {
    console.log(`Rezultatul este ${100 - number}`)
}

substractFrom100(20);
substractFrom100('Marcel'); // NaN - Not a Number, modul de js-ului de a ne spune ca am facut o operatie
//matematica intre un number si ceva care nu este numar

substractFrom100('5'); //EXPECTIE - Scadere cu string
