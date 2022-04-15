const tail = require('../tail');
const assert = require('chai').assert;

describe('#tail', () => {
  it('should return "Labs" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const inputArray = ["Yo Yo", "Lighthouse", "Labs"];
    const expectedOutput = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });

  it('should return an empty array for an array with a length of one', () => {
    const inputArray = ["One"];
    const expectedOutput = [];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });

  it('should return an empty array for an empty array', () => {
    const inputArray = [];
    const expectedOutput = [];
    assert.deepEqual(tail(inputArray), expectedOutput);
  });

  it('should return "This input is not an array" when passed a non array input', () => {
    const inputString = "This is not an array";
    const expectedOutput = "This input is not an array";
    assert.deepEqual(tail(inputString), expectedOutput);
  });

  it('should return the tail of an array of mixed data types, e.g. [false, 3] for ["one", false, 3]', () => {
    const initialArray = ["one", false, 3];
    const expectedOutput = [false, 3];
    assert.deepEqual(tail(initialArray), expectedOutput);
  });
});
