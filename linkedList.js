function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode = function(nodeToDelete) {
 var newNode = nodeToDelete.next;

 if (newNode) {
  nodeToDelete.next = newNode;
  nodeToDelete.value = newNode.value;
 }
  
 //console.log(newNode)
}

deleteNode(b);
console.log(a)