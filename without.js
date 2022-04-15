const without = function(source, itemsToRemove) {
  let arrayWithoutRemovedItems = [];
  for (let item of source) {
    if (!(itemsToRemove.includes(item))) {
      arrayWithoutRemovedItems.push(item);
    }
  }
  return arrayWithoutRemovedItems;
};

module.exports = without;