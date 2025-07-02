function logStuff(stuff) {
  console.log(`Rezultatul este ${stuff}`);
}

logStuff([10]);

let sum = 0;
function addToSum(number) {
  return (sum += number);
}
addToSum(3);
logStuff(addToSum(10));

// sum = 13
let totalSub = addToSum(10);
addToSum(5);
logStuff(totalSub);
console.log(sum);

// const sumNumbers = function (number1, number2) {
//   return number1 + number2;
// };

const sumNumbers = (number1, number2) => {
  return number1 + number2;
};

let sumTowNumbersValue = sumNumbers(5, 10);
console.log(sumTowNumbersValue);

let sumNumberStoredGlobaly;
const sumTowNumbersAlternative = (num1, num2) => {
  sumNumberStoredGlobaly = num1 + num2;
};

sumTowNumbersAlternative(3, 4);

logStuff(sumNumberStoredGlobaly);

const verifyEquality = (num1, num2) => {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
};

logStuff(verifyEquality(2, 2));
logStuff(verifyEquality(3, 2));

const verifyEqualitySimplited = (num1, num2) => {
  return num1 === num2;
};

logStuff(verifyEqualitySimplited(2, 2));
logStuff(verifyEqualitySimplited(3, 2));

const doubleValue = (value) => {
  logStuff("Sergiu");
  return value * 2;
  logStuff("Sergiu"); // ce este dupa return, nu va fi executat
  return "Test"; // Nu se executa
};

logStuff(doubleValue(3));

const addOnlyOddValue = (val1, val2) => {
  if (val1 % 2 === 0 && val2 % 2 === 0) {
    return val1 + val2;
  }
  return "Numerele nu sunt pare";
};
logStuff(addOnlyOddValue(4, 6));
logStuff(addOnlyOddValue(3, 6));

const greet = (name = "John Smith") => {
  console.log(`Salut, ${name}!`);
};

greet();
greet("Mihai");
greet(" ");
greet("%#@!@#");
greet(57);
greet(null);

// Doua nr si sa il scadem pe cel mai mic din cel mai mare

const removeFromBiggest = (num1, num2) => {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
};
logStuff(removeFromBiggest(10, 2));
logStuff(removeFromBiggest(1, 2));
logStuff(removeFromBiggest(15, 7));
logStuff(removeFromBiggest(-5, -3));

// Daca un nr este 10 - 50

const verifynumber = (num) => {
  if (num > 10 && num < 50) {
    return `Numarul ${num} este in interval`;
  } else {
    return `Numarul ${num} nu este in interval`;
  }
};

logStuff(verifynumber(90));
logStuff(verifynumber(10.0001));
logStuff(verifynumber(10));

let testString = `Test string`;
let testNumber = 3;

let anotherString = testString;
let anotherNumber = testNumber;

// console.log(anotherString);
// console.log(anotherNumber);
// console.log(testString);
// console.log(testNumber);

anotherString = `New String`;
anotherNumber = 100;

console.log(anotherString);
console.log(anotherNumber);
console.log(testString);
console.log(testNumber);

const puppy = {
  name: `Rex`,
  age: 1,
  favouriteToys: [`Duck`, `Cat`, `Bone`],
  bark: function () {
    console.log(`Ham`);
  },
  barkLoud() {
    console.log(`HAM!!!`);
  },
};

const anotherPuppy = puppy;

console.log(anotherPuppy);

anotherPuppy.name = `Rexx`;
console.log(puppy);
console.log(anotherPuppy);

puppy.bark();
anotherPuppy.bark();

function nameDog(name) {
  return `Dog ${name}`;
}

const rex = nameDog(`Rex`);
console.log(rex);

const nameDogCopy = nameDog;

console.log(nameDogCopy);
console.log(nameDogCopy(`Azorel`));

function addOne(value) {
  return value + 1;
}

function showValue(value, functieCallback) {
  return functieCallback(value);
  //   similar return addOne(value), adica addOne(5) care returneaza 6
}

const totalValueCallback = showValue(5, addOne);
console.log(totalValueCallback);

const menu = {
  burger: `BigMac`,
  juice: `Cola`,
  size: `Big`,
  price: 35,
  "french-fries": `No salt`,
};

console.log(menu.burger);
console.log(menu[`french-fries`]);

const num3 = 3;
const letA = `a`;

let stringConcat = `x`;

stringConcat = stringConcat + 3;
stringConcat += letA;

console.log(stringConcat);

const firstWord = `primul`;
const link = `si`;
const secondWord = ` al doilea`;

const concatedString = firstWord + " " + link + secondWord;
console.log(concatedString);

const createString = (array) => {
  let string = "";

  for (let i = 0; i < array.length; i++) {
    string = string + array[i] + " ";
  }
  return string;
};

console.log(createString([3, `5`, 7, 2, 1])); //35721
console.log(createString([2, `3425`, 17, 22, 1])); //2342517221

const reverseArray = (array) => {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(reverseArray([1, 2, 3, 4])); //4, 3, 2, 1

/**
 * Add home app
 */

let lightsValue = false;
let acValue = false;
let curtainsValue = false;
let windowsValue = false;

const toggleLights = () => {
  //   if (lightsValue === true) {
  //     lightsValue = false;
  //   } else {
  //     lightsValue = true;
  //   }
  lightsValue = !lightsValue;

  if (lightsValue) {
    console.log("Luminile au fost aprinse");
  } else {
    console.log("Luminile au fost stinse");
  }
};

toggleLights();
toggleLights();
toggleLights();
toggleLights();

const toggAc = () => {
  acValue = !acValue;

  if (acValue) {
    console.log("AC au fost aprinse");
  } else {
    console.log("AC au fost stinse");
  }
};

toggAc();
toggAc();
toggAc();
toggAc();

const toggCurtains = () => {
  curtainsValue = !curtainsValue;

  if (curtainsValue) {
    console.log("Draperiile au fost aprinse");
  } else {
    console.log("Draperiile au fost stinse");
  }
};
toggCurtains();
toggCurtains();
toggCurtains();
toggCurtains();

const toggWindows = () => {
  windowsValue = !windowsValue;

  if (windowsValue) {
    console.log("Geamurile au fost aprinse");
  } else {
    console.log("Geamurile au fost stinse");
  }
};

const smoke = () => {
  if (!curtainsValue) {
    toggCurtains();
  }
  if (!windowsValue) {
    toggWindows();
  }
  if (acValue) {
    toggAc();
  }
  console.log("Smoking");

  if ("Winter") {
    toggWindows();
    toggCurtains();
    toggAc();
  }
};

toggWindows();
toggWindows();
toggWindows();
toggWindows();

smoke();

// debugger //opreste executia codului in developer tools
// F8 revine la norma, iese din precesul de debug
// F10 sare un pas
// F11 intra intr-o functie
