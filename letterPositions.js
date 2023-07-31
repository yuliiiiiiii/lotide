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

let letterPositions = function(sentence) {
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