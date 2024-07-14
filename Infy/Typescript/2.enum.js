var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Female"] = 1] = "Female";
})(gender || (gender = {}));
var Person = {
    Name: "Peter",
    Gender: gender.Male
};
console.log(Person);
