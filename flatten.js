// const flatten = function(array) {
//   let flattenedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!(Array.isArray(array[i]))) {
//       flattenedArray.push(array[i]);
//     } else {
//       for (let item of array[i]) {
//         flattenedArray.push(item);
//       }
//     }
//   }
//   return flattenedArray;
// };

// base case: Array.isArray(index) === false

const flatten = (array) => {
  let outputArr = []
  for (let eachIndex of array) {
    if (!(Array.isArray(eachIndex))){
      outputArr.push(eachIndex);
    }
  }
  return outputArr;
}


module.exports = flatten;
