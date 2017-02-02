function Queue() {
  this.insert = [];
  this.retrieve =[];
}

Queue.prototype.enqueue = function(value) {
  this.insert.push(value);
}

Queue.prototype.dequeue = function(value) {
  while (this.insert.length) {
    this.retrieve.push(this.insert.pop());
  }

  var result = this.retrieve.pop();

  while (this.retrieve.length) {
    this.insert.push(this.retrieve.pop());
  }

  return result;
}

var mine = new Queue();
mine.enqueue(1);
mine.enqueue(2);
mine.enqueue(3);
mine.enqueue(4);
console.log(mine.dequeue());
console.log(mine.dequeue());
mine.enqueue(5);
console.log(mine)