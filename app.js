console.log("Hello world!");

// let variables can be changed after creation
let myName = "Sam";

//const variables cannot be changed after creation
const mySurname = "Parkes";

console.log(myName);
console.log(mySurname);

let age = 30;
console.log(age);

// string data types
const string1 = "sam";
const string2 = "bob";
const string3 = "tim";
const string4 = "asoihsf6532964!£$%%^&*";

// number data types
const number1 = 10;
const number2 = 20;
const number3 = 30;

// booleans
const myNameisBob = false;
const iDislikeJava = true;

// Operators
let a = 1;
let b = 2;
let c = 3;

const adding = a + b; // 3
console.log(adding);

const minusing = a - b; // -1
console.log(minusing);

// the above can be applied with multiplication and division

// we can also compare values
const isABiggerThanC = a > c; // false
console.log(isABiggerThanC);

// the equality operator (===) and checking if a is the same value as 1
const isAOneDoubleQuote = a === "1"; //false
console.log(isAOneDoubleQuote);

const isAOneSingleQuote = a === `1`; // false - THIS IS SHOWING IN SAM'S E.G. AS TRUE, WHY?
console.log(isAOneSingleQuote);

//concatenation
const myFaveColour = "green";
const myInfo =
  "My name is Sam and my favourite colour is " + myFaveColour + "."; // My name is Sam and my favourite colour is green
console.log(myInfo);

//template literals can be used to interpolate variables in strings but back slash ` must be used
// this saves time as you don't have to add a full stop in the double quotation marks at the end.
const myInfoInTemplates = `My name is Sam and my favourite colour is ${myFaveColour}.`; // My name is Sam and my favourite colour is green - note: same response as above but easier to type
console.log(myInfoInTemplates); // My name
