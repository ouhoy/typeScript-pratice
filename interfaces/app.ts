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

enum Privileges {FullAccess = 0, Edit = 1, View = 2}

const userOne = new User("Abdellah", 23)
userOne.greet("Hi there - I am")

type Admin = {
    name: string,
    privileges: [Privileges]
}


type Employee = {
    name: string,
    startDate: Date,
}

// interface ElevatedEmployee extends Admin, Employee{};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const emp1: ElevatedEmployee = {
    name: "Abdellah",
    privileges: [Privileges.FullAccess],
    startDate: new Date()
}
const emp2: ElevatedEmployee = {
    name: "Dahmou",
    privileges: [Privileges.Edit],
    startDate: new Date()
}

type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {

    // Using type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

add(1, "1");


function printEmployeeInformation(employee: UnknownEmployee) {

    console.log(`Name: ${employee.name}`)

    // Property guards
    if ("privileges" in employee) console.log(`Privileges: ${employee.privileges}`)
    if ("startDate" in employee) console.log(`Privileges: ${employee.startDate}`)
}

printEmployeeInformation(emp1)
printEmployeeInformation(emp2)
printEmployeeInformation({name: "James", privileges: [Privileges.View]})

class Truck {
    drive() {
        console.log("Driving a truck...")
    }

    loadCargo() {
        console.log("loading cargo...")
    }
}

class Car {
    drive() {
        console.log("Driving a car...")
    }
}

type Vehicle = Car | Truck;

const v1 = new Truck;
const v2 = new Car;

function userVehicle(vehicle: Vehicle): void {


    // Class methods guard
    if (vehicle instanceof Truck) {
        vehicle.loadCargo()
        vehicle.drive()
        return
    }

    vehicle.drive()

}

userVehicle(v1)
userVehicle(v2)

interface Bird {
    type: "bird";
    flyingSpeed: number
}

interface Horse {
    type: "horse";
    runningSpeed: number
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
    let speed;

    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed
            break
        case "horse":
            speed = animal.runningSpeed

    }

    console.log(`Moving with speed: ${speed}`)
}

moveAnimal({type: "bird", flyingSpeed: 23})

const userInput = document.getElementById("user-input")! as HTMLInputElement;

userInput.value = "Hello from typeScript";