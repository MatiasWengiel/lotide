const assertArraysEqual = require('../assertArraysEqual');

console.log("should pass \n");
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([], []);
assertArraysEqual(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]);

console.log("should fail \n");
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual(["1", "2", "3"], [1, 2, 3]);
assertArraysEqual([1], "1");

