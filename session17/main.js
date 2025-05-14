logSomething(); //Functia logSomething() a fost apelata/invocata(Called)
/**
 * Numbers
 */

const myNumber = 5;
const secondNumber = 2;
let result;

result = myNumber + secondNumber; //suma
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber % secondNumber;

/**
 * String
 * siruri de caractere
 */

let myString = "This is a message";
myString = "O'heary";

// Template literals
// in template literals cu sintaxa ${} executa in interioriul parantezelor cod js

myString = `Rezultatul este ${result}`;
myString = `Rezultatul este 2 + 2 = ${2 + 2}`;

console.log(myString); //Rezultatul este 2 + 2 = 4

/**
 * Boolean
 * true/false
 */

let lightsOn = false;

/**
 * Array
 * liste de elemente
 * (vectori)
 */

const myArray = [5, "4", true, null, [5, 3, 1], { name: "Alexandra", age: 28 }]; //array cu elemente de tipuri diferite

console.log(myArray[0]); //5
console.log(myArray[5].name); //Alexandra
console.log(myArray[5].age); //28

/**
 * Objects
 */

const myObj = {
  burger: "cheeseburger",
  juice: "Cola zero",
  "french-fries": "Big Size",
  address: {
    street: "Street",
    number: 1,
  },
  sauce: ["Ketchup", "Mayo"],
};

console.log(myObj["french-fries"]); //Big Size

/**
 * Loops (bucle)
 * Structuri iterative
 * Folosite pentru a repeta o actiune de mai multe ori
 */

let marksOf10lei = 0;
// Expresiile de mai jos fac acelasi lucru

//marksOf10lei = marksOf10lei + 1;
//marksOf10lei += 1;
//marksOf10lei++;
//marksOf10lei += 3;

//console.log(marksOf10lei); //3

let total = 10;
marksOf10lei = marksOf10lei + 1;
marksOf10lei = marksOf10lei + 1;
marksOf10lei = marksOf10lei + 1;
// ...
marksOf10lei = marksOf10lei + 1; // de 10 ori ca sa ajungem la 10

// While loop

while (marksOf10lei < total) {
  marksOf10lei += 1;
}

// conditie si actiune

console.log(`Avem ${marksOf10lei} bancnote de 10 lei`); //Avem 10 lei

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

//do {
// actiune
//} while (conditie);}

//For loop

let marksOf5lei = 0;
let total5lei = 5;

// for (initializare: conditie; operatiune la finalul procesului)
// codul din interiorul parantezelor acolade se numeste bloc de executie

for (index = 0; index < total5lei; index++) {
  console.log(index); //0 1 2 3 4
  marksOf5lei += 1;
}

const countries = ["Romania", "Polonia", "Franta", "Anglia", "Germania"];
//console.log(countries)
// console.log(countries[0])
// console.log(countries[1])
// console.log(countries[2])

for (let index = 0; index < countries.length; index++) {
  console.log(countries[index]); //Romania Polonia Franta Anglia Germania
}

for (let index = countries.length - 1; index >= 0; index--) {
  console.log(countries[index]);
}

let val1 = 5;
let val2 = "5";

// == verifica egalitatea interpretata a 2 valori
// === verifica egalitatea "stricta"/ "si tipul" a 2 valori
// != verifica diferenta interpretata a 2 valori

if (val1 === val2) {
  console.log("Sunt egale");
} else {
  console.log("Sunt diferite");
}

//Truthy and falsy values
// Falsy values = false, 0, "", null, undefined
// Truthy values = true, 1, "0", "false", [], {}
// 0, "", null, undefined, NaN

if (" ") {
  console.log("Conditia este adevarata");
} else {
  console.log("Conditia este falsa");
}

if (val1 !== val2) {
  console.log("Variabilele sunt diferite");
} else {
  console.log("Variabilele sunt egale");
}

let temperature = 55;
let optimalTemperature = 24;
let maxTemperature = 35;

if (temperature >= optimalTemperature) {
  if (temperature < maxTemperature) {
    console.log("Temperatura este potrivita");
  } else {
    console.log("Intra in casa");
  }
} else {
  console.log("Temperatura nu este potrivita");
}

// Logical operators
// && - and (si) - daca cel putin o conditie este falsa, atunci totul este fals
// totul este fals aka trebuie sa fie toate conditiile adevarate pentru ca rezultatul sa fie true
// || - or (sau) - daca cel putin o conditie este adevarata, atunci totul este adevarat
// ! - not (nu) - inversarea valorii

if (temperature >= optimalTemperature && temperature < maxTemperature) {
  console.log("Temperatura este potrivita");
} else {
  console.log("Intra in casa");
}

let pizzaPrice = 35;
let hasGorgonzola = false;

if (pizzaPrice <= 35 || (hasGorgonzola && pizzaPrice <= 40)) {
  console.log("Pizza este ok");
} else console.log("Pizza este scumpa");
// if (pizzaPrice <= 35 || hasGorgonzola && pizzaPrice <= 40) {

// hasGorgonzola este totuna cu hasGorgonzola === true

//Ternary operator
// (conditie) ? (true) : (false)
// (conditie) ? valoare de adevar : valoare in caz de fals - este o forma scurta de a scrie un if-else

val1 = 5;
val2 = "5";

val1 === val2 ? console.log("Sunt egale") : console.log("Sunt diferite");

if (val1 === val2) {
  console.log("Sunt egale");
} else {
  console.log("Sunt diferite");
}

/**
 * Functions
 * Functiile sunt blocuri de cod care pot fi apelate de mai multe ori
 *  Functiile sunt folosite pentru a organiza codul si a-l face mai usor de inteles
 * Functiile sunt folosite pentru a evita repetarea codului
 *  Functiile sunt folosite pentru a face codul mai usor de inteles
 * Functiile sunt folosite pentru a face codul mai usor de intretinut 
 * 
 */

function logSomething() {
  console.log("Functia logSomething() a fost apelata/invocata(Called)");
}

logSomething(); 
logSomething();

// Function expression : const denumirea functiei = function keyword, paranteze rotunde, acolade

const doSomething = function () {
    console.log("doSomething");
}
doSomething(); //doSomething

// Arrow function

const doSomethingArrowFunction = () => {
    console.log('Arrow function has been called');
}

doSomethingArrowFunction(); //Arrow function has been called

// Function with parameters
let number = 800; // variabila number nu se  va confunda cu paramentrul functiei de mai jos

function addToFive(number) {
let result = 5  + number;
console.log(`Rezultatul este ${result}`);
}

addToFive(3); //Rezultatul este 8
addToFive(5); //Rezultatul este 10
addToFive(10); //Rezultatul este 15

const substractFrom100 = (number) => {
console.log(`Rezultatul este ${100 - number}`);
}

substractFrom100(20); //Rezultatul este 80
substractFrom100('Marcel'); //Rezultatul este NaN

// Nan = Not a Number
// NaN este un tip de date care apare atunci cand incercam sa facem o operatie matematica cu un string

substractFrom100('5'); //Rezultatul este 95

console.log(100 + 'marcel'); //100marcel
console.log(100 - '5'); //95
console.log(100 + '' + 3); //1003
console.log(100 + 3); //103
console.log(100 - 'marcel'); //NaN
