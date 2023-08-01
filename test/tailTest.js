const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// console.log(assertEqual(tail(words).length, 2));
// console.log(assertEqual(tail(words)[0], "Lighthouse"));

const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns ['Labs'] for ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Lighthouse", "Labs"]), ["Labs"]);
  });
  it("returns [] for ['Lighthouse']", () => {
    assert.deepEqual(tail(["Lighthouse"]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns 2 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns 'Lighthouse' for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"])[0], "Lighthouse");
  });
});

