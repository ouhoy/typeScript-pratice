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
function LogOne(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function Logs(target, name, descriptor) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class Product {
    title;
    _price;
    set price(val) {
        if (val > 0)
            this._price = val;
    }
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    LogOne
], Product.prototype, "title", void 0);
__decorate([
    Log
], Product.prototype, "price", null);
__decorate([
    Logs
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map