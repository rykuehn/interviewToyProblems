function longestSub(s) {
  var lettersArray = s.split('')
  if(lettersArray.length === 0) {
    return null;
  }

  var compare= [];

  var longest = [];
  var hold={};
  var start = lettersArray[0];
  var end = lettersArray[0];

  for(let i = 0; i< lettersArray.length; i++) {
    var char = lettersArray[i];

    if(!hold[char]) {
      hold[char] = 1;
      longest.push(char);
      end = char;

    } else {
      compare.push(longest.join(''));

      while(longest.length > 0) {
        longest.pop();
      }

      start = char;
      end = char;

      for(var key in hold) {
        delete hold[key]; 
      }
    }
  }

  compare.push(longest.join(''))

  let MaxLength = 0;
  compare.forEach(word => {
    if(word.length > MaxLength) {
      MaxLength = word.length;
    }
  })

  return MaxLength + 1;
}

console.log(longestSub('aacdefg'));