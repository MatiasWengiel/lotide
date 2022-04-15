const without = require('../without');
const assert = require('chai').assert;

describe('#without', () => {
  it('should return [1, 2] for [1, 2, 3] and without parameter [3]', () => {
    const inputArr = [1, 2, 3];
    const expectedOutput = [1, 2];
    const withoutParam = [3];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  })

  it('should return [1, 2, 4] for [1, 2, 3, 4] with parameter [3]', () => {
    const inputArr = [1, 2, 3, 4];
    const expectedOutput = [1, 2, 4];
    const withoutParam = [3];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  })

  it('should return ["eggs", "and", "ham"] for ["green", "eggs", "and", "ham"] and parameter ["green]', () => {
    const inputArr = ["green", "eggs", "and", "ham"];
    const expectedOutput = ["eggs", "and", "ham"];
    const withoutParam = ["green"];
    assert.deepEqual(without(inputArr, withoutParam), expectedOutput);
  })
})
// assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
// assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
// assertArraysEqual(without([1, 2, 3], [1, "2", true, 3]), [2]);
// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// assertArraysEqual(without([1, 2, 3], [true]), [1, 2, 3]);
// assertArraysEqual(without([1, 2, 3], [false]), [1, 2, 3]);
// assertArraysEqual(without([1, 2, 3], ["1, 2, 3"]), [1, 2, 3]);
// assertArraysEqual(without([1, 1, 2, 3], [1]), [2, 3]);
// assertArraysEqual(without(["green", "eggs", "and", "ham"], ["eggs"]), ["green", "and", "ham"]);
// assertArraysEqual(without([true, false, 1, "banana"], [true]), [false, 1, "banana"]);
