const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

/* I opened the "Spoilers" on Compass and saw that using Object.keys and for..of was suggested, so I did that too. However, I am keeping my original solution since it works and skips the step of having to extract the keys from the object into an array and then iterate through them anyway.
const findKeyByValue = function(object, value) {
  let arrayOfKeys = Object.keys(object);
  for (key of arrayOfKeys){
    if (object[key] === value) {
      return key;
    }
  }
};
*/
