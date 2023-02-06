"use strict";
let personOne;
personOne = {
    name: "Abdellah",
    age: 23,
    greet(phrase) {
        console.log(`${phrase} ${this.name} ${this.age} years old!!`);
    }
};
personOne.greet("Hi there - I am");
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        if (!this.age)
            this.age = 20;
        console.log(`${phrase} ${this.name} ${this.age} years old!!`);
    }
}
const userOne = new User("Abdellah", 23);
userOne.greet("Hi there - I am");
const emp1 = {
    name: "Abdellah",
    privileges: [],
    startDate: new Date()
};
function add(a, b) {
    // Using type guards 
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
