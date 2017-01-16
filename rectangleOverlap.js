//sample rectangle

var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};

findXOverlap = (x1, x1width, x2, x2width) => {
  const highestStartPoint = Math.max(x1, x2);
  const lowestEndPoint = Math.min(x1 + x1width, x2 + x1width);

  if(highestStartPoint <= lowestEndPoint) {
    return lowestEndPoint - highestStartPoint;
  } else {
    return 'no overlap';
  }
  
}

findYOverlap = (y1, y1height, y2, y2height) => {
  const highestStartPoint = Math.max(y1, y2);
  const lowestEndPoint = Math.min(y1 + y1height, y2 + y2height);

  if(lowestEndPoint >= highestStartPoint){
    return lowestEndPoint - highestStartPoint;
  } else {
    return 'no overlap'
  }
}

