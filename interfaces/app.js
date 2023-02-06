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
var Privileges;
(function (Privileges) {
    Privileges[Privileges["FullAccess"] = 0] = "FullAccess";
    Privileges[Privileges["Edit"] = 1] = "Edit";
    Privileges[Privileges["View"] = 2] = "View";
})(Privileges || (Privileges = {}));
const userOne = new User("Abdellah", 23);
userOne.greet("Hi there - I am");
const emp1 = {
    name: "Abdellah",
    privileges: [Privileges.FullAccess],
    startDate: new Date()
};
const emp2 = {
    name: "Dahmou",
    privileges: [Privileges.Edit],
    startDate: new Date()
};
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric
function add(a, b) {
    // Using type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
add(1, "1");
function printEmployeeInformation(employee) {
    console.log(`Name: ${employee.name}`);
    // Property guards
    if ("privileges" in employee)
        console.log(`Privileges: ${employee.privileges}`);
    if ("startDate" in employee)
        console.log(`Privileges: ${employee.startDate}`);
}
printEmployeeInformation(emp1);
printEmployeeInformation(emp2);
printEmployeeInformation({ name: "James", privileges: [Privileges.View] });
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo() {
        console.log("loading cargo...");
    }
}
class Car {
    drive() {
        console.log("Driving a car...");
    }
}
const v1 = new Truck;
const v2 = new Car;
function userVehicle(vehicle) {
    // Class methods guard
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
        vehicle.drive();
        return;
    }
    vehicle.drive();
}
userVehicle(v1);
userVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log(`Moving with speed: ${speed}`);
}
moveAnimal({ type: "bird", flyingSpeed: 23 });
const userInput = document.getElementById("user-input");
userInput.value = "Hello from typeScript";
const errorContainer = {
    email: "Not a valid email!!",
    userName: "Username can't contain numbers or special characters",
    password: "The password must contain at least 8 characters."
};
console.log(errorContainer);
