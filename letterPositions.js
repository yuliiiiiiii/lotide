const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
      return;
      // to exit the function
    }
  }
  console.log(`😁😁😁 Assertion Passed: ${array1} === ${array2}`);
};

const letterPositions = function(sentence) {
  let senLowerCase = sentence.toLowerCase();
  const results = {};
  for (let i = 0; i < senLowerCase.length; i++) {
    if (senLowerCase[i] !== " ") {
      if (results[senLowerCase[i]] === undefined) {
        results[senLowerCase[i]] = [i];
      } else if (results[senLowerCase[i]] !== undefined) {
        results[senLowerCase[i]].push(i);
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));
console.log(assertArraysEqual(letterPositions("hello")["l"], [2, 3]));