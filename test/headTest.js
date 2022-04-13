const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    const inputArray = [1, 2, 3];
    const expectedOutput = 1;
    assert.strictEqual(head(inputArray), expectedOutput);
  });

  it("returns '5' for ['5']", () => {
    const inputArray = ['5'];
    const expectedOutput = '5'
    assert.strictEqual(head(inputArray), expectedOutput);
  });

  it("returns 5 (as number) for [5]", () => {
    const inputArray = [5];
    const expectedOutput = 5;
    assert.strictEqual(head(inputArray), expectedOutput);
  });

  it("returns [false] (as a boolean) as false (as a boolean)", () => {
    const inputArray = [false];
    const expectedOutput = false;
    assert.strictEqual(head(inputArray), expectedOutput);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    const inputArray = ['Hello', 'Lighthouse', 'Labs'];
    const expectedOutput = 'Hello'
    assert.strictEqual(head(inputArray), expectedOutput);
  });

  it("returns 'The argument is not an array' for ['test']", () => {
    const inputString = 'test';
    const expectedOutput = 'The argument is not an array'
    assert.strictEqual(head(inputString), expectedOutput);
  })

  it("returns undefined for []", () => {
    const inputArray = [];
    const expectedOutput = undefined;
    assert.strictEqual(head(inputArray), expectedOutput);
  });
});