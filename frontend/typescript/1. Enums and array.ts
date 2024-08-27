//All 3 enum items are assigned different values
enum Gender {Male, Female, Others};


// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Using map to double each number
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Using filter to get only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]

// Using reduce to get the sum of all numbers
let sum = numbers.reduce((acc, num) => acc + num, 0); // 15

// Using find to get the first number greater than 3
let firstGreaterThanThree = numbers.findIndex(num => num > 3); // 4






//tuple array where size is fixed and type of each element is also fixed