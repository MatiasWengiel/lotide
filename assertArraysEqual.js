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

  eqArrays(arrayOne, arrayTwo) ? console.log(`✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) : 
  console.log(`🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
   
}

assertArraysEqual([1, 2, 3], [1, 2,3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual(["1", "2", "3"], [1, 2, 3]);
assertArraysEqual([1], "1");
assertArraysEqual([], []);