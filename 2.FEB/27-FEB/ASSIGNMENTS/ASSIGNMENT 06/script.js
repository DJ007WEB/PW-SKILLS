
let kUp = document.getElementById("kUp");
let kDown = document.getElementById("kDown");


document.addEventListener("keydown", function (e) {
    kUp.innerText = e.key + " is keyDown";
});


document.addEventListener("keyup", function (e) {
  kDown.innerText = e.key + " is keyUp";
});




// function doit(e) {
//     document.getElementById("kUp").style.background = "red";
// }

// function fun(e) {
//     document.getElementById("kDown").innerText = e.key + " This is key down";
// }