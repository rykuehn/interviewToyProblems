
function bstChecker(tree, upperBound, lowerBound) {
  //console.log(upperBound, lowerBound)
  upperBound = (typeof upperBound === 'undefined') ? Infinity : upperBound;
  lowerBound = (typeof lowerBound === 'undefined') ? -Infinity : lowerBound;

  if(!tree) { return true }
  
  if(tree.value < lowerBound || tree.value > upperBound) {
    return false;
  } 

  return bstChecker(tree.left, tree.value, lowerBound) 
  && bstChecker(tree.right, lowerBound, tree.value);
}
