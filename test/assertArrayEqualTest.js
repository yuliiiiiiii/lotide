const assertArraysEqual = require('../assertArraysEqual');

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
// console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']));
// console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]));

const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it ('returns "😁😁😁 Assertion Passed: 1,2,3 === 1,2,3" for [1, 2, 3] and [1, 2, 3]', () => {
    assert.deepEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]),'😁😁😁 Assertion Passed: ["1", "2", "3"] === ["1", "2", "3"]');
    // This line does not work! it says (assertArraysEqual([1, 2, 3], [1, 2, 3]) is undefined!
  });

})