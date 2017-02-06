  function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function kthToLastNode(k, node) {
  var counter = 0;
  var current = node;

  while (current.next){
    current = current.next;
    counter +=1;
  }

  var moveahead = counter - k;

  var currentNode = node;
  for(var i = 0; i < moveahead; i++) {
    currentNode = currentNode.next
  }

  return currentNode;

}

console.log(kthToLastNode(0, a));