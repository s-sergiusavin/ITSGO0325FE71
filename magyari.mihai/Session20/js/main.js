/**
 * Array methods
 */

const array = [1, 2, 3, `4`, 5, 6, 7];

// array[0]=100;
// array[4]=5;
// array[10]=11;

console.log(array);

/**
 * Add or remove elements in array
 */

array.push(5); //adaugam un element la finalul array-ului\
console.log(array);

array.pop() //scoatem ultimul element de la finalul array-ului
console.log(array);

array.unshift(`zero`); //adauga un element la inceputul array-ului
array.shift(); //scoate elementul de la inceputul arrayului
console.log(array);

// lifo - last in first out
// fifo - first in first out

/**
 * Array iteration
 * Pentru navigare se foloseste termenul de mapare
 */

// for (let i = 0; i<array.length; i++) {
//     console.log(array[i]);
// }


// array.forEach( function () {})
// array.forEach( () => {})
// array.forEach( element => console.log(element))


array.forEach(function (element) {
    console.log(`E ` + element)
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

console.log(`Indexul elementului 3 este: ` + array.indexOf(3));

array[2] = 7;
console.log(array);
array[array.indexOf(`4`)] = 777;
console.log(array);
console.log(array.indexOf(-15)); //daca elementul nu exista, va returna mereu -1
console.log(array.indexOf(`sad`)); //daca elementul nu exista, va returna mereu -1

/**
 * Copy array elements
 */

let myNum = 7;
let anotherNum = myNum;

myNum = 5;

console.log(myNum);
console.log(anotherNum);

let arrayCopy = array;
array[0] = `zero`;


console.log(array);
console.log(arrayCopy);

/**
 * .slice()
 * Copy portions of an array
 */

arrayCopy = array.slice(); //copiaza toate elementele
arrayCopy = array.slice(2); //copiaza toate elementele dupa pozitia specificata
array[0] = 111;
console.log(`Array dupa slice ` + array);
console.log(arrayCopy);

arrayCopy = array.slice(0, 4); //copiaza elementele de la index 0 la index 4 (4 nu este inclus) - copiaza de la indexul specificat (inclusiv) pana la cel de al doilea
console.log(arrayCopy);

/**
 * .splice()
 * cut portions of an array
 */

console.log(`--Splice--`);

console.log(array);

// let changedArray = array.splice(2); // decupeaza toate elementele unui array incepand cu pozitia specificata
// console.log(array);
// console.log(changedArray);

let changedArray = array.splice(2, 3) // decupeaza nr. de elemente specificate ale unui array incepand cu indexul initial si NUMARUL DE ELEMENTE
console.log(array);
console.log(changedArray);

/**
 * .filter()
 * Filtering array elements
 * Returneaza UN NOU array cu elementele initiale care indeplinesc conditia
 * NU modifica arrayul initial
 */

console.log(array);
const lessThanTree = array.filter((elementus) => {
    return elementus < 3;
})
console.log(lessThanTree);

console.log(array);
const moreThanTwo = array.filter((ceva) => {
    return ceva >2;
})
console.log(moreThanTwo);

/**
 * .reverse()
 * Reverse array
 * MODIFICA arrayul initial
 */

array.reverse()
console.log(array);

/**
 * .concat()
 * Imbinarea array-urilor
 */

const concatArray = [`add`, `me`];
// const newConcatenatedArray =  array.concat(concatArray);
// console.log(newConcatenatedArray);

console.log(array.concat(concatArray));
console.log(concatArray.concat(array));
console.log([1, 2, 3].concat(concatArray));

/**
 * .join()
 * Transforms an array into a string
 */

const redeclaredArray = [1, 2, 3, 4, 5];
let stringFromArray = redeclaredArray.join();
console.log(stringFromArray);

/**
 * .reduce
 * Reduce array
 * Ia un array si il transforma intr-o valoare
 */

const reduceArray = [1, 2, 3, 4];
const reducedValue = reduceArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}) //adunam 1+2+3+4

console.log(reduceArray);
console.log(reducedValue);


const valoriPreturi = [2,5,10];
const totalPreturi = valoriPreturi.reduce((aduna,astaDeAcum) => {
    return aduna+astaDeAcum
})

console.log(totalPreturi);

/**
 * .sort()
 * Sorting an array
 * MODIFICA arrayul original
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, `aac`, `asd`, `sum`];
// console.log(arrayToSort.sort());


arrayToSort.sort((a, b) => {
    return a - b;
    //return b-a;
});

console.log(arrayToSort);


/**
 * .find()
 * Returneaza PRIMUL element care indeplineste conditia
 */

let arrayToFind = [1, 2, 78, 9, 2, 45];

const value2 = arrayToFind.find(element => {
    return element === 2;
})

console.log(value2);

arrayToFind = [
    { name: `Sergiu`, city: `Hong Kong` },
    { name: `Alex`, city: `Singapore` },
    { name: `Cipri`, city: `Lisabona` },
    { name: `Raluca`, city: `Dubai` },
    { name: `Sergiu`, city: `Bangkok` },
]

const foundElem = arrayToFind.find((element) => {
    return element.name === `Sergiu`;
})

const foundElement = arrayToFind.findLast(element => element.name === `Sergiu`)

const foundCipri = arrayToFind.find(element=>element.name===`Cipri`)
const aloDubai = arrayToFind.find(element=>element.city===`Dubai`)

console.log(foundElem);
console.log(foundElement);
console.log(foundCipri);
console.log(aloDubai);

//Pentru arrow functions
//Daca avem un singur parametru, parantezele rotunde POT sa lipseasca 
//Daca se scrie pe o singura linie si este o singura expresie, parantezele acolade sunt optionale
//iar return-ul se face implicit

/**
 * .includes()
 * Verifica daca un element exista intr-un array
 */


let includedElem = arrayToSort.includes(1024); //includes(2048) - returneaza false
console.log(includedElem); //returneaza true



/**
 * Objects
 */

const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age: age,
        gender // gender:gender (e aceeasi chestie)
    }
}

const sergiu=createPerson(`Sergiu`, 14, `male`);
const costel=createPerson(`Costel`,50, `female`);

console.log(sergiu);
console.log(costel);


const createCar = (make,model,engine) => {
    return {
        make,
        model,
        engine
    }
}

const golf=createCar(`VW`,`Golf`,`TSI`);
console.log(golf);

/**
 * Creating objects using OBJECT LITERAL method
 */

const person = {
    name: `Sergiu`,
    lastName:`Savin`,
    age: 33,
    address: {
        city:`Brasov`,
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
person.sayHiArrow(); //nu functioneaza cu arrow function

person.lastName =`Popescu`;
person.sayHi();


/**
 * Classes
 */


const bycicle = {
    gear: 3,
    setGear: function (gear){
        this.gear=gear;
    } 
}

bycicle.gear = 14;

console.log(bycicle);

bycicle.setGear(25);
console.log(bycicle);



class Car {
    wheels =4;
    
    constructor(model, maxSpeedKmh) {
        this.model = model;
        this.maxSpeed = maxSpeedKmh;
    }
}

const vw =new Car(`vw`,150);
const porsche =new Car(`porsche`,450);

vw.maxSpeed=200;
vw.wheels=100;

console.log(vw);
console.log(porsche);

const boy = {
    name: `Sergiu`,
    lastName:`Savin`,
    age: 33,
    address: {
        city:`Brasov`,
        zip: 500
    },
    sayHi: function() {
        console.log(`${this.lastName} says hi`)
    },
    sayHiArrow: () => {
        console.log(`${this.lastName} says hi`)
    }
};

const girl = {
    name:`Alina`,
    lastName:`Popescu`,
    age: 44,
    address: {
        city:`Iasi`,
        zip: 500
    }
}

girl.occupation=`teacher`;
girl.sayHiGirl=boy.sayHi;

console.log(girl);

girl.sayHiGirl();