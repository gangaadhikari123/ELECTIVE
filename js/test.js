// ========================
// Variables and Data Types
// ========================

let name = "Ganga";           // String variable
const age = 20;               // Constant number variable
var isStudent = true;         // Boolean variable (using old 'var')

// ========================
// Data Structures
// ========================

let numbers = [1, 2, 3, 4, 5];  // Array
let person = {                 // Object
  firstName: "Alice",
  lastName: "Smith",
  age: 25
};

// ========================
// Functions
// ========================

function greet(userName) {
  return "Hello, " + userName + "!";
}

let greeting = greet(name);    // Call function and store result
console.log(greeting);         // Output: Hello, Alice!

// ========================
// Control Flow
// ========================

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// ========================
// Loops
// ========================

for (let i = 0; i < numbers.length; i++) {
  console.log("Number at index", i, "is", numbers[i]);
}

// For-of loop (simpler syntax)
for (let num of numbers) {
  console.log("For-of number:", num);
}

// While loop
let count = 0;
while (count < 3) {
  console.log("Count is:", count);
  count++;
}

// ========================
// Arrow Functions
// ========================

const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));  // Output: 8

// ========================
// Classes and Objects
// ========================

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }
}

let dog = new Animal("Dog");
dog.speak();  // Output: Dog makes a noise.

// ========================
// Try-Catch for Error Handling
// ========================

try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.log("Caught error:", err.message);
}

// ========================
// ES6 Features: Destructuring
// ========================

let [first, second] = numbers;
console.log("First two numbers:", first, second);

// Object destructuring
let { firstName, age: userAge } = person;
console.log("Destructured:", firstName, userAge);

// ========================
// JSON (JavaScript Object Notation)
// ========================

let jsonStr = JSON.stringify(person);    // Convert object to JSON string
console.log("JSON String:", jsonStr);

let parsedPerson = JSON.parse(jsonStr);  // Convert JSON string back to object
console.log("Parsed Object:", parsedPerson);

// ========================
// Date
// ========================

let now = new Date();
console.log("Current Date and Time:", now.toString());

// ========================
// Set and Map (ES6 Collections)
// ========================

let uniqueNumbers = new Set([1, 2, 2, 3]);
console.log("Set contents:", uniqueNumbers);

let userMap = new Map();
userMap.set("id", 101);
userMap.set("name", "Alice");
console.log("Map contents:", userMap);
