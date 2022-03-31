const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {

  eqArrays(arrayOne, arrayTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
};

const takeUntil = function(array, callback) {
  let outputArray = [];
  for (let item of array) {
    if (callback(item) === true) {
      return outputArray;
    } else {
      outputArray.push(item);
    }
  }
};

console.log("should pass \n");
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const booleans = [true, true, true, false, true, true];
const results3 = takeUntil(booleans, x => x === false);
const results4 = takeUntil(booleans, x => x === true);
assertArraysEqual(results3, [true, true, true]);
assertArraysEqual(results4, []);


const arrayBreak = [1, 2, 3, [4, 5], 6];
const results5 = takeUntil(arrayBreak, x => Array.isArray(x));
assertArraysEqual(results5, [1, 2, 3]);

console.log("should fail \n");
assertArraysEqual(results4, [true]);
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1]);