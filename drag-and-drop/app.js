"use strict";
function $(selector, selectAll) {
    if (selectAll === void 0) { selectAll = false; }
    return selectAll ? document.querySelectorAll(selector) : document.querySelector(selector);
}
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = $("#project-input");
        this.hostElement = $("#id");
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        console.log(this.element);
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement("beforebegin", this.element);
    };
    return ProjectInput;
}());
var projectInput = new ProjectInput();
//# sourceMappingURL=app.js.map