const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("This is a string", "This is a string");
assertEqual("This is a string", "this is a string");
assertEqual(1, 2);
assertEqual(null, null);
assertEqual(true, true);
assertEqual(true, false);
assertEqual(undefined, undefined);