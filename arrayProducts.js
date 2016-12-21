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

// console.log(arrayProducts([1, 2, 4]));

function arrayProducts(array) {
  var multiplied;
  var result = [];

  for(var i = 1; i< array.length; i++) {
    var newArray = array.slice(i);
    //console.log('newArray', newArray)
    multiplied = newArray.reduce((a,b) => {
      return a*b;
    }, 1)
    result.push(multiplied);
  }
  return result;
}

console.log(arrayProducts([1, 2, 3, 4]));