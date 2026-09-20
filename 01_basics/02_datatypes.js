"use strict"; // strict mode is a way to opt in to a restricted variant of JavaScript, theerby implicitly opting-out of "sloppy mode". It helps in catching common coding bloopers, preventing, or throwing errors when relatively "unsafe" actions are taken (such as gaining access to the global on=bject). It also disables features that are confusing or poorly thought out.

// Treat al JS code as newer version of JS. 

 // alert("Hello World")  // alert is a function that displays an alert box with a specified message and an OK Button. It is used to display information to the user.
// we are using node.js, not a browser, so alert will not work here.

console.log( 3+ 5) // console.log is a function that prints the output to the console. It is used to display information to the user.


let name = "Atul" // It is a string data type. String is a sequence of characters. It is used to represent text. It is enclosed in single quotes, double quotes, or backticks.

let age = 21 // It is a number data type. Number is used to represent numeric values. It can be an integer or a floating-point number.

let isLoggedIn = false // It is a boolean data type. Boolean is used to represent logical values. It can be either true or false. It is often used in conditional statements to control the flow of a program based on certain conditions.

let state; // It is a undefined data type. Undefined is a data type that represents a variable that has not been assigned a value. It is used to indicate the absence of a value.

// Range of numbers in JS is between -(2^53 - 1) and (2^53 - 1). If we want to store a number beyond this range, we can use BigInt data type.
// What is BigInt? BigInt is a data type that can represent integers with arbitrary precision. It is used to store large integers that cannot be represented by the Number data type. It is created by appending 'n' to the end of an integer literal or by calling the BigInt() constructor.

let bigNumber = 1234567890123456789012345678901234567890n // It is a BigInt data type. BigInt is used to represent large integers that cannot be represented by the Number data type.

console.log(typeof name) // typeof is a operator that returns a string indicating the type of the unevaluated operand. It is used to determine the data type of a variable.

console.log(typeof age)

console.log(typeof isLoggedIn)

console.log(typeof state)

console.log(typeof bigNumber)

// What is null? Null is a special value that represents the absence of any object value. It is used to indicate that a variable has no value or that an object property does not exist. It is often used as a placeholder for an object that will be assigned later.

let nullVar = null // It is a null data type. Null is used to represent the absence of any object value.

console.log(typeof nullVar) // It will return "object" because null is considered an object in JavaScript. This is a known quirk of the language and has been present since its early days. However, it is important to note that null is not actually an object, but rather a primitive value that represents the absence of any object value.

