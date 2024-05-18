import Goke from "./js2";
import "./style/main.scss";
import svg from "./assets/svg.svg";
let img = document.getElementById("svg");
img.src = svg;

let btn = document.getElementById("jokeBtn");
btn.addEventListener("click", () => {
  Goke();
});

console.log("asdf");
