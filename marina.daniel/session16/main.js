console.log("daniel");
console.log("2+2");
console.log(2 + 2);

//  Acesta este un cod comentat in java

/**
 * Multi line comment
 * care nu va fi luat in considerare
 */

/**
 * Data types
 */

// Primitives: number. string, boolean, undefined, null, symbol, bigInt
// Refrences: object: array, funtion (subcategorii)

/**
 * Variable declaration types
 */

// var - nu se mai foloseste
// let - variabile dimanice, li se poate schiba valoarea
// const - variabile statice, nu li se poate schimba valoarea

/**
 * number
 */

const oneNumber = 11;
const anotherNumber = 5;
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber % anotherNumber; // MODULO OPERATOR => RESTUL IMPARTIRII
total = oneNumber ** anotherNumber; // RIDICAREA LA PUTERE

console.log(total);

/**
 * String
 * siruri de caractere
 */

const fullName = "Marina Daniel";
const address = "Brasov";
const zip = `500500`;
console.log(fullName);

// fullName = `Cipri`;
const age = 31;

let personalInfo = fullName + ` ` + age;
personalInfo = `Salut
${fullName}, cu varsta de ${age} de ani.
Cum ti s-a parut cursul pana acum?`;

const anotherInfo =
  'Salut, \n' + fullName + ' cu varsta de ' + age + ' \nBine ai venit la curs';

console.log(personalInfo);
console.log(anotherInfo);


/**
 * Boolean
 */

let lightsOn = false;
lightsOn = true;

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

const random = [1, 'doi', null, true, 'false', [3, 'patru']];

console.log(random);
console.log(random.length);
console.log(random[0]);
console.log(random[4]);
console.log(random[5]);
console.log(random[5][1]);
console.log(random[random.length - 1][1]);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 4];

console.log(daysOfWeek);
const index = daysOfWeek.length;
console.log(daysOfWeek[index - 1]);


daysOfWeek[3] = 'Thursday';

// daysOfWeek = ['Thursday']; assignment to constant variable error, am schimbat referinta

console.log(daysOfWeek);

/**
 * Objects
 */

const person = {
  fullName: 'Sergiu Savin',
  age: 33,
  lovesSummer: true,
  address: {
    city: 'Brasov',
    zip: '500500'
  },
  citizenship: 'Romania',
  hobbies: ['travel', 'sky'],
  'residence-permit': true
};

console.log(person);

console.log(person.fullName);
console.log(person.address.city); // cand accesam proprietati cu . se numeste metoda dot notation
console.log(person.citizenship);
console.log(person.hobbies[1]);
console.log(person["residence-permit"]); // cand folosim [] se numeste bracket notation

person.fullName = 'Brad Pitt';

console.log(person.fullName)

// person = {}; // !!! Error, assignment t0 oconstant variable

const actor = {
  name: 'Brad Pitt',
  job: 'Actor'
}

console.log(actor)

// Assignment to constant variable errors

// Person = actor
// person = 5;