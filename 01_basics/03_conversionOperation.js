let score = "33"; // let score = "33atul"; // this will give NaN because "33atul" is not a valid number. It is a string data type. string is a sequence of characters. It is used to represent text. It is enclosed in single quotes, double quotes, or backticks.

// what is about Null case? Null case is a special case where the value of a variable is null. Qwhat will be conversion of null to number? it will be 0. beacause null is considered as an empty value. It is used to indicate that a variable has no value or that an object property does not exist. It is often used as a placeholder for an object that will be assigned later.

// what is about undefined case? Undefined case is a special case where the value of a variable is undefined. What will be conversion of undefined to number? it will be NaN because undefined is not a valid number. It is used to indicate that a variable has not been assigned a value. It is often used as a placeholder for a variable that will be assigned later.

// what is about boolean case? Boolean case is a special case where the value of a variable is boolean. What will be conversion of boolean to number? it will be 1 for true and 0 for false. It is used to represent logical values. It can be either true or false. It is often used in conditional statements to control the flow of a program based on certain conditions.

// what is about string case? String case is a special case where the value of a variable is string. What will be conversion of string to number? it will be NaN if the string is not a valid number. It is used to represent text. It is enclosed in single quotes, double quotes, or backticks.

console.log(score + 1) // "331"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // convert string to number

console.log(valueInNumber + 1) // 34
console.log(typeof valueInNumber);
console.log(valueInNumber);


// what is conversion operation? Conversion operation is the process of converting a value from one data type to another data type. It is used to change the data type of a variable or an expression. The conversion operation can be done using built-in functions or operators in JavaScript. For example, we can use the Number() function to convert a string to a number, or we can use the String() function to convert a number to a string. We can also use the parseInt() and parseFloat() functions to convert a string to an integer or a floating-point number, respectively.

// "33" => 33
// "33atul" => NaN // NaN is Not a Number.
// true =>1 , false => 0 


let isLoggedIn = 1; 

let booleanIsLoggedIn = Boolean(isLoggedIn); // conversion of boolean to number

console.log(booleanIsLoggedIn) // 1
console.log(typeof booleanIsLoggedIn);

let isLoggedIn2 = 0;

let booleanIsLoggedIn2 = Boolean(isLoggedIn2); // conversion of boolean to number

console.log(booleanIsLoggedIn2) // 0
console.log(typeof booleanIsLoggedIn2);

let someNumber = 33;

let stringSomeNumber = String(someNumber); // conversion of number to string

console.log(stringSomeNumber) // "33"
console.log(typeof stringSomeNumber);