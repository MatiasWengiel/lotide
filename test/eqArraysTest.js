const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true for two identical arrays such as [1, 2]', () => {
    const arr = [1, 2];
    const arrCopy = [1, 2];
    const expectedOutput = true;
    assert.equal(eqArrays(arr, arrCopy), expectedOutput);
  });

  it('should return false for two different arrays, such as [1, 2] and [2, 3]', () => {
    const arr = [1, 2];
    const arrTwo = [2, 3];
    const expectedOutput = false;
    assert.equal(eqArrays(arr, arrTwo), expectedOutput);
  });

  it('should return false for two arrays with the same values in different order', () => {
    const arr = [1, 2];
    const arrReversed = [2, 1];
    const expectedOutput = false;
    assert.equal(eqArrays(arr, arrReversed), expectedOutput);
  });

  it('should return false for two arrays containing 1 as a number and "1" as a string', () => {
    const arrNum = [1];
    const arrString = ["1"];
    const expectedOutput = false;
    assert.equal(eqArrays(arrNum, arrString), expectedOutput);
  });

  it('should return true for two empty arrays', () => {
    const arr = [];
    const arrCopy = [];
    const expectedOutput = true;
    assert.equal(eqArrays(arr, arrCopy), expectedOutput);
  });

  it('should return false for two arrays of different lengths with identical values at their shared index, such as [1, 2, 3] and [1, 2]', () => {
    const arr = [1, 2, 3];
    const arrTwo = [1, 2];
    const expectedOutput = false;
    assert.equal(eqArrays(arr, arrTwo), expectedOutput);
  });

  it('should return true for identical arrays containing different types of primitive values, such as [1, "2", true, false, undefined, null]', () => {
    const arr = [1, "2", true, false];
    const arrCopy = [1, "2", true, false];
    const expectedOutput = true;
    assert.equal(eqArrays(arr, arrCopy), expectedOutput);
  });

  it('should return true for identical arrays with nested arrays within them, such as [1, [2]]', () => {
    const arr = [1, [2]];
    const arrCopy = [1, [2]];
    const expectedOutput = true;
    assert.equal(eqArrays(arr, arrCopy), expectedOutput);
  });

  it('should return false for non-identical arrays with nested arrays within them, such as [1, [2]] and [1, [3]', () => {
    const arr = [1, [2]];
    const arrTwo = [1, [3]];
    const expectedOutput = false;
    assert.equal(eqArrays(arr, arrTwo), expectedOutput);
  });

  it('should return true for identical arrays with nested objects within them, such as [{1: "1"}, 2]', () => {
    const arr = [{1: "1"}, 2];
    const arrCopy = [{1: "1"}, 2];
    const expectedOutput = true;
    assert.equal(eqArrays(arr, arrCopy), expectedOutput);
  });

  it('should return false for arrays with non-identical objects nested inside them, such as [1, {2: "2"}] and [1, {2: "two"}]', () => {
    const arr = [1, {2: 2}];
    const arrTwo = [1, {2: "two"}];
    const expectedOutput = false;
    assert.equal(eqArrays(arr, arrTwo), expectedOutput);
  });

});