const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅ Assertion Passed: ${actual} === ${expected}. ✅`);
  } else {
    console.log("\x1b[31m%s\x1b[0m",`🚩 Assertion Failed: ${actual} !== ${expected}. 🚩`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let countedItems = {};
  // For each key in itemsToCount IF they are true, we iterate through eachItem of allItems and compare it to
  // the truthy item in ItemsToCount. If they match we check to see if there's already a key with that item's 
  // name inside of countedItems. If so, we add 1 to the count. If not, we create it with a starting value
  // of 1
  for (item in itemsToCount) {
    if (itemsToCount[item]) { 
      for (eachItem of allItems) {
        if (eachItem === item) {
            countedItems[item] ? countedItems[item] += 1 : countedItems[item] = 1;
        }
      }
    }
  }
  return countedItems
}



//testing code below
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  1,
  true,
  false,
  "true",
  "false",
];
const testresult = countOnly(firstNames)

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined); 
