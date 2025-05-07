console.log('beatrice');
console.log('2+2');
console.log(2+2);

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
total = oneNumber % anotherNumber;  //modulo operator -> restul impartirii
total = oneNumber ** anotherNumber;  //ridicarea la putere

console.log(total)

/**
 * String
 * (siruri de caractere)
 */

const fullName = "Beatrice Dumitru";
const adress = 'Timisoara';
const zip = `500500`;

console.log(fullName);

// fullName = 'Cipri'
const age = 30;

let personalInfo = fullName + ' ' + age;
personalInfo = `Salut
${fullName}, cu varsta de ${age} de ani.
Cum ti s-a parut cursul pana acum?`;

const anotherInfo = 'Salut, \n ' + fullName + ' cu varsta de ' + age + '\nBine ai venit la curs';



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
 * (Liste)
 */

const random = [1, 'doi', null, true, 'false', [3, 'patru']]

console.log(random);
console.log(random.length);
console.log(random[0]);
console.log(random[4]);
console.log(random[5]);
console.log(random[5][1]);
console.log(random[random.length -1][1]);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 4];

console.log(daysOfWeek);
const index = daysOfWeek.length;
console.log(daysOfWeek[index-1]);

daysOfWeek[3] = 'Thursday';

// daysOfWeek = ['Thursday']; // assigmetn to constant variable error, am schimbat referinta
console.log(daysOfWeek);

/**
 * Objects 
*/

const person = {
    fullName: 'Beatrice Dumitru',
    age: 27,
    lovesSummer: true,
    adress: {
        city: "Brasov",
        zip: '500500'
    },
    citizenship: 'Romanian',
    hobbies: ['travel', 'sky'],
    // hobby: ['travel, sky'], //nu as mai putea sa le folosesc separat, doar impreuna
    'residence-permit': true // ghilimelele sunt utile atunci cand o sa incepem cuvantul cu un nr sau un caracter special.Ex: 2residence-permit sau &residence-permit
};

console.log(person);

console.log(person.fullName);
console.log(person.age);
console.log(person.loveSummer);
console.log(person.adress.city); // cand accesam proprietati cu punct se numeste metoda dotnotation
console.log(person.citizenship);
console.log(person.hobbies[1]);
console.log(person["residence-permit"]); // cand folosim [] se numeste bracket notation

person.fullName = 'Brad Pitt';

console.log(person.fullName);

person.dogName = 'Tokyo';
console.log(person.dogName);

//person = {}; // Error, assignment to constant variable

const actor = {
    name: 'Brad Pitt',
    job: 'Actor'
}
 console.log(actor)

 // Assignement to constant variable errors

 // person = actor;
 // person = 5;