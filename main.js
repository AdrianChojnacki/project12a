const arr = [34, 219, 132, 65, 45, 657, 234];

//------------------------------------------------------- ZWRACAJĄCE NOWĄ TABLICĘ ---//

// REDUCE
const addAll = arr.reduce((a, b) => a + b);
const subAll = arr.reduce((a, b) => a - b);
const multAll = arr.reduce((a, b) => a * b);
const divAll = arr.reduce((a, b) => a / b);

// FILTER
const oddNumbers = arr.filter((number) => number % 2);
const evenNumbers = arr.filter((number) => !(number % 2));
const numbersBiggerThan100 = arr.filter((number) => number > 100);
const secretNumber = arr.filter((number) => number - 1 === 44);

// MAP
const double = arr.map((number) => number * 2);
const people = arr.map((number) => `${number} osób`);

//------------------------------------------------------- MODYFIKUJĄCE ISTNIEJĄCĄ TABLICĘ ---//

// FOR EACH
// arr.forEach((number, index) => (arr[index] = number * 2));

// SORT
// arr.sort((a, b) => a - b);
// arr.sort((a, b) => b - a);
