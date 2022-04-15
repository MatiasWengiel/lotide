const eqObjects = require('./eqObjects');

const assertObjectsEqual = (objectOne, objectTwo) => {
  //Takes in two objects and prints to the console whether they are equal, using eqObjects function
  const inspect = require('util').inspect; // required for printing out the objects to the console

  eqObjects(objectOne, objectTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${inspect(objectOne)} === ${inspect(objectTwo)}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}. 🚩`);
};

module.exports = assertObjectsEqual;