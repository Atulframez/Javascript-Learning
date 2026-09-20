let score = "33"; // let score = "33atul"; // this will give NaN because "33atul" is not a valid number. It is a string data type. string is a sequence of characters. It is used to represent text. It is enclosed in single quotes, double quotes, or backticks.

console.log(score + 1) // "331"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // convert string to number

console.log(valueInNumber + 1) // 34
console.log(typeof valueInNumber);
console.log(valueInNumber);