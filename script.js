const a = 12;

const heading = document.getElementById("heading");
const message = document.getElementById("message");
const button = document.getElementById("button");

heading.textContent = `Hello! The value of a is ${a}`;

button.addEventListener("click", function () {
    message.textContent = `You clicked the button! a = ${a}`;
});
