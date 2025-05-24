/** 
 * Array methods
 * 
 */

const array = [1, 2, 3, '4', 5, 6, 7];

// array[0]= 100;
// array[4] = 5;
// array[10] = 11;

console.log(array)

/**
 * Add or remove elements in array
 */

array.push(5) // adaugam un element la finalul array-ului
console.log(array);
array.pop() // scoatem ultimul element de la finalul arrayului
console.log(array);
array.unshift('zero');
array.shift();
console.log(array);


// lifo - last in first out
// filo - first in last out


/**
 * Array iteration
 * ptr navigare se foloseste termenul de mapare
 */

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// array.forEach( () => {} )

// array.forEach( element => console.log(element));

array.forEach(function (element) {
    console.log('E' + element);
});

// .map() method => iterates through an array and RETURNS this array

const newArray = array.map((element) => {
    return element + 1;
})

console.log(newArray);

/**
 * Returns the index of an array
 * .indexOf(0)
 */

console.log('Indexul elementului 3 este:' + array.indexOf(3));
array[2] = 7;
console.log(array);
array[array.indexOf('4')] = 777;
console.log(array);
console.log(array.indexOf(-15)); // daca elementul nu exista va returna -1 intotdeauna
console.log(array.indexOf('sadf')); // daca elementul nu exista va returna -1 intotdeauna

/**
 * Copy array elements
 */

let myNum = 7;
let anotherNum = myNum;
myNum = 5;

console.log(myNum)
console.log(anotherNum)

let arrayCoppy = array;
console.log(array);
console.log(arrayCoppy);


/**
 * .slice()
 * Copy portions of an array
 */

arrayCoppy = array.slice(2); // copiaza toate elementele de la pozitia specificata
array[0] = 111;
console.log('Array dupa slice ' + array);
console.log(0);
arrayCoppy = array.slice(0, 5); // copiza de la indexul specificat pana la cel de-al doilea (nu este inclus)
console.log(arrayCoppy);

/**
 * .splice
 * cut portions of an array
 */

console.log('----Splice------')
console.log(array);

// let changedArray = array.splice(2) // decupeaza toate elementele unui array incepand cu pozitia specificata
// console.log(array);
// console.log(changedArray);


let changedArray = array.splice(2, 3)
console.log(array)
console.log(changedArray)


/**
 * .filter()
 * filtering array elements
 * Returneaza UN NOU array cu elementele initiale care indeplinesc conditia
 * NU Modifica arrayul initials
 */

console.log(array)
const lessThree = array.filter((element) => {
    return element < 3;
})

console.log(lessThree);

/**
 * .reverse()
 * Reverse array
 * MODIFICA Arrayul initial
 */

array.reverse();
console.log(array);


/**
 * concat()
 * Imbinarea array-urilor
 */

const concatArray = ['add', 'me'];
// const newConcatenatedArray = array.concat(concatArray);
// console.log(newConcatenatedArray)

console.log(array.concat(concatArray))
console.log(concatArray.concat(array))
console.log([1, 2, 3].concat(concatArray))


/**
 *  .join()
 * Transform array into string
 */

const redeclaredArray = [1, 2, 3, 4, 5];
let stringFromArray = redeclaredArray.join(' ');
console.log(stringFromArray)


/**
 * De interviu
 * .reduce()
 * Reduce array
 * Ia un array si il transforma intr-o valoare
 */

const reduceArray = [1, 2, 3, 4];
const reducedValue = reduceArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(reduceArray)
console.log(reducedValue)


/**
 * .sort()
 * Sortinf an array
 * MODIFICA Array-ul original
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11, 11.4];
// console.log(arrayToSort.sort());

arrayToSort.sort((a, b) => {
    return a - b;
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

arrayToFind = {
    { }
}