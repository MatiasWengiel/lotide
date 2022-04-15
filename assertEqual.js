const assertEqual = (actual, expected) => {
  //takes in two arguments and compares them with strict equality to see if they are equal, then logs the results to the console
  return actual === expected ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
};

module.exports = assertEqual;