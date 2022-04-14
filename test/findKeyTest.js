const findKey = require('../findKey');
const assert = require('chai').assert;


describe('#findKey', () => {
  it('should return the first key in an object whose values match the callback function requirements, such as 1 for object {1: true, 2: false} and callback x => x === true', () => {
    const testObject = {1: true, 2: false};
    const callbackFn = x => x === true;
    const expectedOutput = 1;
    assert.equal(findKey(testObject, callbackFn), expectedOutput);
  });
   
  it('should return the first key in an object whose values match the callback function requirements, even when accessing nested objects such as 1 for object {1: {boolean: true}, 2: {boolean: false}} and callback x => x.boolean === true', () => {
    const testObject = {1: {boolean: true}, 2: {boolean: false}};
    const callbackFn = x => x.boolean === true;
    const expectedOutput = 1;
    assert.equal(findKey(testObject, callbackFn), expectedOutput);
  });

  it('should return undefined if asked to look for a value that does not exist', () => {
    const testObject = {1: true, 2: false};
    const callbackFn = x => x === "not true";
    const expectedOutput = undefined;
    assert.equal(findKey(testObject, callbackFn), expectedOutput);
  });

  it('should not allow for string coersion, where (e.g.) true is the same as "true"', () => {
    const testObject = {1: true, 2: false};
    const callbackFn = x => x === "true";
    const expectedOutput = undefined;
    assert.equal(findKey(testObject, callbackFn), expectedOutput);
  });

  it('should work with other types of callback functions (other than strict equality), such as returning 3 for object {1:1, 2:2, 3:3} and callback x => x > 2', () => {
    const testObject = {1:1, 2:2, 3:3};
    const callbackFn = x => x > 2;
    const expectedOutput = "3";
    assert.equal(findKey(testObject, callbackFn), expectedOutput);
  });

  it('should only return the first key whose value matches the callback requirements, such as 2 for object {1:1, 2:2, 3:3} and callback x => x >= 2', () => {
    const testObject = {1:1, 2:2, 3:3};
    const callbackFn = x => x >= 2;
    const expectedOutput = "2";
    assert.equal(findKey(testObject, callbackFn), expectedOutput);
  });
});