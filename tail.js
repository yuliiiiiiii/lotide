const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `😁😁😁 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😡😡😡 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(tail(words).length, 2));
console.log(assertEqual(tail(words)[0], "Lighthouse"));

