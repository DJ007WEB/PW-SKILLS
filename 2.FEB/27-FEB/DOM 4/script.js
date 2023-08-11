

const button = document.getElementById("btn");


const randomColour = ()=> {
    let val = "0123456789ABCDEF";

    let cons = "#";

    for(let i = 0; i < 6; i++) {
        cons += val[Math.floor(Math.random()*16)];
    }
    return cons;
}

button.addEventListener("click", changeBg)

function changeBg() {
    document.body.style.background = randomColour();
}

// console.log(randomColour());
