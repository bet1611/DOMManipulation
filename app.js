document.getElementById("container");
document.querySelector("#container");
document.getElementsByClassName("second")
document.querySelectorAll(".second")
document.querySelector("ol.third")
let foundDiv = document.querySelector("#container");
foundDiv.innerText = "Hello";

let footer = document.querySelector(".footer");
footer.classList.add("main");
footer.className += "main";

let footer = document.querySelector(".footer");
footer.classList.remove("main");

let newLi = document.createElement("li");

newLi.innerText = "four";

let list = document.querySelector("ul");
list.appendChild(newLi);

