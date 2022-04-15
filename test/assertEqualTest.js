const assertEqual = require('../assertEqual');

console.log("should pass \n");
assertEqual(1, 1);
assertEqual("This is a string", "This is a string");
assertEqual(null, null);
assertEqual(true, true);

assertEqual(undefined, undefined);

console.log("should fail \n");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("This is a string", "this is a string");
assertEqual(1, 2);
assertEqual(true, false);
