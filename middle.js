const middle = (array) => {
  //Returns the values at the index (or indices) in the middle of an array
  let middleIndex = 0;
  if (Array.isArray(array) === false) {
    return "The input is not an array";
  }
  
  if (array.length <= 2) { //If there are two or fewer indices, returns an empty array as there is no proper middle
    return [];
  }

  if (array.length % 2 === 0) {
    middleIndex = (array.length) / 2;
    return [array[middleIndex - 1], array[middleIndex]];

  } else {
    middleIndex = (array.length - 1) / 2;
    return [array[middleIndex]];
    
  }
};

module.exports = middle;

