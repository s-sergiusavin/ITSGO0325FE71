/**
 * Array methods
 */

const array = [1, 2, 3, '4', 5, 6, 7];

// array[0] = 100;
// array[4] = 5;
// array[10] = 11;

console.log(array)

/**
 * Add or remove elements in array
 */

array.push(5); // adaugam un element la finalul array-ului
console.log(array);
array.pop() // scoatem ultimul element de la finalul arrayului
console.log(array)
console.log(array.unshift('zero'));
console.log(array.shift());
console.log(array);

// lifo last in first out
// fifo first in first out

/**
 * Array iteration
 * pt navigare se foloseste termenul de maparea
 */

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// array.forEach( function() {})

// array.forEach( () => {})
// array.forEach( element => console.log(element));    

array.forEach(function (element) {
    console.log('E ' + element);
});

// .map() method => iterates trough an array and RETURNS this array

const newArray = array.map((element) => {
    return element + 1;
})

console.log(newArray);

/**
 * Returns the index of an array
 * .indexOf(0)
 */

console.log('Indexul elementului 3 este: ' + array.indexOf(3));
array[2] = 7;
console.log(array)
array[array.indexOf('4')] = 777;
console.log(array)
console.log(array.indexOf(-15)); // daca elementul nu exista, va returna -1 intotdeauna
console.log(array.indexOf('sadf')); // daca elementul nu exista, va returna -1 intotdeauna

/**
 * Copy array elements
 */

let myNum = 7;
let anotherNum = myNum;
myNum = 5;

console.log(myNum)
console.log(anotherNum)

let arrayCopy = array;
array[0] = 'zero';

console.log(array)
console.log(arrayCopy)

/**
 * .slice()
 * Copy portions of an array
 */

arrayCopy = array.slice(); // copiaza toate elementele 
arrayCopy = array.slice(2); // copiaza toate elementele de la pozitia specificata
array[0] = 111;
console.log('Array dupa slice ' + array);
console.log(arrayCopy)
arrayCopy = array.slice(0, 5); // copiaza de la indexul specificat (inclusiv) pana la cel de-al doilea (nu este inclus acesta)
console.log(arrayCopy);

/**
 * .splice()
 * cut portions of an array
 */

console.log('---Splice----')
console.log(array)

// let changedArray = array.splice(2) // decupeaza toate elementele unui array incepand cu pozitia specificata
// console.log(array)
// console.log(changedArray)

let changedArray = array.splice(2, 3) // decupeaza toate elementele unui array incepand cu indexul initial si NUMARUL DE ELEMENTE
console.log(array)
console.log(changedArray)

/**
 * .filter()
 * Filtering array elements
 * Returneaza UN NOU array cu elementele intiale care indeplinesc conditia
 * NU modifica arrayul initial
 */

console.log(array)
const lessThanThree = array.filter((element) => {
    return element < 3;
})

console.log(lessThanThree);

/**
 * .reverse()
 * Reverse array
 * MODIFICA arrayul initial
 */

array.reverse();
console.log(array);

/**
 * .concat()
 * Imbinarea array-urilor
 */

const concatArray = ['add', 'me'];
//  const newConcatenatedArray = array.concat(concatArray);
//  console.log(newConcatenatedArray)

console.log(array.concat(concatArray));
console.log(concatArray.concat(array));
console.log([1, 2, 3].concat(concatArray));

/**
 * .join()
 * Transform array into string
 */

const redeclaredArray = [1, 2, 3, 4, 5];
let stringFromArray = redeclaredArray.join(' 🥳 ');
console.log(stringFromArray)

/**
 * .reduce()
 * Reduce array
 * Ia un array si il transforma intr-o valoare
 */

const reduceArray = [1, 2, 3, 4];
const reducedValue = reduceArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
})

console.log(reduceArray)
console.log(reducedValue)

/**
 * .sort()
 * Sorting an array
 * MODIFICA arrayl original
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, 'asd', 'aac', 'sum'];
// console.log(arrayToSort.sort());

arrayToSort.sort((a, b) => {
    // return a - b;
    return b - a;
});

console.log(arrayToSort)

/**
 * .find()
 * Returneaza PRIMUL ELEMENT care indeplineste conditia
 */

let arrayToFind = [1, 2, 78, 9, 2, 45];

const value2 = arrayToFind.find(element => {
    return element === 2;
});

console.log(value2);

arrayToFind = [
    { name: 'Sergiu', city: 'Hong Kong' },
    { name: 'Alex', city: 'Singapore' },
    { name: 'Cipri', city: 'Lisabona' },
    { name: 'Raluca', city: 'Dubai' },
    { name: 'Sergiu', city: 'Bangkok' },
];

const foundElem = arrayToFind.find((element) => {
    return element.name === 'Sergiu';
})

const foundElement = arrayToFind.findLast(element => element.name === 'Sergiu')

console.log(foundElem)
console.log(foundElement)

// Pentru arrow functions
// Daca avem un singur parametru, parantezele rotunde POT sa lipseasca
// Daca se scrie pe o singura linie si este o singura expresie, parantezele acolade sunt optionale
// iar return-ul se face implicit

/**
 * .includes()
 * Verifica daca un element exista intr-un array
 */

let includedElem = arrayToSort.includes(2048);
console.log(includedElem)

/**
 * Objects
 */

const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age: age,
        gender // gender: gender
    }
}

const sergiu = createPerson('sergiu', 14, 'male')
const costel = createPerson('costel', 50, 'female')

console.log(sergiu)

/**
 * Creating objects using OBJECT LITERAL method
 */

const person = {
    name: 'Sergiu',
    lastName: 'Savin',
    age: 33,
    address: {
        city: 'Brasov',
        zip: 500
    },
    sayHi: function() {
        console.log(`${this.lastName} says hi`)
    },
    sayHiArrow: () => {
        console.log(`${this.lastName} says hi`)
    }
};

person.sayHi();
person.sayHiArrow();

person.lastName = 'Popescu';
person.sayHi()

/**
 * Clases
 */

const bycicle = {
    gear: 3,
    setGear: function(gear) {
        this.gear = gear;
    }
}

bycicle.gear = 14;

console.log(bycicle)

bycicle.setGear(25);
console.log(bycicle)

class Car {
    wheels = 4;

    constructor(model, maxSpeedKmh) {
        this.model = model;
        this.maxSpeed = maxSpeedKmh;
    }
}

const vw = new Car('vw', 150);
const porsche = new Car('prosche', 450);

vw.maxSpeed = 200;
vw.wheels = 100;

console.log(vw)
console.log(porsche)

const boy = {
    name: 'Sergiu',
    lastName: 'Savin',
    age: 33,
    address: {
        city: 'Brasov',
        zip: 500
    },
    sayHi: function () {
        console.log(`${this.lastName} says hi`)
    },
    sayHiArrow: () => {
        console.log(`${this.lastName} says hi`)
    }
};

const girl = {
    name: 'Alina',
    lastName: 'Popescu',
    age: 44,
    address: {
        city: 'Iasi',
        zip: 500
    },
}

girl.ocupation = 'teacher';
girl.sayHiGirl = boy.sayHi;

console.log(girl)

girl.sayHiGirl()



