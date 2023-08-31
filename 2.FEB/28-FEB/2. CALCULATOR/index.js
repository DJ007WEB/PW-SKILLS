let string = "";

const rows = document.getElementsByClassName("btn");

Array.from(rows).forEach((btn) => {
  btn.addEventListener("click", function (info) {
    if (info.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".display").innerHTML = string;
    } else if (info.target.innerHTML == "C") {
        string = "";
        document.querySelector(".display").innerHTML = string;
    } else {
      string += info.target.innerHTML;
      document.querySelector(".display").innerHTML = string;
    }
  });
});
