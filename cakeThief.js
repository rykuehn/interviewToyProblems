  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
    {weight: 7, value: 10},
    {weight: 7, value: 260},
];

var capacity = 20;

function maxDuffelBagValue(cakes, capacity) {
  let maxvalue = {};
  cakes.forEach(cake => {
    if(maxvalue.hasOwnProperty(cake.weight)) {
      maxvalue[cake.weight] = cake.value;
    } else{
      maxvalue[cake.weight] = cake.value;
    }
  });

  for(var currentCapacity = 0; currentCapacity <= capacity; currentCapacity++) {
    cakes.forEach(cake => {
      if(cake.weight < capacity) {
        console.log(capacity, cake.weight)
      }
    })
  }
}

maxDuffelBagValue(cakeTypes, capacity);