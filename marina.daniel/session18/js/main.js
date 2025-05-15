/**
 * Scope
 */

let testLet = 'let-global';
const testConst = 'const-global';
var testVar = 'var-global';

// let & const cannot be redeclared in the same scope
// let testLet = 3;
// const testConst = 5;
// var testVar = 7;

// if (true) {
//     let testLet = 'if-let';
//     const testConst = 'if-const';
//     var testVar = 'if-var';

//     console.log(testLet)
//     console.log(testConst)
//     console.log(testVar)

//     if (true) {
//         console.log('Al doilea if -------')

//         let testLet = 'if2-let';
//         const testConst = 'if2-const';
//         var testVar = 'if2-var';

//         console.log(testLet)
//         console.log(testConst)
//         console.log(testVar)

//         console.log('Sfarsitul celui de-al doilea if -------')
//     }   

//     if (true) {
//         console.log('Al treilea if -------')

//         let testLet = 'if3-let';
//         const testConst = 'if3-const';
//         var testVar = 'if3-var';

//         console.log(testLet)
//         console.log(testConst)
//         console.log(testVar)

//         console.log('Sfarsitul celui de-al treilea if -------')
//     } 
// }

// console.log('----Dupa if----')
// console.log(testLet)
// console.log(testConst)
// console.log(testVar)

let outside = 'Outside';

if (true) {
    let outside = 'Inside'
    console.log(outside)
}

console.log(outside)

let globalVariable = 'unchanged';

function addTwo(number) {
    globalVariable = 'changed!!!';

    const total = number + 2;
}

console.log(globalVariable);

// addTwo(5)
// console.log(globalVariable)

let needMoney = true;

if (needMoney) {
    addTwo(3)
}

console.log(globalVariable);

if (needMoney) {
    let noAccessToThisVar = 'Nu vom avea acces la valoarea asta';
    console.log(noAccessToThisVar)
}

// console.log(noAccessToThisVar) // error: variable is not defined

/**
 * Hoisting mechanism
 * se aplica numai pt functiile declarate cu function
 */

showTimisoara();
function showTimisoara() {
    console.log('Timisoara')
}

showTimisoara();

// console.log(notHoistedConst) // error
const notHoistedConst = 'nu se aplica';

// console.log(notHoistedLet) //erorr
let notHoistedlet = 'nu se aplica';

// showCluj(); //error
const showCluj = () => {
    console.log('Cluj');
}

showCluj();

// showBrasov();
const showBrasov = function () {
    console.log("Brasov");
}

showBrasov()

// The return value of a function
// Valoarea returnata a unei functii

const addFive = (number) => {
    return number + 5;
}

console.log(addFive(10))
console.log(addFive(20))

const onePlusFive = addFive(1);
console.log(onePlusFive);

const changeEur = (value) => {
    const total = value * 5;

    console.log('Acest text va fi vizibil')

    return total;

    console.log('Orice cod aflat dupa return in interiorul unei functii, nu va fi executat');

    return 'totalul poate fi orice';
}

const fiveEur = changeEur(5)
console.log(fiveEur)
console.log(changeEur(10))

// Particularities of arrow functions
// Daca am un singur parametru, parantezele rotunde sunt optionale
// Daca avem o singura expresie, parantezele acolade pot sa dispara, iar returnul este implicit

// const changeUsd = (value) => {
//     return value * 4.5;
// }

const changeUsd = value => value * 4.5;

console.log(changeUsd(10))

const addTwoNumbers = (val1, val2) => val1 + val2;

// const addTwoNumbers = (val1, val2) => {
//     return val1 + val2;
// }

console.log(addTwoNumbers(1, 2));

/**
 * Function with default params
 * Parametrii default functioneaza la fel pt toate tipurile de functii
 */

const makeBurger = (ingredient = 'porc') => {

    if (ingredient === undefined) {
        ingredient = 'pui';
    }

    if (!ingredient) {
        ingredient = 'oaie';
    }

    console.log('Burgerul meu preferat este cu ' + ingredient);
}

makeBurger('vita');
makeBurger();
makeBurger('rata');
makeBurger('wagyu');
makeBurger('');

// const rateMovie = (movie) => {
//     if (movie === 'Home Alone') {
//         console.log('Filmul ' + movie + ' e de nota 10')
//     } else if (movie === 'Pulp Fiction') {
//         console.log('Filmul ' + movie + ' e de nota 9');
//     } else if (movie === 'Avatar') {
//         console.log('Filmul ' + movie + ' e de nota 8');
//     } else if (movie === 'Avangers') {
//         console.log('Filmul ' + movie + ' e de nota 7');
//     } else if (movie === 'Justice League') {
//         console.log('Filmul ' + movie + ' e de nota 6');
//     } else if (movie === 'Jumanji') {
//         console.log('Filmul ' + movie + ' e de nota 5');
//     } else {
//         console.log('Te rugam sa introduci numele filmului')
//     }
// }

const rateMovie = (movie) => {
    switch (movie) {
        case 'Home Alone':
            console.log('Filmul ' + movie + ' e de nota 10')
            break;
        case 'Pulp Fiction':
            console.log('Filmul ' + movie + ' e de nota 9')
            break;
        case 'Avatar':
            console.log('Filmul ' + movie + ' e de nota 8')
            break;
        case 'Avangers':
            console.log('Filmul ' + movie + ' e de nota 7')
            break;
        case 'Justice League':
            console.log('Filmul ' + movie + ' e de nota 6')
            break;
        case 'Jumanji':
            console.log('Filmul ' + movie + ' e de nota 5')
            break;
        case undefined:
            console.log('Te rugam, sa introduci numele filmului');
            break   
        default:
            console.log('Filmul nu exista in baza noastra de date');
    }
}

rateMovie('Home Alone') // Filmul e de nota 10
rateMovie('Pulp Fiction') // Filmul e de nota 9
rateMovie('Avatar') // Filmul e de nota 8
rateMovie('Avangers') // Filmul e de nota 7
rateMovie('Justice League') // Filmul e de nota 6
rateMovie('Jumanji') // Filmul e de nota 6
rateMovie() // Te rugam sa introduci numele filmului
rateMovie('Titanic');

// Object with function as a property (methods)

const complexObject = {
    name: 'Sergiu',
    address: {
        city: "Brasov",
        zip: 500500,
        additionalInfo: ['interfon', 'etaj', 'apartament']
    },
    favouriteMovies: ['Home Alone', 'Pulp Fiction', 'Avatar'],
    hasPassport: true,
    hobbies: ['travel', 'eat', 'drink'],
    watchMovie: function (movie) {
        console.log('Uita-te la ' + movie);
    },
    sleep: () => {
        console.log('Du-te la culcare');
    },
    work() {
        console.log('Mergi la munca')
    },
    age: 19
}

console.log(complexObject.name)
console.log(complexObject.address.city)
console.log(complexObject.address.additionalInfo[2])
console.log(complexObject.favouriteMovies[2])
complexObject.watchMovie('Harry Potter');

console.log(console)

complexObject.watchMovie(complexObject.favouriteMovies[0])
complexObject.sleep();
complexObject.work();

// Flip a coin

let valoriMoneda = ['cap', 'stema'];

console.log(valoriMoneda[0])
console.log(valoriMoneda[1])
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(Math.random()));

if (valoriMoneda[Math.round(Math.random())] === 'cap') {
    console.log('A iesit cap') 
} else {
    console.log('A iesit stema')
}

// Palindrome game

const palindrome = [1, 9, 7, 8, 7, 9, 1];
const checkPalindrome = (array) => {
    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return 'Arrayul nu este palindrom'
            // console.log('Arrayul este palindrom')
        }
    }

    return 'Arrayul este palindrom'
    // console.log('Arrayul  nu este palindrom')
}

console.log(checkPalindrome(palindrome));
// checkPalindrome(palindrome)


function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));








