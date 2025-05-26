console.log('sergiu');
console.log('2+2');
console.log(2 + 2);


//Primitives : number,string,boolean,undefined,null,symbol,bigInt
//Refrences (referinte): array, function


//Variable declaration types

//var - nu se mai foloseste
//let - variabile dinamice, li se poate schimba valoarea
//const - variabilestatice, nu li se poate schimba valoarea

/** *
 * Number
 */
const oneNumber = 11;
const anotherNumber = 5;
let total;

console.log(oneNumber)
console.log(anotherNumber)
console.log(total)

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber % anotherNumber;//modulo opereator => restul impartirii
total = oneNumber ** anotherNumber;//ridicarea la putere

console.log(total)

/**
 * String
 * (siruri de caractere)
 */

const fullName = "Sergiu Savin";
const address = 'Brasov';
const zip = `500500`;

console.log(fullName);
const age = 30;

let personalInfo = fullName + ' ' + age;
personalInfo = `Salut
${fullName}, cu varsta de ${age} de ani.
Cum ti s-a parut cursul pana acum?`

const anotherInfo = 'Salut , \n' + fullName + 'cu varsta de' + age + '\nBine ai venit la curs';


console.log(personalInfo);
console.log(anotherInfo);

/**
 * Boolean
 */

let lightOn = false;
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


console.log(daysOfWeek);

/**
 * Objects
 */

const person = {
    fullName: 'Sergiu Savin',
    age: 30,
    lovesSummer: true,
    address: {
        city: "Brasov",
        zip: '500500'
    },
    citizenship: 'Romanian',
    hobbies: ['travel', 'sky'],
    'residence-permit': true
};

console.log(person);

console.log(person.fullName);
console.log

person.fullName = 'Brad Pitt';

console.log(person.fullName);

const actor = {
    name:123
}
