const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
     // backtick to make template literals, usd ${} to embede argument
  } else {
    return `😡😡😡 Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertEqual;


