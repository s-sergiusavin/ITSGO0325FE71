function logStuff(stuff) {
    console.log(`Rezultatul este ${stuff}`)
}

logStuff(10);

let sum = 0;

function addToSum(number) {
    return sum += number;
}

addToSum(3);
console.log(sum);
logStuff(addToSum(10));
console.log(sum);

//sum = 13;

let totalSum = addToSum(10);

console.log(totalSum);
console.log(sum);

addToSum(5);

console.log(sum);

logStuff(totalSum);
logStuff(sum);


// const sumNumbers = function(number1, number2) {
//     return number1 + number2;
// }

const sumNumbers = (number1, number2) => {
    return number1 + number2;
}


console.log(sumNumbers(2, 2));

let sumTwoNumbersValue = sumNumbers(5, 10);
console.log(sumTwoNumbersValue);

let sumNumbersStoredGlobally;

console.log(sumNumbersStoredGlobally);

const sumTwoNumbersAlternative = (num1, num2) => {
    sumNumbersStoredGlobally = num1 + num2;
}
sumTwoNumbersAlternative(3, 4);
console.log(sumNumbersStoredGlobally);
logStuff(sumNumbersStoredGlobally);



const verifyEquality = (num1, num2) => {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

logStuff(verifyEquality(2, 2));
logStuff(verifyEquality(2, 3));

const verifyEqualitySimplified = (num1, num2) => {
    return num1 === num2;
}

logStuff(verifyEquality(2, 2));
logStuff(verifyEquality(2, 3));


//Exercitiul meu

const displayTheBiggerNumber = (number1, number2) => {
    if (number1 > number2) {
        console.log(`${number1} este mai mare decat ${number2}`)
    } else {
        console.log(`${number1} este mai mic decat ${number2}`)
    }
    if (number1 === number2) {
        console.log(`${number1} este egal cu ${number2}`)
    }
}

displayTheBiggerNumber(10, 20);
displayTheBiggerNumber(10, 5);
displayTheBiggerNumber(10, 10);

const compareLenght = (array1, array2) => {
    if (array1.length > array2.length) {
        console.log(`${array1} are mai multe elemente decat ${array2}`)
    } else if (array1.length === array2.length) {
        console.log(`Cele doua array-uri au un numar egal de elemente`)
    }else {
        console.log(`${array1} are mai putine elemente decat ${array2}`)
    }

}

compareLenght([1,2,3,4],[1,2,3,4,5]);
compareLenght([1,2,3],[4,3,2]);
compareLenght([1,2,3,4],[1,2]);

//xx



const doubleValue = (value) => {
    logStuff(`Sergiu`);
    return value * 2;
    logStuff(`Sergiu`); // nu se executa
    return `Sergiu`; //tot ce este dupa return nu va fi executat
}

logStuff(doubleValue(3));

const addOnlyEvenValues = (val1, val2) => {
    if (val1 % 2 === 0 && val2 % 2 === 0) {
        return val1 + val2;

    }
    return `Numerele nu sunt pare`;
}

logStuff(addOnlyEvenValues(4, 6)); //10
logStuff(addOnlyEvenValues(3, 6));//Numerele nu sunt pare


const greet = (name = `John Smith`) => {
    console.log(`Salut, ${name}!`)
}

greet();
greet(`Mihai`);
greet(` `);
greet(`#@%!%^@^`);
greet(57);
greet(null);


//scadem nr. mai mic din nr. mai mare
const removeFromBigger = (num1, num2) => {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
};

logStuff(removeFromBigger(10, 2))
logStuff(removeFromBigger(1, 2))


//verificam daca un numar este intre 10-50
const verifyNumber = (number) => {
    if (number > 10 && number < 50) {
        return `da`;
    } else {
        return `nu`;
    }
}

logStuff(verifyNumber(90));//nu
logStuff(verifyNumber(10.001)); //da
logStuff(verifyNumber(10)); //nu

//--

let testString = `Test string`;
let testNumber = 3;

let anotherString = testString;
let anotherNumber = testNumber;

// console.log(anotherString);
// console.log(anotherNumber);
// console.log(testString);
// console.log(testNumber);

anotherString = `New String`;
anotherNumber = 100;

console.log(anotherString);
console.log(anotherNumber);
console.log(testString);
console.log(testNumber);


//--
const puppy = {
    name: `Rex`,
    age: 1,
    favouriteToys: [`Duck`, `Cat`, `Bone`],
    bark: function () {
        console.log(`Ham`)
    },
    barkLoud() {
        console.log(`HAM!!!!`);
    }
}

const anotherPuppy = puppy;

console.log(anotherPuppy);

anotherPuppy.name = `Rexx`;
console.log(puppy);
console.log(anotherPuppy);

puppy.bark();
anotherPuppy.bark();
anotherPuppy.barkLoud();

function nameDog(name) {
    return `Dog ${name}`;
}

const rex = nameDog(`Rex`);
console.log(rex);

const nameDogCopy = nameDog;
console.log(nameDogCopy);
console.log(nameDogCopy(`Azorel`));

//--

function addOne(value) {
    return value + 1;
}

function showValue(value, functieCallback) {
    return functieCallback(value);
    //similar: return addOne(value), addOne(5) => 6
}

const totalValueCallback = showValue(5, addOne);
console.log(totalValueCallback);

//--

const menu = {
    burger: `Big Mac`,
    juice: `Cola`,
    size: `Big`,
    price: 35,
    'french-fries': `No salt`
}

console.log(menu.burger);
console.log(menu['french-fries']);


//concatenare

const num3 = 3;
const letA = `a`;
let stringConcat = `x`;

stringConcat = stringConcat + num3;
console.log(stringConcat);

stringConcat += letA;
console.log(stringConcat);



const firstWord = `Primul`;
const link = `si`;
const secondWord = `al doilea`;
const concatedString = firstWord + ` ` + link + ` ` + secondWord;
console.log(concatedString.toUpperCase());

//-

const createString = (array) => {
    let string = ``;

    for (let i = 0; i < array.length; i++) {
        string = string + array[i] + ' '
    }

    return string;
}

console.log(createString([3, `5`, 7, 2, 1])); //35721
console.log(createString([2, `3245`, 17, 22, 1])); //2342517221

//--

const reverseArray = (array) => {
    let newArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray

}

console.log(reverseArray([1, 2, 3, 4])); // => 4,3,2,1


/**
 * Smart home app
 */

let lightsValue = false;
let acValue = false;
let curtainsValue = false;
let windowsValue = false;

const toggleLights = () => {
    // if (lightsValue === true) {
    //     lightsValue = false;
    // } else {
    //     lightsValue = true;
    // }

    lightsValue = !lightsValue;

    if (lightsValue) {
        return 'Luminile au fost aprinse'
    } else {
        return 'Luminile au fost stinse'
    }
}


const toggleAc = () => {

    acValue = !acValue;

    if (acValue) {
        return 'AC a fost pornit'
    } else {
        return 'AC a fost oprit'
    }
}

const toggleCurtains = () => {
    curtainsValue = !curtainsValue;

    if (curtainsValue) {
        return 'Draperiile au fost deschise'
    } else {
        return 'Draperiile au fost inchise'
    }
}

const toggleWindows = () => {
    windowsValue = !windowsValue;

    if (windowsValue) {
        return 'Ferestrele au fost deschise'
    } else {
        return 'Ferestrele au fost inchise'
    }
}

const smoke = () => {
    if (!curtainsValue) {
        toggleCurtains()
    }

    if (!windowsValue) {
        toggleWindows()
    }

    if (acValue) {
        toggleAc()
    }

    console.log('Smoking')

    if ('Winter') {
        toggleWindows()
        toggleCurtains()
        toggleAc()
    }
}

console.log(toggleLights())
console.log(toggleLights())
console.log(toggleLights())
smoke()


// debugger; // opreste executia codului in developer tools
// F8 revine la normal, iese din procesul de debug
// F10 sare un pas
// F11 intra intr-o functie


/**
 * Win the football game app
 */

let weAreLeading = false;
let theyAreAttacking = false;


const checkScore =() => {
    if (weAreLeading){
        return `We are winning the game`
    }else{
        return `We are losing the game`
    }
}

console.log(checkScore())

const seeTheirReaction = () => {
    if(theyAreAttacking){
        return `They are attacking`
    }else{
        return`They are defending`
    }
}

console.log(seeTheirReaction())

const makeASub = () => {
    if(weAreLeading && theyAreAttacking) {
        return `We need to put on a defender`
    }else{
        return `We need to put on a striker`
    }
}

console.log(makeASub());