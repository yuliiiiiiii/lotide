const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word.length);
console.log(results1);
console.log(results2);
console.log(results3);

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`😁😁😁 Assertion Passed: ${array1} === ${array2}`);
  }
  if (!eqArrays(array1,array2)) {
    console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
  }
}

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["r", "o", "o", "a", "o"]);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);