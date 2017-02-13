function getMaxProfit(array) {
  if(array.length <= 1) {
    return "You need to have a least two prices!"
  }

  let maxProfit = array[1]-array[0];
  let minPrice = array[0];

  for(var earlierTime = 1; earlierTime < array.length; earlierTime++) {
   maxProfit = Math.max(array[earlierTime] - minPrice, maxProfit);
   minPrice = Math.min(minPrice, array[earlierTime]);
   console.log({maxProfit, minPrice})
 }
 return maxProfit;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));