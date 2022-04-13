const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(objectOne, objectTwo) {
  const inspect = require('util').inspect;

  eqObjects(objectOne, objectTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${inspect(objectOne)} === ${inspect(objectTwo)}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${inspect(objectOne)} !== ${inspect(objectTwo)}. 🚩`);
};

module.exports = assertObjectsEqual;