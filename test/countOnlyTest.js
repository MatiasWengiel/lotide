const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  it('should return 2 for the number of times the word "banana" appears in the array ["banana", "apple", "banana"]', () => {
    const inputArr = ["banana", "apple", "banana"];
    const expectedOutput = {'banana': 2};
    const toCount = {"banana": true};
    assert.deepEqual(countOnly(inputArr, toCount), expectedOutput);
  });

  it('should return {} for the number of times "orange" appears in the array ["banana", "apple", "banana"', () => {
    const inputArr = ["banana", "apple", "banana"];
    const expectedOutput = {};
    const toCount = {"orange": true};
    assert.deepEqual(countOnly(inputArr, toCount), expectedOutput);
  });

  it('should return {} for the number of times "banana" appears in the array ["banana", "apple", "banana"] if we set the "banana" key to false', () => {
    const inputArr = ["banana", "apple", "banana"];
    const expectedOutput = {};
    const toCount = {"banana": false};
    assert.deepEqual(countOnly(inputArr, toCount), expectedOutput);
  });

  it('should return {"apple": 1} for the number of times "apple" appears in the array ["banana", "apple", "banana"] if we set the apple key to true and the banana key to false', () => {
    const inputArr = ["banana", "apple", "banana"];
    const expectedOutput = {"apple": 1};
    const toCount = {"apple": true, "banana": false};
    assert.deepEqual(countOnly(inputArr, toCount), expectedOutput);
  });

  it('should return {"banana": 3} for the number of times "banana" appears in the mixed type array ["banana", "apple", "banana", true, false, null, undefined, "banana", 1, 5]', () => {
    const inputArr = ["banana", "apple", "banana", true, false, null, undefined, "banana", 1, 5];
    const expectedOutput = {"banana": 3};
    const toCount = {"banana": true};
    assert.deepEqual(countOnly(inputArr, toCount), expectedOutput);
  });

  it('should return {"banana" 3, "apple": 1} for the number of times "banana" and "apple" appear in the mixed type array ["banana", "apple", "banana" true, false, null, undefined, "banana", 1, 5]', () => {
    const inputArr = ["banana", "apple", "banana", true, false, null, undefined, "banana", 1, 5];
    const expectedOutput = {"banana": 3, "apple": 1};
    const toCount = {"banana": true, "apple": true};
    assert.deepEqual(countOnly(inputArr, toCount), expectedOutput);
  });

});