const assertEqual = require('../assertEqual');

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
// console.log(assertEqual("Bootcamp", "Bootcamp"));
// console.log(assertEqual(2, 1));

const expect = require('chai').expect;

describe("#assertEqual", () => {
  it('returns "😁😁😁 Assertion Passed: 1 === 1" for 1 and 1', () => {
    expect(assertEqual(1, 1)).to.deep.equal("😁😁😁 Assertion Passed: 1 === 1");
  });
  it('returns "😡😡😡 Assertion Failed: "Lighthouse Labs" !== "Bootcamp" for "Lighthouse Labs" and "Bootcamp"', () => {
    expect(assertEqual("Lighthouse Labs", "Bootcamp")).to.deep.equal('😡😡😡 Assertion Failed: Lighthouse Labs !== Bootcamp');
  });
})