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

var mine = new BinaryTreeNode(5)
//console.log(mine.insert(4))
mine.insert(4)
mine.insert(8)
mine.insert(10)
console.log(mine);


