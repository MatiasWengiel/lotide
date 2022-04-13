// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;
const head = require('../head');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Test"]), "Test");
// assertEqual(head("test"), "test");
// assertEqual(head([]), undefined);
// assertEqual(head(5), 5);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 5 (as number) for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("returns [false] (as a boolean) as false (as a boolean)", () => {
    assert.strictEqual(head([false]), false);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it("returns 'The argument is not an array' for ['test']", () => {
    assert.strictEqual(head('test'), 'The argument is not an array')
  })

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});