// /* 1) Object Deep Comparison: Write a function that compares two objects deeply
//  and returns true if they are equal, and false otherwise. The function should handle nested 
//  objects and arrays. For example, given the objects
//  { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } }, the function should return true.
// */

// let object1 = { a: 1, 
//     b: { c: 2 } };
// let object2 = { a: 1, 
//     b: { c: 2 } };

// function deepComparison (object1, object2) {
//      // base case

//     if (object1 === object2) {
//         return true;
//     }

//     // if (typeof object1 !== "object" || object1 === null || typeof object2 !== "object" || object2 === null) {
//     //     return false;
//     // } // ეს თუ არ ვიცით, რომ ნამდვილად ობჯექთებთან გვაქვს საქმე.

//     let keys1 = Object.keys(object1);
//     let keys2 = Object.keys(object2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     for (let key of keys1) {
//         if (!keys2.includes(key) || !deepComparison(object1[key], object2[key])) {
//             return false;
//         }
     
//     }
   
//     return true;

// }

// console.log(deepComparison(object1, object2));

/*
/2)  Object Transformation: Write a function that takes an array of objects and 
transforms them into a single object. The transformation should use a specific 
property of each object as the key and another property as the value. For example,
 given the array [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], and using the id property as 
 the key and the name property as the value, the function should return { 1: 'Alice', 2: 'Bob' }.
*/

// const array = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }] // {1: alice, 2: bob}


// function arrayToObject (array) {
//     if (array.length === 0) {
//         return array;
//     }
//     let newObj = {};

//     for (object of array) {
//         if ("id" in object && "name" in object) {
//             let key = object.id; // 
//             let value = object.name;
//             newObj[key] = value; // ----- ეს გავიაროთ თემოსთან []

//         } else {
//             console.warn("object is missing required properties, skip: ", object);
//         }
       
//     }
//     return newObj;

// }
// console.log(arrayToObject(array));

/*
3)  Object Serialization: Write a function that serializes an object into a string representation. 
The serialization should handle nested objects and arrays. For example, given the object 
{ a: 1, b: { c: [2, 3] } }, the function should return the string "{ a: 1, b: { c: [2, 3] } }".

*/


// const obj = { a: 1, b: { c: [2, 3] } };


// function stringifyObj (obj) {

// let string = "";

//     for (let key in obj) {
//         if (string !== "") {
//             string += ", ";
//         }
//         string += key + ": ";

//         if (Array.isArray(obj[key])) {
//             string += "[" + obj[key].map(item => {
//                 return (typeof item === "object" && item !== null) ? stringifyObj(item) : item;
//             }).join(", ") + "]";
//         } else if (typeof obj[key] === "object" && obj[key] !== null) {
//             string += stringifyObj(obj[key]);
//         }  else {
//             string += obj[key]
//         }

//     }
//     return "{" + string + "}"


// } 

// console.log(stringifyObj(obj));


/*
4)  Object Prototype Extension: Write a function that
 extends an object's prototype with additional methods. 
 The additional methods should perform specific operations on 
 the object's properties. For example, extend the Array prototype with a 
 method called sum() that calculates the sum of all elements in the array.
*/

// function extendPrototype(constructor, methods) {

//     if (typeof constructor !== "function" || typeof methods !== "object") {
//         throw new Error ("Invalid arguments");
//     }

//     for (let method in methods) {
//         if (typeof methods[method] === "function" && !constructor.prototype[method]) {
//             constructor.prototype[method] = methods[method]
//         }

//     }

// }


// extendPrototype(Array, {
//     sum: function () {
//         return this.reduce((acc, curr) => acc + curr, 0);
//     },
//     avg: function () {
//         return this.sum() / this.length;
//     }

// })


// let array = [1,2,3,4,5]

// console.log(array.sum())


// straight-forward version for testing.

// Array.prototype.sum = function() {
//     return this.reduce((acc, curr) => acc + curr, 0);
// };

// Array.prototype.avg = function() {
//     return this.sum() / this.length;
// };

// let array = [1, 2, 3, 4, 5];
// console.log(array.sum());



/*
5) Object Inheritance: Implement a class hierarchy using 
object-oriented programming principles. Create a base class with 
common properties and methods, and then create child classes that
 inherit from the base class and add their own specific properties and methods.
*/ 

// class Pets {
//     constructor (breed, color) {
//         this.breed = breed;
//         this.color = color;
//     }
//         outside() {
//         console.log("Can't survive outside");
//     }
//     makenoise () {
//         console.log("generic noise")
//     }
      
// }

// class Dog extends Pets {
//     constructor (breed, color, noise) {
//         super(breed, color);
//         this.noise = noise;
//     }
//     makeNoise() {
//         console.log(this.noise)
//     }
//     bark () {
//         return this.noise;
//     }
// }

// class Cat extends Pets {
//     constructor (breed, color, noise) {
//         super(breed,color);
//         this.noise = noise;
//     }

//     makeNoise () {
//         return this.noise;
//     }
//     purr () {
//         console.log(this.noise)
//     }
// }

// let myDog = new Dog("Viszla", "Ginger", "Woof");

// console.log(myDog.bark())
// myDog.makeNoise();

// let myCat = new Cat("Stray", "Black", "Meow");
// console.log(myCat.makeNoise())
// myCat.purr();

