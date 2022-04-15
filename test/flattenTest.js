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
    const expectedOutput = [1, 2, 3, 4];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  });

  it('should return a flat array if passed an array with nested arrays within, such as [1, 2, 3, 4] for [1, 2, [3, 4]]', () => {
    const inputArr = [1, 2, [3, 4]];
    const expectedOutput = [1, 2, 3, 4];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  });

  it('should return a flat array even if passed multiple levels of nesting, such as [1, 2, 3, 4, 5,6] for [1, [2, [3, [4, [5, 6]]]]]', () => {
    const inputArr = [1, [2, [3, [4, [5, 6]]]]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  });

  it('should return a flat array even if passed strings such as ["test", "Lighthouse", "Labs"] for  ["test", ["Lighthouse", ["Labs"]]]', () => {
    const inputArr = ["test", ["Lighthouse", ["Labs"]]];
    const expectedOutput = ["test", "Lighthouse", "Labs"];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  });

  it('should return a flat array even if passed booleans, such as [false, true, false] for [false, [true, [false]]]', () => {
    const inputArr = [false, [true, [false]]];
    const expectedOutput = [false, true, false];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  });

  it('should return a flat array even if passed null or undefined, such as [null, undefined, null, undefined] for [null, [undefined, [null, [undefined]]]]', () => {
    const inputArr = [null, [undefined, [null, [undefined]]]];
    const expectedOutput = [null, undefined, null, undefined];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  });

  it('should return a flat array even if passed mixed strings, numbers, booleans, undefined or null within nested arrays', () => {
    const inputArr = ["one", true, [false, [undefined, 3], [null]]];
    const expectedOutput = ["one", true, false, undefined, 3, null];
    assert.deepEqual(flatten(inputArr), expectedOutput);
  });

});
