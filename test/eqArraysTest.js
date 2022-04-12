const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 3, 4], [2, 3, 4]), true);
assertEqual(eqArrays([3], [3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
assertEqual(eqArrays([1], "1"), false);


const arr1 = [1, 2, [3], 4];
const arr1Again = [1, 2, [3], 4];
assertEqual(eqArrays(arr1, arr1Again), true);
const arr2 = [1, 2, [3, ["rec"]], 4];
const arr2Again = [1, 2, [3, ["rec"]], 4];
assertEqual(eqArrays(arr2, arr2Again), true);
const arr3 = [1, 2, [3, ["rec", [true]]], 4];
const arr3Again = [1, 2, [3, ["rec", [true]]], 4];
assertEqual(eqArrays(arr3, arr3Again), true);
const notarr3 = [1, 2, [3, ["rec", ["true"]]], 4];
assertEqual(eqArrays(arr3, notarr3), false);
const arrVeryRec = [1, [2, [3, [4, [5]]]]];
const arrVeryRectoo = [1, [2, [3, [4, [5]]]]];
assertEqual(eqArrays(arrVeryRec, arrVeryRectoo), true);