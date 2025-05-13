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
 * (Siruri de caractere)
 */

let myString = "Acesta este un mesaj";
myString = "O`heary";
// Template literals
// in template literals cu sintaxa ${} executam in interiorul parantezelor cod javascript

myString = `Rezultatul este ${result}`;
myString = `Rezultatul 2+2 este ${2 + 2}`;

console.log(myString);

/**
 * Boolean
 */

let lightsOn = false;

/**
 * Array
 * (Liste)
 * (Vectori)
 */

const myArray = [5, '4', true, null, [5, 3, 1], { name: 'Sergiu' }];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[4][1]);
console.log(myArray[5].name)


/**
 * Objects
 */

const myObj = {
    burger: 'Big Tasty',
    juice: 'Cola zero',
    'french-fries': 'Big size',
    address: {
        street: 'Street',
        number: 1,
    },
    sauce: ['Ketchup', 'Mayo'],

}

console.log(myObj.juice);
console.log(myObj['french-fries']);

//-----------------------------------------------------------------------------
/**
 * Loops
 * (Bucle)
 * (Structuri interactive)
 */

let marksOf10Lei = 0;
//Expresiile de mai jos fac acelasi lucru

// marksOf10Lei = marksOf10Lei + 1;
// marksOf10Lei += 1;
// marksOf10Lei++;
// marksOf10Lei += 3;

// console.log(marksOf10Lei);

let total = 10;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei = marksOf10Lei + 1;
//...
marksOf10Lei = marksOf10Lei + 1; // de 10 ori ca sa ajunga la total

//While Loop

while (marksOf10Lei < total) {

    marksOf10Lei += 1;
}

console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`);


marksOf1Lei = 10;
total1Lei = 4;

while (marksOf1Lei > total1Lei) {
    marksOf1Lei -= 1;
}

console.log(`Avem ${marksOf1Lei} bancnote de 1 leu`)



let roomTemperature = 21;
let desiredTemperature = 23;


while (roomTemperature < desiredTemperature) {
    roomTemperature += 1;
}

let isAcOn = true;

while (roomTemperature > desiredTemperature) {
    roomTemperature -= 1;
}

isAcOn = false

/**
 * do {
 * action
 * } while ()
 */

//For Loop

let marksOf5Lei = 0;
let total5Lei = 7;

// for (initializare ; conditie ; operatiune la finalul procesului)
// codul din interiorul parantezelor acolade se numeste bloc de executie


for (index = 0; index < total5Lei; index++) {
    console.log(index);
    marksOf5Lei += 1;
}

const countries = ['Romania', 'Brazilia', 'Germania', 'Franta']
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


// If/Else conditional structures - blocks
// == verifica egalitatea interpretata a 2 valori
// === verifica egalitatea si tipul a 2 valori

let val1 = 5;
let val2 = '5';

if (val1 === val2) {
    console.log('variabilele sunt egale')
} else {
    console.log('variabilele nu sunt egale')
}

// Truthy sau Falsey values
// Falsey: 0, '', false, undefined, null

if ('') {
    console.log('Conditia este adevarata')
} else {
    console.log('Conditia este falsa')
}

if (val1 !== val2) { // ! - verifica tipul 
    console.log('variabilele sunt diferite');
} else {
    console.log('variabilele sunt egale');
}

let temperature = 26;
let optimalTemperature = 24;
let maxTemperature = 35;

if (temperature >= optimalTemperature) {
    if (temperature < maxTemperature) {
        console.log('Afara este superb');
    } else {
        console.log('Afara este mult prea cald')
    }
} else {
    console.log('Afara este frig si urat')
}

//Logical operators
// && - and (si) - daca cel putin o conditie este falsa, 
// totul este fals a.k.a trebuie sa fie toate conditiile adevarate pentru ca rezultatul sa fie adevarat

// || - or (sau) - daca cel putin o conditie este adevarata, totul este adevarat

if (temperature >= optimalTemperature && temperature < maxTemperature) {
    console.log('afara este superb')
} else {
    console.log('afara este urat')
}

let pizzaPrice = 34;
let hasGorgonzola = false;

if (pizzaPrice <= 35 || (hasGorgonzola && pizzaPrice <=40)) {
    console.log('Pizza isi merita banii')
} else {
    console.log('Pizza nu isi merita banii')
}

// hasGorgonzola este totuna cu hasGorgonzola === true


// Ternary operator - sunt 3 parti
// conditie ? valoare de adevar : valoare in caz de fals

val1 = 5;
val2 = '5';

val1===val2 ? console.log('Egale') : console.log('Diferite')


value1 = 3;
value2 ='3';

value1 === value2 ? console.log('Declaratiile sunt egale') : console.log('Declaratiile nu sunt egale')

if (value1 !== value2){
    console.log('egale, frate');
} else {
    console.log('nu-s egale frate'); //folosind !== js a verificat daca value1 si value2 sunt diferite si a fost adevarat, deci a returnat prima varianta
}

//Expresie identica cu cea din operatorul ternar

if (val1 === val2) {
    console.log('egale')
} else {
    console.log('diferite')
}

/**
 * Functions
 */

//Function declaration: function keyword urmat de numele functiei, paranteze rotunde, acolade

function logSomething () {
    console.log('Functia logSomething() a fost invocata/apelata (called)')
}

logSomething();
logSomething();

function doThis () {
    console.log('I dit that thing')
}

doThis();

//Function expression : const denumirea functiei = function keyword, paranteze rotunde, acolade

const doSomething = function () {
    console.log('Do something')
}

doSomething();

const playMusic = function () {
    console.log('Music is playing')
}

playMusic();

// Arrow function (cel mai folosit)

const doSomethingArrowFunction = () => {
    console.log('Arrow function has been called')
}

doSomethingArrowFunction();

const throwArrow = () => {
    console.log('I threw an arrow')
}

throwArrow();


//Functions with parameters
let number = 800; //variabila number nu se va confunda cu parametrul functiei de mai jos

function addToFive(number) {
    let result = 5 + number;
    console.log(`Rezultatul este ${result}`);
}

addToFive(3);
addToFive(10);

const substractFrom100 = (number) => {
    console.log(`Rezultatul este ${100-number}`)
}

substractFrom100(20);
substractFrom100('Marcel'); //NaN - not a number, modul JS-ului de a ne spune ca am facut o operatie
//matematica intre un numar si ceva care nu este un numar

substractFrom100('5');

console.log(100 + 'marcel');
console.log(100 + '5');
console.log(100 + '' + 3);

//------ exercitiil mele

const addOne = (number) => {
    console.log(`I added one and the result is ${number+1}`)
}

addOne(1);
addOne(50);
addOne('1');
addOne();

//--

const addCity = (string) => {
    console.log(string+'\ City')
}

addCity('Mexico');
addCity('NewYork');
addCity('Medias');

//--

reqRam = 32;
reqCpu = 3.2;
reqGpu = 'Nvidia';
rtxOn = true;

yourRam = 32;
yourCpu = 3.2;
yourGpu = 'Nvidia';

yourRam === reqRam ? console.log('Your RAM is sufficient to run the game') : console.log(`Your RAM is not sufficient to run the game, you need ${reqRam-yourRam} more RAM to run it `);

if (yourRam === reqRam && yourCpu === reqCpu && yourGpu === reqGpu && rtxOn) {
    console.log('You can play the game');
}else {
    console.log('You can`t play the game');
}

function toPower(number){
    return number*number;
}

console.log(toPower(2));
console.log(toPower(4));