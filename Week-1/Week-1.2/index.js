console.log("Hello World");

// Declaring Variable with var
var a = 1;
a = 2;
console.log(a);

// Declaring Variable with let
let b = 1;
b = 2;
console.log(b);

// Declaring Variable with let
const c = 1;
// c = 2;   // TypeError: Assignment to constant variable.

// STRINGS
let firstName = "Rahul Kumar Mishra";
let age = 24;
let isMarried = false;
console.log("I am " + firstName + ". I am " + age + " years old");

// IF & ELSE Statements
if (isMarried) {
  console.log(firstName + " is Married.");
} else {
  console.log(firstName + " is not Married.");
}

// Loops in javascript
let valueOfN = 10;
let sumOfN = 0;
for (let i = 1; i <= valueOfN; i++) {
  sumOfN = sumOfN + i;
}
console.log("Sum of " + valueOfN + " numbers : ", sumOfN);

// Arrays in Javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Program to print Even Number in Array
console.log("Even Numbers of Arr :");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// Program to print largest +ve number of Array
let max = 0;
for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) max = numbers[i];
}
console.log("Largest number in Arr : ", max);

// Objects in Javascript
let user = { name: "Rahul", gender: "male", age: 24 };
console.log(user);
// Array of Objects
let users = [
  {
    name: "Rohan",
    gender: "male",
    age: 24,
  },
  {
    name: "Priya",
    gender: "female",
    age: 22,
  },
  {
    name: "Ayushi",
    gender: "female",
    age: 12,
  },
];
for (let i = 0; i < users.length; i++) {
  if (users[i].gender === "male") {
    console.log(users[i].name + " is " + age + " years old male");
  }
}

// Functions in Javascript
function printWorld() {
  console.log("Hello World...");
}
printWorld();

// Program to print sum of 2 numbers
function sum(a, b) {
  return a + b;
}
const value = sum(10, 40);
console.log("sum of 10 & 40 is ", value);

// Callbacks in Javascript
function sumCallback(num1, num2, funToCall) {
  let res = num1 + num2;
  funToCall(res);
}
function displayResult(data) {
  console.log("Result of the sum is : ", data);
}
function displayResultPassive(data) {
  console.log("Sum's result is : ", data);
}
// Display sum using only one function call
const ans = sumCallback(1, 2, displayResult);

// setTimeOut in Javascript
function greetPeople(name) {
  console.log("Hello " + name);
}
setTimeout(() => {
  greetPeople("Mohan");
}, 2000);

// setInterval in Javascript
setInterval(() => {
  console.log("Hello Everyone : ", Date.now());
}, 5000);
