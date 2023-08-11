

const randomColor = ()=> {

    let val = "0123456789ABCDEF";

    let hexColor = "#";

    for(let j = 0; j < 6; j++) {

        hexColor += val[Math.floor(Math.random()*16)];
    }

    return hexColor;
}

// console.log(randomColor());

function changeCol() {
    document.body.getElementsByClassName("col")[0].style.background = randomColor();
}



