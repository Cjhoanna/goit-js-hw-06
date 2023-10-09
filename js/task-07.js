const input = document.querySelector("input");
const span = document.getElementById("text");

input.addEventListener("input", updateValue);
span.style = `font-size: ${input.value}px`;

function updateValue(e) {
    span.style = `font-size: ${e.target.value}px`;
}