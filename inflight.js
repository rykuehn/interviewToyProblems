function inflight(flightLength, movieLength) {
  let result = false;

  const movieObj = movieLength.reduce((acc, curr, i) => {
    acc[curr] = curr; 
    return acc;}, {});

  for(var i = 0; i<movieLength.length; i++) {
    var movie = movieLength[i];
    for(var key in movieObj) {
      if(movie + movieObj[key] === flightLength) {
        return true;
      }
    }
  }

  return result;

}

console.log(inflight(15, [30, 30, 10, 5]));