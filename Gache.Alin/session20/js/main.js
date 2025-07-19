/**
 * Array methods
 */

const array = [1, 2, 3, "4", 5, 6, 7];

// array[0] = 100;
// array[4] = 5;
// array[10] = 11;

console.log(array);

/**
 * Add or remove elements in array
 */

array.push(5); // adaugam un element la finalul array-ului
console.log(array);

array.pop(); // scoate ultimul element de la finalul array-ului
console.log(array);

// array.unshift('zero'); // adaugam un element la inceputul array-ului
console.log(array);
console.log(array.unshift("zero")); // afiseaza si dimensiunea array-ului
console.log(array.shift()); //afiseaza elementul sters

// array.shift() //scoate primul element din array
console.log(array);

// lifo last in first out
// fifo first in first out

/**
 * Array iteration
 * Pentru navigare se foloseste termenul de mapare
 */

// for(let i = 0; i <array.length; i++){
//     console.log(array[i]);
// }

// array.forEach(function(){})

// array.forEach(()=>{})

// array.forEach((element) => {
//   console.log(element);
// });

array.forEach(function (element) {
  console.log(`E ${element}`);
});

//  .map() method => iterates trough an array and RETURNS this array

const newArray = array.map((element) => {
  return element + 1;
});

console.log(newArray);

/**
 * Returns the index of an array
 * .indexOf
 * de facut log la indexul tuturor elementelor dintr-un array
 */
console.log("(======AICI(======");
array.map((i) => {
  console.log(array.indexOf(i));
});
console.log("(======AICI(======");

console.log(`Indexul elementului 3 este: ${array.indexOf(3)}`);
array[2] = 7;
console.log(array);
array[array.indexOf("4")] = 777;
console.log(array);
// Daca elementul nu exista, returneaza -1 intodeauna
console.log(array.indexOf(-15));
console.log(array.indexOf("sda"));

/**
 * Copy array elements
 */

let myNum = 7;
let anotherNum = myNum;
myNum = 5;

console.log(myNum);
console.log(anotherNum);

let arrayCopy = array;
array[0] = 0;

console.log(array);
console.log(arrayCopy);

/**
 *  .slice()
 * Copy portions of an array
 */
// arrayCopy = array.slice(); // copiaza toate elementele
arrayCopy = array.slice(2); //.slice(2) copiaza elementele de la pozitia specificata
array[0] = 111;
console.log(`Array dupa slice ${array}`);
console.log(arrayCopy);
arrayCopy = array.slice(0, 5); //copiaza de la indexul specificat (inclusiv) pana la cel de-al doilea(nu este inclus)
console.log(arrayCopy);

/**
 * .splice()
 * cut
 */

console.log(`=====Slice=====`);
console.log(array);

// let changedArray=array.splice(2) // decupeaza toate elementele unui array incepand cu pozitia specificata
// console.log(array);
// console.log(changedArray);

let changedArray = array.splice(2, 3); // decupeaza toate elementele unui array incepand cu indexul initial si NR DE ELEMENTE
console.log(array);
console.log(changedArray);

/**
 * .filter()
 * Filtering array elements
 * Returneaza UN NOU array cu elementele initiale care indeplinesc conditia
 * NU modifica array-ul initial
 */

console.log(array);
const lessThenThree = array.filter((element) => {
  return element < 3;
});

console.log(lessThenThree);

/**
 *  .reverse()
 * Reverse array
 * MODIFICA array-ul initial
 */

array.reverse();
console.log(array);

/**
 *  .concat()
 *  Imbinarea array-ului
 */
console.log(`=====CONCAT=====`);

const concatArray = ["add", "me"];
// const newConcatenatedArray = array.concat(concatArray);
// console.log(newConcatenatedArray);

console.log(array.concat(concatArray));
console.log(concatArray.concat(array));

console.log([1, 2, 3].concat(concatArray));
console.log(concatArray.concat([1,2,3]));
console.log(`===============`);
/**
 * .join()
 * Transform array into string
 *
 */

const redeclaredArray = [1, 2, 3, 4, 5];
let stringFromArray = redeclaredArray.join("");
console.log(stringFromArray);

/**
 * .reduce()
 * Reduce array
 * Ia un array si il transforma intr-o valoare
 */

const reduceArray = [1, 2, 3, 4];
const reducedValue = reduceArray.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});
console.log(reducedValue);

/**
 * .sort()
 * Sorting an array
 * MODIFICA array-ul original
 */
console.log('=====SORT=====');

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11, 4, "asd", "aac", "sum"];
// console.log(arrayToSort.sort());
arrayToSort.sort((a, b) => {
  return a - b;
  // return b - a;
});
console.log(arrayToSort);
console.log('===============');

/**
 * .find()
 * Returneaza primul element care indeplineste conditia
 */

let arrayToFind = [1, 2, 78, 9, 2, 45];

const value2 = arrayToFind.find((element) => element === 2);
console.log(value2);

arrayToFind = [
  {
    name: "Sergiu",
    city: "Timisoara",
  },
  {
    name: "Alex",
    city: "Cluj",
  },
  {
    name: "Cipri",
    city: "Oradea",
  },
  {
    name: "Raluca",
    city: "Bucuresti",
  },
  {
    name: "Sergiu",
    city: "Brasov",
  },
];

const foundElem = arrayToFind.find((element) => {
  return element.name === "Sergiu";
});

const foundElement = arrayToFind.findLast(
  (element) => element.name === "Sergiu"
);

console.log(foundElem);
console.log(foundElement);
//Pentru arrow functions
// Daca avem un singur parametru (), pot sa lipseasca
// Daca se scrie pe o singura linie(o singura expresie), {} sunt optionale
// Iar retrun-ul se face implicit

/**
 * .includes()
 * Verifica daca un element exista intr-un array
 */

let includedElem = arrayToSort.includes(1024);
console.log(includedElem);

/**
 * Objects
 */

const createPerson = (name, age, gender) => {
  return {
    fisrtName: name,
    age: age,
    gender, //gender: gender
  };
};

const sergiu = createPerson("Sergiu", 14, "male");
const costel = createPerson("Costel", 50, "female");

console.log(sergiu);
console.log(costel);

/**
 * Creating obj using OBJECT LITERAL method
 */

const person = {
  name: "Sergiu",
  lastName: "Savin",
  age: 33,
  addres: { city: "Brasov", zip: 500 },
  sayHi: function () {
    console.log(`${this.lastName} says hi`);
  },
  sayHaiArrow: () => {
    console.log(`${this.lastName} says hi`);
  },
};

person.sayHi();
person.sayHaiArrow();

person.lastName = "Popescu";
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
    this.mode = model;
    this.maxSpeedKmh = maxSpeedKmh;
  }
}

const vw = new Car("vw", 150);
const porsche = new Car("porsche", 450);

vw.maxSpeedKmh = 200;
vw.wheels = 100;

console.log(vw);
console.log(porsche);

const boy = {
  name: "Sergiu",
  lastName: "Savin",
  age: 33,
  addres: { city: "Brasov", zip: 500 },
  sayHi: function () {
    console.log(`${this.lastName} says hi`);
  },
  sayHaiArrow: () => {
    console.log(`${this.lastName} says hi`);
  },
};

const girl = {
  name: "Alina",
  lastName: "Popescu",
  age: 44,
  addres: {
    city: "Iasi",
    zip: 500,
  },
};

girl.ocupatoin = "teacher";
girl.sayHiGirl = boy.sayHi;

console.log(girl);
girl.sayHiGirl();

// Exerctitii

// const valoare = true
// const convertBoolean = (val) =>{
//     if(val == true){
//         console.log('Yes')
//     }else{
//         console.log('No')
//     }
// }
// convertBoolean(valoare)
// const valoare = [true, true, false]
//  const convertBoolean = (val) =>{
// val.forEach((elem)=>{
//   if(elem == true){
//         console.log('Yes')
//     }else{
//         console.log('No')
//     }
// })
// }
// convertBoolean(valoare)

// let x = [1,6,29,30,52]
// const evenOrOdd = (num) =>{
// for(i=0; i< num.length;i++){
//         if(i % 2 === 0){
//         console.log('Even')
//     }else{
//         console.log('Odd')
//     }
// }}
// evenOrOdd(x)

// const newArr=[3, 10, 200, 0, -3]

// let sum = 0
// newArr.forEach((x)=>{

//     sum = x * (5**Math.abs(x).toString().length)
//     // console.log(x)
//     console.log(sum)
// })

// const newArr=[2,5,6,-7,0,4,8]

// const newArr2=[42,-5,-4,64,0,-43,82]
// let test = 0

// const makeNeg = (num)=>{
// num.forEach((elem)=>{
//     if(elem > 0 ){
//      console.log(   elem * -1)
//     }else if( elem < 0){
//       console.log(   elem * 1)
//     }else{
//         console.log( `${elem} nu poate sa fie negativ`)
//     }})}

// makeNeg(newArr2)

// const newArr= [1,5,-3,4]
// let sum = 0

// const sumOfPos = (arr)=>{

// for(i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         // console.log('test')
//     }else if(arr[i]>0){
//     //   console.log(arr[i])
//       sum += arr[i]
//     }else{
//         sum = 0
//     }
// }
//  return sum

// }
// sumOfPos(newArr)
// console.log(sum)

// let string = 'Salut'

// const reverse = (str) =>{
//     return str.split('').reverse().join('')
// }
// console.log(reverse(string))

// const number = 100

// const toString =(num)=>{
//     console.log(num.toString() )
// }
// toString(1234)
// const makeNeg = (num)=>{
//     if(num > 0 ){
//      console.log(   num * -1)
//     }else if( num < 0){
//       console.log(   num * 1)
//     }else{
//         return `${num} nu poate sa fie negativ`
//     }
// }

// makeNeg(5)

// const arr1= [1,6,8,9,5]
// const arr2 =[9,8,7,6,5]

// const newArr = arr1.map((x,y)=> x + arr2[y])
// console.log(newArr)

// const arrEq = arr1.map((x,y) =>{
//     // console.log(x)
//     arr2.map((y)=>{
//         // console.log(y)
//         if(x === y){
//             console.log('egale')
//         }else{
//             console.log('nu')
//         }
//     })
// })

// arr1.forEach((x)=>{
//     if(arr2.includes(x)){
//         console.log('Egale')
//     }
// })
