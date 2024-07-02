const add = function (num1, num2) {
  return num1 + num2
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  return numArray.reduce((sum1, num) => sum1 + num, 0);
};

const multiply = function (numArray) {
  return numArray.reduce((prod, num) => prod * num, 1)
};

const power = function (num1, num2) {
  return num1 ** num2
};

const factorial = function (num) {
  let p = 1;
  for (let x = 1; x <= num; x++) {
    p *= x;
  }
  return p;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
