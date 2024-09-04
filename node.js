//  Comments
// this is single line
// This is comment
/*
This 
is 
multi 
line 
comment
*/
// multi line comment can end in one line also

const hibox = /* hi this comment can end on this line */ (x, y) => {
    return x + y;
};

// to print any text
console.log("hi, everyone");

// DataTypes
null; // null (nothing)
123; // number (any number)
Symbol('hi'); // Symbol
"Hello"; // String (any text in doble quates, single quates or backtick(You'll know where is backtick is used for in line 237))
BigInt(654321); // BigInt (Big numbers (Same as number))
true; // Boolen (can be false)
undefined; // Undefined (not defined but can be defined at later)
// You can use ; at end of DataTypes

/*
Null
Number
Symbol
String
Bigint
Boolen
Undefined
N N S S B B U
*/

// box (code in box will not globel[for whole code] So, variabe and functions will not be globel)
{
    // You can make box in box
    {
        // And box (Gose to infinite)
        {
            
        }
    }
}

// Variables (contaners to store DataTypes by let var const)
let a = "hello"; // best and not globely
var b = "hello"; // globely (but, can us in loop when we want loop variable globaly)
const c = "hello"; // Same as let but also contain function, box and object n key with box 

// Operator

// Arithmetic Operator
1 + 2; // Addition
1 - 2; // Subtraction
1 * 2; // Multiplication
1 / 2; // Diviation
1++; // + 1 
1--; // -1
1 ** 2; // Exponantion (power of)

// Assignment Operator
1 += 2; // Same a ` 1 + 2 `   //fox in
let a1 = 1;
a1 += 2; // Same a `a = 1 + 2 `
1 -= 2;
1 *= 2;
1 /= 2;

// Comparison Operator
==; // Equal to
!=; // Not equal to
===; // Equal value and type
!==; // Not equal value and type
>; // Greater than
<; // Less than
>=; // Greater than and equal to 
<=; // Less than and equal to
?; // Termary oprator

// Logical Operator
&&; // logical and
||; // logical or
!; // logical not

// Function
function hello() {
    console.log("Hello, wrold");
}
hello();

// Function can written also like this:
const plus = (x, y) => {
    console.log(x + y);
};

// Loops
// For loops
// For loop
for (i = 1; i < 10; i++) {
    console.log(i + 1);
}

// for in loop
// To print every object
const obj = {
    Pratyush: 80,
    Rohan: 72,
    Shiva: 49,
    Lovish: 64,
};
for (let a in obj) {
    console.log(a);
}
// To print every key
const obj = {
    Pratyush: 80,
    Rohan: 72,
    Shiva: 49,
    Lovish: 64,
};
for (let a in obj) {
    console.log(obj[a]);
}
// To print every object with "marks of"
const obj = {
    Pratyush: 80,
    Rohan: 72,
    Shiva: 49,
    Lovish: 64,
};
for (let a in obj) {
    console.log("marks of " + a);
}
// To print every key with "is "
const obj = {
    Pratyush: 80,
    Rohan: 72,
    Shiva: 49,
    Lovish: 64,
};
for (let a in obj) {
    console.log("is " + a);
}
// To print marks of student in readable way
const obj = {
    Pratyush: 80,
    Rohan: 72,
    Shiva: 49,
    Lovish: 64,
};
{
    for (let a in obj) {
        console.log("marks of " + a + " is " + obj[a]);
    }
}

// for of loop
for (let b of "Pratyush") {
    console.log(b);
}

// lets run plus function
plus(16, 4);

// String
let myName = "Pratyush";
console.log(myName);

// Length
console.log(myName.length);

// Write Characters
myName[0]
myName[1]
myName[2]
myName[3]
myName[4]
myName[5]
myName[6]
myName[7]

// String interploation
console.log( `hi my name is `${myName}`` ) // If backtick is there
let a2 =  "Hi' //don't do
let a2 = `hi' // Can do
let a2 = `hi" // Can do

// Escape sequance Character
let fruite = 'bana'na'
let fruite = 'bana\'na';
console.log(fruite);

// type Escape sequance Characters

{

\n (new line)
\t (tab)
\r Carrige return

}


// String properties and Methods
let name1 = "Pratyush";
name1.length // return 8

let name2 = "Pratyush";
name2.toLocaleUpperCase() // return PRATYUSH

let name3 = "Pratyush";
name3.toLocaleLowerCase() // return pratyush

Pratyush
^^^^^^^^
01234567     

let name4 = "Pratyush";
name4.slice(0) // return P
name4.slice(1) // return r
name4.slice(2) // return a
name4.slice(3) // return t
name4.slice(4) // return y
name4.slice(5) // return u
name4.slice(6) // return s
name4.slice(5) // return h
name4.slice(2, 4) // return at

name4[0] // return P
name4[1] // return r
name4[2] // return a
name4[3] // return t
name4[4] // return y
name4[5] // return u
name4[6] // return s
name4[7] // return h

let name5 = "Pratyush";
console.log(name5.replace("Pratyush", "Aamina")); // prints Aamina

let name52 = "Pratyush bhai";
console.log(name2.replace("bhai", "bro")); // prints Pratyush bro

let name53 = "Pratyush";
console.log(name53.replace("Pra", "Ara")); // prints Aratyush

let name6 = "Pratyush";
let friend = "Nikesh";
console.log(name6.concat(" is friend of ", friend)); // prints Pratyush is friend of Nikesh 

let name7 = "          Pratyush          ";
console.log(name7.trim()); // prints Pratyush

let sentence = 'The quick brown fox jumps over the lazy dog.';
let word = 'fox2';
console.log(sentence.includes(word));

// QuikQuiz:  Use for loop to print a string in js
let myString = "Hello, World!";

for (let i = 0; i < myString.length; i++) {
    console.log(myString[i]);
}

// QuikQuiz:  Write a program to find out whether a student a is pass or fail; if it requires total 40% pass and at least 33% in each subject to pass. Assume 3 subjects and take marks as an imput from the user.

// Function to check if the student passes or fails
function checkPassOrFail(Hindi, English, Maths) {
    // Calculate total marks and percentage
    const totalMarks = Hindi + English + Maths;
    const percentage = (totalMarks / 80) * 100;

    // Check pass/fail conditions
    if (percentage >= 40 && Hindi >= 33 && English >= 33 && Maths >= 33) {
        return "Congratulations! You have passed.";
    } else {
        return "Sorry, you have failed. Better luck next time.";
    }
}

// Example usage
const subject1Marks = parseFloat(prompt("Enter marks for Hindi out of 80:"));
const subject2Marks = parseFloat(prompt("Enter marks for English out of 80:"));
const subject3Marks = parseFloat(prompt("Enter marks for Maths out of 80:"));

// Validate input
if (isNaN(subject1Marks) || isNaN(subject2Marks) || isNaN(subject3Marks)) {
    console.log("Please enter valid numerical values for marks.");
} else {
    // Display result
    const result = checkPassOrFail(subject1Marks, subject2Marks, subject3Marks);
    console.log(result);
}

// Array
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let marksOf12th = [800, 450, 679, 4, 730, 104, 98, 135, 348, 0, null, 31, false, "Not present", 735, 163, (404), 391, 496, 241, 714, 688, 8, 377, (143), 522, 522, 529, 344, 390, 380, 210, 86, 56, 162, 166, 704, 606, 6, 32, 449, (400), 199, , 47, 692, 781, 61]; // out of 800

marksOf12th[0]
marksOf12th[1]
marksOf12th[2]
marksOf12th[3]
marksOf12th[4]
marksOf12th[5]
marksOf12th[6]
marksOf12th[7]
marksOf12th[8]
marksOf12th[9]
marksOf12th[10]
marksOf12th[11]
marksOf12th[12]
marksOf12th[13]
marksOf12th[14]
marksOf12th[15]
marksOf12th[16]
marksOf12th[17]
marksOf12th[18]
marksOf12th[19]
marksOf12th[20]
marksOf12th[21]
marksOf12th[22]
marksOf12th[23]
marksOf12th[24]
marksOf12th[25]
marksOf12th[26]
marksOf12th[27]
marksOf12th[28]
marksOf12th[29]
marksOf12th[30]
marksOf12th[31]
marksOf12th[32]
marksOf12th[33]
marksOf12th[34]
marksOf12th[35]
marksOf12th[36]
marksOf12th[37]
marksOf12th[38]
marksOf12th[39]
marksOf12th[40]
marksOf12th[41]
marksOf12th[42]
marksOf12th[43]
marksOf12th[44]
marksOf12th[45]
marksOf12th[46]
marksOf12th[47]
marksOf12th[48]

console.log(marksOf12th.length);

marksOf12th[26] = 516;

console.log(marksOf12th);

let numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.toString() // converts array into string 

numbers.join(" and ") // Replaces , to join number with given text in string

numbers.pop // Will remove last item from array

mbersArray = numbers.pop(); // will return last number of array
lastOfNumbersArray

numbers.push(56) // Will add new element to end of array

numbers.shift() // Will remove first item from array

numbers.unshift(78) // Will add new element to start of array

delete numbers[0] // Will remove first item (0th) from array but not change existing array

let numbers_more = [5, 6, 7, 8]
numbers.concat(numbers_more) // Will add numbers_more array to end of array but not change existing. Can also add array more then 1

let words = ['bro', 'wanna', 'zebra', 'jack', 'king', 'f###', 'forbidden']
words.sort // Will sort words in ascending order in alphabet order by taking it as string and can also change orignal array


// # DOM.js
document.title("Dom JavaScript Library"); // DOM title is for changing the title.
console.log("document.title'); // It will print the title with title element.

document.body(); // DOM body is for selecting the body element.
console.log("document.body"); // It will print the body element. 

document.body.style = 
document.body.style.backgroundColor = "#1D212B";
