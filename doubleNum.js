function doubleNum(array) {
  var n = array.length - 1;

  var sum = ((n * n) + n) / 2;
  var realSum = array.reduce((num, total) => total += num, 0);
  
  return realSum - sum;
}

console.log(doubleNum([1, 2, 3, 1]))