function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = a;


function containsCycle(firstNode) {
  var slowRunner = firstNode;
  var fastRunner = firstNode;

  while(fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;

    if(fastRunner === slowRunner) {
      return true;
    }
  }

  return false;
}
console.log(containsCycle(a));