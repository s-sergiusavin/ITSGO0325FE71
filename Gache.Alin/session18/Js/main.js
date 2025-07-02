/**
 * Scope
 */

let testLet = "let-global";
const testConst = "const-global";
var testVar = "var-global";

// let & const canot be redeclared in the same scope
// let testLet = 3;
// const testConst = 3;
// var testVar = 7

// if (true) {
//   let testLet = "if-let";
//   const testConst = "if-const";
//   var testVar = "if-var";

//   console.log(testLet);
//   console.log(testConst);
//   console.log(testVar);

//   if (true) {
//     console.log("----------Al doilea if----------");
//     let testLet = "if2-let";
//     const testConst = "if2-const";
//     var testVar = "if2-var";

//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);

//     console.log("----------Sfarsit if doi----------");

//     if (true) {
//       console.log("----------Al treilea if----------");
//       let testLet = "if3-let";
//       const testConst = "if3-const";
//       var testVar = "if3-var";

//       console.log(testLet);
//       console.log(testConst);
//       console.log(testVar);

//       console.log("----------Sfarsit if trei ----------");
//     }
//   }
// }

// console.log("----dupa if----");
// console.log(testLet);
// console.log(testConst);
// console.log(testVar);

let outside = "outside";

if (true) {
  //   outside = "inside";
  let outside = "inside";

  console.log(outside);
}
console.log(outside);

let golbalVariable = "unchange";

function addTow(number) {
  golbalVariable = "change!!";

  const total = number + 2;
}

console.log(golbalVariable);

// addTow(5)
// console.log(golbalVariable);

let needMoney = true;

if (needMoney) {
  addTow(3);
}

console.log(golbalVariable);

if (needMoney) {
  let noAccesToThisVar = "Nu vom avea acces la valoarea asta";
  console.log(noAccesToThisVar);
}

// console.log(noAccesToThisVar); // error: variable is not defined

/**
 * Hoisting mechanism
 * se aplica numa pentru functiile declarate cu function
 */

showTimisoara();
function showTimisoara() {
  console.log("Timisoara");
}
showTimisoara();

// console.log(notHoistedConst); /error
const notHoistedConst = "Nu se aplica";
console.log(notHoistedConst);

// console.log(notHoistedlet); //error
let notHoistedlet = "Nu se aplica";
console.log(notHoistedlet);

// showCluj() //error
const showCluj = () => {
  console.log("Cluj");
};

showCluj();

// showBrasof()
const showBrasof = function () {
  console.log("Brasov");
};
showBrasof();

//The return value of a function
//Valoarea returnata a unei functii
const addFive = (number) => {
  return number + 5;
};

console.log(addFive(10));

const onePlusFive = addFive(1);
console.log(onePlusFive);

const changeEur = (value) => {
  const total = value * 5;
  console.log("Acest text va fi vizibil");

  return total;

  console.log("Orice cod dupa return intr-o functie nu este executat");

  return "totalul poate sa fie orice";
};

const fiveEur = changeEur(5);
console.log(fiveEur);
console.log(changeEur(10));

// Particularities of arrow functions
// Daca am un sigur parametru, () - sunt optionale
// Daca avem o singura expresie , {} - pot sa dispara, iar return-un este implicit

// const changeUSD= (value)=>{
//     return value * 4.5
// }

const changeUSD = (value) => value * 4.5;

console.log(changeUSD(10));

const addTwoNumbers = (val1, val2) => val1 + val2;

// const addTwoNumbers = (val1, val2)=>{
//     return val1 + val2
// }

console.log(addTwoNumbers(1, 2));

/**
 * Functins with default params
 * Parametrii defaul functioneaza  la fel pt toate tipurile de functii
 */

// const makeBurger = (ingredient) => {
//   if (ingredient === undefined) {
//     ingredient = "pui";
//   }
//   console.log(`Burger-ul meu preferat este cu ${ingredient}`);
// };

const makeBurger = (ingredient = "porc") => {
  if (ingredient === undefined) {
    ingredient = "pui";
  }

  if (!ingredient) {
    ingredient = "oaie";
  }
  console.log(`Burger-ul meu preferat este cu ${ingredient}`);
};

makeBurger("vita");
makeBurger();
makeBurger("rata");
makeBurger("wagyu");
makeBurger();
makeBurger("");

// const rateMovie = (movie) => {
//   if (movie === "Home Aline") {
//     console.log(`Filmul ${movie} este de 10`);
//   } else if (movie === "Pulp Fiction") {
//     console.log(`Filmul este de 9`);
//   } else if (movie === "Avatar") {
//     console.log(`Filmul este de 8`);
//   } else if (movie === "Avangers") {
//     console.log(`Filmul este de 7`);
//   } else if (movie === "Justice League") {
//     console.log(`Filmul este de 6`);
//   } else if (movie === "Jumanji") {
//     console.log(`Filmul este de 5`);
//   } else {
//     console.log(`Te rugam sa introduci filmul`);
//   }
// };

// rateMovie("Home Alone"); //Filmul este de nota 10
// rateMovie("Pulp Fictoin"); //Filmul este de nota 9
// rateMovie("Avatar"); //Filmul este de nota 8
// rateMovie("Avangers"); //Filmul este de nota 7
// rateMovie("Justice League"); //Filmul este de nota 6
// rateMovie("Jumanji"); //Filmul este de nota 5
// rateMovie(""); //Te rugam sa introduci numele filmului

const rateMovie = (movie) => {
  switch (movie) {
    case "Home Alone":
      console.log(`Filmul ${movie} este de nota 10`);
      break;
    case "Pulp Fictoin":
      console.log(`Filmul ${movie} este de nota 9`);
      break;
    case "Avatar":
      console.log(`Filmul ${movie} este de nota 8`);
      break;
    case "Avangers":
      console.log(`Filmul ${movie} este de nota 7`);
      break;
    case "Justice League":
      console.log(`Filmul ${movie} este de nota 6`);
      break;
    case "Jumanji":
      console.log(`Filmul ${movie} este de nota 5`);
      break;
    case undefined:
      console.log(`Te rugam sa introduci numele filmului`);
      break;
    default:
      console.log(`Filmul nu este in baza de date`);
      break;
  }
};

rateMovie("Home Alone"); //Filmul este de nota 10
rateMovie("Pulp Fictoin"); //Filmul este de nota 9
rateMovie("Avatar"); //Filmul este de nota 8
rateMovie("Avangers"); //Filmul este de nota 7
rateMovie("Justice League"); //Filmul este de nota 6
rateMovie("Jumanji"); //Filmul este de nota 5
rateMovie(""); //Te rugam sa introduci numele filmului
rateMovie("Titanic"); //Te rugam sa introduci numele filmului

const complexObject = {
  name: "Alin",
  adress: {
    city: "Bucuresti",
    zip: 500500,
    additionalInfo: ["Interfon", "Etaj", "apartament"],
  },
  favoriteMovies: ["Home Alone", "Pulp Fictoin", "Avatar"],
  hasPassport: true,
  hobbies: ["travel", "eat", "drink"],
  watchMovie: function (movie) {
    console.log(`Uita-te la ${movie}`);
  },
  sleep: () => {
    console.log(`Du-te la culcare`);
  },
  work() {
    console.log(`Mergi la munca`);
  },
  age: 19,
};

console.log(complexObject.name);
console.log(complexObject.adress.city);
console.log(complexObject.adress.additionalInfo[2]);
console.log(complexObject.favoriteMovies[2]);

complexObject.watchMovie("Harry Potter");

complexObject.watchMovie(complexObject.favoriteMovies[2]);
complexObject.sleep();
complexObject.work();

//Flip a coin

let valoriMoneda = ["Cap", "Stema"];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(Math.random()));

if (valoriMoneda[Math.round(Math.random())] === "Cap") {
  console.log("A iesit cap");
} else {
  console.log("A iesit stema");
}

//Palindrome

const palindrome = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrom = (array) => {
  for (let i = 0; i < array.length /2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
        return "Array-ul nu este palindrom";
    //   console.log(`Array-ul este palindrom`);
    }
  }

    return "Array-ul este palindrom";
//   console.log(`Array-ul nu este palindrom`);
};

console.log(checkPalindrom(palindrome));
// checkPalindrom(palindrome)