interface Person {
    name: string,
    age: number,

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
        console.log(`${phrase} ${this.name} ${this.age} years old!!`);
    }


}

const userOne = new User("Abdellah", 23)
userOne.greet("Hi there - I am")