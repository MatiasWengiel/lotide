const middle = function(array) {
  let middleIndex = 0;
  if (Array.isArray(array) === false) {
    return "The input is not an array";
  }
  
  if (array.length <= 2) {
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

