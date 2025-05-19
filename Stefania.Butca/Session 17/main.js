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
result = myNumber % secondNumber; // Modulus operator

/**
 * Stringuri
 * siruri de caractere
 */

let myString = "Acesta este un mesaj";
myString = "O'heary";
// Template literals
// in template literals cu sintaxa ${} exectuam in interiorul parantezelor cod js
myString = `Rezultatul este ${result}`;
myString = `Rezultatul 2 + 2 este ${2 + 2}`;

console.log(myString);

/**
 * Boolean
 */

let lightsOn = false;

/**
 * Arrays
 * liste, vectori
    * array - tip de date care contine mai multe valori
 */

const myArray = [5, '4', true, null, [5, 3, 1], { name: 'Stefania' }];
console.log(myArray[4]);
console.log(myArray[5].name); // Stefania

/**
 * Objects
 */

const myObject = {
    burger: 'Big Tasty',
    juice: 'Cappy',
    'french fries': 'Big Tasty',
    address: {
        street: 'Street 1',
        number: 1,
    },
    sauce: ['ketchup', 'mayo'],
}

console.log(myObject.burger);
console.log(myObject['french fries']);
console.log(myObject.address.street);

/**
 * Loops
 * structuri interactive/ bucla
 */

let marksOf10Lei = 0;
// expresiile de mai jos fac acelasi lucru
// marksOf10Lei = marksOf10Lei + 1;
// marksOf10Lei += 1;
// marksOf10Lei++;

// console.log(marksOf10Lei);

let total = 10;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei = marksOf10Lei + 1;
//...
marksOf10Lei = marksOf10Lei + 1; // de 10 ori ca sa ajungem la total

//while loop
while (marksOf10Lei < total) {
    marksOf10Lei += 1;
}

console.log(`Avem ${marksOf10Lei} bacnote de 10 lei`);

let roomTemperature = 21;
let desiredTemperature = 22;

while (roomTemperature < desiredTemperature) {
    roomTemperature += 1;
}

let isAcOn = true;

while (roomTemperature > desiredTemperature) {
    roomTemperature -= 1;
    isAcOn = true;
}

// do {
//...// action
// } while (condition);

// for loop

let marksOf5Lei = 0;
let total5Lei = 5;

// for (initializare ; conditie ; operatiune la finalul procesului) 
// codul din interiorul parantezelor acolade se numeste bloc de executie

for (index = 0; index < total5Lei; index++) {
    console.log(index);
    marksOf5Lei += 1;
}

const countries = ['Romania', 'Germany', 'France', 'Italy'];
// console.log(countries)
// console.log(countries[0]);
// console.log(countries[1]);

for (let index = 0; index < countries.length; index++) {
    console.log(countries[index]);
}

for (let index = countries.length - 1; index >= 0; index--) {
    console.log(countries[index]);
}




/**
 * Functions
 */
// function declaration: function keyword - urmat de numele functiei, paranteze rotunde (), acolade {}

function logSomething() {
console.log('functia logSomething() a fost invocata/ apelata (called)');
}

logSomething();

// function expression: const denumirea functiei = function keyword, (), {}
const doSomething = function (){
    console.log('Do something');
}

doSomething();

//Arrow function

const doSomethingArrowFunction = () => {
    console.log('Arrow Function has been called');
}

doSomethingArrowFunction();