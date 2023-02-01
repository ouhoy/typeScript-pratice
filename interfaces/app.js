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
        console.log(`${phrase} ${this.name} ${this.age} years old!!`);
    }
}
const userOne = new User("Abdellah", 23);
userOne.greet("Hi there - I am");
