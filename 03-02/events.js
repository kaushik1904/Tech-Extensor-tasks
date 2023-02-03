// events
// events take so many space in memory
function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function x() {
    console.log("click me " + count++);
  });
}
attachEventListeners();
