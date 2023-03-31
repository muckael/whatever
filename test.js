const prompt = require('prompt-sync')();

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");

console.log("Your full name is: ", firstName, lastName);

//Problem 2.1.1
for (let i = 3; i >= 0; i--){
    console.log('i = ' + i);
}
let i = 2
console.log('i outside = ' + i);

//Problem 2.1.2
let maxNum = Number.MAX_VALUE;
let testMax = maxNum + 10;
console.log(maxNum, testMax, maxNum === testMax);

let minNum = Number.MIN_VALUE;
let testMin = minNum / 10;
console.log(minNum, testMin, minNum === testMin);

//Problem 2.1.3
console.log(23 + 2 + 1 + 5 - "02" + 03);
console.log(23 - 2 - "." - 1 - 5 - 02 - "02");
console.log(23 + 2 + "." + 1 + 5 - "02" + 03); 