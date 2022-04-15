const without = (source, itemsToRemove) => {
  //Takes in an array and a second array with a list of items to remove. Returns an array that contains all of the values in the first, except for the ones that were present in the items to remove array
  let arrayWithoutRemovedItems = [];
  for (let item of source) {
    if (!(itemsToRemove.includes(item))) {
      arrayWithoutRemovedItems.push(item);
    }
  }
  return arrayWithoutRemovedItems;
};

module.exports = without;