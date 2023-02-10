// Decorators
function Logger(logString: string) {

    return function (target: Function) {
        console.log(logString)
        console.table(target)
    }

}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {

        const hookEl = document.getElementById(hookId)
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector("h1")!.innerText = p.name
        }

    }
}


// @Logger("LOGGING - PERSON")
@WithTemplate(`<h1>Hello form TypeScript</h1>`, "app")
class Person {
    name: string = "TypeScript";

    constructor() {
        console.log("Creating person object...")
    }
}

const person = new Person()

console.log(person)

function LogOne(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Logs(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
    console.log("Method decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)

}

function Log(target: any, name: string, descriptor: PropertyDescriptor) {

    console.log("Accessor decorator")
    console.log(target)
    console.log(name)
    console.log(descriptor)

}

class Product {
    @LogOne
    title: string;
    private _price: number;
    @Log
    set price(val: number) {
        if (val > 0) this._price = val
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    @Logs
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }
}