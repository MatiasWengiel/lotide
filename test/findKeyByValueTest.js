const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  it('should return the key whose value matches the input, such as 2 in object {1:false, 2:true} and the test value true', () => {
    const testObject = {1: false, 2: true};
    const testValue = true;
    const expectedOutput = 2;
    assert.equal(findKeyByValue(testObject, testValue), expectedOutput);
  });

  it('should work with strings as well, such as return hello for {hello: "this one", world: "not this one"}, and value "this one"', () => {
    const testObject = {hello: "this one", world: "not this one"};
    const testValue = "this one";
    const expectedOutput = "hello";
    assert.equal(findKeyByValue(testObject, testValue), expectedOutput);
  });

  it('should work with numbers as well, such as return hello for {hello: 1, world: 2}, and value 1', () => {
    const testObject = {hello: 1, world: 2};
    const testValue = 1;
    const expectedOutput = "hello";
    assert.equal(findKeyByValue(testObject, testValue), expectedOutput);
  });

  it('should work with objects that contain multiple data types as well, such as return hello for {hello: "not this", world: true, and: 1337, people: undefined, correct: "this one"}', () => {
    const testObject = {hello: "not this", world: true, and: 1337, people: undefined, correct: "this one"};
    const testValue = "this one";
    const expectedOutput = "correct";
    assert.equal(findKeyByValue(testObject, testValue), expectedOutput);
  });

  it('should return undefined if the value is not present in the object, such as 2 for {1:1}', () => {
    const testObject = {1:1};
    const testValue = 2;
    const expectedOutput = undefined;
    assert.equal(findKeyByValue(testObject, testValue), expectedOutput);
  });
});