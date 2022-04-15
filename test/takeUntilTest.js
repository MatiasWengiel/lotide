const takeUntil = require('../takeUntil.js');
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual')

console.log("should pass \n");
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const booleans = [true, true, true, false, true, true];
const results3 = takeUntil(booleans, x => x === false);
const results4 = takeUntil(booleans, x => x === true);
assertArraysEqual(results3, [true, true, true]);
assertArraysEqual(results4, []);


const arrayBreak = [1, 2, 3, [4, 5], 6];
const results5 = takeUntil(arrayBreak, x => Array.isArray(x));
assertArraysEqual(results5, [1, 2, 3]);

console.log("should fail \n");
assertArraysEqual(results4, [true]);
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1]);