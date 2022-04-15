const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('should return {h: [0]} for "h"', () => {
    const inputString = "h";
    const expectedOutput = {h : [0]};
    assert.deepEqual(letterPositions(inputString), expectedOutput);
  });
  
  it('should return {h: [0], e: [1], l: [2, 3, 8], o: [4, 6], w: [5], r: [7], d: [9]} for "hello world"', () => {
    const inputString = "hello world";
    const expectedOutput = {h: [0], e: [1], l: [2, 3, 8], o: [4, 6], w: [5], r: [7], d: [9]};
    assert.deepEqual(letterPositions(inputString), expectedOutput);
  });

  it('should return an accurate count for words with mixed capital letters, such as {h: [0], e: [1], l: [2, 3, 8], o: [4, 6], w: [5], r: [7], d: [9}} for "HelLo wORlD"', () => {
    const inputString = "HelLo wORlD";
    const expectedOutput = {h: [0], e: [1], l: [2, 3, 8], o: [4, 6], w: [5], r: [7], d: [9]};
    assert.deepEqual(letterPositions(inputString), expectedOutput);
  });

  it('should return "Error: Argument is not a string" if passed a number', () => {
    const inputNum = 5;
    const expectedOutput = "Error: Argument is not a string";
    assert.deepEqual(letterPositions(inputNum), expectedOutput);
  });

  it('should return "Error: Argument is not a string" if passed undefined', () => {
    const wrongInput = undefined;
    const expectedOutput = "Error: Argument is not a string";
    assert.deepEqual(letterPositions(wrongInput), expectedOutput);
  });

  it('should return "Error: Argument is not a string" if passed null', () => {
    const wrongInput = undefined;
    const expectedOutput = "Error: Argument is not a string";
    assert.deepEqual(letterPositions(wrongInput), expectedOutput);
  });

});

