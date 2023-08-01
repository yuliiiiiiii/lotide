// const eqArrays = require('./eqArrays');

// const assertArraysEqual = function(array1, array2) {
  //   if (eqArrays(array1, array2)) {
    //     console.log(`😁😁😁 Assertion Passed: ${array1} === ${array2}`);
    //   }
    //   if (!eqArrays(array1,array2)) {
      //     console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
      //   }
      // }
      
const eqObjects = require('./eqObjects');
      
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😁😁😁 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  if (!eqObjects(actual, expected)) {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// let actual = {a: '1', b: 2 };
// let expected = { b: 2, a: '1' };
// console.log(assertObjectsEqual(actual, expected));