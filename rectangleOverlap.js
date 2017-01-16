//sample rectangle

var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,

    // width and height
    width: 2,
    height: 3,

};

var myRectangle2 = {

    // coordinates of bottom-left corner
    leftX: 5,
    bottomY: 2,

    // width and height
    width: 10,
    height: 4,

};

findXOverlap = (x1, x1width, x2, x2width) => {
  const highestStartPoint = Math.max(x1, x2);
  const lowestEndPoint = Math.min(x1 + x1width, x2 + x1width);

  if(highestStartPoint <= lowestEndPoint) {
    return {x: highestStartPoint, width: lowestEndPoint - highestStartPoint};
  } else {
    return null;
  }
  
}

findYOverlap = (y1, y1height, y2, y2height) => {
  const highestStartPoint = Math.max(y1, y2);
  const lowestEndPoint = Math.min(y1 + y1height, y2 + y2height);

  if(lowestEndPoint >= highestStartPoint){
    return {y: highestStartPoint, length: lowestEndPoint - highestStartPoint} ;
  } else {
    return null;
  }
}

findNewArea = (rectangle1, rectangle2) => {
  const xOverlap = findXOverlap(rectangle1.leftX, rectangle1.width, rectangle2.leftX, rectangle2.width);
  const YOverlap = findYOverlap(rectangle1.bottomY, rectangle1.height, rectangle2.bottomY, rectangle2.height);
  
  return xOverlap === null || YOverlap === null ? 
  {
    leftX: null,
    bottomY: null,
    width: null,
    height: null
  } : {
    leftX: xOverlap.x,
    bottomY: YOverlap.y,
    width: xOverlap.width,
    height: YOverlap.length
  }
  
}


console.log(findNewArea(myRectangle, myRectangle2))
