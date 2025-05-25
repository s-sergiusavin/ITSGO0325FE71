let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log ('Good Morning');
} else (hour >= 12 && hour < 18); {
    console.log ('Good Afternoon');
}


array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(array)

array.push(7, 8, 9, 10);
console.log(array);

array.pop();
console.log(array);
console.log(array.unshift('doi'));
console.log(array);


array[0] = 100;

console.log(array)

const newArray = array.map((element) => {
    return element + 1;
})

console.log(newArray);

const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 7);

console.log(map1);

console.log('Indexul elementului 3 este: ' + array.indexOf(3));
array[4] = 7;
console.log(array)
array[array.indexOf(4)] = 666;
console.log(array)

const array2 = ["a", "b", "c", "d", "e"];

console.log(array2.copyWithin(0, 3, 4));

console.log(array2.copyWithin(1, 3));

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

console.log(animals.slice(1, 5));

console.log(animals.slice(-2));

console.log(animals.slice(2, -1));

console.log(animals.slice());


const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");

console.log(months);

months.splice(4, 1, "May");

console.log(months);