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
 * Sttringuri
 * siruri de caractere
 */

let myString = "Acesta este un mesaj";
myString = "0'heary";
//Template literals 
//in template literals cu sintaxa ${} executam in interiorul parantezelor cod javascript
myString = 'Rezultatul este ${result}';
myString = 'Rezultatul 2+2 este ${2+2}';

console.log = false;

/**
 * Array
 * (liste)
 * (vectori)
 */

const myArray = [5, '4', true, null, [5, 3, 1], { name: 'Sergiu' }];
console.log(myArray[0]);
console.log(myArray[4][1]);
console.log(myArray[5].name);

/** 
 * Objects
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

console.log(myObj.juice);
console.log(myObj["french-fries"]);

/**
 * Loops (bucle)
 * Structuri intercative
 */

let marksOf10Lei = 0;
//Expresiile de mai jos fac acelasi lucru





let total = 10;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei = marksOf10Lei + 1;
//...
marksOf10Lei = marksOf10Lei + 1; //de 10 ori ca sa ajunga la total

// While loop

while (marksOf10Lei < total) {
    marksOf10Lei += 1;
}

console.log(`Avem ${marksOf10Lei} bancote de 10 lei`);

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

//do{}
//   // action
// } while()

//For  loop

let marksOf5Lei = 0;
let marksOf5Lei = 5;

//for (initializare ; conditie ; operatiune la finalul procesului)
//codul din interiorul parantezelor acolade se numeste bloc de executie   

for (index = 0; index < total5Lei; index++) {
    console.log(index);
    marksOf5Lei += 1;
}

const countries = ['Romania', 'Brazilia', 'Germania', 'Frantaf'];
//console.log(countries)
//console.log(countries[0])
//console.log(countries[1])
//console.log(countries[2])
//console.log(countries[3])

for (let index = 0; index < countries.length; index++) {
    console.log(countries[index])
}

for (let index = countries.length - 1; index >= 0; index--) {
    console.log(countries[index])
}

let val1 = 5;
let val2 = '5';

if (val1 === val2) {
    console.log('Variabile sunt egale')
} else {
    console.log('Variabilele nu sunt egale')
}


if (' ') {
    console.log('Conditia este adevarata')
} else {
    console.log('Conditia este falsa')
}

if (val1 !== val2) {
    console.log('Variabilel sunt diferite');
} else {
    console.log('Variabilele sunt egale');
}

let temperature = 53;
let optimalTemperature = 24;
let maxTemperature = 35;

if (temperature >= optimalTemperature) {
    if (temperature)
     } else {
    console.log('Afara este frig si urat')
}

if (temperature >= optimalTemperature && temperature < maxTemperature) {
    console.log('Afara este superb')
} else {
    console.log('Afara este urat')
}

let pizzaPrice = 46;
let hasGorgonzola = true;

if(pizzaPrice<=35|| (hasGorgonzola&& pizzaPrice<=40)){
    console.log('Pizza isi merita banii');
}else{
    console.log('Pizza nu isi merita banii');
}

//hasGorgonzola este totuna cu hasGorgonzola === true

//
//

val1= 5;
val2= '5';

val1 === val2 ? console.log ('egale') : console.log('diferite');



if (val1 === val2) {
    console.log('egale')
}else{
    console.log('diferite')
}

/**
 * Functions
 */

//Function declaration: fucntion keyword urmat de numele

function logSomething() {
    console.log('Functia logSomenthing()a fost invocata/apelata (called)');
}

logSomething();
logSomething();

//Function expression : const denumirea functiei = function keyword, paranteze, paranteze acolade

const doSomething= function(){
    console.log('Do something');
}

doSomething();

//Arrow function

const doSomethingArrowFunction = () => {
    console.log('Arrow function has been called');
}

doSomethingArrowFunction();

//Functions with params

function addToFive(number) {
    let result= 5 + number;
    console.log(`Rezulatul este ${result}`)
}

addToFive(3);
addToFive(10);

const substractFrom100 = (number) => {
    console.log(`Rezultatul este ${100- number}`);
}

substractFrom100(20);
substractFrom100('Marcel');//NaN - not a number, modul js-ului de a ne spune ca am facut o operatie
//matematica intre un numar si ceva care nu este un numar
substractFrom100('5');

console.log(100 + 'marcel');
console.log(100 + '5');
console.log(100 = '' + 3);
console.log(100 - '5a');

logSomething();