const takeUntil = require('../takeUntil.js');
const assert = require('chai').assert;

describe('#takeUntil', () => {
  it('should return [1, 2, 3] for array [1, 2, 3, 4, 5] and callback x => x > 3', () => {
    const inputArr = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3];
    const callbackFn = x => x > 3;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  });

  it('should return [] for array [1, 2, 3, 4, 5] and callback x => x < 3', () => {
    const inputArr = [1, 2, 3, 4, 5];
    const expectedOutput = [];
    const callbackFn = x => x < 3;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  });

  it('should return  for ["I", "think", ",", "therefore", "I", "am"] and callback x => x === "," ', () => {
    const inputArr = ["I", "think", ",", "therefore", "I", "am"];
    const expectedOutput = ["I", "think"];
    const callbackFn = x => x === ",";
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  });

  it('should return [false] for array [false, true, false] and callback x => x === !false', () => {
    const inputArr = [false, true, false];
    const expectedOutput = [false];
    const callbackFn = x => x === !false;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  });

  it('should return [1, 2] for array [1, 2, [3, 4]] and callback x => Array.isArray(x)', () => {
    const inputArr = [1, 2, [3, 4]];
    const expectedOutput = [1, 2];
    const callbackFn = x => Array.isArray(x);
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  });

  it('should return ["LHL", 15] for array ["LHL", 15, true, "fun"] and callback x === true', () => {
    const inputArr = ["LHL", 15, true, "fun"];
    const expectedOutput = ["LHL", 15];
    const callbackFn = x => x === true;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  });

  it('should return [1, [2]] for [1, [2, 3]] and callback x => x >= 3', () => {
    const inputArr = [1, [2, 3]];
    const expectedOutput = [1, [2]];
    const callbackFn = x => x >= 3;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  });

  it('should return [1, [2, [3, [4]]]] for [1, [2, [3, [4, 5]]]] and callback x => x === 5', () => {
    const inputArr = [1, [2, [3, [4, 5]]]];
    const expectedOutput = [1, [2, [3, [4]]]];
    const callbackFn = x => x === 5;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  });
});