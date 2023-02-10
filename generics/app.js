"use strict";
// const names: Array<string> = [];
// A promise knows which data it returns
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 5000);
});
promise.then(data => console.log(data));
// Here generic types lock in a type
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "james" }, { age: 23 });
console.log(mergedObj);
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "TypeScript" }, "name");
class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
// Getting only strings
const textStorage = new DataStorage();
textStorage.addItem("JavaScript");
textStorage.addItem("NodeJS");
textStorage.removeItem("NodeJS");
console.log(textStorage.getItems());
//Getting only numbers
const numberStorage = new DataStorage();
numberStorage.addItem(1337);
numberStorage.addItem(101);
numberStorage.removeItem(101);
console.log(numberStorage.getItems());
function courseGoal(title, description, completeUnit) {
    // Partial allows my interface's properties to be optional
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUnit = completeUnit;
    return courseGoal;
}
courseGoal("TypeScript crash course.", "Learn TypeScript with this 15hrs course.", new Date());
const lang = ["JS", "TS", "CPP"];
console.log(lang);
