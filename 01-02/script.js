// alert("hello");

// comment code
// /**/

var firstName = "Kaushik";

// document.write("hello");

console.log(firstName);

myFunction();

function myFunction() {
  console.log("hello " + firstName);
}

add(10, 15);

function add(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}

// value return function
console.log("Multification : 10 * 20 = " + mul(10, 20));
function mul(a, b) {
  return a * b;
}

// if else
var a = 20;
var haveVoterIdCard = true;

// && , || , !
if (a >= 18 && haveVoterIdCard) {
  console.log("user is eligible for voting");
} else {
  console.log("user is not eligible for voting");
}

// switch
var b = 1;
switch (b) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log("not matching");
}

// ternary
var value = b == 1 ? "yes" : "no";
console.log(b);

function dice() {
  // math random function
  console.log("dice value = " + Math.round(Math.random() * 5 + 1));
}

// loops
// while loop
var c = 1;
while (c < 5) {
  document.write("value of c = " + c + "<br/>");
  c++;
}

// for loop
for (let i = 1; i <= 5; i++) {
  document.write("value of i = " + i + "<br/>");
}

// arrays
var arr = [1, 2, 3, "hello"];

console.log(arr[3] + " " + typeof arr[3]);
console.log(arr[1] + " " + typeof arr[1]);

// object
var obj = {
  name: "kaushik",
  age: 20,
};

console.log(obj.name);
