//All 3 enum items are assigned different values
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Others"] = 2] = "Others";
})(Gender || (Gender = {}));
;
// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Using map to double each number
var doubled = numbers.map(function (num) { return num * 2; }); // [2, 4, 6, 8, 10]
// Using filter to get only even numbers
var evenNumbers = numbers.filter(function (num) { return num % 2 === 0; }); // [2, 4]
// Using reduce to get the sum of all numbers
var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0); // 15
// Using find to get the first number greater than 3
var firstGreaterThanThree = numbers.findIndex(function (num) { return num > 3; }); // 4
