"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators
function Logger(logString) {
    return function (target) {
        console.log(logString);
        console.table(target);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").innerText = p.name;
        }
    };
}
// @Logger("LOGGING - PERSON")
let Person = class Person {
    name = "TypeScript";
    constructor() {
        console.log("Creating person object...");
    }
};
Person = __decorate([
    WithTemplate(`<h1>Hello form TypeScript</h1>`, "app")
], Person);
const person = new Person();
console.log(person);
//# sourceMappingURL=app.js.map