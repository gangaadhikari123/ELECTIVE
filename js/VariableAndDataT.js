//Declearing Variables
let name="Ganga"; //can be reassigned
const age = 25;
var legacy = true;

<div> 
    <div class="flex item-center gap-2 mb-2">
        <div class="i-carbon-type-yellow-600"></div>
        <span class="font-bold">Common Data Types</span>
    </div>
</div>
//Data type
const text= "Hello";//String
const num= 42; //Number
const isActive =true; //Boolean
const user={
    name: "Bob",
    age: 30
};
const colors =["red","blue"];//Array
//Set- unique values collection
const uniqueNumbers = new Set([1,2,3,4,4,3]);
console.log([...uniqueNumbers]);
//Map-key-value pairs (any type as key)
const userRoles = new Map();
userRoles.set('alice','admin');
userRoles.set('bob','editor');
console.log(userRoles.get('alice'));