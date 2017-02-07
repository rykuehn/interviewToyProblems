function angryBirds(array, topScore){
  var scoreCounts = [];
 
 for(var i = 0; i< topScore; i++) {
  scoreCounts.push(0)
 }

  array.forEach(score =>{
    scoreCounts[score]++
  })

  var sortedArray=[];

  scoreCounts.forEach((count, score) => {

    for(var time = 0; time < count; time++) {
      sortedArray.push(score);
    }
  })

  console.log(sortedArray)
}

angryBirds([1, 2, 4, 5, 0, 5, 5], 6)