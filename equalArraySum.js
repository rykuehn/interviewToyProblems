function sumSwap(array1, array2) {
  const sumArray1 = array1.reduce((total, num) => total += num);
  const sumArray2 = array2.reduce((total, num) => total += num);

  const array1minus = array1.map(num => sumArray1 - num);
  const array2minus = array2.map(num => sumArray2 - num);

  const result1 = [];
  const result2 = [];

  let answer;

  for(var i = 0; i< array1minus.length; i++) {
    for(var j = 0; j < array2.length; j++) {
      result1.push([array1minus[i] + array2[j], i, j]);
    }
  }

   for(var i = 0; i< array2minus.length; i++) {
    for(var j = 0; j < array1.length; j++) {
      result2.push([array2minus[i] + array1[j], i, j]);
    }
  }
  

  for(var i = 0; i < result1.length; i++) {
    for(var j = 0; j< result2.length; j++) {
      const a = JSON.stringify(result1[i]);
      const b = JSON.stringify(result2[i]);

      if(a === b) {
        answer = [array2[result1[i][1]], array1[result2[i][2]]];
      }
    }
  }

  return answer;
}


// function sumSwap(array1, array2) {
//   const sumArray1 = array1.reduce((total, num) => total += num);
//   const sumArray2 = array2.reduce((total, num) => total += num);

//   for(var i = 0; i< array1.length; i++) {
//     for(var j = 0; j< array2.length; j++) {
//       let val1 = sumArray1 - array1[i] + array2[j];
//       let val2 = sumArray2 - array2[j] + array1[i];

//       if(val1 === val2) {
//         return [val1, val2]
//       }
//     }
//   }
// };


function sumSwam(array1, array2){
  
}

const exercise1 = [20,3,2]; //3
const exercise2 = [10,2,11]; //2

const exercise3 = [4, 4, 4, 4]; //4
const exercise4 = [5, 5, 6, 4]; //6

const exercise5 = [4, 1, 2, 1, 1, 2]; //1
const exercise6 = [3, 6, 3, 3]; //3

console.log(sumSwap(exercise3, exercise4));