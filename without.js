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

const without = function (source, itemsToRemove) {
  let newArray = source.filter(item => !itemsToRemove.includes(item));
  return newArray;
}

const source1 = [1, 2, 3];
const source2 = ["1", "2", "3"];
const source3 = ["hello", "world", "lighthouse"];

console.log(assertArraysEqual(without(source1, [1]), [2, 3]));
console.log(assertArraysEqual(without(source2, [1, 2, "3"]), ["1", "2"]));
console.log(assertArraysEqual(without(source3, ["hello","lighthouse"]), ["world"]));
console.log(assertArraysEqual(source1, [1, 2, 3]));
console.log(assertArraysEqual(source2, ["1", "2", "3"]));
console.log(assertArraysEqual(source3, ["hello", "world", "lighthouse"]));