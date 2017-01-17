function TempTracker() {
  this.totalNumbers = 0;
  this.totalSum = 0;
  
  this.occurences = {}
  this.mode = null;

  this.mean = null;
  this.minTemp = null;
  this.maxTemp = null;
  this.temps = [];
}
 
TempTracker.prototype.insert = function(x){

  this.totalNumbers++
  this.totalSum += x;

  this.mean = this.totalSum/this.totalNumbers;

  if(this.occurences.hasOwnProperty(x)) {
    this.occurences[x]++
  } else {
    this.occurences[x] = 1;
  }

  if(this.minTemp === null || this.maxTemp === null) {
    this.minTemp = this.minTemp || x;
    this.maxTemp = this.maxTemp || x;
  }

 if(x < this.minTemp) {
  this.minTemp = x;
 }

 if(x > this.maxTemp) {
  this.maxTemp = x;
 }

 this.temps.push(x);
}

TempTracker.prototype.getMax = function(){
  return this.maxTemp;
}

TempTracker.prototype.getMin = function(){
  return this.minTemp;
}

TempTracker.prototype.getMean = function(){
  return this.mean;
}

TempTracker.prototype.getMode = function(){
  return Math.max(...Object.keys(this.occurences));
}

var mine = new TempTracker();

mine.insert(4)
mine.insert(6)
mine.insert(6)

console.log(mine.getMode())