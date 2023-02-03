let arr = [2, 4, 1, 3, 7];

// map
const output = arr.map((e) => e.toString(2)); //convert to binary
console.log(output);

// filter
// const filterOutput = arr.filter((e) => e % 2);//odd value
const filterOutput = arr.filter((e) => e % 2 == 0); //even value

console.log(filterOutput);

// reduce

const a = [1, 2, 3, 4, 5];

function sumOfArray() {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
}

function findMax() {
  let max = a[0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }
  return max;
}

console.log(sumOfArray());
console.log(findMax());
/*
use reduce function
reduce function has to parameter => 
1. (acc -> just like sum & cur -> a[i])
2. acc initally value 
*/
const outputSum = a.reduce((acc, cur) => {
  return acc + cur;
}, 0);

const outputMaxValue = a.reduce((acc, cur) => {
  if (cur > acc) {
    acc = cur;
  }
  return acc;
}, 0);

console.log(outputSum);
console.log(outputMaxValue);

const users = [
  { firstName: "Kaushik", lastName: "Prajapati", age: 20 },
  { firstName: "Rutvik", lastName: "Patel", age: 20 },
  { firstName: "Jay", lastName: "Prajapati", age: 21 },
  { firstName: "Aryan", lastName: "Prajapati", age: 20 },
];

// output => firstName + " "+ lastName

const outputMap = users.map((e) => {
  return e.firstName + " " + e.lastName;
});

console.log(outputMap);

// { 20 : 2 , 21 : 1}

const outputReduce = users.reduce((acc, cur) => {
  if (acc[cur.age]) {
    acc[cur.age]++;
  } else {
    acc[cur.age] = 1;
  }

  return acc;
}, {});

console.log(outputReduce);

// return firstName => age is less than 21 using filter
const outputFilter = users.filter((e) => e.age < 21).map((e) => e.firstName);
console.log(outputFilter);

// using reduce
const outputLessThan21 = users.reduce((acc, cur) => {
  if (cur.age < 21) {
    acc[cur.firstName] = cur.age;
  }
  return acc;
}, {});

console.log(outputLessThan21);
