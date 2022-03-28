const eqArrays = function(arrayOne, arrayTwo){
  if (arrayOne.length !== arrayTwo.length){
    return false
  }

  if (arrayOne.length === 0 && arrayTwo.length === 0) {
    return true
  }

  for (let i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]){
      return false
    } else {
      return true
    }
  }
}

const assertArraysEqual = function(arrayOne, arrayTwo) {

  eqArrays(arrayOne, arrayTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) : 
  console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
   
}

assertArraysEqual([1, 2, 3], [1, 2,3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual(["1", "2", "3"], [1, 2, 3]);
assertArraysEqual([1], "1");
assertArraysEqual([], []);
assertArraysEqual(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"])