const without = require('../without');
const assert = require('chai').assert;

describe('#without', () => {

  it('should return [] for [1] and without parameter [1]', () => {
    const inputArr = [1];
    const expectedOutput = [];
    const withoutParam = [1];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  });
  it('should return [1, 2] for [1, 2, 3] and without parameter [3]', () => {
    const inputArr = [1, 2, 3];
    const expectedOutput = [1, 2];
    const withoutParam = [3];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  });

  it('should return [1, 2, 4] for [1, 2, 3, 4] with parameter [3]', () => {
    const inputArr = [1, 2, 3, 4];
    const expectedOutput = [1, 2, 4];
    const withoutParam = [3];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  });

  it('should return ["eggs", "and", "ham"] for ["green", "eggs", "and", "ham"] and parameter ["green]', () => {
    const inputArr = ["green", "eggs", "and", "ham"];
    const expectedOutput = ["eggs", "and", "ham"];
    const withoutParam = ["green"];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  });

  it('should return [false, false] for [false, true, false] and parameter [true]', () => {
    const inputArr = [false, true, false];
    const expectedOutput = [false, false];
    const withoutParam = [true];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  });

  it('should return [1, "and", undefined] for [1, true, "and", false, undefined] and parameter [true, false]', () => {
    const inputArr = [1, true, "and", false, undefined];
    const expectedOutput = [1, "and", undefined];
    const withoutParam = [true, false];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  });
});
