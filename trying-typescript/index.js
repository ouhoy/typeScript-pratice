"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener("click", function () {
        console.log(add(Number(input1.value), Number(input2.value)));
    });
}
