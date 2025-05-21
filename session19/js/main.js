function logStuff(stuff) {
    console.log(`Rezultatul este ${stuff}`);
}

logStuff(10);

let sum = 0;
function addToSum(number) {
    return sum += number;
}


addToSum(3);
logStuff(addToSum(5));

//sum = 13

let totalSum = addToSum(10);
addToSum(5);
logStuff(totalSum);
logStuff(sum);
//sum = 18


// const sumNumbers = function(number1, number2) 
// return number1 + number2;


const sumNumbers = (number1, number2) => {
    return number1 + number2;
}

let sumTwoNumbersValue = sumNumbers(5, 10);
console.log(sumTwoNumbersValue);

let sumNumbersStoredGlobally;
const sumTwoNumberAlternative = (num1, num2) => { 
    sumNumbersStoredGlobally = num1 + num2;
}

//sumTwoNumbersAlternative(3, 4);
// logStuff(sumNumbersStoredGlobally);

const verifyEquality = (number1, number2) => {
    if (number1 === number2) {
        return true;
    } else {
        return false;
    }
}

logStuff(verifyEquality(2, 2));
logStuff(verifyEquality(3, 2));

const verifyEqualitySimplified = (num1, num2) => {
    return num1 === num2;
}

logStuff(verifyEqualitySimplified(2, 2));
logStuff(verifyEqualitySimplified(3, 2));


const doubleValue = (doubleValue) => {
    logStuff('Sergiu')
//    return value * 2;
// tot ce declaram dupa return nu se va executa
}

logStuff(doubleValue(3));


const addOnlyOddValue = (val1, val2) => {
 if (val1 % 2 === 0 && val2 % 2 === 0) {
    return val1 + val2;
 }

 return 'numerele nu sunt pare';
}

logStuff(addOnlyOddValue(4, 6)); //10
logStuff(addOnlyOddValue(3, 6)); // numerele nu sunt pare

const greet = (name) => {
    console.log(`Hello ${name}!`);
}

greet();
greet('Sergiu');
greet(" ");
greet(null);
greet(57);

// Doua nr si sa il scadem pe cel mai mic din cel mai mare

const removeFromBiggest = (num1, num2) => {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

logStuff(removeFromBiggest(10, 5)); // 5
logStuff(removeFromBiggest(5, 10)); // 5


const verifyNumber = (num1) => {
 if (num1 > 10 && num1 < 50) {
    return 'da';
 } else {
    return 'nu';
 }
 }

logStuff(verifyNumber(90)); 
logStuff(verifyNumber(10.001));
logStuff(verifyNumber(10));


let testString = 'Test string';
let testNumber = 3;

let anotherString = testString;
let anotherNumber = testNumber;

console.log(anotherString);
console.log(anotherNumber);
console.log(testString);
console.log(testNumber);

anotherString = 'New string';
anotherNumber = 100;

console.log(anotherString);
console.log(anotherNumber);
console.log(testString);
console.log(testNumber);

const puppy = {
    name: 'Rex',
    age: 1,
    favouriteToys: ['Duck', 'Cat', 'Bone'],
    bark: function() {
        console.log('Ham!');
    },
    barkLoud() {
        console.log('HAAAAAM!');
    }
}


const anotherPuppy = puppy;

console.log(anotherPuppy);

anotherPuppy.name = 'Rexx';
console.log(anotherPuppy);
console.log(puppy);


puppy.bark();
anotherPuppy.bark();
anotherPuppy.barkLoud();

function nameDog(name) {
    return `Dog ${name}`;
}

const rex = nameDog('Rex');
console.log(rex);

const nameDogCopy = nameDog;

console.log(nameDogCopy)
console.log(nameDogCopy('Rexxxx'));

function addOne(value) {
    return value + 1;
}

function showValue(value, functieCallBack) {
    return functieCallBack(value);
    // similar return addOne(value), addOne(5) ==> 6
}

const totalValueCallBack = showValue(5, addOne);
console.log(totalValueCallBack); // 6


const menu = {
    burger: 'Big Mac',
    juice: 'Coca Cola',
    price: 35,
    'french-fries': 'No salt'
}

console.log(menu.burger)
console.log(menu['french-fries'])

const num3 = 3;
const letA = 'a';
let StringConcat = 'x';

stringConcat = stringConcat + num3;
stringConcat += letA;

console.log(stringConcat);

const firstWord = 'Primul';
const link = 'si';
const secondWord = 'al doilea';

const concatedString = firstWord + ' ' +  link + ' ' + secondWord;
console.log(concatedString);


const createString = (array) => {
let string = "";
for (let i = 0; i < array.lenght; i++) {
    string = string + array[i] + " ";
}
}

console.log(createdString([3, '5', 7, 2, 1])); 
console.log(createdString([2, '3425', 17, 22, 1])); 

const reverseArray = (array) => {
}

//**
// Smart home app */

let lightsValue = false;
let curtainsValue = false;

const toggleLights = () => {

lightsValue = !lightsValue;

if (lightsValue) {
    return 'Luminile au fost aprinse'
} else {
 return 'Luminile au fost stinse'
}    
}

const toggleCurtains = () => {

curtainsValue = !curtainsValue;

if (lightsValue) {
    return 'Draperiile au fost deschise'
} else {
 return 'Draperiile au fost inchise'
}    
}



// debugger; / opreste executia codului in developer tools
// F8 revine la normal, iese din procesul de debug
// F10 sare un pas
// F11 intra intr-o functie