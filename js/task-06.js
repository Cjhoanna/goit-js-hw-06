const text = document.querySelector('input[type="text"]');

text.addEventListener("blur", (event) => {
  if(event.target.value.length.toString() === event.target.getAttribute("data-length").toString()){
    event.target.style.borderColor = "#4caf50";
  } else {
    event.target.style.borderColor = "#f44336";
  }
});
