const input = document.querySelector("input");
const log = document.getElementById("name-output");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
  if (e.target.value === '') {
    log.textContent = 'Anonymous';
  }
}