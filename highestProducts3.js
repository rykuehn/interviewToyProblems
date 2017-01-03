function highestProducts(array){

  if(array.length < 3) {
    return "You need at least three numbers"
  }

  var highest = Math.max(array[0], array[1]);
  var lowest = Math.min(array[0], array[1]);

  var highestProductOf2 = array[0] * array[1];
  var lowestProductOf2 = array[0] * array[1];

  var highestProductOf3 = array[0] * array[1] * array[2];

  for (var i = 2; i < array.length; i++) {

   highestProductOf3 = Math.max(highestProductOf2 * array[i], highestProductOf3, lowestProductOf2 * array[i]);

   lowestProductOf2 = Math.min(lowest * array[i], lowestProductOf2, highest * array[i]);
   highestProductOf2 = Math.max(highest * array[i], highestProductOf2, lowest * array[i]);
   
   highest = array[i] > highest ? array[i] : highest;
   lowest = array[i] < lowest ? array[i] : lowest;

 }

 return highestProductOf3;

}
