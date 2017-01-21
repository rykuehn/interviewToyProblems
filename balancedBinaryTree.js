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

BinaryTreeNode.prototype.contains = function(value) {

  if(value === this.value) {
    return true;
  }

  var traverse = function(node, target) {
    let flag = false;

    if(node.value === target) {
      flag = true;
    }
    if(target > node.value && node.right !== null) {
      flag = traverse(node.right, target);
    }

    if(target < node.value && node.left !== null) {
      flag =traverse(node.left, target);
    }

    return flag;

  }

  return traverse(this, value)
}

BinaryTreeNode.prototype.balanced = function() {
  var depths = [];

  var nodes = [];
  nodes.push([this, 0]);

  while(nodes.length) {
    var nodePair = nodes.pop();
    var node = nodePair[0];
    var depth = nodePair[1];

    if(!node.left && !node.right) {
      if(depths.indexOf(depth) < 0) {
        depths.push(depth);
      }

      if((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
        return false;
      }

    } else{
      if(node.left) {
        nodes.push([node.left, depth + 1]);
      }

      if(node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
    
  }

  return true;
}





var mine = new BinaryTreeNode(5)
//console.log(mine.insert(4))
mine.insert(4)
mine.insert(3)
mine.insert(1)
console.log(mine.balanced())

//console.log(mine);


