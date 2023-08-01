const eqArrays = require('../eqArrays');
// const assertEqual = require('../assertEqual');

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));

const assert = require('chai').assert;
 describe("#eqArrays", () => {
  it('returns true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it('returns false for [1, 2, 3] and [3, 2, 1]', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it('returns false for ["1", "2", "3"] and ["1", "2", 3]', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });
 })