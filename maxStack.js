function maxStack() {
  this.stack= [];
  this.max = [];
}

maxStack.prototype.push = function(value) {
  this.stack.push(value);

  if(value > this.max[this.max.length-1] || this.max.length === 0) {
    this.max.push(value);
  }
};

maxStack.prototype.pop = function() {

  if(!this.stack.length) {
    return null;
  }

  var result = this.stack.pop();

  if(result === this.max[this.max.length-1]) {
    this.max.pop();
  }

  return result;
};

maxStack.prototype.peek = function() {
    if (!this.stack.length) {
        return null;
    }
    return this.stack[this.stack.length -1];
};

maxStack.prototype.getMax = function(){
  return this.max.pop();
}

// var mine = new maxStack();
// mine.push(4);
// mine.push(5);
// mine.push(2)
// console.log(mine.getMax())
// console.log(mine)