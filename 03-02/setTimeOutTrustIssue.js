// ----------- setTimeout trust issues
console.log("start");
setTimeout(function () {
  console.log("timeout");
}, 2000);
console.log("end");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 5000) {
  endDate = new Date().getTime();
}
console.log("while expired");