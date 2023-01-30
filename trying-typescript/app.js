"use strict";
function printResult(num) {
    console.log("Result: ", num);
}
printResult(add(1, 2));
function addAnotherHandle(n1, n2, cb) {
    const res = n1 + n2;
    cb(res);
}
addAnotherHandle(1, 2, (res) => console.log(res));
function generateError(message, code) {
    throw { message, code };
}
generateError("An error occurred", 500);
class Department {
    id;
    name;
    employees = [];
    constructor(id, n) {
        this.id = id;
        this.name = n;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        // validation etc
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("u1", 'Accounting');
