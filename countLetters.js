const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

const countLetters = function(string) {
  let lowerCaseNoSpaces = string.split(" ").join("").toLowerCase();
  console.log(lowerCaseNoSpaces);
  for (let letter of lowerCaseNoSpaces) {
    console.log(letter);
  }
};

countLetters("Taco cat");