console.log("Salut");
console.log("2+2");
console.log("2" + 2);
console.log(2 + "2");
console.log(2 + +"2");
console.log(2 + 2);

//Comentariu

/**
 * Coment
 * pe
 * mai
 * multe
 * randuri
 *  */

/**
 * Data types
 */

// Primitives (primitive): number, string, boolean, undefinde, null, symbol, bigInt
// Refrences (referinte): object: array, function

/**
 * Variable declaration types
 */

// var - nu se mai joloseste
// let - variabile dinamice, li se poate schimba valoarea
// const - variabile statice, nu li se poate schimba valoarea

/**
 * Number
 */

const oneNumber = 11;
const anotherNumber = 5;
let total;
console.log(oneNumber);
console.log(anotherNumber);

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber % anotherNumber; // modulo operator => restul impartirii
total = oneNumber ** anotherNumber; // ridicare la putere

console.log(total);

/**
 * String
 * (sir de caractere)
 */

const fullName = "Alin Gabriel";
const adress = "Vulcan";
const zip = `554-245`;

console.log(fullName);

const age = 30;

let personalInfo = fullName + " " + age;
personalInfo = `Salut
${fullName}, cu varsta de ${age} de ani.
Cum ti s-a paraut cursul pana acum?`;

const anotherInfo =
  "Salut, \n" +
  fullName +
  " " +
  "cu varsta de" +
  " " +
  age +
  " " +
  "\nBine ai venit la curs";

console.log(personalInfo);
console.log(anotherInfo);

/**
 * Boolean
 *
 */

let lightOn = false;
lightOn = true;

/**
 * Undefined vs null
 */

let dogName;
dogName = null;
console.log(dogName);

/**
 * Array
 * (liste)
 */

const random = [1, "doi", null, true, "fales", [3, "patru"]];
console.log(random);
console.log(random.length);
console.log(random[4]);
console.log(random[5][1]);
console.log(random[random.length - 1][1]);

const daysOfWeek = ["Mondey", "Tuesday", "Wednsday", 4];
console.log(daysOfWeek);
const index = daysOfWeek.length;
console.log(daysOfWeek[index - 1]);

daysOfWeek[3] = "Thursday";

// daysOfWeek = ["thursday"]; //assigment to constant variable error, am schimbat referinta
console.log(daysOfWeek);

/**
 * Object
 */

const person = {
  fullName: "Alex",
  age: 25,
  loveSummer: true,
  address: {
    city: "Brasov",
    zip: "500500",
  },
  citizenship: "Romanian",
  hobbies: ["travel", "sky"],
  //   hobby:'trave, skye' //daca vrei sa folosesti mereu tot continutul hobby
  "residence-permit": true,
};

console.log(person);
console.log(person.fullName);
console.log(person.address.city); // cand accesam prop cu punct, se numeste dot notation
console.log(person.hobbies[1]);
console.log(person["residence-permit"]); // cand folosim [] se numeste bracket notainon

person.fullName = "Brad Pitt";
console.log(person.fullName);

// person = {} // !!! Error, assigment to const variable

const actor = {
  name: "Brad Pitt",
  job: "Activ",
};

console.log(actor);
