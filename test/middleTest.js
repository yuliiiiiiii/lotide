const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
// console.log(assertArraysEqual(middle([1]), []));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));

const assert = require('chai').assert;

describe("#middle", () => {
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
})