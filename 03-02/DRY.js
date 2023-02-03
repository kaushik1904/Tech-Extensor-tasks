//----------- DRY => Don't repeat yourself
// const radius = [4, 5, 1, 2];

// const calculateArea = function () {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }

//   return output;
// };

// const calculateDiameter = function () {
//   const output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }

//   return output;
// };

// console.log(calculateArea());
// console.log(calculateDiameter());

/******************************************** */
//write this way
const radius = [4, 5, 1, 2];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

// calculate function are same as map
console.log(radius.map(area));
// if we want use function as exect map then use prototype
// Array.prototype.calculate ...

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
