const assert = require('chai').assert;
const { describe, it } = require('mocha');
const middle = require('../middle');

describe('#middle', () => {
  it('should return the middle point ([2]) from [1, 2, 3]', () => {
    const initialArray = [1, 2, 3];
    const expectedOutput = [2];
    assert.deepEqual(middle(initialArray), expectedOutput);
  });

  it('should return the two middle indices ([2, 3]) from [1, 2, 3, 4]', () => {
    const initialArray = [1, 2, 3, 4];
    const expectedOutput = [2, 3];
    assert.deepEqual(middle(initialArray), expectedOutput);
  });

  it('should return an empty array for input arrays with a length of 1', () => {
    const initialArray = [1];
    const expectedOutput = [];
    assert.deepEqual(middle(initialArray), expectedOutput);
  });

  it('should return an empty array for input arrays with a length of 2', () => {
    const initialArray = [1, 2];
    const expectedOutput = [];
    assert.deepEqual(middle(initialArray), expectedOutput);
  });

  it('should return the middle array(s) for an array of strings', () => {
    const initialArray = ["fox", "bear", "rabbit", "orca"];
    const expectedOutput = ["bear", "rabbit"];
    assert.deepEqual(middle(initialArray), expectedOutput);
  });

  it('should return the middle array for an array of mixed data types', () => {
    const initialArray = ["one", false, 3];
    const expectedOutput = [false];
    assert.deepEqual(middle(initialArray), expectedOutput);
  });

  it('should return "The input is not an array" for a non-array input', () => {
    const initialString = '1, 2, 3';
    const expectedOutput = "The input is not an array";
    assert.deepEqual(middle(initialString), expectedOutput);
  });
});