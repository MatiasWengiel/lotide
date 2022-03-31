const assertEqual = function(actual, expected) {
  return actual === expected ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
};


const countLetters = function(string) {
  
  if (typeof string !== "string") { //ensure we are dealing with a string
    return "Error: Argument is not a string";
  }
  // remove spaces and capital letters to get an accurate count
  let lowerCaseNoSpaces = string.split(" ").join("").toLowerCase();
  let letterCount = {};
  for (let eachLetter of lowerCaseNoSpaces) {
    letterCount[eachLetter] ? letterCount[eachLetter] += 1 : letterCount[eachLetter] = 1;
  }
  return letterCount;
};


assertEqual(countLetters("Taco cat").t, 2);
assertEqual(countLetters("Matias Wengiel").i, 2);
assertEqual(countLetters("iiifiiaaa").i, 5);
assertEqual(countLetters(true),"Error: Argument is not a string");
assertEqual(countLetters(undefined), "Error: Argument is not a string");
