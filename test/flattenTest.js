const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('should return an empty array if passed an empty array', () => {
    const inputArr = [];
    const expectedOutput = [];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  });

  it('should return the same array if passed an array with no nesting, such as [1, 2, 3, 4] for [1, 2, 3, 4]', () => {
    const inputArr = [1, 2, 3, 4];
    const expectedOutput = [1, 2, 3, 4]
    assert.deepEqual(flatten(inputArr), expectedOutput);
  })

  it('should return a flat array if passed an array with nested arrays within, such as [1, 2, 3, 4] for [1, 2, [3, 4]]', () => {
    const inputArr = [1, 2, [3, 4]];
    const expectedOutput = [1, 2, 3, 4]
    assert.deepEqual(flatten(inputArr), expectedOutput);
  })

  it('should return a flat array even if passed multiple levels of nesting, such as [1, 2, 3, 4, 5,6] for [1, [2, [3, [4, [5, 6]]]]]', () => {
    const inputArr = [1, [2, [3, [4, [5, 6]]]]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  })
})
// assertArraysEqual(flatten([]), []);
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten(["fox", ["bear", "rabbit"], "elephant"]), ["fox", "bear", "rabbit", "elephant"]);
// assertArraysEqual(flatten([2, 3, 4]), [2, 3, 4]);
// assertArraysEqual(flatten([2, "fox", true, [true, false], "bear"]), [2, "fox", true, true, false, "bear"]);
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 7]); // false, should fail
