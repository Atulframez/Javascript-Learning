let score = "33"; // let score = "33atul"; // this will give NaN because "33atul" is not a valid number. It is a string data type. string is a sequence of characters. It is used to represent text. It is enclosed in single quotes, double quotes, or backticks.

// what is about Null case? Null case is a special case where the value of a variable is null. Qwhat will be conversion of null to number? it will be 0. beacause null is considered as an empty value. It is used to indicate that a variable has no value or that an object property does not exist. It is often used as a placeholder for an object that will be assigned later.

// what is about undefined case? Undefined case is a special case where the value of a variable is undefined. What will be conversion of undefined to number? it will be NaN because undefined is not a valid number. It is used to indicate that a variable has not been assigned a value. It is often used as a placeholder for a variable that will be assigned later.



console.log(score + 1) // "331"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // convert string to number

console.log(valueInNumber + 1) // 34
console.log(typeof valueInNumber);
console.log(valueInNumber);