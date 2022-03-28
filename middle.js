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
    } else {
      return true;
    }
  }
};

const assertArraysEqual = function(arrayOne, arrayTwo) {

  eqArrays(arrayOne, arrayTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
};

const middle = function(array) {
  let middleIndex = 0;
  if (array.length <= 2) {
    return [];
  }

  if (array.length % 2 === 0) {
    middleIndex = (array.length) / 2;
    return [array[middleIndex - 1], array[middleIndex]];

  } else {
    middleIndex = (array.length - 1) / 2;
    return [array[middleIndex]];
    
  }
};
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle(["one", 2, true]), [2]));
console.log(assertArraysEqual(middle(["fox", "bear", "rabbit", "orca"]), ["bear", "rabbit"]));
