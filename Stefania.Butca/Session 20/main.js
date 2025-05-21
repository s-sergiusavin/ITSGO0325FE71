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

array.push(5) // adaugam un element la finalul array-ului

console.log(array);
array.pop() // scoatem ultimul element de la finalul array-ului
console.log(array)
array.unshift('zero'); // adaugam la inceput de array
array.shift(); // scoatem primul element de la inceput
console.log(array)

// lifo - last in first out
// fifo - first in first out

/**
 * array iteration
 * pentru navigare se foloseste termenul de mapare
 */

//for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
//}

// array.forEach(function(){})
// array.forEach ( () => {})

array.forEach(function (element) {
    console.log(element)
});

// .map()method => itirates through an array and RETURNS this array

const newArray = array.map((element) => {
    return element + 1;
})

console.log(newArray)

/**
 * returns the index of an array
 * .indexOf()
 */

console.log('indexul elementului 3 este: ' + array.indexOf(3));
array[2] = 7;
console.log(array);
array[array.indexOf('4')] = 777;
console.log(array);
console.log(array.indexOf(-15)); // daca elementul nu exista va returna -1 intotdeauna


/**
 * copy array elements
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
 * copy portions of an array
 */

arrayCopy = array.slice(2); // copiaza toate elementele de la pozitia specificata
array[0] = 111;
console.log('array dupa slice ' + array);
console.log(arrayCopy)
arrayCopy = array.slice(0, 5); // copiaza de la indexul specificat inclusiv pana la cel de al doilea (nu este inclus)
console.log(arrayCopy)

/**
 * .splice()
 * cut portions of an array
 */

console.log('---Splice---');
console.log(array)

//let changedArray = array.splice(2) // decupeaza toate elementele unui array incepand cu pozitia specificata
//console.log(array)
//console.log(changedArray)

let changedArray = array.splice(2, 3) // decupeaza toate elementele unui array incepand cu indexul initial si numarul de elemente
console.log(array)
console.log(changedArray)