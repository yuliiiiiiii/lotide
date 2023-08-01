// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

const without = function (source, itemsToRemove) {
  let newArray = source.filter(item => !itemsToRemove.includes(item));
  return newArray;
};

module.exports = without;


// const source1 = [1, 2, 3];
// const source2 = ["1", "2", "3"];
// const source3 = ["hello", "world", "lighthouse"];

// console.log(assertArraysEqual(without(source1, [1]), [2, 3]));
// console.log(assertArraysEqual(without(source2, [1, 2, "3"]), ["1", "2"]));
// console.log(assertArraysEqual(without(source3, ["hello","lighthouse"]), ["world"]));
// console.log(assertArraysEqual(source1, [1, 2, 3]));
// console.log(assertArraysEqual(source2, ["1", "2", "3"]));
// console.log(assertArraysEqual(source3, ["hello", "world", "lighthouse"]));