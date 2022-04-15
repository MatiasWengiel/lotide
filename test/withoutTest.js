const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual')
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 2, 3], [1, "2", true, 3]), [2]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [true]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [false]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], ["1, 2, 3"]), [1, 2, 3]);
assertArraysEqual(without([1, 1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["green", "eggs", "and", "ham"], ["eggs"]), ["green", "and", "ham"]);
assertArraysEqual(without([true, false, 1, "banana"], [true]), [false, 1, "banana"]);
