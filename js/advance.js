// =========================
// Closures
// =========================

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
      console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
  }
  
  const closureExample = outerFunction("outside");
  closureExample("inside");  // Outer: outside, Inner: inside
  
  // =========================
  // Callback Functions
  // =========================
  
  function fetchData(callback) {
    setTimeout(() => {
      callback("Data loaded!");
    }, 1000);
  }
  
  fetchData((data) => {
    console.log("Callback received:", data);
  });
  
  // =========================
  // Promises
  // =========================
  
  function getPromise() {
    return new Promise((resolve, reject) => {
      let success = true;
      if (success) {
        resolve("Promise resolved!");
      } else {
        reject("Promise rejected.");
      }
    });
  }
  
  getPromise()
    .then((msg) => console.log(msg))
    .catch((err) => console.error(err));
  
  // =========================
  // Async/Await
  // =========================
  
  async function asyncFunction() {
    try {
      const result = await getPromise();
      console.log("Async result:", result);
    } catch (err) {
      console.error("Async error:", err);
    }
  }
  
  asyncFunction();
  
  // =========================
  // Higher-Order Functions
  // =========================
  
  function operate(a, b, operation) {
    return operation(a, b);  // operation is a callback
  }
  
  const multiply = (x, y) => x * y;
  
  console.log("HOF result:", operate(4, 5, multiply)); // Output: 20
  
  // =========================
  // The 'this' keyword
  // =========================
  
  const user = {
    name: "Alice",
    greet: function () {
      console.log("Hello, my name is", this.name);
    },
  };
  
  user.greet(); // 'this' refers to 'user'
  
  // =========================
  // Arrow Functions vs Regular Functions
  // =========================
  
  const arrowVsRegular = {
    name: "ArrowTest",
    regularFunc: function () {
      console.log("Regular:", this.name);
    },
    arrowFunc: () => {
      console.log("Arrow:", this.name); // 'this' is NOT bound to the object
    },
  };
  
  arrowVsRegular.regularFunc(); // Works
  arrowVsRegular.arrowFunc();   // Undefined or empty
  
  // =========================
  // Prototypes
  // =========================
  
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function () {
    console.log("Hi, I'm", this.name);
  };
  
  const p1 = new Person("John");
  p1.sayHello();  // Hi, I'm John
  
  // =========================
  // ES6 Modules (Concept)
  // =========================
  
  // In real use, you'd split into separate files
  // Example:
  // export function greet(name) { return `Hello, ${name}` }
  // import { greet } from './greet.js'
  
  // =========================
  // Optional Chaining & Nullish Coalescing
  // =========================
  
  let student = {
    profile: {
      name: "Bob",
    },
  };
  
  console.log(student.profile?.name);      // Bob
  console.log(student.contact?.email);     // undefined, but no error
  console.log(student.age ?? "Not given"); // "Not given"
  
  // =========================
  // Destructuring with Defaults
  // =========================
  
  let { name: studentName = "Unknown", age = 18 } = student.profile;
  console.log("Student:", studentName, age);
  
  // =========================
  // Template Literals & Tagged Templates
  // =========================
  
  const tag = (strings, ...values) => {
    return strings[0] + values[0].toUpperCase();
  };
  
  const who = "you";
  console.log(tag`Hello ${who}`); // Output: Hello YOU
  
  // =========================
  // Dynamic Imports (in modern JS)
  // =========================
  
  // async function loadModule() {
  //   const module = await import('./math.js');
  //   console.log(module.add(2, 3));
  // }
  // loadModule();
  