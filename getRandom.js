function shuffle(array) {
  let m = array.length

  while(m) {
    let i = Math.floor(Math.random() * m--);

    let t = array[m];
    console.log({m, t, i}, array)
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

console.log(shuffle([4, 0, 9, 3]));

