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