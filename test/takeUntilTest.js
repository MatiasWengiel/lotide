const takeUntil = require('../takeUntil.js');
const assert = require('chai').assert;

describe('#takeUntil', () => {
  it('should return [1, 2, 3] for array [1, 2, 3, 4, 5] and callback x => x > 3', () => {
    const inputArr = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3];
    const callbackFn = x => x > 3;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  })

  it('should return [] for array [1, 2, 3, 4, 5] and callback x => x < 3', () => {
    const inputArr = [1, 2, 3, 4, 5];
    const expectedOutput = [];
    const callbackFn = x => x < 3;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  })

  it('should return  for ["I", "think", ",", "therefore", "I", "am"] and callback x => x === "," ', () => {
    const inputArr = ["I", "think", ",", "therefore", "I", "am"];
    const expectedOutput = ["I", "think"];
    const callbackFn = x => x === ",";
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput);
  })

  it('should return [false] for array [false, true, false] and callback x => x === !false', () => {
    const inputArr = [false, true, false];
    const expectedOutput = [false]
    const callbackFn = x => x === !false;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput)
  })

  it('should return [1, 2] for array [1, 2, [3, 4]] and callback x => Array.isArray(x)', () => {
    const inputArr = [1, 2, [3, 4]];
    const expectedOutput = [1, 2]
    const callbackFn = x => Array.isArray(x);
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput)
  })

  it('should return ["LHL", 15] for array ["LHL", 15, true, "fun"] and callback x === true', () => {
    const inputArr = ["LHL", 15, true, "fun"] ;
    const expectedOutput = ["LHL", 15]
    const callbackFn = x => x === true;
    assert.deepEqual(takeUntil(inputArr, callbackFn), expectedOutput)
  })
})

// console.log("should pass \n");
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);


// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

// const booleans = [true, true, true, false, true, true];
// const results3 = takeUntil(booleans, x => x === false);
// const results4 = takeUntil(booleans, x => x === true);
// assertArraysEqual(results3, [true, true, true]);
// assertArraysEqual(results4, []);


// const arrayBreak = [1, 2, 3, [4, 5], 6];
// const results5 = takeUntil(arrayBreak, x => Array.isArray(x));
// assertArraysEqual(results5, [1, 2, 3]);

// console.log("should fail \n");
// assertArraysEqual(results4, [true]);
// assertArraysEqual(results1, [1, 2, 5, 7, 2, -1]);