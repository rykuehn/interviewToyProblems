function isValid(code) {
  var openersToClosers = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };

  var openers = new Set(['(', '[', '{']);
  var closers = new Set([')', ']', '}']);

  openersStack = [];

  for(var i = 0; i<code.length; i++) {
    var char = code.charAt(i);
    
    if(openers.has(char)) {
      console.log(openersStack)
      openersStack.push(char);
    } else if(closers.has(char)){
      console.log(openersStack)
      if(!openersStack.length) {
        return false;
      } else {
        lastUnclosedOpener = openersStack.pop();
        console.log('last opened', lastUnclosedOpener)

        if(openersToClosers[lastUnclosedOpener] !== char) {
          return false;
        }
      }
    }
  }
  return openersStack.length === 0;
}

//o(n) time complexity and o(n) space
//parem checker

console.log(isValid("{ [ ] ( ) }"))