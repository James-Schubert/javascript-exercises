const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(numArray) {
	let sum = 0;
  numArray.forEach(num => sum+=num);
  return sum;
};

const multiply = function(numArray) {
  let product = 1;
  numArray.forEach(num => product *= num);
  return product;
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num) {
	let result = 1;
  while (num > 0){
    result *= num;
    num--;
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
