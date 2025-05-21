function logStuff(stuff) {
    console.log(`Rezultatul este ${stuff}`);
}

logStuff(10);

let sum = 0;
function addToSum(number) {
    return sum += number;
}

addToSum(3)
logStuff(addToSum(10));

// sum = 13;
let totalSum = addToSum(10);
addToSum(5); // apeleaza functia
logStuff(totalSum); // vedem ce am facut cu valoarea
logStuff(sum); //vedem totalul

// const sumNumbers = function (number1, number2) {
//    return number1 + number2;
// }

const sumNumbers = (number1, number2) => {
    return number1 + number2;
}

let sumTwoNumbersValue = sumNumbers(5, 10);
console.log(sumTwoNumbersValue);

let sumNumbersStoredGlobally;
const sumTwoNumbersAlternative = (num1, num2) => {
    sumTwoNumbersGlobally = num1 + num2;
}

sumTwoNumbersAlternative(3, 4);
logStuff(sumNumbersStoredGlobally);

const verifyEquality = (num1, num2) => {
    if (num1 === num2) {
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

const doubleValue = (value) => {
    logStuff('Stefania');
    return value * 2;
    logStuff('Stefania'); // tot ce e dupa return, nu se executa
    return 'Stefania'; //nu se executa
}

logStuff(doubleValue(3));

const addOnlyOddValue = (vall, val2) => {
    if (vall % 2 === 0 && val2 % 2 === 0) {
        return vall + val2;
    }
    return 'numerele nu sunt pare';
}

logStuff(addOnlyOddValue(4, 6)); //10
logStuff(addOnlyOddValue(3, 6)); //numerele nu sunt pare

const greet = (name = 'John Smith') => {
    console.log(`salut, ${name}!`)
}

greet();
greet('Mihai');
greet(' ');
greet(' #$%^&');
greet('57');

const removeFromBiggest = (num1, num2) => {
    if (num1 >= num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
}

logStuff(removeFromBiggest(10, 2));
logStuff(removeFromBiggest(1, 2));
logStuff(removeFromBiggest(15, 7));
logStuff(removeFromBiggest(-5, -3));

const verifyNumber = (num1) => {
    if (num1 > 10 && num1 < 50) {
        return 'da';
    } else {
        return 'nu';
    }
}

logStuff(verifyNumber(90)); //nu
logStuff(verifyNumber(10.001)); //da
logStuff(verifyNumber(10)); //nu

let testString = 'dog';
let testNumber = 100;

//console.log(anotherString);
//console.log(anotherNumber);
//console.log(testString);
//console.log(testNumber);

let anotherString = 'new string';
let anotherNumber = 100;

console.log(anotherString)
console.log(anotherNumber)
console.log(testString)
console.log(testNumber)

const puppy = {
    name: 'Rex',
    age: 1,
    favouritesToys: ['Duck', 'cat', 'bone'],
    bark: function () {
        console.log('ham')
    },
    barkLoud() {
        console.log('ham!!!')
    }
}

const anotherPuppy = puppy;

console.log(anotherPuppy)

anotherPuppy.name = 'rexx';
console.log(puppy)
console.log(anotherPuppy)

puppy.bark();
anotherPuppy.bark();
anotherPuppy.barkLoud();

function nameDog(name) {
    return `dog ${name}`;
}

const rex = nameDog('Rex');
console.log(rex);

const nameDogCopy = nameDog;

console.log(nameDogCopy)
console.log(nameDogCopy('Azorel'))

function addOne(value) {
    return value + 1;
}

function showValue(value, functieCallBack) {
    return functieCallBack(value);
    // similar return addOne(value), addOne (5) => 6
}

const totalValueCallBack = showValue(5, addOne);
console.log(totalValueCallBack)

const menu = {
    burger: 'big mac',
    juice: 'cola',
    size: 'big',
    price: 35,
    'french-fries': 'no salt'
}

console.log(menu.burger)
console.log(menu['french-fries'])

const num3 = 3;
const letA = 'a';
let stringConcat = 'x';

stringConcat = stringConcat + num3;
stringConcat += letA;

console.log(stringConcat);

const firstWord = 'primul';
const link = 'si';
const secondWord = 'al doilea'
const concatedString = firstWord + ' ' + link + ' ' + secondWord;
console.log(concatedString.toUpperCase());


const createString = (array) => {
    let string = '';

    for (let i = 0; i < array.length; i++) {
        string = string + array[i] + ' '
    }

    return string;
}

console.log(createString([3, '5', 7, 2, 1])); // 35721
console.log(createString([2, '3425', 17, 22, 1])); // 2342517221


const reverseArray = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray
}

console.log(reverseArray([1, 2, 3, 4]));


/**
 * Smart Home app
 */

let lightValue = false;
let acValue = false;
let curtainsValue = false;

const toggleAc = () => {

acValue = !acValue;
if (acValue) {
    return 'AC a fost aprinse'
} else {
    return 'AC a fost stinse'
}
}

console.log(toggleLights())
console.log(toggleLights())
console.log(toggleLights())
