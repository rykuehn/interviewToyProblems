const amount = 4;
const array = [1, 2, 3];

function Change() {
  this.memo = {};

}
Change.prototype.changePossibilities = function(amountLeft, array, index) {

  let memoKey = String([amountLeft, index]);
  console.log('grabbing memo[' + memoKey + ']');
  if(this.memo.hasOwnProperty(memoKey)) {
    return this.memo[memoKey];
  }

    index = index || 0;

    if(amountLeft === 0 ) {
      return 1;
    }

    if(amountLeft < 0) {
      return 0;
    }

    if (index === array.length) {
      return 0;
    }

    console.log('checking ways to make ' + amountLeft + ' with ' + array.slice(index));

      var currentCoin = array[index];
      let numofPossibilties = 0;

      while(amountLeft >= 0) {
        numofPossibilties += this.changePossibilities(amountLeft, array, index + 1);
        amountLeft -= currentCoin;
      }

      this.memo[memoKey] = numofPossibilties;
      return numofPossibilties;
    } 

console.log(new Change().changePossibilities(amount, array));

//}

//coinDenominations(amount, array)

