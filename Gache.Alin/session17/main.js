/**
 * Numbers
 */

const myNumber = 5;
const secondNumber = 22;

let result;

result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber % secondNumber;

/**
 * String
 */

let myString = "Acesta este un mesaj";
myString = "O'hery";

//Template literals
// in template literals cu sintaxa ${} executam in interiorul parantezelor cod JS

myString = `Rezultatul este ${result}`;

myString = `Rezultatul 2 + 2 este ${2 + 2}`;
console.log(myString);

/**
 * Boolean
 */

let lightsON = false;

/**
 * Array
 * (liste)
 * (vectori)
 */

const myArray = [5, "4", true, null, [5, 3, 1], { name: "Test" }];

console.log(myArray[0]);
console.log(myArray[4][1]);
console.log(myArray[5].name);

/**
 * Objects
 */

const myObj = {
  burger: "Big Tasty",
  juice: "Cola zero",
  "french-fries": "Big size",
  address: {
    street: "Street",
    number: 1,
  },
  sauce: ["Ketchup", "Mayo"],
};
console.log(myObj.juice);
console.log(myObj["french-fries"]);
console.log(myObj.address.number);
console.log(myObj.sauce[1]);

/**
 * Loops (bucle)
 * Structuri iterative
 */

let marksof10Lei = 0;
//Expresiile de mai jus fac acelasi lucru
// marksof10Lei = marksof10Lei + 1;
// marksof10Lei += 1;
// marksof10Lei++;
// marksof10Lei += 3;
// console.log(marksof10Lei);

let total = 50;
marksof10Lei = marksof10Lei + 1;
marksof10Lei = marksof10Lei + 1;
//..
marksof10Lei = marksof10Lei + 1; // de 10 ori ca sa ajunga la total

//While loop

while (marksof10Lei < total) {
  marksof10Lei += 1;
}

console.log(`Avem ${marksof10Lei} bancnote de 10 lei`);

let roomTemp = 21;
let desiredTemp = 23;

while (roomTemp < desiredTemp) {
  roomTemp += 1;
}

let isAcOn = true;

while (roomTemp > desiredTemp) {
  roomTemp--;
}
isAcOn = false;

console.log(isAcOn);

//do {
// //acroin
// }

// for loop

let marksOf5Lei = 0;
let total5Lei = 5;

// for(initializare; conditie ; operatiune la finalul procesului)
// codul din interiorul {...} se numeste bloc de executie

for (index = 0; index < total5Lei; index++) {
  console.log(index);
  marksOf5Lei += 1;
}

const contries = ["Romania", "Brazilia", "Germania", "Franta"];
// console.log(contries);
// console.log(contries[0]);
// console.log(contries[1]);
// console.log(contries[2]);
// console.log(contries[3]);

for (let index = 0; index < contries.length; index++) {
  console.log(contries[index]);
}

for (let index = contries.length - 1; index >= 0; index--) {
  console.log(contries[index]);
}

let val1 = 5;
let val2 = "3";

// == egalitatea interpretata a doua valori
// === verifica egalitatea si tipul a doua valori

if (val1 === val2) {
  console.log("variabilele sunt egale");
} else {
  console.log("variabilele nu sunt egale");
}

//Truthy sau falsy values
//Falsy: 0. '', fals, undefined, null
if (" ") {
  console.log("Conditie adevarata");
} else {
  console.log("Conditie falsa");
}

if (val1 !== val2) {
  console.log("Variabile diferite");
} else {
  console.log("Variabile egale");
}

let temp = 53;
let optimalTemp = 24;
let maxTemp = 35;

if (temp >= optimalTemp) {
  if (temp < maxTemp) {
    console.log("Afara este superb");
  } else {
    console.log("Afara este mult prea cald");
  }
} else {
  console.log("Afara este urat");
}

// Logical operators
// && -- and (si) - daca cel putin o conditie este falsa totul este fals >> trebuei sa fie toate conditiile adv pt ca rezultatul sa fie adv
// || -- or (sau) - cel putin o conditie este adevara totul este adevarat

if (temp >= optimalTemp && temp < maxTemp) {
  console.log("Afara este superb");
} else {
  console.log("Afara este urat");
}

let pizzaPrice = 46;
let hasGorgonzola = true;

if (pizzaPrice <= 35 || (hasGorgonzola && pizzaPrice <= 40)) {
  console.log("Pizza este buna");
} else {
  console.log("Pizza nu este buna");
}

//hasGorgonzola este tot una cu hasGorgonzola === true

// Ternary operator - sunt 3 parti
// conditie ? valoare de adv : valoare de fals

val1 = 5;
val2 = "5";
val1 === val2 ? console.log("Adevarat") : console.log("Fals");

//Expresie identica cu cea din operatorul ternar

if (val1 === val2) {
  console.log("Adevarat");
} else {
  console.log("Fals");
}

/**
 * Functions
 */
// function declaration: functoin keyword urmat de numele functiei (), {}

function logSomething() {
  console.log(`Functia logSomething a fost invocata/apelata(called)`);
}

logSomething();

// funtction expression : const denumirea functiei = function keyword (), {}

const doSomething = function () {
  console.log(`Do something`);
};

doSomething();

// Arrow function

const doSomethingArrowFunction = () => {
  console.log(`Arrow function has been called`);
};

doSomethingArrowFunction();

//Functions with params

let number = 800; // variabila number nu se confunda/amesteca cu parampetrul functiei de mai jos

function addToFive(number) {
  let result = 5 + number;
  console.log(`Rezultatul este ${result}`);
}

addToFive(3);
addToFive(10);

const substractFrom100 = (number) => {
  console.log(`Rezultatul este ${100 - number}`);
};
substractFrom100(20)
substractFrom100("Marcel"); //NaN - not a number, modul js de a ne spune ca am facut o operatie matematica intre un nr si ceva ce nu este nr
substractFrom100('5')
