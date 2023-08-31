

document.getElementById("btn").addEventListener("click", function() {

    let firstPass = document.getElementById("no1").value;

    let rePass = document.getElementById("no2").value;

    if(firstPass === rePass) {
        console.log("PASSWORD MATCHED");
    } else {
        console.log("PASSWORD DOES NOT MATCH");
    }

})