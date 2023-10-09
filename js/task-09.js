var button = document.getElementById("change-button");

button.addEventListener("click", function(){
    let color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
    document.body.style.backgroundColor = color;
    document.getElementById("code-color").innerHTML = color;
}, false);
