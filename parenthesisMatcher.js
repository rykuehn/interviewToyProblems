function parenthesisMatcher(string) {
  var left = 0;
  var right = 0;

  for(var i = 0; i< string.length; i++){
    if(string[i] === '('){
      left++
    } else if(string[i] === ")") {
      right++
    }
  }

  return left === right;
}

console.log(parenthesisMatcher('(((hello)))'))