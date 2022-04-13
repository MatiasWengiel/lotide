const eqArrays = require('./eqArrays');
const assertArraysEqual = function(arrayOne, arrayTwo) {

  eqArrays(arrayOne, arrayTwo) ? console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${arrayOne} === ${arrayTwo}. ✅`) :
    console.log("\x1b[31m%s\x1b[0m", `🚩 Assertion Failed: ${arrayOne} !== ${arrayTwo}. 🚩`);
};

module.exports = assertArraysEqual;