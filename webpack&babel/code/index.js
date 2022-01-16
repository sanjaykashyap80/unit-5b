// console.log("Hello world")
import {add} from "./calc";
import("./index.css")

// function add(first, second){
//     return first + second
// }

console.log(add(3,5));
console.log(add(3,5));

const h1 = document.createElement("h1");
h1.innerText = "Hello Webpack";
h1.classList.add("redcolor")

document.getElementById("root").appendChild(h1);