# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @matiaswengiel/lotide`

**Require it:**

`const _ = require(' @matiaswengiel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrayOne, arrayTwo)`: Takes in two **arrays** and logs to the console whether they contain identical values at each index.
* `assertEqual(actual, expected)`: Takes in any two **primitive data types except symbol and bigint** and logs to the console whether they are identical to each other.
* `assertObjectsEqual(objectOne, objectTwo)`: takes in two **objects** and logs to the console whether they have identical key-value pairs.
* `countLetters(string)`: Takes in a **string** and returns an **object** with each letter in the string and the number of occurrences of each.
* `countOnly(allItems, itemsToCount)`: Takes in an **array** (allItems) of values and counts the number of occurrences of one or more values as determined in an **object** (itemsToCount). Returns an **object** with the count(s).
* `eqArrays(arrayOne, arrayTwo)`: Takes in two **arrays** and compares them to see if they are equal. Returns true or false.
* `eqObjects(object1, object2)`: Takes in two **objects** and compares them to see if they have the same key-value pairs. Returns true or false.
* `findKey`: Takes in an **object** and a **callback function** and returns the *first* key whose value matches the parameters of the callback function.
* `findKeyByValue(object, value)`: Takes in an **object** and a value from a key-value pair, and returns its corresponding key.
* `flatten(array)`: Takes in an **array** containing other arrays within it, and combines them into a single array. 
* `head(array)`: Takes in an **array** and returns the value stored at index 0.
* `letterPositions(sentence)`: Takes in a **string** and returns an **object** with the indexes of where each letter in the string can be found. 
* `map(array, callback)`: Takes in an **array** and performs a callback function on each index, then returns a new **array** with the results.
* `middle(array)`: Takes in an **array** and returns the value(s) at the mid-point of the array. Will return one value for arrays that have an odd .length property, and two for arrays that have an even .length property. 
* `tails(array)`: Takes in an **array**, removes the value at index zero and returns the new array containing all other values with their indexes shifted by one.
* `takeUntil(array, callback)`: Takes in an **array** and pushes the value of each index to a new array until it the callback function returns true, then returns the new **array**
* `without(source, itemsToRemove)`: Takes in a source **array** and and array with items to remove from the source, and returns a third **array** that contains all of the items that were not removed from the first.