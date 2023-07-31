const eqObjects = function(object1, object2) {
  let key1array = Object.keys(object1);
  let key2array = Object.keys(object2);
if (key1array.length !== key2array.length) {
  return false;
};

  for (let key1 of key1array) {
    if (!Array.isArray(object1[key1])) {
      if (object1[key1] !== object2[key1]) {
        return false;
      };
    };
    if (Array.isArray(object1[key1])) {
      return eqArrays(object1[key1], object2[key1]);
     };
  };
  return true;
} 

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

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`😁😁😁 Assertion Passed: ${actual} === ${expected}`)
  }
  if (!eqObjects(actual, expected)) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`)
  }
}

let actual = {a: '1', b: 2 };
let expected = { b: 2, a: '1' };
console.log(assertObjectsEqual(actual, expected));