// const eqArrays = function(arrayOne, arrayTwo) {
//   if (arrayOne.length !== arrayTwo.length) {
//     return false;
//   }

//   if (arrayOne.length === 0 && arrayTwo.length === 0) {
//     return true;
//   }

//   for (let i = 0; i < arrayOne.length; i++) {
//     if (arrayOne[i] !== arrayTwo[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arrayOne, arrayTwo) {

//   eqArrays(arrayOne, arrayTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) :
//     console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
// };

const without = function(source, itemsToRemove) {
  let arrayWithoutRemovedItems = [];
  for (let item of source) {
    if (!(itemsToRemove.includes(item))) {
      arrayWithoutRemovedItems.push(item);
    }
  }
  return arrayWithoutRemovedItems;
};

module.exports = without;

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
