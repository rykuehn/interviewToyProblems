function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;


function reverse(headNode) {
  let current = headNode;
  let prev = null;
  let nextNode = null;

  while(current) {
    nextNode = current.next;
    current.next = prev;

    prev = current;
    current = nextNode;
  }

  return prev;
}

//console.log(reverse(a));