function stringReverse(string){ 
  string = string.split('');

  for(var i = 0; i< Math.floor(string.length -1); i++) {
    var firstHold = string[i];
    var lasthold = string[string.length -1 - i];

    string[i] = lasthold;
    string[string.length -1 - i] = firstHold;
  }

  console.log(string)

}

stringReverse('hello');