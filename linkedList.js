function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

LinkedListNode.prototype.deleteNode = function(which) {
  if(this.value === which) {
    this.next = null;
  }
}

console.log(deleteNode());