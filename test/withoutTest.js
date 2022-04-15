const without = require('../without');
const assert = require('chai').assert;

describe('#without', () => {
  it('should return [1, 2] for [1, 2, 3] and without parameter [3]', () => {
    const inputArr = [1, 2, 3];
    const expectedOutput = [1, 2];
    const withoutParam = [3];
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
