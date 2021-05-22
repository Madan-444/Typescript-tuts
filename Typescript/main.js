"use strict";
exports.__esModule = true;
var isBeginner = true;
// let total: number = 0;
var name = 'Madan Rijal';
// console.log(`I am ${name} and i have${total} money`)
// enum variable types
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["purple"] = 3] = "purple";
    Color[Color["green"] = 10] = "green";
})(Color || (Color = {}));
;
var c = Color.green;
console.log("my color is:", c);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
    console.log("the my age", person.age);
}
var obj = {
    firstName: "Madn Rijal ",
    lastName: "fuckin boy",
    age: 89
};
fullName(obj);
// let count = 'sohans';
// count = 'madan did you mean Madan'
// console.log("The name",count)
var bbt = 20;
var myTotal = function (a) {
    var total = a + bbt;
    console.log("The total is", total);
};
console.log("The bbt outside the function", bbt);
myTotal(10);
// console.log("M,y total value",total)
