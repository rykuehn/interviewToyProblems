function BinaryTreeNode(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinaryTreeNode.prototype.insert = function(value){
  const newNode = new BinaryTreeNode(value);

  if(newNode.value > this.value) {
    if(this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(value)
    }
  } else {
    if(this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(value)
    }
  }
}

BinaryTreeNode.prototype.Largest = function(rootNode) {

 if(!rootNode) {
  console.error('You need at least one node')
}

if(rootNode.right) {
  return this.Largest(rootNode.right)
}

return rootNode.value;
}

BinaryTreeNode.prototype.secondLargest = function(rootNode) {
  if(!rootNode && (!rootNode.right && !rootNode.left)) {
    console.error('There musy be at least two nodes');
  }

  let current = rootNode;

  while(current) {
    if(!current.right && current.left) {
      console.log('largest left')
      return this.Largest(current.left);
    }

    if(current.right && !current.right.left && !current.right.right) {
      console.log('right')
      return current.value;
    }

    current = current.right;

  }
  

}

// var mine = new BinaryTreeNode(10);
// mine.insert(13);
// mine.insert(44);
// mine.insert(5);
// mine.insert(2);
// //console.log(mine)
// console.log(mine.secondLargest(mine));