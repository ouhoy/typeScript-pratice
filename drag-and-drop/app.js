"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function $(selector, selectAll) {
    if (selectAll === void 0) { selectAll = false; }
    return selectAll ? document.querySelectorAll(selector) : document.querySelector(selector);
}
function validateInputs(validatableInput) {
    var isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.minLength === "string") {
        isValid = isValid && validatableInput.value.toString().length > validatableInput.minLength;
    }
    if (validatableInput.minLength != null && typeof validatableInput.maxLength === "string") {
        isValid = isValid && validatableInput.value.toString().length < validatableInput.maxLength;
    }
    if (validatableInput.minLength != null && typeof validatableInput.min === "number") {
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if (validatableInput.minLength != null && typeof validatableInput.max === "number") {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}
function autoBind(target, methodName, descriptor) {
    var originalMethod = descriptor.value;
    var adjustedDescriptor = {
        configurable: true,
        get: function () {
            return originalMethod.bind(this);
        }
    };
    return adjustedDescriptor;
}
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = $("#project-input");
        this.hostElement = $("#app");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.titleInputElement = this.element.querySelector("#title");
        this.descriptionInputElement = this.element.querySelector("#description");
        this.peopleInputElement = this.element.querySelector("#people");
        this.configure();
        this.attach();
    }
    ProjectInput.prototype.gatherUserInput = function () {
        var enteredTitle = this.titleInputElement.value;
        var enteredDescription = this.descriptionInputElement.value;
        var enteredPeople = Number(this.peopleInputElement.value);
        var validatedTitle = {
            value: enteredTitle,
            required: true,
            maxLength: 128,
            minLength: 8
        };
        var validatedDescription = {
            value: enteredDescription,
            required: true,
            maxLength: 512,
            minLength: 8
        };
        var validatedPeople = {
            value: enteredDescription,
            required: true,
            min: 1,
            max: 24
        };
        if (!validateInputs(validatedTitle) || !validateInputs(validatedDescription) || !validateInputs(validatedPeople)) {
            return alert("Please enter a valid input!");
        }
        return [enteredTitle, enteredDescription, Number(enteredPeople)];
    };
    ProjectInput.prototype.submitHandler = function (event) {
        event.preventDefault();
        var userInput = this.gatherUserInput();
        if (userInput) {
            var title = userInput[0], description = userInput[1], people = userInput[2];
            console.log(title, description, people);
            this.element.reset();
        }
    };
    ProjectInput.prototype.configure = function () {
        this.element.addEventListener("submit", this.submitHandler);
    };
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("beforebegin", this.element);
    };
    __decorate([
        autoBind
    ], ProjectInput.prototype, "submitHandler", null);
    return ProjectInput;
}());
var projectInput = new ProjectInput();
//# sourceMappingURL=app.js.map