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
    } 
    
  }
  return true
}

const assertArraysEqual = function(arrayOne, arrayTwo) {

  eqArrays(arrayOne, arrayTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) : 
  console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
   
}


const letterPositions = function (sentence) {
  if (typeof sentence !== "string") { //ensure we are dealing with a string
    return console.log("Error: Argument is not a string"); 
  }
  const lowerCaseNoSpaces = sentence.split(" ").join("").toLowerCase();
  const results = {};

  //Iterate through lowerCaseNoSpaces
  //Check each letter in lowerCaseNoSpaces to see if it's present as a key in results
  // if it is not, create an array with the key of the letter at i and the value of i
  // if it is, push i to the existing array
  for (let i = 0; i < lowerCaseNoSpaces.length; i++){
    if (results[lowerCaseNoSpaces[i]]) {
      results[lowerCaseNoSpaces[i]].push(i);
  } else {
    results[lowerCaseNoSpaces[i]] = [i]
  }
}

  return results;
}

assertArraysEqual(letterPositions("Hello world").h, [0]);
assertArraysEqual(letterPositions("Hello world").e, [1])
assertArraysEqual(letterPositions("Hello world").l, [2, 3, 8]);
assertArraysEqual(letterPositions("Hello world").o, [4, 6]);
assertArraysEqual(letterPositions("Hello world").w, [5]);
assertArraysEqual(letterPositions("Hello world").r, [7]);
assertArraysEqual(letterPositions("Hello world").d, [9]);
letterPositions(9);
letterPositions(true);
letterPositions(undefined);
