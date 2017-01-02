//TIME COMPLEXITY: O(N2) double loop
// function arrayProducts(array) {
//   var result = [];
   
//    for(var i= 0; i<array.length; i++){
//       var hold = array[i];
//       array.splice(i, 1);

//       result.push(array.reduce((a,b) => {
//        return a*b;
//       }, 1));

//       array.splice(i, 0, hold)
//    }

//   return result;
// }

function arrayProducts(array) {
  var beforeArray = [];
  var productBefore = 1;
  var productAfter = 1;

  for(var i = 0; i<array.length; i++) {
    beforeArray[i]= productBefore;
    productBefore = array[i] * productBefore;
  }

  for(var i = array.length-1; i>=0; i--) {
    beforeArray[i]= beforeArray[i] * productAfter;
    productAfter = array[i] * productAfter;
  }

  return beforeArray;
}

//console.log(arrayProducts([1, 2, 3, 4]));