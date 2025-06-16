console.log("Alexandra");
console.log("2+2");
console.log(2 + 2);

// Acesta este un cod comentat in javascript ctrl + /

/** Multi line comment
 *
 * etc
 * etc
 */

// 1. Variables
// 2. Data types
// 3. Primitives (primitive): number, string, boolean, null, undefined, null, symbol, bigint (domenii bancare, crypto, etc.)
// 4. Reference types: object, array, function, date, regex, map, set, weakmap, weakset
// 5. Variables declaration types : var (nu se mai foloseste), let, const
// let - variabile care pot fi modificate, dinamice
// const - variabile care nu pot fi modificate (constante),
// var - variabile globale (nu se mai foloseste)

/**
 * Number
 */

const oneNumber = 11; //declaratie de variabila
const anotherNumber = 5; //initializare de variabila
// const pi = 3.14; //pi este o constant
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);
// console.log(total); //undefined - este asociat automat cu orice variabila care nu are o valoare

total = oneNumber + anotherNumber; //total este o variabila care contine suma a doua variabile
// console.log(total); //16
total = oneNumber - anotherNumber; //total este o variabila care contine diferenta a doua variabile
// console.log(total); //6
total = oneNumber * anotherNumber; //total este o variabila care contine produsul a doua variabile
// console.log(total); //55
total = oneNumber / anotherNumber; //total este o variabila care contine catul a doua variabile
total = oneNumber % anotherNumber; //total este o variabila care contine restul impartirii a doua variabile
// console.log(total); //1
total = oneNumber ** anotherNumber; //total este o variabila care contine puterea a doua variabile - ridicare la puture
console.log(total); //15625

/** String
 * siruri de caractere - ca si titlurile de la carti, emag ,etc
 */

const fullName = "Alexandra Predoiu"; //sir de caractere
const address = "Bucuresti"; //sir de caractere
const zip = "031627"; //sir de caractere

console.log(fullName); //Alexandra Predoiu
// console.log(address); //Bucuresti
// console.log(zip); //031627

const age = 28;

let personalInfo = fullName + " " + age;
personalInfo = `Salut
${fullName}, cu varsta de ${age} de ani.
Cum ti s-a parut cursul pana acum?`;

const anotherInfo =
  "Salut, \n" + fullName + " cu varsta de " + age + "\nBine ai venit la curs! ";

console.log(personalInfo);
console.log(anotherInfo); //Salut, Alexandra Predoiu cu varsta de 28 bine ai venit la curs!

/**
 * Boolean
 * true/false
    * Variabila care poate avea doar doua valori: true sau false
    * Este folosita pentru a verifica daca o conditie este adevarata sau falsa
    * Este folosita in instructiuni de control (if, switch, while, for, etc)
    * Este folosita in functii de comparare (==, ===, !=, !==, >, <, >=, <=)
 */

let lightsOn = false;
lightsOn = true;

/**
 * Undefined
 * Variabila care nu are o valoare definita
 * Este folosita pentru a verifica daca o variabila a fost initializata sau nu
 * Este folosita in instructiuni de control (if, switch, while, for, etc)
 */

let dogName; //undefined - este asociat automat cu orice variabila care nu are o valoare
dogName = null; //null - este o valoare definita, dar care nu are o valoare

console.log(dogName); //null - este o valoare definita, dar care nu are o valoare

/**
 * Array
 * (liste de elemente)
 */

// const random = []; //array gol
const randomNumbers = [1, 2, 3, 4, 5]; //array cu numere  
const random = [1, "doi", null, true, false, [3, 'partru']]; //array cu elemente de tipuri diferite
// const random = [1, 2, 3, 4, 5]; //array cu numere

console.log(random);
console.log(random.length); //5 - lungimea array-ului
console.log(random[0]); //1 - primul element din array 
console.log(random[1]); //2 - al doilea element din array
console.log(random[2]); //3 - al treilea element din array
console.log(random[5][1]);


const daysOfWeek = [
  "Luni",
  "Marti",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sambata",
  "Duminica",
]; //array cu zilele saptamanii

console.log(daysOfWeek);
const index = daysOfWeek.length;
console.log(daysOfWeek[index -1]); //Duminica - ultimul element din array

/**Objects
 * Obiecte
 * Obiectele sunt structuri de date care contin proprietati si metode. le folosim la enumerari
 */


const person = {
    fullName: "Alexandra Predoiu",
    age: 28,
    address: {
    city: "Bucuresti",
    zip: "031627"},
    isMarried: false,
    loveSummer: true,
    children: null,
    citizenship: "Romanian",
    hobbies: ["reading", "traveling", "cooking"],
}
