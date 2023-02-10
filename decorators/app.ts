// Decorators
function Logger(logString: string) {

    return function (target: Function) {
        console.log(logString)
        console.table(target)
    }

}

function WithTemplate(template: string, hookId: string) {
    return function <T extends { new(..._: any[]): { name: string } }>(originalConstructor: T) {

        const hookEl = document.getElementById(hookId)

        return class extends originalConstructor {

            constructor(..._: any[]) {
                super();

                if (hookEl) {
                    hookEl.innerHTML = template
                    hookEl.querySelector("h1")!.innerText = this.name
                }
            }
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

function ParamLog(target: any, name: string | symbol, position: number) {

    console.log("Parameter decorator")
    console.log(target)
    console.log(name)
    console.log(position)


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
    getPriceWithTax(@ParamLog tax: number) {
        return this._price * (1 + tax)
    }
}

function AutoBind(target: any, methodName: string | symbol | number) {

}
class Printer {
    message = "This works";

    showMessage() {
        console.log(this.message)
    }
}

const printMessage = new Printer();

const btn = document.querySelector("button")!

btn.addEventListener("click", printMessage.showMessage.bind(printMessage))

