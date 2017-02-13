// function controlFlatten(data) {
//     var result = {};
//     function recurse (cur, prop) {
//         if (Object(cur) !== cur) {
//             result[prop] = cur;
//         } 
//         // else if (Array.isArray(cur)) {
//         //      for(var i=0, l=cur.length; i<l; i++)
//         //          recurse(cur[i], prop ? prop+"."+i : ""+i);
//         //     if (l == 0)
//         //         result[prop] = [];
//         // }
//          else {
//             var isEmpty = true;
//             for (var p in cur) {
//                 isEmpty = false;
//                 recurse(cur[p], prop ? prop+"."+p : p);
//             }
//             if (isEmpty)
//                 result[prop] = {};
//         }
//     }
//     recurse(data, "");
//     return result;
// }


var flattenObject = function(ob) {
  var toReturn = {};
  
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    
    if ((typeof ob[i]) == 'object') {
      var flatObject = flattenObject(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        
        toReturn[i + '.' + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

console.log(flattenObject({a: 'a', b: 'b', c: {d: {e: 'e'}}}));


