// function fib(n) {

//   //let result;

//   if (n === 0) { return 0; }

//   if (n === 1) { return 1; } 

//   return fib(n-1) + fib(n-2);

//   //return result;

// }

function fib(n) {


  if(n === 0 || n === 1) {
    return n;
  }

  let prevPrev = 0; 
  let prev = 1;
  let current;

  for(var i = 0; i< n; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}



console.log(fib(5));