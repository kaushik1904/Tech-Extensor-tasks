// strings methods
let text = "lorem ipsum dolor sit amet, consectetur adip";
console.log(text);
console.log(text.length);

console.log("slice : " + text.slice(0, 5));
console.log("substring : " + text.substr(0, 4));
console.log("replace : " + text.replace("lorem", "lorem2"));

var age = 20;

console.log(`User age : ${age}`);

var a, b;
function takeValue() {
  a = parseInt(document.querySelector(".value1").value);
  b = parseInt(document.querySelector(".value2").value);
}

function add() {
  takeValue();
  document.querySelector(".ans").innerHTML = a + b;
}
function sub() {
  takeValue();
  document.querySelector(".ans").innerHTML = a - b;
}
function mul() {
  takeValue();
  document.querySelector(".ans").innerHTML = a * b;
}
function div() {
  takeValue();
  document.querySelector(".ans").innerHTML = a / b;
}

// arrays
var arr = [1, 3, 2, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
// push
arr.push(16);
console.log(arr);
// pop
arr.pop();
console.log(arr);

// sort
arr.sort();
console.log("sorted array : " + arr);
// reverse
arr.reverse();
console.log("reverse array : " + arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); //tostring
console.log(fruits.join(" ")); //join

// shift -> remove the first element of array
console.log(fruits.shift());

// The unshift() method adds a new element to an array (at the beginning)
console.log(fruits.unshift("Lemon"));
console.log(fruits);

// foreach

