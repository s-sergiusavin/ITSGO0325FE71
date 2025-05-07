console.log("Stefania");
console.log("2+2");
console.log(2 + 2);

// Acesta este un cod comentat
/**Aici vor fi transmise lucruri despre coduri
 */

/**
 * Data Types
 * Primitive Data Types:
 * 1. Numbers - int, float, double
 * 2. Strings - text, sir de caractere
 * 3. Booleans - adevarat/fals
 * 4. Undefined - neinitializat
 * 5. Null - nul
 * 6. Symbol - simboluri unice
 * 7. BigInt - numere mari
 * 
 * References Data Types:
 * 1. Object - obiecte
 * 2. Array - matrice
 * 3. Function - functii
 * 4. Date - date
 */
/**
 * Variables declaration types:
 * 1. var - variabile globale, scope global - nu se mai foloseste
 * 2. let - variabile dinamice, scope local - li se poate schimba valoarea
 * 3. const - constante, scope local - nu li se poate schimba valoarea
 */

/**
 * Number - numere
 */

const oneNumber = 11; // numar intreg declaratie
const anotherNumber = 5; // numar float initializare
let total; // variabila care va contine suma

console.log(oneNumber);
console.log(anotherNumber);
console.log(total); // afisare variabila neinitializata - undefined

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber % anotherNumber; // modulo - restul impartirii
total = oneNumber ** anotherNumber; // exponentiere - puterea unui numar

console.log(total); // afisare variabila initializata - ultima valoare

/**
 * String - sir de caractere
 */

const fullName = "Stefania Butca";
const address = 'Strada Mihai Eminescu';
const zipCode = `123456`; // template string - permite interpolarea variabilelor in siruri de caractere

console.log(fullName); // afisare sir de caractere
//fullName = "Cipri"; nu merge - constanta nu poate fi schimbata
const age = 25; // variabila care va contine varsta

let personalInfo = fullName + '' + age; // concatenare siruri de caractere
persoanlInfo = `Salut
${fullName}, cu varsta de ${age} de ani
Cum ti s-a parut cursul pana acum?`; // template string - permite interpolarea variabilelor in siruri de caractere

const anotherInfo = 'Salut, \n' + fullName + 'cu varsta de ' + age + '\nBine ai venit';

console.log(personalInfo); // afisare sir de caractere concatenat
console.log(anotherInfo); // afisare sir de caractere concatenat

/**
 * Boolean - adevarat/fals
 */

let lightsOn = false; // variabila care va contine starea luminii
lightsOn = true; // schimbare stare lumina

/** 
 * Undefined - neinitializat vs Null - nul
 */

let dogName;
dogName = null; // initializare variabila cu valoarea null - nul

console.log(dogName); // afisare variabila neinitializata - undefined

/**
 * Array - matrice/ liste - le folosim cand avem enumerare de elemente
 */
const random = [1, 'doi', null, false, 'true', [3, 'patru']]; // matrice cu valori de tipuri diferite

console.log(random); // afisare matrice
console.log(random.length); // afisare lungime matrice - numarul de elemente din matrice
console.log(random[0]); // afisare element matrice - 1
console.log(random[1]); // afisare element matrice - doi
console.log(random[2]); // afisare element matrice - null
console.log(random[3]); // afisare element matrice - false
console.log(random[4]); // afisare element matrice - true
console.log(random[5]); // afisare element matrice - [3, 'patru']
console.log(random[5][0]); // afisare element matrice - 3
console.log(random[random.length - 1][1]); // afisare element matrice - patru

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 4]; // matrice cu zilele saptamanii

console.log(daysOfWeek); // afisare matrice zilele saptamanii
const index = daysOfWeek.length; // lungimea matricei zilele saptamanii
console.log(daysOfWeek[index - 1]); // afisare element matrice - Wednesday

daysOfWeek[3] = 'Thursday'; // schimbare valoare element matrice - Thursday

console.log(daysOfWeek); // afisare matrice zilele saptamanii

/**
 * Object - obiecte - le folosim cand avem un set de proprietati
 * Obiectele sunt formate din perechi cheie-valoare
 */

const person = { // obiect cu proprietati
    name: 'Stefania',
    age: 25,
    address: 'Strada Mihai Eminescu',
    isMarried: false,
    children: null,
    hobbies: ['ciclism', 'pictura', 'programare'], //array, ne putem folosie de fiecare element individual
    car: {
        brand: 'Dacia',
        model: 'Logan',
        year: 2020
    }
};

console.log(person); // afisare obiect

console.log(person.name); // afisare proprietate obiect - name
console.log(person.hobbies[1]); // afisare proprietate obiect - hobbies - pictura

person.name = 'Cipri'; // schimbare valoare proprietate obiect - name

console.log(person.name); // afisare proprietate obiect - name - Cipri

person.dogName = 'Miki'; // adaugare proprietate obiect - dogName - Miki
console.log(person.dogName); // afisare proprietate obiect - dogName - Miki

// person = {}; // error - obiectul nu poate fi schimbat

const actor = {
    name: 'Robert De Niro',
    job: 'actor',
}

console.log(actor); // afisare obiect - actor