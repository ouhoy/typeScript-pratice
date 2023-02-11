function $(selector: string, selectAll: boolean = false) {
    return selectAll ? document.querySelectorAll(selector) : document.querySelector(selector);
}

class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor() {
        this.templateElement = $("#project-input")! as HTMLTemplateElement;
        this.hostElement = $("#id")! as HTMLDivElement;
        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement;
        console.log(this.element)
        this.attach()

    }

    private attach() {

        this.hostElement.insertAdjacentElement("beforebegin", this.element)

    }
}

const projectInput = new ProjectInput();