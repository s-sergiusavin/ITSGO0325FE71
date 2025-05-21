/**
 * Array methods
 */

const myArray = [1, 2, 3, "4", 5, 6, 7];

//array[0] = 100;
//array[4] = 5; // mai adauga un element, dar nu e ok sa adaugam asa
//array[10] = 11; // e gresit

console.log(myArray);

/**
 * Add or remove elements in array
 */

myArray.push(5); // adaugam un element la finalul array-ului
console.log(myArray);
myArray.pop(); // scoate ultimul element de la finalul array-ului
console.log(myArray);
myArray.unshift(myArray.unshift("zero"));
console.log(myArray.shift());
console.log(myArray);

// lifo last in first out
// fifo first in first out

/**
 * Array iteration
 * pt navigare se folosesc termenul de
 */

// for (let i = 0; < i < array.lenght; i++) {
//     console.log(array[i]);
// }

// array.forEach( function() {})

// array.forEach ( () ==> {})

// array.forEach (element => console.log(element));

myArray.forEach(function (element) {
  console.log("E " + element);
});

// .map() method => interates through an array and RETURNS this array

const newArray = myArray.map((element) => {
  return element + 1;
});

console.log(newArray);

/**
 * Returns the index of an array
 * .indexOf (0)
 */

console.log("Indexul elementului 3 este: " + myArray.indexOf(3));
myArray[2] = 7;
console.log(myArray);
myArray[myArray.indexOf(4)] = 777;
console.log(myArray);
console.log(myArray.indexOf(-15)); // daca elementul nu exista va returna -1 intotdeauna
console.log(myArray.indexOf("sadf")); // daca elementul nu exista va returna -1 intotdeauna

//**
// Copy array elements */

let myNum = 7;
let anotherNum = myNum;
myNum = 5;

console.log(myNum);
console.log(anotherNum);

let myArrayCopy = myArray;
myArray[0] = `zero`;

console.log(myArray);
console.log(myArrayCopy);

/**
 * .slice()
 * copy portion of an array
 */

myArrayCopy = myArray.slice(2); // copiaza toate elementele de la pozitia specificata
myArrayCopy = myArray.slice(); // copiaza toate elementele
myArray[0] = 111;
console.log("Array dupa slice" + myArray);
console.log(myArrayCopy);
myArrayCopy = myArray.slice(0, 5); // copiaza de la indexul specificat inclusiv pana la  cel de al doilea (nu este inclus)
console.log(myArrayCopy);

/***
 * .splice()
 * cut portions of an array
 */

console.log("---Splice---");
console.log(myArray);

// let changedArray = myArray.spliced(2) //decupeaza toate elementele unui array incepand cu pozitia indexului
// console.log(myArray)
// console.log(changedmyArray)

let changedArray = myArray.splice(2, 3); // decupeaza toate elementele unui array incepand cu indexul initial si nr de elemente
console.log(myArray);
console.log(changedArray);

/**
 *  /filter ()
 *  Flitering aray elements
 *  Returneaza un nou array cu elementele initiale care indeplinesc conditia
 * NU modifica array ul initial
 */

console.log(myArray);
const lessThanThree = myArray.filter((element) => {
  return element < 3;
});

console.log(lessThanThree);

/**
 * .reverse()
 * Reverse array
 * MODIFICA arrayul initial
 */

myArray.reverse();
console.log(myArray);

/**
 * concat ()
 * imbinarea array-urilor
 */

// const concatmyArray = ['add', 'me'];
// const newConcatenatedArray = myArray.concat(concatmyArray);
// console.log(newConcatenatedArray)

// console.log(myArray.concat(concatmyArray));
// console.log(concatmyArray.concat(myArray));
// console.log([1, 2, 3].concat(concatmyArray));

/** .join()
 *  transforma array into string
 */

const redeclaredmyArray = [1, 2, 3, 4, 5];
let stringFrommyArray = redeclaredmyArray.join(" ");
console.log(stringFrommyArray);

/**
 * .reduce()
 * Reduce array
 * Ia un array si il transforma intr-o valoare
 */

const reducemyArray = [1, 2, 3, 4];
const reducedmyArray = reducemyArray.reduce((accumulator, currentValue) => {
  return (accumulator = currentValue);
});

console.log(reducedmyArray);

/**
 * .sort()
 * Sorting an array
 * modifica array-ul original
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4];
// console.log(arrayToSort.sort()) // sortare alfa numerica - ia doar primul element

arrayToSort.sort((a, b) => {
  return a - b;
});

console.log(arrayToSort);

/**
 * .find()
 * Returneaza PRIMUL ELEMENT care indeplineste conditia
 */

let arrayToFind = [1, 2, 78, 9, 2, 45];

const value2 = arrayToFind.find((element) => {
  return element === 2;
});

console.log(value2);

arrayToFind = [
  { name: "Alexandra", city: "Hong Kong" },
  { name: "Marina", city: "Lisabona" },
  { name: "Teodora", city: "Dubai" },
  { name: "Irina", city: "Singapore" },
  { name: "Andreea", city: "Bangkok" },
];

const foundElem = arrayToFind.find((element) => {
  return element.name === "Alexandra";
});

const foundElement = arrayToFind.findLast(
  (element) => element.name === "Alexandra"
);

console.log(foundElem);
console.log(foundElement);

// Pentru arrow functions
// Daca avem un singur parametru, parantezele rotunde POT sa lipseasca
// Daca se scrie pe o singura linie si este o singura expresie, parantezele acolade sunt optionale
// iar return-ul se face implicit

/**
 * .includes ()
 * verifica daca un element exista intr-un array
 */

let includeElem = arrayToSort.includes(1024);
console.log(includeElem); // true

/**
 * Objects
 */

const createPerson = (name, age, gender) => {
  return {
    firstName: name,
    age: age,
    gender, // gender: gender
  };
};

const sergiu = createPerson("Sergiu", 14, "male");
const costel = createPerson("Costel", 78, "female");

console.log(sergiu);

/**
 * Creating objects using OBJECT LITERAL method
 */

const person = {
  nume: "Alexandra",
  lastName: "Predoiu",
  age: 28,
  address: {
    city: "Brasov",
    zip: 500,
  },
  sayHi: function () {
    console.log(`${this.lastName} says hi`);
  },
  sayHiArrow: () => {
    console.log(`${this.lastName} says hi`);
  },
};

person.sayHi();
person.sayHiArrow();

person.lastName = "Preda";

person.sayHi();

/**
 * Clases
 */

const bycicle = {
  gear: 3,
  setGear: function (gear) {
    this.gear = gear;
  },
};

bycicle.gear = 14;

console.log(bycicle);

bycicle.setGear(25);
console.log(bycicle);

class Car {
  wheels = 4;

  constructor(model, maxSpeedKmh) {
    this.model = model;
    this.maxSpeed = maxSpeedKmh;
  }
}


const vw = new Car('vw', 150);
const porsche = new Car('porsche', 450);


vw.maxSpeed = 200;
vw.wheel = 100;

console.log(vw)
console.log(porsche)


const boy = {
  nume: "Alexandra",
  lastName: "Predoiu",
  age: 28,
  address: {
    city: "Brasov",
    zip: 500,
  },
  sayHi: function () {
    console.log(`${this.lastName} says hi`);
  },
  sayHiArrow: () => {
    console.log(`${this.lastName} says hi`);
  },
};

const girl = {
    name: 'Alina',
    lastName: 'Popescu',
    age: 44,
    address: {
        city: 'iasi',
        zip: 500
    }
}

girl.occupation = 'teacher';
girl.sayHiGirl = girl.sayHi;

console.log(girl)


girl.sayHiGirl()