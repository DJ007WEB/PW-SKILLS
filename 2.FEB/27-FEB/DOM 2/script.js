

let x = document.createElement("h1");

x.className = "first";
x.style.color = "red";
x.style.fontSize = "40px";

x.textContent = "THIS IS ADDED BY JS"

document.body.appendChild(x);


let ul = document.querySelector("ul");

let list = document.querySelectorAll("li");

for(lis of list) {
    ul.removeChild(lis);
}