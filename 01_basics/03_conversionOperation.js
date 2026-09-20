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




// ************************************* Operations ****************************************


// what is Operations? Operations are the actions that can be performed on variables or expressions. They are used to manipulate data and perform calculations. The operations can be arithmetic, comparison, logical, or assignment operations. Arithmetic operations include addition, subtraction, multiplication, division, and modulus. Comparison operations include equal to, not equal to, greater than, less than, greater than or equal to, and less than or equal to. Logical operations include AND, OR, and NOT. Assignment operations include assigning a value to a variable using the assignment operator (=) or compound assignment operators (+=, -=, *=, /=, %=).

let value = 5;
let negvalue = -value; // negative value of value

console.log(negvalue) // -5
console.log(typeof negvalue);

console.log(5 +3) // Addition operation. It will return 8. Addition operation is used to add two or more numbers together. It can also be used to concatenate strings together.

console.log(5 - 3) // Subtraction operation. It will return 2. Subtraction operation is used to subtract one number from another number.

console.log(5 * 3) // Multiplication operation. It will return 15. Multiplication operation is used to multiply two or more numbers together.

console.log(3 ** 4) // Exponentiation operation. It will return 81. Exponentiation operation is used to raise a number to the power of another number.

console.log(5 / 3) // Division operation. It will return 1.6666666666666667. Division operation is used to divide one number by another number.

console.log(5 % 3) // Modulus operation. It will return 2. Modulus operation is used to find the remainder of a division operation.

let str1 = "Atul";
let str2 = " Anand";
console.log(str1 + str2) // Concatenation operation. It will return "Atul Anand". Concatenation operation is used to combine two or more strings together.

// But we not subtract two strings. It will give NaN because it is not a valid operation. It is used to indicate that a variable has not been assigned a value. It is often used as a placeholder for a variable that will be assigned later.

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// This is only possiable because of ToPrimitive Operation. ToPrimitive is a internal operation that converts an object to a primitive value. It is used to convert an object to a primitive value when an operation is performed on the object. The ToPrimitive operation can be performed using the valueOf() and toString() methods of the object. The valueOf() method returns the primitive value of the object, while the toString() method returns a string representation of the object. If the object does not have a valueOf() or toString() method, the ToPrimitive operation will return NaN.


// ToPrimitive is input[, preferredType] => output. because it takes input and preferredType and returns output. It is used to convert an object to a primitive value when an operation is performed on the object. The input is the object that is being converted, the preferredType is the type of primitive value that is desired, and the output is the primitive value that is returned. The preferredType can be either "String" or "number". If the preferredType is "String", the ToPrimitive operation will return a string representation of the object. If the preferredtype is "number", the ToPrimitive operation will return a number representations of the object. If the preferredType is not specified, the ToPrimitive operation will return a number representation of the object by default.


console.log( (3 +2) * 2 % 3); // it is the best way to write a code. Or represent the code in a better way.

console.log(+true) // it will return 1. because true is a boolean value and it is converted to number using ToPrimitive operation. The ToPrimitive operation converts the boolean value to a number value. The boolean value true is converted to the number value 1, and the boolean value false is converted to the number value 0.

console.log(+false) // it will return 0. because false is a boolean value and it is converted to number using ToPrimitive operation. The ToPrimitive operation converts the boolean value to a number value. The boolean value true is converted to the number value 1, and the boolean value false is converted to the number value 0.

console.log(+"") // it will return 0. because empty string is a string value and it is converted to number using ToPrimitive operation. The ToPrimitive operation converts the string value to a number value. The empty string is converted to the number value 0, and any non-empty string is converted to the number value NaN.


let num1, num2, num3;
 num1 = num2 = num3 = 2 + 2;


 let gameCounter = 100;

    gameCounter++; // it will increment the value of gameCounter by 1. It is used to increase the value of a variable by 1. It can also be used to decrease the value of a variable by 1 using the -- operator.
    
    // It is also called as a Postfix Increment Operator. It is used to increase the value of a variable by 1 after the current operation is performed. It can also be used to decrease the value of a variable by 1 after the current operation is performed using the -- operator.

    gameCounter--; // it will decrement the value of gameCounter by 1. It is used to decrease the value of a variable by 1. It can also be used to increase the value of a variable by 1 using the ++ operator.

    ++gameCounter; // it will increment the value of gameCounter by 1. It is used to increase the value of a variable by 1 before the current operation is performed. It can also be used to decrease the value of a variable by 1 before the current operation is performed using the -- operator.

    // It is also called as a Prefix Increment Operator. It is used to increase the value of a variable by 1 before the current operation is performed. It can also be used to decrease the value of a variable by 1 before the current operation is performed using the -- operator.

    --gameCounter; // it will decrement the value of gameCounter by 1. It is used to decrease the value of a variable by 1 before the current operation is performed. It can also be used to increase the value of a variable by 1 before the current operation is performed using the ++ operator.

    // It is also called as a Prefix Decrement Operator. It is used to decrease the value of a variable by 1 before the current operation is performed. It can also be used to increase the value of a variable by 1 before the current operation is performed using the ++ operator.
    

    
    console.log(gameCounter); 

