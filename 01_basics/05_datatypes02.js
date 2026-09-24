// How many types of data types are there in JS? There are 7 primitive data types and 3 non-primitive data types in JavaScript. 
// The primitive data types are: string, number, boolean, undefined, null, symbol, and BigInt. 
// The non-primitive data types are: object, array, and function. 

// What is symbol? Symbol is a primitive data type that represents a unique and immutable value. 
// It is often used as a key for object properties to avoid name collisions. 
// Each time you create a new symbol, it is guaranteed to be unique.

// What is BigInt? BigInt is a primitive data type that can represent integers with arbitrary precision.
//  It is used to store large integers that cannot be represented by the Number data type. 
// It is created by appending 'n' to the end of an integer literal or by calling the BigInt() constructor.

// What is null? Null is a special value that represents the absence of any object value.
//  It is used to indicate that a variable has no value or that an object property does not exist. 
// It is often used as a placeholder for an object that will be assigned later. 

// Primitives data types are call by value. It means that when we assign a primitive value to a variable, the variable stores the actual value of the primitive data types.
//  When we assign a primitive value to another variable, the new variable gets a copy of the value, and any changes made to the new variable do not affect the orginal variable.

// Non-primitives data types are call by reference. 
// It means that when we assign a non-primitive value to a variable, the variable stores a reference to the value of the non-primitive data types.
//  When we assign a non-primitive value to another variable, the new variable gets a reference to the same value, and any changes made to the new variable affect the orginal variables. 

// What is Object ? Objects are variables that can store both values and functions. 
// Objects are one of the most important concepts in JavaScript. If you understand objects, you understand JavaScript. 


const score = 100;

console.log(score);

// const score = false; - - - console.log(score); 


const scoreValue = 100.3;

console.log(scoreValue);


const isLoggedIn = false;

console.log(isLoggedIn);

const outsideTemp = null;

console.log(outsideTemp);

let userEmail;

// we so write like this = let userEmail = undefined;


console.log(userEmail);

const id = Symbol("123");
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);

console.log(id === anotherId);


const bigNumber = 33409022205;

console.log(bigNumber);
console.log(typeof bigNumber);

// const bigNumber = 2323234587569n;  "n" is convert the number in Bigint.

// Array , Object, Functions 

// what is array in js? Array are those which are used to store multiple values in a single variable.

// what is object? Object is a collection of key-value pairs.

// what is Function? Functions are those which are used to perform a specific task. 


const heros = ["Ironman", "Thor", "Spiderman"];
console.log(heros);

let obj = {
    name: "Rahul",
    age: 21,
    city: "Kolkata"
}
console.log(obj);

const myFunction = function () {
    console.log("Hello World")
}
console.log(myFunction);
console.log(typeof myFunction);


// +++++++++++++++++++++++++++++++++++++++++ Stack And Heap +++++++++++++++++++++++++++++++++


// Stack is a premetive data types. 

// Heap is a non-premetive data types.

