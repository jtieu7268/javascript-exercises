const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(add, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	let acc = 1;
  for (let i = num; i > 0; i--) {
    acc *= i;
  }
  return acc;
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
