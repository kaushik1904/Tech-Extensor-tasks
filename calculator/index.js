let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".btn"));
// console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;
    
    if (value == "C") {
      display.innerHTML = " ";
    } else if (value == "=") {
      try {
        display.innerHTML = eval(display.innerHTML);
      } catch {
        display.innerHTML = "ERROR!";
      }
    } else {
      display.innerHTML += value;
    }
  });
});
