const countOnly = function(allItems, itemsToCount) {
  let countedItems = {};
  // For each key in itemsToCount IF they are true, we iterate through eachItem of allItems and compare it to
  // the truthy item in ItemsToCount. If they match we check to see if there's already a key with that item's
  // name inside of countedItems. If so, we add 1 to the count. If not, we create it with a starting value
  // of 1
  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      for (let eachItem of allItems) {
        if (eachItem === item) {
          countedItems[item] ? countedItems[item] += 1 : countedItems[item] = 1;
        }
      }
    }
  }
  return countedItems;
};

module.exports = countOnly;


