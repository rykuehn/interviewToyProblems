mergeSort =(array) => {
  let middle = Math.round((array.length - 1) / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  const result = [];
  console.log('cycle', {left, right})

  if(array.length <= 1) {
    return array;
  }
  
  while(left.length && right.length){
    if(left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while(left.length) {
    result.push(left.shift());
  }

  while(right.length) {
    result.push(right.shift());
  }

  

  return result;

}
console.log(mergeSort([3, 5, 6, 2, 1, 0]));