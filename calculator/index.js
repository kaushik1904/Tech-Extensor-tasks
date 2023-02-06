let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".btn"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value == "C") {
      display.innerHTML = " ";
    }else if(value == "Delete"){
      display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-1);
    } else if (value == "=") {
      // display.innerHTML = withEval(display.innerHTML);
      display.innerHTML = withoutEval(display.innerHTML);
    } else {
      display.innerHTML += value;
    }
  });
});

// with eval() function
function withEval(exp){
  return eval(exp);
}

// without eval() function
function withoutEval(exp) {

  let tokens = exp.split("");
  let values = [];

  let operations = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] == " ") {
      continue;
    }
    if (tokens[i] >= "0" && tokens[i] <= "9") {
      let val = "";
      while (i < tokens.length && tokens[i] >= "0" && tokens[i] <= "9") {
        val = val + tokens[i++];
      }
      values.push(parseInt(val, 10));

      i--;
    } else if (tokens[i] == "(") {
      operations.push(tokens[i]);
    } else if (tokens[i] == ")") {
      while (operations[operations.length - 1] != "(") {
        values.push(op(operations.pop(), values.pop(), values.pop()));
      }
      operations.pop();
    } else if (
      tokens[i] == "+" ||
      tokens[i] == "-" ||
      tokens[i] == "*" ||
      tokens[i] == "/"
    ) {
      while (operations.length > 0 && precedenceVal(tokens[i], operations[operations.length - 1])) {
        values.push(op(operations.pop(), values.pop(), values.pop()));
      }

      operations.push(tokens[i]);
    }
  }

  while (operations.length > 0) {
    values.push(op(operations.pop(), values.pop(), values.pop()));
  }

  return values.pop();
}

function precedenceVal(op1, op2) {
  if (op2 == "(" || op2 == ")") {
    return false;
  }
  if ((op1 == "*" || op1 == "/") && (op2 == "+" || op2 == "-")) {
    return false;
  } else {
    return true;
  }
}

function op(op, b, a) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return parseInt(a / b, 10);
  }
}
