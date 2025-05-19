/*Array Functions*/

//Find Maximum and Minimum
function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}


//Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

//Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}
