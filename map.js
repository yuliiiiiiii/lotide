// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};
module.exports = map;


// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word[1]);
// const results3 = map(words, word => word.length);
// console.log(results1);
// console.log(results2);
// console.log(results3);

// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(results2, ["r", "o", "o", "a", "o"]);
// assertArraysEqual(results3, [6, 7, 2, 5, 3]);