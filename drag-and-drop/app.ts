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

function $(selector: string, selectAll: boolean = false) {
    return selectAll ? document.querySelectorAll(selector) : document.querySelector(selector);
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
        const enteredPeople = this.peopleInputElement.value

        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || Number(enteredPeople) < 0) {
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