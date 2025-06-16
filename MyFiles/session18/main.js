// //**
// // Scope
// // */

let testLet = "let-global";
const testConst = "const-global";
var testVar = "var-global";

// // let & const cannot be redeclared in the same scope
// // let testLet =  3;
// // const testConst = 5;
// // var testVar = 7;

// if (true) {

//     let testLet = 'if-let';
//     const testConst = 'if-const';
//     var testVar = 'if-var';

//     console.log(testLet); // let-global
//     console.log(testConst); // const-global
//     console.log(testVar); // var-global

// if (true) {'

//     console.log('----Al doilea if----');

//     let testLet = 'if-let';
//     const testConst = 'if-const';
//     var testVar = 'if-var';

//     console.log(testLet); // let-global
//     console.log(testConst); // const-global
//     console.log(testVar); // var-global

// }

// }

// console.log('----Dupa if----');
//     console.log(testLet); // let-global
//     console.log(testConst); // const-global
//     console.log(testVar); // var-global

let outside = "Outside";

if (true) {
  outside = "Inside";
  console.log(outside);
}

console.log(outside);

let globalVariable = "unchanged";

function addTwo(number) {
  let globalVariable = "changed!!!";

  const toatl = number + 2;
}

console.log(globalVariable); // unchanged

// addTwo(5);
// console.log(globalVariable); // changed!!!

let needMoney = true;

if (needMoney) {
  addTwo(3);
}

console.log(globalVariable); // unchanged

if (needMoney) {
  let noAccessToThisVar = "Nu vom avea acces la aceasta variabila";
  console.log(noAccessToThisVar);
}

//console.log(noAccessToThisVar); // ReferenceError: noAccessToThisVar is not defined

showTimisoara();
function showTimisoara() {
  console.log("Timisoara");
}

showTimisoara();

// console.log(notHoistedConst); // ReferenceError: notHoistedConst is not defined
const notHoistedConst = "nu se aplica";
