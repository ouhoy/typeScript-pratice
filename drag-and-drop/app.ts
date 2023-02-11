function $(selector: string, selectAll: boolean = false) {
    return selectAll ? document.querySelectorAll(selector) : document.querySelector(selector);
}

// Validation
interface Validatable {
    value: string | number,
    required: boolean,
    minLength?: number,
    maxLength?: number,
    max?: number,
    min?: number

}

function validateInputs(validatableInput: Validatable) {

    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null && typeof validatableInput.minLength === "string") {
        isValid = isValid && validatableInput.value.toString().length > validatableInput.minLength
    }
    if (validatableInput.minLength != null && typeof validatableInput.maxLength === "string") {
        isValid = isValid && validatableInput.value.toString().length < validatableInput.maxLength
    }

    if (validatableInput.minLength != null && typeof validatableInput.min === "number") {
        isValid = isValid && validatableInput.value > validatableInput.min
    }
    if (validatableInput.minLength != null && typeof validatableInput.max === "number") {
        isValid = isValid && validatableInput.value < validatableInput.max
    }


    return isValid
}

function autoBind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this)
        }
    }
    return adjustedDescriptor;
}


class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = $("#project-input")! as HTMLTemplateElement;
        this.hostElement = $("#app")! as HTMLDivElement;
        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = "user-input";

        this.titleInputElement = this.element.querySelector("#title")! as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector("#description")! as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector("#people")! as HTMLInputElement;

        this.configure()
        this.attach()

    }

    private gatherUserInput(): [string, string, number] | void {

        const enteredTitle = this.titleInputElement.value
        const enteredDescription = this.descriptionInputElement.value
        const enteredPeople = Number(this.peopleInputElement.value)

        const validatedTitle: Validatable = {
            value: enteredTitle,
            required: true,
            maxLength: 128,
            minLength: 8
        }
        const validatedDescription: Validatable = {
            value: enteredDescription,
            required: true,
            maxLength: 512,
            minLength: 8
        }
        const validatedPeople: Validatable = {
            value: enteredDescription,
            required: true,
            min: 1,
            max: 24
        }

        if (!validateInputs(validatedTitle) || !validateInputs(validatedDescription) || !validateInputs(validatedPeople)) {
            return alert("Please enter a valid input!")
        }

        return [enteredTitle, enteredDescription, Number(enteredPeople)]


    }

    @autoBind
    private submitHandler(event: Event) {

        event.preventDefault();
        const userInput = this.gatherUserInput()
        if (userInput) {

            const [title, description, people] = userInput;
            console.log(title, description, people)
            this.element.reset()


        }
    }

    private configure() {
        this.element.addEventListener("submit", this.submitHandler)
    }

    private attach() {

        this.hostElement.insertAdjacentElement("beforebegin", this.element)

    }
}

const projectInput = new ProjectInput();