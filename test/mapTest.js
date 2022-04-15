const map = require('../map');
const assert = require('chai').assert;

describe('#map', () => {
  it('should iterate through the letters of a string and push each to an array based on callback function x => results.push(x)', () => {
    const inputString = "Hello world";
    const expectedOutput = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'];
    const callbackFn = x => x;
    assert.deepEqual(map(inputString, callbackFn), expectedOutput);
  });

  it('should return [2, 4, 6] for array [1, 2, 3] and function x => x * 2', () => {
    const inputArr = [1, 2, 3];
    const expectedOutput = [2, 4, 6];
    const callbackFn = x => x * 2;
    assert.deepEqual(map(inputArr, callbackFn), expectedOutput);
  });

  it('should return [false, true] for array [true, false] and function x => !x', () => {
    const inputArr = [true, false];
    const expectedOutput = [false,true];
    const callbackFn = x => !x;
    assert.deepEqual(map(inputArr, callbackFn), expectedOutput);
  });

  it('should handle arrays with mixed data types, such as returning ["hello world", "hello 1", "hello true", "hello false", "hello undefined"] for ["world", 1, true, false, undefined] and function x => `hello ${x}`', () => {
    const inputArr = ["world", 1, true, false, undefined];
    const expectedOutput = ["hello world", "hello 1", "hello true", "hello false", "hello undefined"];
    const callbackFn = x => `hello ${x}`;
    assert.deepEqual(map(inputArr, callbackFn), expectedOutput);
  });
});
