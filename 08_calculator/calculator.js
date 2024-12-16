const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, next) => sum += next, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let result = 1;
  for (i = a; i > 0; i--) {
    result *= i;
  }
	return result;
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
