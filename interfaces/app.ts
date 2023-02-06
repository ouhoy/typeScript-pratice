interface Person {
    readonly  name: string,
    age?: number,

    greet(phrase: string): void;
}

let personOne: Person;

personOne = {
    name: "Abdellah",
    age: 23,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name} ${this.age} years old!!`);
    }
}

personOne.greet("Hi there - I am")

class User implements Person {
    constructor(public name: string, public age: number) {
    }

    greet(phrase: string) {
        if (!this.age) this.age = 20;
        console.log(`${phrase} ${this.name} ${this.age} years old!!`);
    }


}

const userOne = new User("Abdellah", 23)
userOne.greet("Hi there - I am")

type Admin = {
    name: string,
    privileges: string[]
}


type Employee = {
    name: string,
    startDate: Date,
}

type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
    name: "Abdellah",
    privileges: [],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {

    // Using type guards 
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}