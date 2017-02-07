function palidronePerm(word) {
  var result = new Set();

  for(var i = 0; i< word.length; i++) {
    var char = word[i];
    if(result.has(char)) {
      result.delete(char)
    } else {
      result.add(char)
    }
  }
  
  return result.size <= 1;
}

console.log(palidronePerm('race'));